import Counter from '../component/Counter';
import { connect } from 'react-redux';
import {increase, decrease} from '../modules/counter'


const CounterContainer = ({number, increase, decrease}) => {
    return( <Counter number={number} onIncrease={increase} onDecrease={decrease}></Counter>)
}


const mapStateToProps = state => {
    console.log(state.counter.state.number)
    return{
        number : state.counter.state.number
    }
}

const mapDispatchToProps = dispatch => ({
    increase : () => {
        dispatch(increase())
    },
    decrease : () => {
        dispatch(decrease())
    }
})


export default connect(mapStateToProps, mapDispatchToProps,)(CounterContainer)