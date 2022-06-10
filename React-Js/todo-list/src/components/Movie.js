import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'


function Movie({ coverImg, title, summary, genres, id}) {

    // const coverImg = movie.medium_cover_image;
    // const title = movie.title;
    // const summary = movie.summary;
    // const genres = movie.genres;


    return (
        <div> 
        <img src={coverImg}></img>
        <h2>
          <Link to={`/movie/${id}`}> {title && title} </Link>
          </h2>
        <p>{summary && summary}</p>
        {genres && (
          <ul>
            {genres.map( genres => <li key={genres}>{genres}</li>)}
          </ul>
        )}
      </div>
    )

}

Movie.propTypes = {
    coverImg : PropTypes.string.isRequired,
    title : PropTypes.string.isRequired,
    summary : PropTypes.string.isRequired,
    genres : PropTypes.arrayOf(PropTypes.string),
    id : PropTypes.number.isRequired

}

export default Movie;