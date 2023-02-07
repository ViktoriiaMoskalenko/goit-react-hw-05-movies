import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react'
import { movieDetailsReviews } from '../api/API'
import styles from '../components/Movies.module.css'


function Reviews() {
    const [dataMovie, setDataMovie] = useState([])
  const { movieId } = useParams();
  
  useEffect(() => {
      const response = movieDetailsReviews(movieId)
    response.then(data => {
      setDataMovie(data.results)
  })
    .catch(error => console.log(error))
  }, [movieId])
    return (
       (dataMovie.length === 0 ? <p>No information in Reviews!</p> : dataMovie.map(({ author_details: {name, username}, content, id }) => 
          <div key = {id} className={styles.reviws_wrap}>
          <h3 className={styles.reviws_title}>Author: {name + ' ' + username}</h3>
            <p className={styles.reviws_desk}>{content}</p>
          </div>))
)
}

export default Reviews;
