import './SassComponent.scss'

const SassComponent = () => {

    const boxColor = ['red', 'orange', 'blue', 'indigo', 'yellow']

    return(
        <div className="SassComponent">
            {boxColor.map((el, index)=>{
    const boxClass = `box ${el}`
    return <div className={boxClass.toString()} key={index}>{el}</div>
})}
            
        </div>
    )
}

export default SassComponent


