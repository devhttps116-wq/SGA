# SGA+ — Sistema de Gerenciamento Acadêmico Inteligente

O **SGA+ (Sistema de Gerenciamento Acadêmico Inteligente)** é uma plataforma desenvolvida para centralizar e organizar informações acadêmicas em um único ambiente.

O projeto busca solucionar um problema comum no ambiente escolar: informações como notas, frequência, disciplinas, avisos e calendário geralmente ficam distribuídas em diferentes sistemas e plataformas.

Com o SGA+, essas informações são reunidas em uma interface única, proporcionando uma experiência mais simples, organizada e intuitiva para estudantes e instituições de ensino.

## Sobre o projeto

O SGA+ foi desenvolvido com foco em estudantes, especialmente aqueles de escolas e cursos técnicos.

A plataforma tem como principais objetivos:

* Centralizar informações acadêmicas;
* Facilitar o acompanhamento de notas e frequência;
* Organizar disciplinas e informações relacionadas;
* Exibir avisos e comunicados;
* Apresentar dados acadêmicos de forma visual;
* Facilitar o acesso às informações do estudante;
* Proporcionar uma interface moderna, responsiva e intuitiva.

## Tecnologias

O projeto utiliza as seguintes tecnologias:

* [Vue.js](https://vuejs.org/) — Framework utilizado para construção da interface;
* [Vite](https://vite.dev/) — Ferramenta utilizada para desenvolvimento e build;
* JavaScript — Linguagem principal do projeto;
* [Tailwind CSS](https://tailwindcss.com/) — Framework utilizado para estilização;
* [Vue Router](https://router.vuejs.org/) — Gerenciamento de rotas;
* [Pinia](https://pinia.vuejs.org/) — Gerenciamento de estado;
* [Axios](https://axios-http.com/) — Comunicação com APIs;
* [Chart.js](https://www.chartjs.org/) — Visualização de dados através de gráficos.

## Requisitos

Antes de executar o projeto, certifique-se de possuir instalado:

* Node.js;
* npm;
* Git.

Para verificar se o Node.js está instalado:

```bash
node --version
```

Para verificar o npm:

```bash
npm --version
```

Para verificar o Git:

```bash
git --version
```

## Instalação

### 1. Clonar o repositório

Clone o repositório utilizando o Git:

```bash
git clone https://github.com/devhttps116-wq/SGA.git
```

Entre na pasta do projeto:

```bash
cd SGA
```

### 2. Instalar as dependências

Instale todas as dependências necessárias:

```bash
npm install
```

O comando utiliza o arquivo `package.json` para instalar as dependências do projeto.

### 3. Executar o projeto

Após a instalação, execute o servidor de desenvolvimento:

```bash
npm run dev
```

Por padrão, o Vite disponibiliza a aplicação em:

```text
http://localhost:5173
```

O endereço exato também será exibido no terminal após a execução do comando.

## Comandos disponíveis

### Desenvolvimento

Inicia o servidor de desenvolvimento:

```bash
npm run dev
```

### Build

Gera uma versão otimizada do projeto para produção:

```bash
npm run build
```

Os arquivos gerados serão disponibilizados na pasta `dist/`.

### Preview

Executa localmente a versão gerada para produção:

```bash
npm run preview
```

## Estrutura do projeto

A estrutura principal do projeto está organizada da seguinte maneira:

```text
SGA/
├── public/
│
├── src/
│   ├── components/
│   │   ├── cards/
│   │   ├── charts/
│   │   ├── layout/
│   │   └── ui/
│   │
│   ├── composables/
│   │
│   ├── layouts/
│   │
│   ├── pages/
│   │   └── student/
│   │
│   ├── router/
│   │
│   ├── services/
│   │
│   ├── stores/
│   │
│   ├── styles/
│   │
│   ├── utils/
│   │
│   ├── App.vue
│   └── main.js
│
├── .gitignore
├── index.html
├── package.json
├── package-lock.json
├── postcss.config.js
├── tailwind.config.js
└── vite.config.js
```

## Organização dos componentes

Os componentes da aplicação são divididos de acordo com sua finalidade.

### Cards

Localizados em:

```text
src/components/cards/
```

Contém componentes utilizados para apresentar informações resumidas, como avisos e estatísticas.

### Gráficos

Localizados em:

```text
src/components/charts/
```

Contém componentes responsáveis pela apresentação visual de dados acadêmicos, como notas e frequência.

### Layout

Localizados em:

```text
src/components/layout/
```

Contém elementos estruturais da aplicação, como cabeçalho, barra lateral e breadcrumb.

### UI

Localizados em:

```text
src/components/ui/
```

Contém componentes reutilizáveis da interface, como botões, cards, badges, avatares e barras de progresso.

## Páginas

As páginas principais da aplicação estão localizadas em:

```text
src/pages/
```

Entre elas estão:

* `Landing.vue` — Página inicial;
* `Login.vue` — Tela de login;
* `Placeholder.vue` — Página utilizada para funcionalidades ainda não implementadas.

As páginas relacionadas ao estudante estão localizadas em:

```text
src/pages/student/
```

Incluindo:

* `Dashboard.vue` — Painel principal;
* `Profile.vue` — Perfil do estudante;
* `Subjects.vue` — Lista de disciplinas;
* `SubjectDetail.vue` — Detalhes de uma disciplina.

## Gerenciamento de estado

O gerenciamento de estado da aplicação utiliza Pinia.

Os stores estão localizados em:

```text
src/stores/
```

Atualmente existem stores relacionados à autenticação e aos dados do estudante:

```text
src/stores/auth.js
src/stores/student.js
```

## Roteamento

O gerenciamento das rotas da aplicação é realizado pelo Vue Router e está localizado em:

```text
src/router/index.js
```

## Comunicação com API

A comunicação com APIs externas é centralizada em:

```text
src/services/api.js
```

Essa separação permite manter a lógica de comunicação com o backend independente dos componentes da interface.

## Desenvolvimento

Durante o desenvolvimento, recomenda-se utilizar:

```bash
npm run dev
```

O Vite disponibiliza atualização automática da aplicação durante as alterações no código por meio do Hot Module Replacement (HMR).

## Build para produção

Para gerar a versão de produção:

```bash
npm run build
```

Depois, para visualizar a versão de produção localmente:

```bash
npm run preview
```

## Contribuição

Para contribuir com o projeto, siga os passos abaixo.

### 1. Crie uma branch

```bash
git checkout -b minha-alteracao
```

### 2. Faça as alterações

Implemente as alterações desejadas no projeto.

### 3. Adicione os arquivos

```bash
git add .
```

### 4. Crie um commit

```bash
git commit -m "Descrição da alteração"
```

### 5. Envie a branch

```bash
git push origin minha-alteracao
```

### 6. Abra um Pull Request

Após enviar a branch, abra um Pull Request no GitHub para que as alterações possam ser revisadas e incorporadas ao projeto.

## Status do projeto

O SGA+ está em desenvolvimento.

Novas funcionalidades, melhorias de interface e integrações serão adicionadas conforme o desenvolvimento do projeto.

## Licença

Este projeto está sendo desenvolvido para fins acadêmicos e educacionais.
