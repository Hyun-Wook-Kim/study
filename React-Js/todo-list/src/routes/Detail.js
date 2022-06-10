import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react'


function Detail(){

    const { id } = useParams();
    const [movie, setMovie] = useState({})


    const getMovie = async() => {
                const json = await(await(fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`))).json();
                const movieInfo = json.data.movie;

                setMovie({
                    title : movieInfo.title,
                    year : movieInfo.year,
                    genres : movieInfo.genres,
                    runtime :  movieInfo.runtime,
                    image :  movieInfo.medium_cover_image,
                    desc : movieInfo.description_full
                })
                
    }


    console.log(movie)

    useEffect(()=>{
        getMovie()
        
    },[])

    return (
    <>
        <h1>Detail</h1>
        <h2>{movie.title}</h2>
        <ul>
            {movie.genres.map((el, index)=> <li key={index}>{el}</li>)}
        </ul>
        <img src={movie.image}></img>
        <p>{movie.desc}</p>
        <p>{movie.year}</p>
        <p>{movie.runtime}</p>
    </>        

    )
}

export default Detail;