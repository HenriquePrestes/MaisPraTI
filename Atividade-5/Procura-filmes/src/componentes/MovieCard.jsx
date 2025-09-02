import { Link } from "react-router-dom";
import { FaStar} from "react-icons/fa";
import { useState, useEffect } from "react";

const imageUrl = import.meta.env.VITE_IMG;

const MovieCard = ({ movie, showLink = true }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setIsFavorite(favorites.some(fav => fav.id === movie.id));
  }, [movie.id]);

  const handleFavorite = () => {
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    if (isFavorite) {
      const newFavs = favorites.filter(fav => fav.id !== movie.id);
      localStorage.setItem("favorites", JSON.stringify(newFavs));
      setIsFavorite(false);
    } else {
      favorites.push(movie);
      localStorage.setItem("favorites", JSON.stringify(favorites));
      setIsFavorite(true);
    }
  };
  return (
    <div>
    <div className="movie-card">
  <img src={`${imageUrl}${movie.poster_path}`} alt={movie.title} />
  <h2>{movie.title}</h2>
  <p>
    <FaStar /> {movie.vote_average}
  </p>
  {showLink && <Link to={`/movie/${movie.id}`}>Detalhes</Link>}
  <button onClick={handleFavorite}>
    {isFavorite ? "Remover dos Favoritos" : "Adicionar aos Favoritos"}
  </button>
</div>    
    </div>
  );
};

export default MovieCard;