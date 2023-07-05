# Pokédex em Angular

Este é um projeto de uma Pokédex desenvolvida usando o framework Angular. A Pokédex é uma enciclopédia virtual que contém informações detalhadas sobre os Pokémon, como seus nomes, tipos, habilidades e estatísticas.

## Funcionalidades

A Pokédex em Angular possui as seguintes funcionalidades:

1. Pesquisa de Pokémon por nome: Os usuários podem pesquisar um Pokémon específico digitando o seu nome na barra de pesquisa. A Pokédex irá exibir informações detalhadas sobre o Pokémon correspondente, incluindo sua imagem, tipo, habilidades e estatísticas.

2. Lista de todos os Pokémon: A Pokédex também permite aos usuários visualizar uma lista completa de todos os Pokémon disponíveis. A lista irá exibir miniaturas de cada Pokémon, permitindo que os usuários cliquem em um Pokémon específico para obter mais informações.

3. Filtragem por tipo: Os usuários podem filtrar os Pokémon por tipo. Eles podem selecionar um tipo específico na interface e a lista de Pokémon será atualizada para exibir apenas aqueles que correspondem ao tipo selecionado.

## Instalação

Siga as etapas abaixo para instalar e executar a Pokédex em Angular em sua máquina local:

1. Certifique-se de ter o Node.js instalado em sua máquina. Você pode fazer o download do Node.js em [https://nodejs.org](https://nodejs.org).

2. Faça o download ou clone este repositório em seu computador.

3. Abra o terminal e navegue até o diretório do projeto.

4. Execute o comando `npm install` para instalar as dependências necessárias listadas no arquivo `package.json`.

5. Após a conclusão da instalação, execute o comando `ng serve` para iniciar o servidor de desenvolvimento.

6. Abra seu navegador e acesse `http://localhost:4200` para visualizar a Pokédex em funcionamento.

## Estrutura do Projeto

O projeto da Pokédex em Angular segue a seguinte estrutura:

- `/src`: Este diretório contém todos os arquivos-fonte do projeto.
  - `/app`: Este diretório contém os componentes principais da Pokédex.
    - `app.component.ts`: Este é o componente raiz da aplicação.
    - `pokedex.component.ts`: Este componente exibe a lista de Pokémon e a barra de pesquisa.
    - `pokemon-details.component.ts`: Este componente exibe as informações detalhadas de um Pokémon específico.
    - `pokemon.service.ts`: Este serviço lida com as requisições e a lógica de negócio relacionadas aos Pokémon.
  - `/assets`: Este diretório contém os recursos estáticos, como as imagens dos Pokémon.

## Contribuição

Se você deseja contribuir para este projeto, siga as etapas abaixo:

1. Faça um fork deste repositório para o seu próprio perfil.

2. Crie uma nova branch para realizar suas modificações: `git checkout -b minha-branch`.

3. Faça as alterações desejadas no código.

4. Realize o commit das suas alterações: `git commit -m 'Minhas alterações'`.

5. Envie as alterações para o branch principal do repositório original: `git push origin minha-branch`.

6. Abra um pull request para que suas alterações sejam revisadas e incorporadas ao projeto principal.
