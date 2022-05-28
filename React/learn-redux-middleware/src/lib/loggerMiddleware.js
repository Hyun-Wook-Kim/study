const loggerMiddleware = store => next => action => {
    console.group(action && action.type);
    console.log('이전 상태', store.getState());
    console.log('액션', action);
    next(action);
    console.log('다음 상태', store.getState());
    console.groupEnd();
}

export default loggerMiddleware;

// 풀어쓰면

// const loggerMiddleware2 = function loggerMiddleware2(store){
//     return function next(){
//         return function(action){

//         }
//     }
// }
// 요런 구조임
// NEXT 는 STORE.dispatch 같은 역할인데, 다음 미들웨어가 있으면 미들웨어에게 액션을 넘기고, 없으면 리듀서에게 넘겨 줌!
