import { useEffect, useState } from "react";
import axios from "../../node_modules/axios/index";
import NewsItem from "./NewsItem";






const NewsList = ( {category} ) => {

    const apiKey = '31a78f8e1f054f19b40a46671a830472'

   
    const [articles, setArticles] = useState(null);
    const [loading, setLoading] = useState(false);
    
    useEffect(()=>{
        const fetchData = async () => {
            setLoading(true)
            try{
                const query = category === 'all' ? '' : `&category=${category}`
                const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=${apiKey}`)
                setArticles(response.data.articles);
            } catch(e){
                console.log(e)
            }
            setLoading(false)
        };
        fetchData();
    }, [category])

    if (loading) {
        return(
            <div>대기중...</div>
        )
    } 

    // 이걸 왜 해주냐면, 위 데이터가 오기 전에 return은 먼저 진행되기 때문에 오류가 발생해서 애플리케이션이 멈춰버림.
    // 그래서 ariticle이 없을 때는 map이 실행되지 않도록 컷트

    if (!articles){
        return null
    }

        return(
            <div className="articleList">
                {articles.map(article => {
                    return (
                        <NewsItem article={article} key={article.url}></NewsItem>
                    )
                })}
            </div>
        )
    



}

export default NewsList;