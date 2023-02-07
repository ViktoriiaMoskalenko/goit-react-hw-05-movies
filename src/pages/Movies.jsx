import { useState, useEffect } from 'react'
import { useSearchParams } from "react-router-dom";
import { searchMovie } from '../api/API'
import { Audio } from 'react-loader-spinner'
import { MoviesList } from './MoviesList'
import { MoviesForm } from './MoviesForm'
import styles from '../components/Movies.module.css'

function Movies() {
  const [movies, setMovies] = useState([])
  const [loader, setLoader] = useState(false)
    
      const [searchParams, setSearchParams] = useSearchParams();
  const movieName = searchParams.get("name") ?? "";
    
  function handleSubmit(values, actions) {
      const {name} = values
    const nextParams = name !== "" ? { name } : {};
        setSearchParams(nextParams);
        
        actions.resetForm()

    }

  useEffect(() => {
    if (!movieName) {
        return
      }
    const response = searchMovie(movieName)
        setLoader(true)
      response.then(data => {
        setMovies(data.results)
        setLoader(false)
      }).catch(error => console.log(error))

    },[movieName])



  const visibleProducts = movies.filter((movie) =>
    movie.original_title.toLowerCase().includes(movieName.toLowerCase())
  );
    

    return (
      <div>
        
        <MoviesForm value={movieName} onSubmit={handleSubmit} />
        {loader && <div className={styles.Loader}><Audio
  height="80"
  width="80"
  radius="9"
  color="green"
  ariaLabel="loading"
  wrapperStyle
  wrapperClass={{
  }}
          visible={true}
/></div>}

        <MoviesList movies={visibleProducts} />
        
        </div>
    )
}

export default Movies;