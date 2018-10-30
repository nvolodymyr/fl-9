import { calculate } from './interface-module';

import '../styles/styles.css';

const root = document.querySelector('#root');

const calculatorLayout = ` 
<div class="calculator">
    <h1 class="calculator-title">Calculator</h1>
    <div class="input-fild">
        <button class="button button-clean">C</button>
        <input type="text" class="input-field" maxlength="10">
    </div>
    <div class="buttons-wrap">
        <div class="buttons-digits">
            <button class="button digital">1</button>
            <button class="button digital">2</button>
            <button class="button digital">3</button>
            <button class="button digital">4</button>
            <button class="button digital">5</button>
            <button class="button digital">6</button>
            <button class="button digital">7</button>
            <button class="button digital">8</button>
            <button class="button digital">9</button>
            <button class="button digital">0</button>
            <button class="button digital">.</button>
            <button class="button result">=</button>
        </div>
        <div class="buttons-actions">
            <button class="button addition">+</button>
            <button class="button subtraction">-</button>
            <button class="button multiplication">*</button>
            <button class="button division">/</button>
        </div>
    </div>
</div>`;

root.innerHTML = calculatorLayout;

const calculator = document.querySelector('.calculator');
const inputField = document.querySelector('.input-field');

let firstOperand = '',
    secondOperand = '',
    action = '',
    result = '';

calculator.addEventListener('click', function (e) {
    const checkClass = e.target.classList; 

    if (checkClass.contains('digital')) {
        firstOperand += e.target.textContent;
        inputField.value += e.target.textContent;
    }
    if (checkClass.contains('addition') || checkClass.contains('subtraction') || 
    checkClass.contains('multiplication') || checkClass.contains('division')) {
        inputField.value = '';
        secondOperand = firstOperand;
        firstOperand = '';
        action = e.target.textContent;
    }
    if (checkClass.contains('clean')) {
        inputField.value = '';
        firstOperand = '';
        secondOperand = '';
        action = '';
        result = '';
    }
    if (checkClass.contains('result')) {
        inputField.value = calculate(action, firstOperand, secondOperand, result);
    }
    
});