import PropTypes from 'prop-types'


function Movie({ coverImg, title, summary, genres}) {

    // const coverImg = movie.medium_cover_image;
    // const title = movie.title;
    // const summary = movie.summary;
    // const genres = movie.genres;


    return (
        <div> 
        <img src={coverImg}></img>
        <h2>{title && title}</h2>
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
    genres : PropTypes.arrayOf(PropTypes.string)

}

export default Movie;