import Movie from "../components/Movie";
import {useState, useEffect} from 'react'


function Home() {

    const [loading, setLoading] = useState(true)
    const [movies, setMovies] = useState([])
    const getMovies = async() => {
      const response = await fetch(`https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year`);
      const data = await response.json();
      const movies =data.data.movies;
      setMovies(movies)
      setLoading(false)
  
    }
  
    useEffect(()=>{
      getMovies();
    }, [])
  
  
    console.log(
      movies
    )
  
  
  
    return(
      <div>
          {loading ? <h1>Loading...</h1> : movies.map((movie, index) => (
            <Movie coverImg={movie.medium_cover_image} title={movie.title} genres={movie.genres} summary={movie.summary} key={movie.id}></Movie>
            
  
          ))}
      </div>
    )
  }

  export default Home;