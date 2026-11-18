# Estado do Projeto — Portfólio Davi Teixeira (`davi_teixeira`)

> **Última atualização:** 18/11/2026 (ajuste de espaçamento no formulário, ordem do menu e revisão geral)
> **Última atualização:** 18/11/2026
> **Branch atual:** `main`
> **Tipo de projeto:** Portfólio pessoal / landing page estática (Dados, BI e Analytics)
> **Tipo:** Portfólio Pessoal / Landing Page Estática (Dados, BI, Analytics & Desenvolvimento Web)

---

## 1. Visão Geral

Portfólio de **Davi Teixeira** com foco em **Dados, BI, Bancos de Dados, ETL, Dashboards, Analytics e Desenvolvimento Web**. Construído com HTML5, CSS3 (Grid, Flexbox, `clamp()`, media queries) e JS vanilla (sem frameworks/build), paleta de azuis escuros (`#020F1B` a `#dffbfe`) e fonte **Exo 2**. Responsividade mobile em `max-width: 745px`.

## 1. Visão Geral & Identidade Visual

Site de portfólio pessoal de **Davi Teixeira**, projetado para apresentar atuação em **Dados, Business Intelligence (BI), Bancos de Dados, ETL, Dashboards, Analytics** e **Desenvolvimento Web (Landing Pages e Sites Institucionais)**.

- **Stack:** HTML5 semântico, CSS3 modular (Grid, Flexbox, `clamp()`, media queries) e JavaScript vanilla — sem frameworks, bibliotecas externas ou build tools.
- **Identidade Visual (Dark/Tech):**
  - **Paleta:** tons de azul escuro (`#020F1B` de fundo, `#0b2545`, `#002a50`, `#005a8d`, `#147290`) com destaque em ciano (`#4ed4e1` / `#dffbfe`) e verde degradê no CTA do WhatsApp (`#2fe172` → `#0f9a4a`).
  - **Tipografia:** **Exo 2** (Google Fonts) com escala fluida via `clamp()`.
  - **Atmosfera:** fundo fixo em camada própria (`body::before`) combinando glow radial ciano/azul e grid técnico discreto, acompanhado por um brilho suave que segue o cursor em dispositivos com mouse (`js/cursor.js`).

---

## 2. Estrutura de Arquivos

```text
davi_teixeira/
├── index.html                      # Página única (header, sec1, sec2, #projetos, #contato)
├── README.md                       # Descrição, stack e estrutura
├── LICENSE
├── state.md                        # Este documento
├── index.html                      # Página única (header, hero, projetos e contato)
├── README.md                       # Documentação básica de uso e estrutura
├── LICENSE                         # Licença do repositório
├── state.md                        # Estado consolidado do projeto (este arquivo)
├── css/
│   ├── index.css                   # :root (paleta), reset, scroll suave, imports
│   ├── header.css                  # Cabeçalho, logo, botão de currículo e menu
│   ├── sec1.css                    # Apresentação, CTAs (Projetos + WhatsApp) e skills
│   ├── sec2.css                    # Foto, citação (Deming) e redes sociais
│   ├── projetos.css                # Seção #projetos: carrossel de cards, tags e botões
│   ├── index.css                   # Variáveis (:root), reset, fundo grid/glow e imports
│   ├── header.css                  # Cabeçalho em grid, menu com sublinhado ativo e botão CV
│   ├── sec1.css                    # Coluna esquerda da hero: título, copy, CTAs e skills
│   ├── sec2.css                    # Coluna direita da hero: foto, citação e redes sociais
│   ├── projetos.css                # Seção #projetos: carrossel, tracinhos, pontinhos e cards
│   ├── contato.css                 # Seção #contato: formulário FormSubmit e radio-cards
│   └── mq-745.css                  # Media query mobile (coluna única, header, cards, contato)
│   └── mq-745.css                  # Regras responsivas para telas <= 745px
├── js/
│   ├── carrossel.js                # Carrossel infinito, pontinhos e tracinhos (JS vanilla)
│   ├── cursor.js                   # Brilho suave seguindo o cursor (JS vanilla)
│   └── nav-ativo.js                # Scroll spy com sublinhado no menu (JS vanilla)
├── files/curriculo/
│   └── davi-teixeira-cv.pdf        # Currículo
│   ├── carrossel.js                # Carrossel infinito, tracinhos, pontinhos e setas
│   ├── cursor.js                   # Efeito de brilho suave acompanhando o mouse
│   └── nav-ativo.js                # Scroll spy para destacar a seção ativa no menu
├── files/
│   └── curriculo/
│       └── davi-teixeira-cv.pdf    # Currículo em PDF aberto pelo cabeçalho
└── imgs/
    ├── eu2.png (em uso), eu.png, eu3.png, eu4.png, favicon.ico, logo.svg
    └── icons/                      # bd, e-mail, excel, figma, github, ig, linkedin, pbi, python, wpp (.svg)
    ├── eu2.png                     # Foto de perfil em uso na hero
    ├── eu.png, eu3.png, eu4.png    # Variantes de foto mantidas no diretório
    ├── favicon.ico                 # Ícone da aba do navegador
    ├── logo.svg                    # Logo "DT."
    └── icons/                      # Ícones SVG (bd, e-mail, excel, figma, github, ig, linkedin, pbi, python, wpp)
```

---

## 3. Implementado

## 3. Arquitetura da Página e Funcionalidades

- **Correções:** `lang="pt-BR"`, `id="pbi"`, "opinião", `grid-area: sec1/sec2` sem aspas.
- **Currículo:** renomeado para `davi-teixeira-cv.pdf`, `href` atualizado.
- **Limpeza:** removidos `teste.html` e `imgs/eu fundo ia.png`.
- **Navegação:** `Sobre` → `#sec1`, `Projetos` → `#projetos`, `Contato` → `#contato`; `scroll-behavior: smooth` no `html` e sublinhado dinâmico via `js/nav-ativo.js`. `Certificados` está **comentado** no HTML (reativar quando a seção existir).
- **Apresentação (`#sec1`):** copy profissional com foco em Dados, BI, Desenvolvimento Web e graduação em ADS, com CTAs lado a lado ocupando toda a largura (`Ver Projetos` e `Falar no WhatsApp` em degradê verde).
- **Seção `#projetos`:** 5 cards placeholder (Power BI, SQL/ETL, Python, Landing Page, Site Institucional) em carrossel infinito (`js/carrossel.js`) com tracinhos superiores, pontinhos e setas minimalistas.
- **Seção `#contato`:** formulário integrado ao FormSubmit (`daviteixeirap.faria@gmail.com`) com campos Nome, E-mail, WhatsApp, Tipo de Projeto (radio cards clicáveis com espaçamento padronizado no `legend`) e Mensagem, estilizado em `css/contato.css`.
- **Tipografia fluida:** fontes em `vw` substituídas por `clamp()`/`rem` em todos os CSS; `Moon Dance` removida do `@import`.
- **Mobile (`mq-745.css`):** coluna única (`sec1` acima de `sec2`), header reorganizado, carrossel com 1.4 cards por vista e formulário em coluna única.
- **Polimento da hero:** fundo com glow ciano (`radial-gradient`) + grid técnico sutil no `body::before`; header em grid; H1 em peso 500; foto (`imgs/eu2.png`) com `border-radius: 16px`, borda translúcida e sombra com brilho ciano; ícones de contato ~35% menores (mantêm o ciano) com leve `scale` no `:hover`; `Fale comigo agora mesmo!` corrigido; brilho seguindo o cursor (`js/cursor.js`).
- **Verificação:** `carrossel.js`, `cursor.js` e `nav-ativo.js` validados via `node --check`; caminhos locais verificados anteriormente. *Teste visual em navegador realizado pelo usuário durante os ajustes.*

1. **Cabeçalho (`<header>`):**
   - Layout em 3 colunas: logo `DT.` à esquerda, menu centralizado (**Sobre → Projetos → Contato**, com `Certificados` comentado até sua seção existir) e botão `Currículo.pdf` à direita.
   - Navegação suave (`scroll-behavior: smooth`) com sublinhado ciano animado indicando a seção visível na tela (`js/nav-ativo.js`).
2. **Hero Section (`<main>` — `#sec1` e `#sec2`):**
   - **Esquerda (`#sec1`):** título principal `Davi Teixeira` (peso `500`), subtítulo de posicionamento (`Dados, Business Intelligence & Desenvolvimento Web | ADS`), parágrafo objetivo, dois CTAs lado a lado em largura total proporcional (`Ver Projetos` e `Falar no WhatsApp` com link `wa.me/5521991357964`) e vitrine de ícones SVG (Power BI, Python, SQL, Excel, Figma).
   - **Direita (`#sec2`):** foto de perfil (`imgs/eu2.png`) integrada ao tema com bordas arredondadas, contorno translúcido e brilho ciano; citação de W. Edwards Deming; e barra de links diretos (LinkedIn, Instagram, WhatsApp, E-mail e GitHub).
3. **Seção de Projetos (`#projetos`):**
   - Carrossel horizontal infinito (`js/carrossel.js`) com `scroll-snap`, exibindo 3,5 cards no desktop, 2,5 até `1100px` e 1,4 no mobile para manter o próximo card parcialmente visível.
   - Indicadores sincronizados: tracinhos acima dos cards e pontinhos + setas minimalistas abaixo.
   - 5 cards estruturados (ainda com conteúdo placeholder): *Dashboard de BI (Power BI)*, *Pipeline de Dados & Modelagem (SQL / ETL)*, *Análise Exploratória & Automação (Python)*, *Landing Page* e *Site Institucional*.
4. **Seção de Contato (`#contato`):**
   - Formulário integrado ao **FormSubmit** (`daviteixeirap.faria@gmail.com`) com `_subject`, `_template="table"` e `_captcha="true"`.
   - Campos: Nome, E-mail e WhatsApp (lado a lado no desktop), Tipo de Projeto em 3 radio-cards clicáveis (*Dados, BI & Dashboards*, *Site / Landing Page*, *Recrutamento / Outro assunto*), Mensagem e botão `Enviar Mensagem`.

---

## 4. Backlog

## 4. Responsividade (`css/mq-745.css`)

1. Substituir `href="#"` dos cards pelos links reais e trocar o preview placeholder por imagens/prints dos projetos.
2. Fazer um envio de teste no formulário `#contato` para confirmar a ativação do FormSubmit em `daviteixeirap.faria@gmail.com`.
3. Otimizar/comprimir `imgs/eu2.png` (~34 MB) e remover imagens de teste não utilizadas (`eu.png`, `eu3.png`, `eu4.png`).
4. Criar a seção **Certificados** e reativar o item comentado no menu.
5. Revisão visual em dispositivos móveis reais (320px–745px) e telas ultrawide.
6. Opcional: self-host da fonte Exo 2.
   Em telas `<= 745px`:

- O cabeçalho reorganiza logo e currículo na primeira linha com o menu abaixo.
- A hero empilha `#sec1` acima de `#sec2` em coluna única centralizada.
- Os botões CTA ficam em largura reduzida para caberem lado a lado; o carrossel ajusta para `1.4` card por vista; e os campos do formulário (E-mail/WhatsApp e radio-cards) empilham em coluna única.

---

## 5. Próximos Passos (Backlog)

1. **Conteúdo real nos projetos:** substituir os links `href="#"` (marcados com `TODO`) pelos URLs reais e trocar o preview `16:9` por prints/imagens dos projetos.
2. **Ativação do formulário:** realizar um envio de teste no `#contato` para confirmar a ativação do FormSubmit em `daviteixeirap.faria@gmail.com`.
3. **Otimização de mídia:** comprimir `imgs/eu2.png` (~34 MB) e remover as variantes não utilizadas (`eu.png`, `eu3.png`, `eu4.png`).
4. **Seção de Certificados:** criar a seção correspondente e reativar o link comentado no `<nav>`.
5. **Revisão final:** testar em dispositivos móveis reais (320px–745px) e telas ultrawide.
