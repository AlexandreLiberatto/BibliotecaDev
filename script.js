const livros = [
  {
    titulo: "Arquitetura Limpa",
    capa: "capas/arquiteturalimpa.png",
    arquivo: "livros/arquiteturalimpa.pdf",
    descricao: "Princípios e boas práticas para manter o código limpo e sustentável.",
    autor: "Robert C. Martin",
    ano: 2011
  },
  {
    titulo: "Java - Como Programar",
    capa: "capas/javacomoprogramar.png",
    arquivo: "livros/JavaComoProgramar.pdf",
    descricao: "Guia completo para aprender Java do básico ao avançado.",
    autor: "Paul Deitel, Harvey Deitel",
    ano: 2016
  },
  {
    titulo: "JavaScript - O Guia Definitivo",
    capa: "capas/JavaScript_ Oguiadefinitivo.png",
    arquivo: "livros/JavaScript_ Oguiadefinitivo.pdf",
    descricao: "Referência essencial para dominar JavaScript.",
    autor: "David Flanagan",
    ano: 2020
  },
  {
    titulo: "Pense em Python",
    capa: "capas/Pense_em_Python.png",
    arquivo: "livros/Pense_em_Python.pdf",
    descricao: "Introdução prática à programação com Python.",
    autor: "Allen B. Downey",
    ano: 2015
  },
  {
    titulo: "Como ser um Programador Melhor",
    capa: "capas/Como_ser_um_Programador_Melhor.png",
    arquivo: "livros/Como_ser_um_Programador_Melhor.pdf",
    descricao: "Dicas e conselhos para evoluir como desenvolvedor.",
    autor: "Pete Goodliffe",
    ano: 2014
  },
  {
    titulo: "O Programador Pragmático",
    capa: "capas/O_Programador_Pragmatico.png",
    arquivo: "livros/O_Programador_Pragmatico.pdf",
    descricao: "Técnicas práticas para programadores profissionais.",
    autor: "Andrew Hunt, David Thomas",
    ano: 2019
  },
  {
    titulo: "Entrega Contínua - Como Entregar Software de Forma Rápida e Confiável",
    capa: "capas/Entrega_Continua_Como_Entregar_Software_de_Forma_Rapida_e_Confiavel.png",
    arquivo: "livros/Entrega_Continua_Como_Entregar_Software_de_Forma_Rapida_e_Confiavel.pdf",
    descricao: "Práticas para entrega contínua de software.",
    autor: "Jez Humble, David Farley",
    ano: 2010
  },
  {
    titulo: "C++ Como Programar - 5ª Edição - Deitel e Deitel",
    capa: "capas/C++como-programar-5-ediao-deitel.png",
    arquivo: "livros/C++como-programar-5-ediao-deitel.pdf",
    descricao: "Aprenda C++ com exemplos práticos e exercícios.",
    autor: "Paul Deitel, Harvey Deitel",
    ano: 2011
  },
  {
    titulo: "C - Como Programar - 6ª Edição - Deitel e Deitel",
    capa: "capas/C_como_programar_6_ed_deitel2011.png",
    arquivo: "livros/C_como_programar_6_ed_deitel2011.pdf",
    descricao: "Aprenda C com exemplos práticos e exercícios.",
    autor: "Paul Deitel, Harvey Deitel",
    ano: 2011
  },
  {
    titulo: "AWS Certified Cloud Practitioner Exam",
    capa: "capas/AWS_Certified_Cloud_Practitioner_Exam.png",
    arquivo: "livros/AWS_Certified_Cloud_Practitioner_Exam.pdf",
    descricao: "Guia completo para o exame de certificação AWS.",
    autor: "Jon‌‌ Bonso‌‌and‌‌ Adrian‌‌ Formaran‌o",
    ano: 2020
  },
  {
    titulo: "Guia Prático de TypeScript",
    capa: "capas/Guia_pratico_de_TypeScript.png",
    arquivo: "livros/Guia_pratico_de_TypeScript.pdf",
    descricao: "Aprenda TypeScript de forma prática e objetiva.",
    autor: "Dan Vanderkam",
    ano: 2019
  },
  {
    titulo: "Construindo uma API REST com Node.js",
    capa: "capas/Construindo_API_REST_com_Node_JS.png",
    arquivo: "livros/Construindo_API_REST_com_Node_JS.pdf",
    descricao: "Aprenda a criar APIs RESTful com Node.js.",
    autor: "Caio Ribeiro Pereira",
    ano: 2016
  },
  {
    titulo: "HTML5 e CSS3 - Domine a Web do Futuro",
    capa: "capas/HTML5_e_CSS3 _domine_a_web_do_futuro.png",
    arquivo: "livros/HTML5_e_CSS3 _domine_a_web_do_futuro.pdf",
    descricao: "Tudo sobre HTML5 e CSS3 para criar sites modernos.",
    autor: "Maurício Samy Silva",
    ano: 2014
  },
  {
    titulo: "Testes Automatizados - Como Criar Testes de Software Eficientes",
    capa: "capas/Testes_Automatizados.png",
    arquivo: "livros/Testes_Automatizados.pdf",
    descricao: "Como criar e manter testes automatizados.",
    autor: "Lisa Crispin, Janet Gregory",
    ano: 2017
  },
  {
    titulo: "Padroes de Projetos - Soluções Reutilizáveis de Software Orientados a Objetos",
    capa: "capas/Padroes_de_Projetos_Solucoes_Reutilizaveis_de_Software_Orientados_a_Objetos.png",
    arquivo: "livros/Padroes_de_Projetos_Solucoes_Reutilizaveis_de_Software_Orientados_a_Objetos.pdf",
    descricao: "Catálogo clássico de padrões de projeto.",
    autor: "Erich Gamma, Richard Helm, Ralph Johnson, John Vlissides",
    ano: 1994
  },
  {
    titulo: "Começando com o Linux",
    capa: "capas/Comecando_com_o_Linux.png",
    arquivo: "livros/Comecando_com_o_Linux.pdf",
    descricao: "Guia prático para iniciantes em Linux.",
    autor: "Carlos E. Morimoto",
    ano: 2012
  },
  {
    titulo: "Jenkins - Automatize Tudo sem Complicações",
    capa: "capas/Jenkins_Automatize_Tudo_sem_Complicações.png",
    arquivo: "livros/Jenkins_Automatize_Tudo_sem_Complicações.pdf",
    descricao: "Automatize processos de CI/CD com Jenkins.",
    autor: "Rodrigo Turini",
    ano: 2018
  },
  {
    titulo: "A Regra é Não Ter Regras",
    capa: "capas/A_Regra_e_Não_Ter_Regras.png",
    arquivo: "livros/A_Regra_e_Não_Ter_Regras.pdf",
    descricao: "Como a Netflix usa a cultura de liberdade e responsabilidade.",
    autor: "Reed Hastings, Erin Meyer",
    ano: 2020
  },
  {
    titulo: "Controlando Versões com Git e GitHub",
    capa: "capas/Controlando_Versoes_com_Git_e_GitHub.png",
    arquivo: "livros/Controlando_Versoes_com_Git_e_GitHub.pdf",
    descricao: "Aprenda a usar Git e GitHub para controle de versão.",
    autor: "Raphael Soares",
    ano: 2020
  },
  {
    titulo: "DevOps na Prática",
    capa: "capas/DevOps_na_Pratica.png",
    arquivo: "livros/DevOps_na_Pratica.pdf",
    descricao: "Guia prático para implementar DevOps na sua equipe.",
    autor: "Rafael Winterhalter",
    ano: 2021
  },
  {
    titulo: "Containers com Docker: Do Desenvolvimento à Produção",
    capa: "capas/Containers_com_Docker_Do_desenvolvimento_a_produção.png",
    arquivo: "livros/Containers_com_Docker_Do_desenvolvimento_a_produção.pdf",
    descricao: "Aprenda a usar Docker para criar e gerenciar containers.",
    autor: "Rafael Winterhalter",
    ano: 2021
  },
];

const container = document.getElementById("biblioteca");

const mensagemContribuicao = `Se os livros o ajudaram de alguma forma e tocaram seu coração, considere ajudar com qualquer valor (opcional). A chave Pix é 49991604054.`;

// Adiciona barra de busca no topo
const header = document.querySelector('header');
const searchBarContainer = document.createElement('div');
searchBarContainer.id = 'search-bar-container';
searchBarContainer.style.display = 'flex';
searchBarContainer.style.justifyContent = 'center';
searchBarContainer.style.margin = '1em 0';

const searchBar = document.createElement('input');
searchBar.type = 'text';
searchBar.id = 'search-bar';
searchBar.placeholder = 'Buscar livro por título...';
searchBar.style.padding = '0.6em 1em';
searchBar.style.borderRadius = '6px';
searchBar.style.border = '1px solid #ccc';
searchBar.style.fontSize = '1em';
searchBar.style.width = '320px';
searchBar.style.margin = '0 0.5em';

searchBarContainer.appendChild(searchBar);
header.appendChild(searchBarContainer);

function renderLivros(lista) {
  container.innerHTML = '';
  lista.forEach(livro => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.title = livro.descricao; // Tooltip
    card.innerHTML = `
      <img src="${livro.capa}" alt="Capa do livro ${livro.titulo}" class="capa-livro" style="cursor:pointer;">
      <div class="card-content">
        <h2>${livro.titulo}</h2>
        <a href="${livro.arquivo}" download class="download-link">📥 Baixar</a>
      </div>
    `;
    // Evento para abrir modal ao clicar na capa
    card.querySelector('.capa-livro').addEventListener('click', () => {
      const overlay = document.createElement('div');
      overlay.style.position = 'fixed';
      overlay.style.top = '0';
      overlay.style.left = '0';
      overlay.style.width = '100%';
      overlay.style.height = '100%';
      overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
      overlay.style.zIndex = '1000';

      const modal = document.createElement('div');
      modal.style.position = 'fixed';
      modal.style.top = '50%';
      modal.style.left = '50%';
      modal.style.transform = 'translate(-50%, -50%)';
      modal.style.backgroundColor = '#fff';
      modal.style.padding = '2rem';
      modal.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.2)';
      modal.style.borderRadius = '12px';
      modal.style.textAlign = 'center';
      modal.style.zIndex = '1001';
      modal.style.width = '90%';
      modal.style.maxWidth = '400px';
      modal.style.border = '4px solid #4a90e2';

      const capa = document.createElement('img');
      capa.src = livro.capa;
      capa.alt = `Capa do livro ${livro.titulo}`;
      capa.style.width = '160px';
      capa.style.height = 'auto';
      capa.style.marginBottom = '1.2rem';
      capa.style.boxShadow = '0 4px 16px #4a90e233';
      capa.style.borderRadius = '8px';

      const titulo = document.createElement('h2');
      titulo.textContent = livro.titulo;
      titulo.style.marginBottom = '0.7rem';
      titulo.style.fontSize = '1.2rem';
      titulo.style.color = '#357ab8';

      const descricao = document.createElement('p');
      descricao.textContent = livro.descricao;
      descricao.style.marginBottom = '0.7rem';
      descricao.style.fontSize = '1rem';
      descricao.style.color = '#333';

      const autor = document.createElement('div');
      autor.textContent = `Autor: ${livro.autor}`;
      autor.style.fontWeight = 'bold';
      autor.style.marginBottom = '0.3rem';
      autor.style.color = '#222';

      const ano = document.createElement('div');
      ano.textContent = `Ano: ${livro.ano}`;
      ano.style.fontWeight = 'bold';
      ano.style.color = '#222';
      ano.style.marginBottom = '1.2rem';

      const fecharBtn = document.createElement('button');
      fecharBtn.textContent = 'Fechar';
      fecharBtn.style.padding = '0.8rem 1.5rem';
      fecharBtn.style.backgroundColor = '#4a90e2';
      fecharBtn.style.color = '#fff';
      fecharBtn.style.border = 'none';
      fecharBtn.style.borderRadius = '5px';
      fecharBtn.style.cursor = 'pointer';
      fecharBtn.style.fontSize = '1rem';

      fecharBtn.addEventListener('click', () => {
        document.body.removeChild(overlay);
        document.body.removeChild(modal);
      });

      modal.appendChild(capa);
      modal.appendChild(titulo);
      modal.appendChild(descricao);
      modal.appendChild(autor);
      modal.appendChild(ano);
      modal.appendChild(fecharBtn);
      document.body.appendChild(overlay);
      document.body.appendChild(modal);
    });
    container.appendChild(card);
  });
}

renderLivros(livros);

// Função para criar e exibir o modal carrossel de resultados
function exibirCarrosselLivros(livrosFiltrados) {
  // Remove modais/carrosséis anteriores
  document.querySelectorAll('.modal-carrossel-overlay, .modal-carrossel').forEach(e => e.remove());
  if (!livrosFiltrados.length) return;

  let indiceAtual = 0;

  // Overlay escuro
  const overlay = document.createElement('div');
  overlay.className = 'modal-carrossel-overlay';
  overlay.style.position = 'fixed';
  overlay.style.top = '0';
  overlay.style.left = '0';
  overlay.style.width = '100%';
  overlay.style.height = '100%';
  overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
  overlay.style.zIndex = '1000';

  // Modal carrossel
  const modal = document.createElement('div');
  modal.className = 'modal-carrossel';
  modal.style.position = 'fixed';
  modal.style.top = '50%';
  modal.style.left = '50%';
  modal.style.transform = 'translate(-50%, -50%)';
  modal.style.backgroundColor = '#fff';
  modal.style.padding = '2rem';
  modal.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.2)';
  modal.style.borderRadius = '12px';
  modal.style.textAlign = 'center';
  modal.style.zIndex = '1001';
  modal.style.width = '90%';
  modal.style.maxWidth = '400px';
  modal.style.border = '4px solid #4a90e2';
  modal.style.display = 'flex';
  modal.style.flexDirection = 'column';
  modal.style.alignItems = 'center';

  // Elementos do carrossel
  const capa = document.createElement('img');
  capa.style.width = '160px';
  capa.style.height = 'auto';
  capa.style.marginBottom = '1.2rem';
  capa.style.boxShadow = '0 4px 16px #4a90e233';
  capa.style.borderRadius = '8px';

  const titulo = document.createElement('h2');
  titulo.style.marginBottom = '0.7rem';
  titulo.style.fontSize = '1.2rem';
  titulo.style.color = '#357ab8';

  const descricao = document.createElement('p');
  descricao.style.marginBottom = '0.7rem';
  descricao.style.fontSize = '1rem';
  descricao.style.color = '#333';

  const autor = document.createElement('div');
  autor.style.fontWeight = 'bold';
  autor.style.marginBottom = '0.3rem';
  autor.style.color = '#222';

  const ano = document.createElement('div');
  ano.style.fontWeight = 'bold';
  ano.style.color = '#222';
  ano.style.marginBottom = '1.2rem';

  // Navegação
  const navContainer = document.createElement('div');
  navContainer.style.display = 'flex';
  navContainer.style.justifyContent = 'center';
  navContainer.style.gap = '1.5rem';
  navContainer.style.margin = '1rem 0 0.5rem 0';

  const btnAnterior = document.createElement('button');
  btnAnterior.textContent = '⟨';
  btnAnterior.style.padding = '0.5rem 1.2rem';
  btnAnterior.style.backgroundColor = '#4a90e2';
  btnAnterior.style.color = '#fff';
  btnAnterior.style.border = 'none';
  btnAnterior.style.borderRadius = '5px';
  btnAnterior.style.cursor = 'pointer';
  btnAnterior.style.fontSize = '1.2rem';

  const btnProximo = document.createElement('button');
  btnProximo.textContent = '⟩';
  btnProximo.style.padding = '0.5rem 1.2rem';
  btnProximo.style.backgroundColor = '#4a90e2';
  btnProximo.style.color = '#fff';
  btnProximo.style.border = 'none';
  btnProximo.style.borderRadius = '5px';
  btnProximo.style.cursor = 'pointer';
  btnProximo.style.fontSize = '1.2rem';

  navContainer.appendChild(btnAnterior);
  navContainer.appendChild(btnProximo);

  // Fechar
  const fecharBtn = document.createElement('button');
  fecharBtn.textContent = 'Fechar';
  fecharBtn.style.padding = '0.8rem 1.5rem';
  fecharBtn.style.backgroundColor = '#4a90e2';
  fecharBtn.style.color = '#fff';
  fecharBtn.style.border = 'none';
  fecharBtn.style.borderRadius = '5px';
  fecharBtn.style.cursor = 'pointer';
  fecharBtn.style.fontSize = '1rem';
  fecharBtn.style.marginTop = '1.2rem';

  fecharBtn.addEventListener('click', () => {
    overlay.remove();
    modal.remove();
  });

  // Função para atualizar o carrossel
  function atualizarCarrossel() {
    const livro = livrosFiltrados[indiceAtual];
    capa.src = livro.capa;
    capa.alt = `Capa do livro ${livro.titulo}`;
    titulo.textContent = livro.titulo;
    descricao.textContent = livro.descricao;
    autor.textContent = `Autor: ${livro.autor}`;
    ano.textContent = `Ano: ${livro.ano}`;
    btnAnterior.disabled = indiceAtual === 0;
    btnProximo.disabled = indiceAtual === livrosFiltrados.length - 1;
  }

  btnAnterior.addEventListener('click', () => {
    if (indiceAtual > 0) {
      indiceAtual--;
      atualizarCarrossel();
    }
  });
  btnProximo.addEventListener('click', () => {
    if (indiceAtual < livrosFiltrados.length - 1) {
      indiceAtual++;
      atualizarCarrossel();
    }
  });

  // Monta modal
  modal.appendChild(capa);
  modal.appendChild(titulo);
  modal.appendChild(descricao);
  modal.appendChild(autor);
  modal.appendChild(ano);
  if (livrosFiltrados.length > 1) modal.appendChild(navContainer);
  modal.appendChild(fecharBtn);
  document.body.appendChild(overlay);
  document.body.appendChild(modal);
  atualizarCarrossel();
}

// Substitui o evento da barra de busca para abrir o carrossel em modal
searchBar.addEventListener('input', function() {
  const termo = this.value.toLowerCase();
  const filtrados = livros.filter(livro => livro.titulo.toLowerCase().includes(termo));
  if (termo && filtrados.length) {
    exibirCarrosselLivros(filtrados);
  } else {
    // Remove modal se não houver termo ou resultados
    document.querySelectorAll('.modal-carrossel-overlay, .modal-carrossel').forEach(e => e.remove());
  }
});

// Adicionar evento para exibir alerta ao clicar no botão de download
container.addEventListener('click', (event) => {
  if (event.target.classList.contains('download-link')) {
    const overlay = document.createElement('div');
    overlay.style.position = 'fixed';
    overlay.style.top = '0';
    overlay.style.left = '0';
    overlay.style.width = '100%';
    overlay.style.height = '100%';
    overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
    overlay.style.zIndex = '1000';

    const modal = document.createElement('div');
    modal.style.position = 'fixed';
    modal.style.top = '50%';
    modal.style.left = '50%';
    modal.style.transform = 'translate(-50%, -50%)';
    modal.style.backgroundColor = '#fff';
    modal.style.padding = '2rem';
    modal.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.2)';
    modal.style.borderRadius = '12px';
    modal.style.textAlign = 'center';
    modal.style.zIndex = '1001';
    modal.style.width = '90%';
    modal.style.maxWidth = '400px';
    modal.style.border = '4px solid #4a90e2';

    // Mensagem melhorada: texto e chave Pix em destaque
    const texto = document.createElement('div');
    texto.innerHTML = `<p>Se os livros o ajudaram de alguma forma, considere contribuir com qualquer valor.</p><p style="font-size:1.3rem;font-weight:bold;color:#4a90e2;margin:0.3em 0 0.2em 0;">Chave Pix:<br>48991604054</p>`;
    texto.style.marginBottom = '1.5rem';
    texto.style.fontSize = '1.1rem';
    texto.style.color = '#333';
    texto.style.lineHeight = '1.6';
    texto.style.fontFamily = 'Arial, sans-serif';
    texto.style.textAlign = 'center';

    const fecharBtn = document.createElement('button');
    fecharBtn.textContent = 'Fechar';
    fecharBtn.style.padding = '0.8rem 1.5rem';
    fecharBtn.style.backgroundColor = '#4a90e2';
    fecharBtn.style.color = '#fff';
    fecharBtn.style.border = 'none';
    fecharBtn.style.borderRadius = '5px';
    fecharBtn.style.cursor = 'pointer';
    fecharBtn.style.fontSize = '1rem';

    fecharBtn.addEventListener('click', () => {
      document.body.removeChild(overlay);
      document.body.removeChild(modal);
    });

    modal.appendChild(texto);
    modal.appendChild(fecharBtn);
    document.body.appendChild(overlay);
    document.body.appendChild(modal);
  }
});
