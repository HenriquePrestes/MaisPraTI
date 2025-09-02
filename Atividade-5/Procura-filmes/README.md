# Procura Filmes

Este projeto é um buscador de filmes que utiliza a API do TMDB (The Movie Database). 
Com ele, você pode pesquisar filmes, visualizar detalhes, adicionar filmes aos favoritos e acessar sua lista de favoritos, tudo com uma interface moderna e responsiva.

## Funcionalidades

- Buscar filmes por nome
- Visualizar detalhes de cada filme
- Adicionar e remover filmes dos favoritos (persistência via localStorage)
- Página exclusiva para seus filmes favoritos

## Tecnologias utilizadas

- React
- React Router DOM
- Vite
- CSS

## Como executar o projeto

1. **Clone o repositório:**
   ```
   git clone https://github.com/seu-usuario/seu-repositorio.git
   ```

2. **Acesse a pasta do projeto:**
   ```
   cd Atividade-5/Procura-filmes
   ```

3. **Instale as dependências:**
   ```
   npm install
   ```

4. **Configure o arquivo `.env`:**
   Crie um arquivo `.env` na raiz do projeto e adicione suas chaves da API TMDB:
   ```
   VITE_API_KEY=SEU_TOKEN_V4_AQUI
   VITE_API=https://api.themoviedb.org/3/movie
   VITE_SEARCH=https://api.themoviedb.org/3/search/movie
   VITE_IMG=https://image.tmdb.org/t/p/w500/
   ```

5. **Execute o projeto:**
   ```
   npm run dev
   ```
   O projeto estará disponível em `http://localhost:5173/` (ou na porta informada pelo Vite).

## Observações

- Para obter sua chave da API TMDB, acesse [TMDB](https://www.themoviedb.org/settings/api).
- Os favoritos são salvos localmente no
