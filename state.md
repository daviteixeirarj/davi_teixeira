# Estado do Projeto — Portfólio Davi Teixeira (`davi_teixeira`)

> **Última atualização:** 18/11/2026  
> **Branch atual:** `main`  
> **Tipo de projeto:** Portfólio Pessoal / Landing Page Estática (Ciência de Dados & Analytics)

---

## 1. Visão Geral
Site de portfólio pessoal de **Davi Teixeira**, focado na área de **Ciência de Dados e Analytics** (relatórios, dashboards e análises). Construído com HTML5 e CSS3 puro (sem frameworks ou build tools), utilizando layout em CSS Grid e Flexbox, paleta em tons de azul escuro (`#020F1B` a `#dffbfe`) e tipografia **Exo 2** (Google Fonts).

---

## 2. Estrutura de Diretórios e Arquivos

```text
davi_teixeira/
├── index.html                      # Página principal do portfólio
├── teste.html                      # Arquivo de laboratório/teste (efeito hover CSS)
├── README.md                       # Readme inicial (apenas título)
├── LICENSE                         # Licença do repositório
├── state.md                        # Este documento de estado do projeto
├── css/
│   ├── index.css                   # Estilos globais, variáveis CSS (:root), reset e imports
│   ├── header.css                  # Estilos do cabeçalho, logo, botão de currículo e menu
│   ├── sec1.css                    # Coluna esquerda: apresentação, formação e ícones de skills
│   ├── sec2.css                    # Coluna direita: foto, citação (Deming) e redes de contato
│   └── mq-745.css                  # Media queries para responsividade (atualmente vazio - 0 bytes)
├── files/
│   └── curriculo/
│       └── DAVI TEIXEIRA.pdf       # Currículo para download/visualização
└── imgs/
    ├── eu.png                      # Foto de perfil principal utilizada na página
    ├── eu fundo ia.png             # Variante da foto de perfil (não referenciada no HTML)
    ├── favicon.ico                 # Ícone da aba do navegador
    ├── logo.svg                    # Logo "DT." do cabeçalho
    └── icons/                      # Ícones SVG de ferramentas e redes sociais
        ├── bd.svg                  # SQL / Banco de Dados
        ├── e-mail.svg              # E-mail (mailto)
        ├── excel.svg               # Microsoft Excel
        ├── figma.svg               # Figma
        ├── github.svg              # GitHub
        ├── ig.svg                  # Instagram
        ├── linkedin.svg            # LinkedIn
        ├── pbi.svg                 # Power BI
        ├── python.svg              # Python
        └── wpp.svg                 # WhatsApp
```

---

## 3. O Que Já Está Implementado (Concluído)

- **Cabeçalho (`header`):**
  - Logo `DT.` (`imgs/logo.svg`).
  - Botão de acesso direto ao currículo em PDF (`files/curriculo/DAVI TEIXEIRA.pdf`) com gradiente e efeito `hover`.
  - Menu de navegação estruturado (`Projetos`, `Certificados`, `Contato`, `Sobre`).
- **Seção 1 — Apresentação & Habilidades (`#sec1`):**
  - Título com destaque visual nas iniciais.
  - Resumo de perfil (Entusiasta de Dados, Tecnologia em Sist. da Computação - UFF-RJ, Física - UERJ, Instrutor de Física).
  - Chamada para atuação em Ciência de Dados, Analytics, Relatórios e Dashboards.
  - Vitrine de ferramentas com ícones SVG: **Power BI, Python, SQL, Excel e Figma**.
- **Seção 2 — Perfil & Contatos (`#sec2`):**
  - Foto de perfil (`imgs/eu.png`).
  - Citação de W. Edwards Deming estilizada com `blockquote`.
  - Links diretos e funcionais para **LinkedIn, Instagram, WhatsApp, E-mail e GitHub** com animação de escala no `hover`.

---

## 4. Pendências, Bugs Conhecidos e Próximos Passos (Backlog)

1. **Responsividade Mobile (`css/mq-745.css`):**
   - O arquivo `css/mq-745.css` já está importado no `css/index.css`, mas encontra-se **vazio (0 bytes)**.
   - Em telas menores (`< 745px`), o layout `grid-template-areas: "sec1 sec2"` com `50vw` para cada seção precisa ser empilhado em coluna única e os tamanhos de fonte baseados em `vw` precisam de ajuste.
2. **Seções e Links do Menu de Navegação:**
   - Os links do `<nav>` (`Projetos`, `Certificados`, `Contato`, `Sobre`) estão com `href=""` vazios.
   - Falta criar as seções ou páginas correspondentes a **Projetos** (cases de Power BI, Python, SQL) e **Certificados**.
3. **Pequenos Ajustes de Código e Conteúdo (Quick Wins):**
   - **HTML (`index.html`, linha 40):** O atributo `id="#pbi"` contém uma `#` indevida (deveria ser `id="pbi"`).
   - **HTML (`index.html`, linha 51):** Pequeno erro de digitação na citação: `"opnião"` -> `"opinião"`.
   - **HTML (`index.html`, linha 2):** `lang="pt_br"` -> o padrão recomendado pelo W3C/BCP 47 é `lang="pt-BR"`.
   - **CSS (`sec1.css` e `sec2.css`):** `grid-area: 'sec1'` e `grid-area: 'sec2'` estão com aspas simples; em CSS Grid `grid-area` recebe um identificador sem aspas (`grid-area: sec1;`).
4. **Limpeza e Documentação:**
   - Avaliar remoção ou movimentação do arquivo `teste.html` (usado para testes de `hover`) e da imagem não utilizada `imgs/eu fundo ia.png` (~1.7 MB).
   - Expandir o `README.md` com descrição do portfólio e link do GitHub Pages (se publicado).
