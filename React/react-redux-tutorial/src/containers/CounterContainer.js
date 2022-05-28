import Counter from "../component/Counter";
import { connect } from "react-redux";
import { increase, decrease } from "../modules/counter";
import { bindActionCreators } from "redux";

const CounterContainer = ({ number, increase, decrease }) => {
  return (
    <Counter
      number={number}
      onIncrease={increase}
      onDecrease={decrease}
    ></Counter>
  );
};

export default connect(
  (state) => {
    return {
      number: state.counter.state.number,
    };
  },
  {
    increase,
    decrease,
  }

  //   (dispatch) =>
  //     bindActionCreators(
  //       {
  //         increase,
  //         decrease,
  //       },
  //       dispatch
  //     )

  //   (dispatch) => ({
  //     increase: () => {
  //       dispatch(increase());
  //     },
  //     decrease: () => {
  //       dispatch(decrease());
  //     },
  //   })
)(CounterContainer);
