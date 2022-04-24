import './NewsItem.scss'

const NewsItem = ( {article} ) => {

    const { title, description, url, urlToImage} = article;

    return(
        <div className="NewsItemBlock">
            {urlToImage && (
                <div className="thumbnail">
                    <a href={url} target='_blank' rel="noopener noreferrer">
                        <img src={urlToImage} alt="thumbnail"></img>
                    </a>
                </div>
            )}
            <div className="contents">
                <h2>
                    <a href={url} target='_blank' rel="noopener noreferrer">{title}</a>
                    <p>{description}</p>
                </h2>
            </div>
        </div>
    )

    

}

export default NewsItem;