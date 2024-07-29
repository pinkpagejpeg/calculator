import { FC } from "react"
import classes from "../../styles/main.module.scss"
import { useActions } from "../../hooks/useActions";

const Numpad: FC = () => {
    const {inputOperand} = useActions()
    const {inputDot} = useActions()
    
    const numberButtonHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
        inputOperand((event.target as HTMLButtonElement).value)
    }

    return (
        <div className={classes.calculator__numpad}>
            <button id="seven" className={classes.calculator__button} value="7" onClick={numberButtonHandler}>7</button>
            <button id="eight" className={classes.calculator__button} value="8" onClick={numberButtonHandler}>8</button>
            <button id="nine" className={classes.calculator__button} value="9" onClick={numberButtonHandler}>9</button>
            <button id="four" className={classes.calculator__button} value="4" onClick={numberButtonHandler}>4</button>
            <button id="five" className={classes.calculator__button} value="5" onClick={numberButtonHandler}>5</button>
            <button id="six" className={classes.calculator__button} value="6" onClick={numberButtonHandler}>6</button>
            <button id="one" className={classes.calculator__button} value="1" onClick={numberButtonHandler}>1</button>
            <button id="two" className={classes.calculator__button} value="2" onClick={numberButtonHandler}>2</button>
            <button id="three" className={classes.calculator__button} value="3" onClick={numberButtonHandler}>3</button>
            <button id="zero" className={`${classes.calculator__button} ${classes.calculator__button_zero}`} value="0" onClick={numberButtonHandler}>0</button>
            <button id="decimal" className={classes.calculator__button} onClick={() => inputDot()}>.</button>
        </div>
    );
}

export default Numpad;