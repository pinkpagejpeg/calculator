import { evaluate } from "mathjs"
import { CalculatorAction, CalculatorActionTypes, ICalculatorState } from "../../types/calculator"

const initialState: ICalculatorState = {
    waitforOperand: false,
    displayValue: "0",
    previousValue: null,
    operator: null,
    expression: "",
}

const roundResult = (result: number) => {
    let resultStr = result.toString()
    const dotIndex = resultStr.indexOf('.')

    if (dotIndex !== -1) {
        if ((resultStr.slice(dotIndex + 1, resultStr.length)).length > 4) {
            return String(result.toFixed(4))
        }
    }

    return resultStr
}

export const calculatorReducer = (state = initialState, action: CalculatorAction) => {
    console.log("Action:", action);
    console.log("State before:", state);
    switch (action.type) {
        case CalculatorActionTypes.INPUT_OPERAND:
            if (state.waitforOperand) {
                if (state.displayValue === "-" && action.payload !== "0") {
                    return {
                        ...state,
                        displayValue: state.displayValue.concat(action.payload),
                        expression: state.expression + action.payload
                    }
                } else {
                    return {
                        ...state,
                        displayValue: action.payload,
                        waitforOperand: false,
                        expression: state.expression + action.payload
                    }
                }
            }

            if (state.displayValue === "0" && action.payload === "0") {
                return state
            }

            if (state.previousValue !== null) {
                return {
                    ...state,
                    displayValue: state.displayValue === "0" ? action.payload : state.displayValue.concat(action.payload),
                    expression: action.payload !== "0" ? state.expression + action.payload : state.expression
                }
            }
            return {
                ...state,
                displayValue: state.displayValue === "0" ? action.payload : state.displayValue.concat(action.payload),
                expression: state.expression === "0" ? action.payload : state.expression + action.payload
            }

        case CalculatorActionTypes.INPUT_DOT:
            if (!state.displayValue.includes('.')) {
                const newValue = state.displayValue.concat('.')
                return {
                    ...state,
                    displayValue: newValue,
                    expression: state.expression + '.'
                }
            }
            return state

        case CalculatorActionTypes.INPUT_OPERATOR:
            if (state.operator && state.waitforOperand) {
                if (action.payload === "-") {
                    return {
                        ...state,
                        displayValue: "-",
                        expression: state.expression + "-",
                        waitforOperand: false
                    }
                } else {
                    return {
                        ...state,
                        operator: action.payload,
                        expression: state.expression.slice(0, -1) + action.payload
                    }
                }
            }

            if (state.displayValue === "-") {
                return {
                    ...state,
                    operator: action.payload,
                    expression: state.previousValue + action.payload
                }
            }

            return {
                ...state,
                waitforOperand: true,
                operator: action.payload,
                displayValue: "0",
                previousValue: state.displayValue,
                expression: state.expression + action.payload
            }

        case CalculatorActionTypes.CLEAR:
            return initialState

        case CalculatorActionTypes.CALCULATION:
            if (state.previousValue && state.operator) {
                try {
                    const result = roundResult(evaluate(state.expression))

                    return {
                        ...state,
                        displayValue: result,
                        operator: null,
                        previousValue: null,
                        waitforOperand: false,
                        expression: result
                    }
                } catch (e) {
                    console.log('Error: ', e)
                    return state
                }
            }
            return state

        default:
            return state
    }
}