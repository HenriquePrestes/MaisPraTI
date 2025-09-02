import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import {
  BsGraphUp,
  BsWallet2,
  BsHourglassSplit,
  BsFillFileEarmarkTextFill
} from "react-icons/bs";

import "./Movie.css"

import MovieCard from "../componentes/MovieCard";

const movieURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

const Movie = () => {
  const {id} = useParams()
  const [movie, setMovie] = useState(null)

  const getMovie = async(url) => {
  const res = await fetch(url, {
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json;charset=utf-8",
    },
  })
  const data = await res.json()
  setMovie(data)
}

const formatCurrency = (value) => {
  return value.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });
};

  useEffect(() => {
    const url = `${movieURL}/${id}`
getMovie(url)
  }, [id])

  return (
  <div className="movie-page">
    {movie ? (
      <>
        <MovieCard movie={movie} showLink={false}/>
        <p className="tagline">{movie.tagline}</p>
        <div className="info">
          <h3>
            <BsWallet2 /> Orçamento:
            <p>{formatCurrency(movie.budget)}</p>
          </h3>
        </div>
        <div className="info">
          <h3>
            <BsGraphUp /> Receita:
            <p>{formatCurrency(movie.revenue)}</p>
          </h3>
        </div>
        <div className="info">
          <h3>
            <BsHourglassSplit /> Duração:
            <p>{movie.runtime} minutos</p>
          </h3>
        </div>
        <div className="info description">
          <h3>
            <BsFillFileEarmarkTextFill /> Descrição:
            <p>{movie.overview}</p>
          </h3>
        </div>
      </>
    ) : (
      <p>Carregando...</p>
    )}
  </div>
)
}
export default Movie
