import { startLoading, finishLoading } from "../modules/loading";


export default function createRequestThunk(type, request) {
    const SUCCESS = `${type}_SUCESS`;
    const FAILURE = `${type}_FAILURE`;

    
    return params => async dispatch => {
        dispatch( {type : type} );
        dispatch( startLoading(type))
        try{
            const response = await request(params);
            console.log(response)
            dispatch({
                type : SUCCESS,
                payload : response.data
            })
            console.log({
                type : type,
                payload : response.data
            })
            dispatch( finishLoading(type))
        } catch(e){
            dispatch({
                type : FAILURE,
                payload : e,
                error : true
            })
            dispatch( startLoading(type))
            throw e;
        }
    }

}