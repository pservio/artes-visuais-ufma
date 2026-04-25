const observadorAnimacao = new IntersectionObserver(
  (entradas) => {
    entradas.forEach((entrada) => {
      if (entrada.isIntersecting) {
        entrada.target.classList.add('visible');
        observadorAnimacao.unobserve(entrada.target);
      }
    });
  },
  {
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px',
  }
);

function prefereReducaoMovimento() {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

/* Zoom do fundo: escala 1,5 → 1 conforme o topo do banner atravessa a viewport */
function atualizarZoomBanners() {
  const banners = document.querySelectorAll(
    '.section-banner[data-anim="banner-zoom"]'
  );
  if (banners.length === 0) return;

  if (prefereReducaoMovimento()) {
    banners.forEach((el) => el.style.removeProperty('--banner-zoom-scale'));
    return;
  }

  const vh = window.innerHeight;
  banners.forEach((el) => {
    const rect = el.getBoundingClientRect();
    const t = 1 - rect.top / vh;
    const progresso = Math.max(0, Math.min(1, t));
    const scale = 1.5 - 0.5 * progresso;
    el.style.setProperty('--banner-zoom-scale', String(scale));
  });
}

let rafScrollPendente = false;
function agendarAtualizacaoScroll() {
  if (rafScrollPendente) return;
  rafScrollPendente = true;
  requestAnimationFrame(() => {
    rafScrollPendente = false;
    atualizarZoomBanners();
  });
}

function ativarAnimacoes() {
  document.querySelectorAll('[data-anim]').forEach((el) => {
    if (el.getAttribute('data-anim') === 'banner-zoom') return;
    observadorAnimacao.observe(el);
  });

  agendarAtualizacaoScroll();
  window.addEventListener('scroll', agendarAtualizacaoScroll, { passive: true });
  window.addEventListener('resize', agendarAtualizacaoScroll, { passive: true });

  const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
  if (typeof mq.addEventListener === 'function') {
    mq.addEventListener('change', agendarAtualizacaoScroll);
  } else if (typeof mq.addListener === 'function') {
    mq.addListener(agendarAtualizacaoScroll);
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', ativarAnimacoes);
} else {
  ativarAnimacoes();
}
