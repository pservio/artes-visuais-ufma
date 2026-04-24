const ID_PLANILHA = '1MQV0ofTg6Q3zAgYLjRfyuEZ1571-7V0b-LD8S24Z6Pg';

function escaparHTML(texto) {
  if (texto == null) return '';
  const div = document.createElement('div');
  div.textContent = String(texto);
  return div.innerHTML;
}

function normalizarImagemDrive(url, largura = 800) {
  if (!url) return '';
  const texto = String(url).trim();

  if (!/(drive\.google\.com|googleusercontent\.com|docs\.google\.com)/i.test(texto)) {
    return texto;
  }

  const padroes = [
    /\/file\/d\/([a-zA-Z0-9_-]{10,})/,
    /[?&]id=([a-zA-Z0-9_-]{10,})/,
    /\/d\/([a-zA-Z0-9_-]{10,})/,
  ];

  for (const regex of padroes) {
    const m = texto.match(regex);
    if (m) {
      return `https://lh3.googleusercontent.com/d/${m[1]}=w${largura}`;
    }
  }

  return texto;
}

async function buscarAba(nomeAba) {
  const url =
    `https://docs.google.com/spreadsheets/d/${ID_PLANILHA}` +
    `/gviz/tq?tqx=out:json&headers=1&sheet=${encodeURIComponent(nomeAba)}`;

  const resposta = await fetch(url);
  if (!resposta.ok) {
    throw new Error(`Falha ao buscar aba "${nomeAba}": HTTP ${resposta.status}`);
  }

  const texto = await resposta.text();
  const inicio = texto.indexOf('{');
  const fim = texto.lastIndexOf('}');

  if (inicio === -1 || fim === -1) {
    throw new Error(`Resposta inesperada da aba "${nomeAba}".`);
  }

  const json = JSON.parse(texto.slice(inicio, fim + 1));
  let colunas = json.table.cols.map((c) => c.label || c.id);
  let linhas = json.table.rows;

  // Fallback: se a API não reconheceu cabeçalhos (acontece quando a aba
  // foi convertida em "Tabela" via feature nativa do Google Sheets),
  // os labels vêm como letras de coluna (A, B, C...). Nesse caso, usamos
  // a primeira linha de dados como cabeçalho.
  const semCabecalhoDetectado =
    colunas.length > 0 && colunas.every((c) => /^[A-Z]+$/.test(c));

  if (semCabecalhoDetectado && linhas.length > 0) {
    colunas = linhas[0].c.map((celula, i) =>
      celula?.v != null ? String(celula.v) : `col_${i}`
    );
    linhas = linhas.slice(1);
  }

  return linhas.map((linha) =>
    Object.fromEntries(
      colunas.map((nome, i) => [nome, linha.c[i]?.v ?? null])
    )
  );
}
