# Cinemania-the-movie-guide

## Visão Geral
O Cinemania é um projeto desenvolvido em React que visa proporcionar aos usuários uma experiência interativa ao explorar informações sobre filmes e séries de TV. Utilizando a API do [The Movie Database (TMDB)](https://www.themoviedb.org/), a aplicação oferece recursos como exibição de filmes mais bem avaliados, filmes populares, séries de TV mais bem avaliadas, séries populares e funcionalidade de busca.

## Link do site
https://cinemania-themovieguide.vercel.app/

## Tecnologias Utilizadas
O projeto foi construído utilizando as seguintes tecnologias:
- **React**: Uma biblioteca JavaScript para construção de interfaces de usuário.
- **React Router**: Utilizado para navegação e roteamento dentro da aplicação.
- **React Bootstrap Icons**: Ícones Bootstrap para elementos de interface.
- **CSS**: Para estilização
- **React Slick**: Biblioteca para implementação de carrosséis.
- **React Hooks**:
- **Vercel**: Para hospedagem da aplicação

## Objetivo da crição do projeto
O desenvolvimento do Cinemania teve como objetivo aprimorar habilidades em desenvolvimento web utilizando React, além de explorar boas práticas de arquitetura de software, organização de código e integração com APIs externas. O projeto foi uma oportunidade para aplicar conceitos aprendidos e proporcionar uma interface intuitiva para os usuários explorarem informações sobre filmes e séries de forma agradável.

# Instalação do Projeto
Para instalar e executar o projeto localmente com Vite, siga os passos abaixo:
1. **Clone o repositório:**
   ```bash
   git clone https://github.com/RyanLourenco17/Cinemania-the-movie-guide.git

2. **Navegue até o diretório do projeto**:
   ```bash
   cd cinemania

3. **Instale as dependências**:
   ```bash
   npm install
   
4. **Configure a chave da API TMDB**:
Crie um arquivo chamado .env na raiz do projeto e adicione as seguintes linhas, substituindo SUA_CHAVE_API_TMDB pela sua chave de API real do TMDB. Caso não tenha uma chave, será necessário criar uma conta e solicitar uma chave no site do TMDB(https://www.themoviedb.org/):
   ```env
    VITE_API_KEY=SUA_CHAVE_API_TMDB

5. **Execute a aplicação**:
  ```bash
  npm run dev
