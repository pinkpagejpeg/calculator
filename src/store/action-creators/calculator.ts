import { Dispatch } from "redux"
import { CalculatorAction, CalculatorActionTypes } from "../../types/calculator"

export const inputOperand = (operand: string) => {
    return (dispatch: Dispatch<CalculatorAction>) => {
        dispatch({
            type: CalculatorActionTypes.INPUT_OPERAND,
            payload: operand
        })
    }
}

export const inputDot = () => {
    return (dispatch: Dispatch<CalculatorAction>) => {
        dispatch({
            type: CalculatorActionTypes.INPUT_DOT
        })
    }
}

export const inputOperator = (operator: string) => {
    return (dispatch: Dispatch<CalculatorAction>) => {
        dispatch({
            type: CalculatorActionTypes.INPUT_OPERATOR,
            payload: operator
        })
    }
}

export const clear = () => {
    return (dispatch: Dispatch<CalculatorAction>) => {
        dispatch({
            type: CalculatorActionTypes.CLEAR
        })
    }
}

export const calculation = () => {
    return (dispatch: Dispatch<CalculatorAction>) => {
        dispatch({
            type: CalculatorActionTypes.CALCULATION
        })
    }
}