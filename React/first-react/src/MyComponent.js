import { Component } from "react";
import PropsType from "prop-types";

const MyComponent = ({ name, children, defaultValue }) => {
  return (
    <div>
      안녕! {name} <br></br> 컴포넌트 내부에 있는 칠드런 내용은 바로 {children}
      이야!
      <br></br>
      값이 정해지지 않은 {defaultValue}
    </div>
  );
};

// class MyComponent extends Component {
//   render() {
//     const { name, children, defaultValue } = this.props;
//     return (
//       <div>
//         안녕! {name} <br></br> 컴포넌트 내부에 있는 칠드런 내용은 바로{" "}
//         {children}
//         이야!
//         <br></br>
//         값이 정해지지 않은 {defaultValue}
//       </div>
//     );
//   }
// }

MyComponent.defaultProps = {
  defaultValue: "기본으로 출력되는 값이에요",
};

MyComponent.propTypes = {
  name: PropsType.string.isRequired,
};
export default MyComponent;
