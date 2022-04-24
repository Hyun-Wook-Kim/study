import CategoriesBlock from "../Component/Categories";
import NewsList from "../Component/NewsList";
import { useParams } from "react-router-dom";


const NewPage = () => {
    const { category } = useParams();
    const match = category || 'all'

    console.log(match)

    return (
        <>
            <CategoriesBlock></CategoriesBlock>
            <NewsList category={match}></NewsList>
        </>
    )
    
}

export default NewPage;