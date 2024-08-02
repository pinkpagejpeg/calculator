import { FC } from "react"
import classes from "../../styles/main.module.scss"
import { useTypedSelector } from "../../hooks/useTypedSelector";

const Display: FC = () => {
    const { displayValue } = useTypedSelector(state => state.calculator)

    return (
        <div className={classes.calculator__display}>
            <h1 id="display">{displayValue}</h1>
        </div>
    );
}

export default Display;