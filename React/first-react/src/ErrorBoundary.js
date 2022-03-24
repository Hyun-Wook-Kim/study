import { Component } from 'react';

class ErrorBoundary extends Component{
    
    state = {
        error : false
    }
    
    componentDidCatch(error, info) {
        this.setState({error : true})
        console.log({error, info})
    }

    render() {
        if (this.state.error == true) return <div>에러가 발생했습니다</div>
        // return this.props.children
        // 여기서 this.props.children 은 <LifeCycleSample></LifeCycleSample>  요거를 뜻 함!
        
    }
}

export default ErrorBoundary;