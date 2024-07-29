import caculatorActionCreators from "../store/action-creators/index"
import { useAppDispatch } from "./useAppDispatch"

export const useActions = () => {
    const dispatch = useAppDispatch()
    return {
        inputOperand: (operand: string) => dispatch(caculatorActionCreators.inputOperand(operand)),
        inputDot: () => dispatch(caculatorActionCreators.inputDot()),
        inputOperator: (operator: string) => dispatch(caculatorActionCreators.inputOperator(operator)),
        clear: () => dispatch(caculatorActionCreators.clear()),
        calculation: () => dispatch(caculatorActionCreators.calculation())
    }
}