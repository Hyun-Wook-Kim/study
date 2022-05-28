import { handleActions } from "redux-actions";
import * as api from '../lib/api';
import createRequestThunk from "../lib/createRequestThunk";

const GET_POST = 'sample/GET_POST';
const GET_POST_SUCESS = 'sample/GET_POST_SUCESS';
// const GET_POST_FAILURE = 'sample/GET_POST_FAILURE';


const GET_USERS = 'sample/GET_USER';
const GET_USERS_SUCESS = 'sample/GET_USER_SUCESS';
// const GET_USERS_FAILURE = 'sample/GET_USER_FAILURE';



// 오류가 생긴다아아악
export const getPost = createRequestThunk(GET_POST, api.getPost)
export const getUsers = createRequestThunk(GET_POST, api.getUsers)



// export const getPost = id => async dispatch => {
//     dispatch({type:GET_POST});
//     try{
//         const response = await api.getPost(id)
//         console.log(response)
//         dispatch({
//             type : GET_POST_SUCESS,
//             payload : response.data
//         })
//     } catch(e){
//         dispatch({type : GET_POST_FAILURE, payload : e, error:true});
//         throw(e)
//     }
    
// }

// export const getUsers = () => async dispatch => {
//     dispatch({type:GET_USERS});
//     try{
//         const response = await api.getUsers()
//         console.log(response)
//         dispatch({
//             type : GET_USERS_SUCESS,
//             payload : response.data
//         })
//     } catch(e){
//         dispatch({type : GET_USERS_FAILURE, payload : e, error:true});
//         throw(e)
//     }

// }


const initialState = {
    loading : {
        GET_POST : false,
        GET_USERS : false
    },
    post : null,
    users : null,
}


const sample = handleActions({

    [GET_POST_SUCESS] : (state, action) => ({
        ...state,
        loading : {
            ...state.loading,
            GET_POST : false
        },
        post : action.payload
    }),

    [GET_USERS_SUCESS] : (state, action) => ({
        ...state,
        loading : {
            ...state.loading,
            GET_USERS : false
        },
        users : action.payload
    }),



}, initialState);

export default sample;