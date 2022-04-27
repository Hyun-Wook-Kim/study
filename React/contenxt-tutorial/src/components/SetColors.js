import ColorContext, { ColorConsumer } from "../contexts/color";
import { Component } from "react";

const Colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo'];


// const SelectColors = () => {
//     return (
//         <>
//             <h2>색상을 선택하세요!</h2>
//             <ColorConsumer>
//                 {({ actions }) => (
//                     <div style={{ display: 'flex' }}>
//                         {Colors.map((color) => {
//                             return (
//                                 <div key={color} style={{
//                                     background: color,
//                                     width: '24px',
//                                     height: '24px',
//                                     cusor: 'pointer'
//                                 }} onClick={() => { actions.setColor(color) }} 
//                                 onContextMenu = { (e) => {
//                                     e.preventDefault();
//                                     actions.setSubColor(color)
//                                 }}
//                                 />
//                             )
//                         })}

//                     </div>
//                 )}
//             </ColorConsumer>

//         </>
//     )
// }


class SelectColors extends Component {

    // 요렇게 해 주면, this.context 를 조회하면 ColorContext 를 참조하게 된다.

    static contextType = ColorContext;

    handlerSetColor = color => {
        this.context.actions.setColor(color)
    }
    handlerSetSubColor = subColor => {
        this.context.actions.setSubColor(subColor)
    }


    render() {
        return (
            <>
                <h2>색상을 선택하세요!</h2>
                <div style={{ display: 'flex' }}>
                    {Colors.map((color) => {
                        return (
                            <div key={color} style={{
                                background: color,
                                width: '24px',
                                height: '24px',
                                cusor: 'pointer'
                            }} onClick = {() => {
                                this.handlerSetColor(color)
                            }} onContextMenu = {(e) => {
                                e.preventDefault();
                                this.handlerSetSubColor(color)
                            }}
                            />
                        )
                    })}

                </div>

            </>
        )
    }
}



export default SelectColors;

