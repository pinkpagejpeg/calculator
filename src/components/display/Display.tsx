import { FC } from "react"
import classes from "../../styles/main.module.scss"
import { useTypedSelector } from "../../hooks/useTypedSelector";

const Display: FC = () => {
    const { displayValue, expression } = useTypedSelector(state => state.calculator)

    console.log(expression)

    return (
        <div className={classes.calculator__display}>
            {expression}
            <h1 id="display">{displayValue}</h1>
        </div>
    );
}

export default Display;