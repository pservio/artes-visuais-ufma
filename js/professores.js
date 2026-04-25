function cardProfessor(prof) {
  const nome = escaparHTML(prof['Nome do professor']);
  const formacao = escaparHTML(prof['Formação']);
  const minibio = escaparHTML(prof['Minibio']);
  const lattes = urlSegura(prof['lattes']);
  const foto = normalizarImagemDrive(prof['fotografia do professor'], 600);
  const alt = escaparHTML(
    prof['fotografia do professor:alt'] || prof['Nome do professor'] || ''
  );

  const htmlFoto = foto
    ? `<img src="${escaparHTML(foto)}" alt="${alt}" class="foto-professor" loading="lazy" />`
    : '';

  const htmlFormacao = formacao
    ? `<p class="formacao">${formacao}</p>`
    : '';

  const htmlMinibio = minibio
    ? `<p class="minibio">${minibio}</p>`
    : '';

  const htmlLattes = lattes
    ? `<p><a href="${escaparHTML(lattes)}" target="_blank" rel="noopener">Currículo Lattes</a></p>`
    : '';

  return `
    <article>
      ${htmlFoto}
      <div class="corpo-docente">
        <h4>${nome}</h4>
        ${htmlFormacao}
        ${htmlMinibio}
        ${htmlLattes}
      </div>
    </article>
  `;
}

async function renderizarProfessores() {
  const container = document.querySelector('#docentes .grid-docentes');
  const secao = document.querySelector('#docentes');
  if (!container || !secao) return;

  try {
    const linhas = await buscarAba('professores');
    const validos = linhas.filter((p) => p && p['Nome do professor']);

    if (validos.length === 0) {
      secao.style.display = 'none';
      return;
    }

    container.innerHTML = validos.map(cardProfessor).join('');
  } catch (erro) {
    console.error('Erro ao carregar professores:', erro);
    secao.style.display = 'none';
  }
}

renderizarProfessores();
