// import { ColorConsumer } from "../contexts/color";

// const ColorBox = () => {
//     return (
//         <ColorConsumer>
//             { value => ( 
//                 <>
//                 <div style={{
//                     width : '64px',
//                     height: '64px',
//                     background : value.state.color
//                 }}>
//                 </div>
//                 <div style={{
//                     width : '32px',
//                     height: '32px',
//                     background : value.state.subcolor
//                 }}>
//                 </div>
//                     </>
//             )}
//         </ColorConsumer>
//     )
// }


// ColorConsumer 쓰기 싫으면 아래처럼 useContext 훅 써도 됨. 괄호 안에는 contexnt 값 넣어주고!


import { useContext } from "react";
import ColorContext from "../contexts/color";


const ColorBox = () => {
    const { state } = useContext(ColorContext)
    console.log( state )
    return (
        <>
            <div style={{
                width: '64px', height:'64px',background : state.color
            }}/>
            <div style={{
                width: '32px', height:'32px',background : state.subcolor
            }}/>
        </>
    )
}

export default ColorBox;
