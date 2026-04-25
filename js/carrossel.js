function iniciarCarrossel(carrossel) {
  const track = carrossel.querySelector('.carrossel-track');
  const btnPrev = carrossel.querySelector('.carrossel-prev');
  const btnNext = carrossel.querySelector('.carrossel-next');
  const dotsContainer = carrossel.querySelector('.carrossel-dots');

  function totalPaginas() {
    return Math.ceil(track.scrollWidth / track.clientWidth);
  }

  function paginaAtual() {
    return Math.round(track.scrollLeft / track.clientWidth);
  }

  function criarDots() {
    const total = totalPaginas();
    dotsContainer.innerHTML = '';

    for (let i = 0; i < total; i++) {
      const dot = document.createElement('button');
      dot.type = 'button';
      dot.setAttribute('aria-label', `Ir para a página ${i + 1}`);
      dot.addEventListener('click', () => {
        track.scrollTo({ left: track.clientWidth * i, behavior: 'smooth' });
      });
      dotsContainer.appendChild(dot);
    }

    atualizarEstado();
  }

  function atualizarEstado() {
    const atual = paginaAtual();
    const maxScroll = track.scrollWidth - track.clientWidth;

    Array.from(dotsContainer.children).forEach((dot, i) => {
      dot.classList.toggle('ativo', i === atual);
    });

    btnPrev.disabled = track.scrollLeft <= 1;
    btnNext.disabled = track.scrollLeft >= maxScroll - 1;
  }

  btnPrev.addEventListener('click', () => {
    track.scrollBy({ left: -track.clientWidth, behavior: 'smooth' });
  });

  btnNext.addEventListener('click', () => {
    track.scrollBy({ left: track.clientWidth, behavior: 'smooth' });
  });

  track.addEventListener('scroll', atualizarEstado);

  let resizeTimer;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(criarDots, 150);
  });

  criarDots();
}

document.querySelectorAll('.carrossel-periodos').forEach(iniciarCarrossel);

// Usado em js/projetos.js após buscar a planilha (o trilho começa vazio).
window.iniciarCarrossel = iniciarCarrossel;
