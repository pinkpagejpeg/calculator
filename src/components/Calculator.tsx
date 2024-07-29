import { FC } from "react"
import classes from "../styles/main.module.scss"
import Display from "./display/Display"
import Numpad from "./numpad/Numpad"
import { useActions } from "../hooks/useActions"

const Calculator: FC = () => {
    const { inputOperator } = useActions()
    const { clear } = useActions()
    const { calculation } = useActions()

    const operatorButtonHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
        inputOperator((event.target as HTMLButtonElement).value)
    }

    return (
        <div className={classes.calculator__box}>
            <Display />
            <div className={classes.calculator__buttons_top}>
                <button id="clear" className={`${classes.calculator__button} ${classes.calculator__button_clear}`} onClick={() => clear()}>Clear</button>
                <button id="divide" className={classes.calculator__button} value="/" onClick={operatorButtonHandler}>/</button>
                <button id="multiply" className={classes.calculator__button} value="*" onClick={operatorButtonHandler}>*</button>
            </div>
            <div className={classes.calculator__buttons_bottom}>
                <Numpad />
                <div className={classes.calculator__buttons_bottom_right}>
                    <button id="subtract" className={classes.calculator__button} value="-" onClick={operatorButtonHandler}>-</button>
                    <button id="add" className={classes.calculator__button} value="+" onClick={operatorButtonHandler}>+</button>
                    <button id="equals" className={`${classes.calculator__button} ${classes.calculator__button_equals}`} onClick={() => calculation()}>=</button>
                </div>
            </div>
        </div>
    );
}

export default Calculator;