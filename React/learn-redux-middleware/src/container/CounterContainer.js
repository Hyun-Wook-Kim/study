import { connect } from "react-redux";
import {increase, decrease} from '../module/counter'
import Counter from "../components/Counter";
import { increaseAsync, decreaseAsync } from "../module/counter";

const CounterCountainer = ({ number, increaseAsync, decreaseAsync }) => {
    return (
        <Counter number={number} onIncrease={increaseAsync} onDecrease={decreaseAsync}>
            
        </Counter>
    )
}

export default connect(
    state => ({
        number : state.counter
    }),
    {
        increaseAsync,
        decreaseAsync
    }
)(CounterCountainer)