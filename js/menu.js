const header = document.querySelector('header');
const toggleBtn = header.querySelector('.menu-toggle');

function fecharMenu() {
  header.classList.remove('aberto');
  toggleBtn.setAttribute('aria-expanded', 'false');
  toggleBtn.setAttribute('aria-label', 'Abrir menu');
}

function abrirMenu() {
  header.classList.add('aberto');
  toggleBtn.setAttribute('aria-expanded', 'true');
  toggleBtn.setAttribute('aria-label', 'Fechar menu');
}

toggleBtn.addEventListener('click', () => {
  if (header.classList.contains('aberto')) {
    fecharMenu();
  } else {
    abrirMenu();
  }
});

header.querySelectorAll('nav a').forEach((link) => {
  link.addEventListener('click', fecharMenu);
});
