const INCREASE = "counter/INCREASE";
const DECREASE = "counter/DECREASE";

export const increase = () => {
  return {
    type: INCREASE,
  };
};
export const decrease = () => {
  return {
    type: DECREASE,
  };
};

const initialState = {
  number: 0,
};

function counter(state = initialState, action) {
  console.log(state);
  switch (action.type) {
    case INCREASE:
      console.log(state.state.number);
      return {
        state: {
          number: state.state.number + 1,
        },
      };

    case DECREASE:
      console.log(state.state.number);
      return {
        state: {
          number: state.state.number - 1,
        },
      };
    default:
      return {
        state,
      };
  }
}

export default counter;
