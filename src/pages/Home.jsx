import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { trendingMovie } from '../api/API'
import styles from '../components/Movies.module.css'
function Home() {
    const [movies, setMovies] = useState([])
        const location = useLocation();

        const response = trendingMovie()
        response.then(data => setMovies(data.results)).catch(error => console.log(error))

    return (
        <ul className={styles.list}>
            {movies.map(movie => <li key={movie.id}><Link to={`movies/${movie.id}`} state={{ from: location }} className={styles.item}>{movie.original_title}</Link></li>)}
        </ul>
    )
}

export default Home;