function formatarPapel(genero) {
  const texto = String(genero || '').trim().toLowerCase();
  if (!texto) return 'Egresse do curso';
  return `${texto.charAt(0).toUpperCase()}${texto.slice(1)} do curso`;
}

function cardDepoimento(dep) {
  const nome = escaparHTML(dep['egresso']);
  const texto = escaparHTML(dep['depoimento']);
  const papel = escaparHTML(formatarPapel(dep['genero']));
  const retrato = normalizarImagemDrive(dep['thumb'], 200);
  const alt = escaparHTML(
    dep['thumb:alt'] || `Retrato de ${dep['egresso'] || ''}`
  );

  const htmlRetrato = retrato
    ? `<img src="${escaparHTML(retrato)}" alt="${alt}" class="retrato-egresso" loading="lazy" />`
    : '';

  return `
    <blockquote>
      <p>"${texto}"</p>
      <cite class="cite-egresso">
        ${htmlRetrato}
        <div class="info-egresso">
          <h4>${nome}</h4>
          <p>${papel}</p>
        </div>
      </cite>
    </blockquote>
  `;
}

async function renderizarDepoimentos() {
  const container = document.querySelector('#depoimentos .lista-depoimentos');
  if (!container) return;

  try {
    const linhas = await buscarAba('depoimentos');
    const validos = linhas.filter(
      (d) => d && d['egresso'] && d['depoimento']
    );

    if (validos.length === 0) return;

    container.innerHTML = validos.map(cardDepoimento).join('');
  } catch (erro) {
    console.error('Erro ao carregar depoimentos:', erro);
  }
}

renderizarDepoimentos();
