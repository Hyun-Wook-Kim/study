import { connect } from 'react-redux';
import Sample from '../components/Sample';
import {getPost, getUsers} from '../module/sample';
import { useEffect } from 'react';

const SampleContainer = ({
    getPost,
    getUsers,
    post,
    users,
    loadingPost,
    loadingUsers
}) => {
    useEffect(()=>{
        getPost(1);
        getUsers(1);
        
    }, [getPost, getUsers]);

    return(
        <Sample
        post={post}
        users={users}
        loadingPost={loadingPost}
        loadingUsers={loadingUsers}
        >
        </Sample>
    )
}

export default connect(
    ({sample, loading}) => {
        console.log(sample)
        return{
            post : sample.post,
            users : sample.users,
            loadingPost : loading['sample/GET_POST'],
            loadingUsers : loading['sample/GET_USERS'],
        }
    },
    {
        getPost,
        getUsers
    }
)(SampleContainer)