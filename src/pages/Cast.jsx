import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react'
import { nanoid } from 'nanoid'
import { movieDetailsCast } from '../api/API'
import styles from '../components/Movies.module.css'
import error from '../error.jpeg'

const BASE_URL = 'https://image.tmdb.org/t/p/w500'

function Cast() {
  const [dataMovie, setDataMovie] = useState([])
  const { movieId } = useParams();
  
  useEffect(() => {
      const response = movieDetailsCast(movieId)
  response.then(data => {
    setDataMovie(data.cast)
  })
    .catch(error => console.log(error))
}, [movieId])
  return (
    (dataMovie.length === 0 ? <p>No information in Cast!</p> : <ul className={styles.cast_list}>
      
            {dataMovie.map(({profile_path, name, character, id}) =>
            <li key={nanoid()} className={styles.cast_item}>
                    <img src={profile_path ? BASE_URL + profile_path : error} alt={ name } className = {styles.cast_profile} />
                <div className={styles.cast_wrap_desk}>
                  <p className={styles.cast_desk}>{name}</p>
                <p className={styles.cast_desk}>Character: { character }</p>
                </div>
            </li> )}
    </ul>)
)
}
export default Cast;