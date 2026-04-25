function montarPeriodo(inicio, fim) {
  if (inicio && fim) return `${inicio} — ${fim}`;
  return inicio || fim || '';
}

function ordenarProjetos(a, b) {
  const fimA = String(a['Data de finalização'] || '').trim().toLowerCase();
  const fimB = String(b['Data de finalização'] || '').trim().toLowerCase();

  const aEmAndamento = fimA === 'em andamento';
  const bEmAndamento = fimB === 'em andamento';

  if (aEmAndamento && !bEmAndamento) return -1;
  if (!aEmAndamento && bEmAndamento) return 1;

  return fimB.localeCompare(fimA, 'pt-BR', { numeric: true });
}

function cardProjeto(proj) {
  const titulo = escaparHTML(proj['Título']);
  const tipo = escaparHTML(proj['Tipo']);
  const professor = escaparHTML(proj['Professor responsável']);
  const inicio = escaparHTML(proj['Data de início']);
  const fim = escaparHTML(proj['Data de finalização']);
  const descricao = escaparHTML(proj['Descrição']);
  const thumb = normalizarImagemDrive(proj['Thumb'], 800);
  const link = urlSegura(proj['Link da pagina do projeto']);

  const periodo = montarPeriodo(inicio, fim);

  const htmlThumb = thumb
    ? `<img src="${escaparHTML(thumb)}" alt="${titulo}" class="thumb-projeto" loading="lazy" />`
    : '';

  const htmlChip = tipo ? `<span class="chip-tipo">${tipo}</span>` : '';
  const htmlProfessor = professor ? `<p class="meta meta-professor">${professor}</p>` : '';
  const htmlPeriodo = periodo ? `<p class="meta meta-periodo">${periodo}</p>` : '';
  const htmlDescricao = descricao
    ? `<p class="descricao">${descricao}</p>`
    : '';
  const htmlLink = link
    ? `<a href="${escaparHTML(link)}" target="_blank" rel="noopener" class="link-projeto">Mais informações →</a>`
    : '';

  return `
    <article class="card-projeto">
      ${htmlThumb}
      <div class="corpo-projeto">
        ${htmlChip}
        <h4>${titulo}</h4>
        ${htmlPeriodo}
        ${htmlProfessor}
  <!--      ${htmlDescricao} --> 
        ${htmlLink}
      </div>
    </article>
  `;
}

async function renderizarProjetos() {
  const container = document.querySelector(
    '#projetos .carrossel-track-projetos'
  );
  const secao = document.querySelector('#projetos');
  if (!container || !secao) return;

  try {
    const linhas = await buscarAba('projetos');
    const validos = linhas
      .filter((p) => p && p['Título'])
      .sort(ordenarProjetos);

    if (validos.length === 0) {
      secao.style.display = 'none';
      return;
    }

    container.innerHTML = validos.map(cardProjeto).join('');

    if (typeof window.iniciarCarrossel === 'function') {
      window.iniciarCarrossel(secao);
    }
  } catch (erro) {
    console.error('Erro ao carregar projetos:', erro);
    secao.style.display = 'none';
  }
}

renderizarProjetos();
