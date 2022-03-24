import { Component } from 'react'

class LifeCycleSample extends Component {
    state = {
        number : 0,
        color : null
    }

    myRef = null;

    constructor(props) {
        super(props)
        console.log('Constructor 실행')
    }
    
    // 여기는 왜 Static이 붙지? static은 인스턴스 없이 클래스 자체에서 호출하는 건데
    
    static getDerivedStateFromProps(nextProps, prevState) {
        console.log('getDerivedStateFromProps')
        if (nextProps.color !== prevState.color) { 
            return { color : nextProps.color }
        }
        return null
    }

    componentDidMount() { 
        console.log('componentDidMount')
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('sholdComponentUpdate?', this.state, nextState)
        return nextState.number % 10 !== 4
    }

    componentWillUnmount(){
        console.log('component will unmount')
    }

    getSnapshotBeforeUpdate(prevprops, prevState){
        console.log('getSnapshoBeforeUpdate');
        if(prevprops.color !== this.props.color){
            return this.myRef.style.color
        }
        return null;
    }

    componentDidUpdate(prevProps, prevState, snapshot){
        console.log('componentDidUpdate', prevProps, prevState)
        if(snapshot){
            console.log('업데이트 이전 색상 = ', snapshot)
        }

    }

    handleClick = () => {
        this.setState({
            number : this.state.number + 1
        })
    }

    render(){


        console.log('render')
        const style = {
            color : this.props.color
        }

        return(
            <>
                <div>{this.props.missing.value}</div>  {/* 의도적인에러 발생 */}
                {/* <h1 style={style} ref={ref => this.myRef = ref}>{this.state.number}</h1>
                <p>color : {this.state.color}</p>
                <button onClick={this.handleClick}>숫자 1 증가</button> */}
            </>
        )
    }


}

export default LifeCycleSample;
