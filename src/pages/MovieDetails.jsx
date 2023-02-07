import { useState, useEffect, Suspense } from 'react'
import { Link, Outlet, useLocation, useParams } from "react-router-dom";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { Audio } from 'react-loader-spinner'
import { movieDetails } from '../api/API'
import styles from '../components/Movies.module.css'
import default_poster from '../default_poster.jpg'

const BASE_URL = 'https://image.tmdb.org/t/p/w500'

function MovieDetails() {
  const [dataMovie, setDataMovie] = useState([])
    const [loader, setLoader] = useState(false)
  const { movieId } = useParams();
  
  const location = useLocation();
  const backLinkHref = location.state?.from ?? "/movies";

  useEffect(() => {
    setLoader(true)
   const response = movieDetails(movieId)
  response.then(data => {
    setDataMovie(data)
  })
    .catch(error => console.log(error))
       setLoader(false)
  }, [movieId])
  
  const { poster_path, overview, original_title, vote_average, genres } = dataMovie
  return (
    <div className={styles.wrapper_details}>
      {loader && <Audio
  height="80"
  width="80"
  radius="9"
  color="green"
  ariaLabel="loading"
  wrapperStyle
  wrapperClass
/>}
      <Link to={backLinkHref} className={styles.back_btn}><AiOutlineArrowLeft/>Back to products</Link>
          <div className={ styles.movie_details }>
      <img src={poster_path ? BASE_URL + poster_path : default_poster} alt={original_title} className={ styles.poster } />
      <div className={styles.desk_movie}>
        <h2>{original_title}</h2>
          <p>{Math.round(vote_average * 10)}%</p>
          <h3>Overview</h3>
          <p>{overview}</p>
          <h3>Genres</h3>
          <ul className={styles.movieDetails_list}>
             {genres?.map(({ id, name }) => (
            <li key={id}>{name}</li>
          ))}
          </ul>
      </div>
    </div>
    <ul className={styles.list}>
        <li>
          <Link to="cast" state={location.state}  className={styles.item}>Cast</Link>
        </li>
        <li>
          <Link to="reviews" state={location.state} className={styles.item}>Reviews</Link>
        </li>
      </ul>
      <Suspense fallback={<div>Loading subpage...</div>}>
        <Outlet />
      </Suspense>
      
</div>
    )
}

export default MovieDetails;