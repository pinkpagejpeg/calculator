export interface ICalculatorState {
    waitforOperand: boolean,
    displayValue: string,
    previousValue: string | null,
    operator: string | null,
    expression: string
}

export enum CalculatorActionTypes {
    INPUT_OPERAND = 'INPUT_OPERAND',
    INPUT_DOT = 'INPUT_DOT',
    INPUT_OPERATOR = 'INPUT_OPERATOR',
    CLEAR = 'CLEAR',
    CALCULATION = 'CALCULATION',
}

export interface IInputOperandAction {
    type: CalculatorActionTypes.INPUT_OPERAND,
    payload: string
}

export interface IInputDotAction {
    type: CalculatorActionTypes.INPUT_DOT
}

export interface IInputOperatorAction {
    type: CalculatorActionTypes.INPUT_OPERATOR,
    payload: string
}

export interface IClearAction {
    type: CalculatorActionTypes.CLEAR
}

export interface ICalculationAction {
    type: CalculatorActionTypes.CALCULATION
}

export type CalculatorAction = IInputOperandAction
    | IInputDotAction
    | IInputOperatorAction
    | IClearAction
    | ICalculationAction
