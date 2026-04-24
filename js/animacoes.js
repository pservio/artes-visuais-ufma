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

function ativarAnimacoes() {
  document.querySelectorAll('[data-anim]').forEach((el) => {
    observadorAnimacao.observe(el);
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', ativarAnimacoes);
} else {
  ativarAnimacoes();
}
