import './Categoreis.scss'
import { Link } from 'react-router-dom';


const categories = [
    {
        name: '/',
        text: '전체보기'
    },
    {
        name: 'business',
        text: '비즈니스'
    },
    {
        name: 'entertainment',
        text: '엔터테인먼트'
    },
    {
        name: 'health',
        text: '건강'
    },
    {
        name: 'sports',
        text: '스포츠'
    },
    {
        name: 'technology',
        text: '기술'
    },
]


    const CategoriesBlock = () => {
        console.log(categories)
        return(
            <div className="category-tab">
                {categories.map((cate) => {
                    console.log(cate)
                    return (
                        <Link to={cate.name} key={cate.name}>{cate.text}
                        </Link>
                    )
                })}
            </div>
        )
    }

export default  CategoriesBlock;