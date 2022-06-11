import PropTypes from "prop-types";
// import styles from './Button.module.css'
import styles from './App.module.css'

function Button({text}){
    return (
        <div>
            <h1 className={styles.title}>헤우헤위</h1>
            <button className={styles.btn}> {text} </button>
        </div>
    )
}

Button.propTypes = {
    text : PropTypes.string.isRequired,
    
}


export default Button;