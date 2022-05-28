
const CHANGE_INPUT = 'todos/CHANGE_INPUT'
const INSERT = 'todos/INSERT';
const TOGGLE = 'todos/TOGGLE';
const REMOVE = 'todos/REMOVE';


export const changeInput = ( input ) => ({
    type : CHANGE_INPUT,
    input : input
});

let id = 3; 

export const insert = ( text ) => {
    console.log(text)
    return {
        type : INSERT,
        todo : {
            id : id++,
            text : text,
            done : false,
        }
    }
}


export const toggle = ( id ) => {
    console.log(id);
    return {
        type : TOGGLE,
        id : id
    }
}


export const remove = ( id ) => ({
    type : REMOVE,
    id : id
})


const initialState = {
    input : '',
    todos : [
        {
            id:1,
            text : '리덕스 기초',
            done : true
        },
        {
           id:2,
            text : '리덕스 활용해보기',
            done : false
        }
    ]
}



function todos (state = initialState, action){
    switch(action.type){

        case CHANGE_INPUT : return ({ ...state, input : action.input })
        case INSERT : console.log(action.todo); return ({ ...state, todos : state.todos.concat(action.todo) })
        case TOGGLE : return ({ ...state, todos : state.todos.map( todo => todo.id === action.id ? { ...todo, done : !todo.done  } : todo ) })

        case REMOVE : return ({ ...state, todos : state.todos.filter( todo => todo.id !== action.id) })
        default : return state;
    }
}

export default todos;
