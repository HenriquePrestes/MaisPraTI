import { useEffect, useState } from "react";
import MovieCard from "../componentes/MovieCard";

const Favoritos = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const favs = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(favs);
  }, []);

  return (
    <div className="container">
      <h2 className="title">Meus Favoritos</h2>
      <div className="movies-container">
        {favorites.length === 0 && <p>Nenhum filme favorito salvo.</p>}
        {favorites.length > 0 &&
          favorites.map((movie) => (
            <MovieCard key={movie.id} movie={movie} showLink={true} />
          ))}
      </div>
    </div>
  );
};

export default Favoritos;