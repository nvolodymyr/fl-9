import {
    addition,
    subtraction,
    multiplication,
    division
} from './calculating-module'

export function calculate(action, firstOperand, secondOperand, result) {
    switch (action) {
        case '+':
            result = addition(parseFloat(secondOperand), parseFloat(firstOperand));
            break;
        case '-':
            result = subtraction(parseFloat(secondOperand), parseFloat(firstOperand));
            break;
        case '*':
            result = multiplication(parseFloat(secondOperand), parseFloat(firstOperand));
            break;
        case '/':
            result = division(parseFloat(secondOperand), parseFloat(firstOperand));
            break;
        default:
            break;
    }

    return parseFloat(result).toFixed(2)
}