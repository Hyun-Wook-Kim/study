import { useParams, useSearchParams } from "react-router-dom";

const data = {
    me : {
        name : '김현욱',
        description : '나는 나야'
    },
    you : {
        name : '너란 존재',
        description : '너는 너고'
    }
}

const Profile = () => {

    let params = useParams();
    // let [params] = useSearchParams();
    // let user = params.get('name')
    let match = data[params.username]
    console.log(params)

    if(!match) {
        return <div>{match}은 존재하지 않는 사용자입니다.</div>
    }
    return (
        <div>
            <h3>
                {match.name}
            </h3>
            <p>
                {match.description}
            </p>
        </div>
    )
    
}

export default Profile;
