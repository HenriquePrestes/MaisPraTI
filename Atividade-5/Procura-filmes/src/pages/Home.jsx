import { useState, useEffect } from "react";
import MovieCard from "../componentes/MovieCard";

import './MovieGrid.css'

const movieURL = import.meta.env.VITE_API;
const accessToken = import.meta.env.VITE_API_KEY; 

const Home = () => {
  const [topMovies, setTopMovies] = useState([]);
  const getTopRatedMovies = async (url) => {
    const res = await fetch(url, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json;charset=utf-8",
      },
    });
    const data = await res.json();
    setTopMovies(data.results);
  };

  useEffect(() => {
    const topRatedURL = `${movieURL}/top_rated`;
    getTopRatedMovies(topRatedURL);
  }, []);

  return (
    <div className="container">
      <h2 className="title"> Melhores filmes:</h2>
      <div className="movies-container">
        {topMovies.length === 0 && <p>Carregando...</p>}
        {topMovies.length > 0 && topMovies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
      </div>
      
    </div>
  );
};
export default Home;