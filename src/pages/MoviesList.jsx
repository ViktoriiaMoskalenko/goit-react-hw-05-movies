import { Link, useLocation } from 'react-router-dom'
import default_poster from '../default_poster.jpg'
import styles from '../components/Movies.module.css'

const BASE_URL = 'https://image.tmdb.org/t/p/w500'
export function MoviesList({ movies }) {
    const location = useLocation();
    return (
        (movies.length !== 0) && <ul className={styles.moviesList}>
                {movies.map(movie => <li key={movie.id} className={styles.moviesList_item}>
                    <Link to={`${movie.id}`} state={{ from: location }} className={styles.item}>
                        <img src={ movie.poster_path ? BASE_URL + movie.poster_path: default_poster} alt = {movie.original_title} className={ styles.moviesList_poster } />
                        <h2 className={styles.moviesList_title}>{movie.original_title}</h2>
                    </Link>
            </li>)}
        </ul>
    )
}