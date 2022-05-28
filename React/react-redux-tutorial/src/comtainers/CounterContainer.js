import { useCallback } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import Counter from '../components/Counter';
import {increase, decrease} from '../modules/counter'

// const CounterContainer = ({number, increase, decrease}) => {
//     return <Counter number={number} onIncrease={increase} onDecrease={decrease}></Counter>
// }

const CounterContainer = () => {
    const number = useSelector(state => state.counter.number);
    const dispatch = useDispatch();
    const onIncrease = useCallback(()=> dispatch(increase()), [dispatch])
    const onDecrease = useCallback(()=>  dispatch(decrease()), [dispatch])

    return <Counter number={number} onIncrease={onIncrease} onDecrease={onDecrease} ></Counter>
}


// const mapStateToProps = state => {console.log(state); return ( { number : state.counter.number})}
// const mapDispatchToProps = dispatch => ( {
//      increase : () => {
//          console.log('증가쓰')
//          dispatch(increase())
//         },
//         decrease : () => {
//          console.log('감소쓰')
//         dispatch(decrease())
//      }
//     })


export default CounterContainer;
// export default connect(mapStateToProps, mapDispatchToProps)(CounterContainer);