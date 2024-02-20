/**
 * Задача 1. Сумма цифр
 * 
 * @param {Number} number 
 * @returns {Number}
 */
export function numberCount(number) {
    return [...number.toString()].reduce((acc, digit) => acc + parseInt(digit), 0);
}

/**
 * Задача 2. Символы в строку
 * 
 * @param {String} sym_1 
 * @param {String} sym_2 
 * @param {String} sym_3 
 * @returns {String}
 */
export function concatenate(sym_1, sym_2, sym_3) {
    return sym_1 + sym_2 + sym_3;
}

/**
 * Задача 3. Информация о городе
 * 
 * @param {String} name 
 * @param {String} population 
 * @param {String} area 
 * @returns {String}
 */
export function townInfo(name, population, area) {
    return `Town ${name} has population of ${population} and area ${area} square km.`;
}

/**
 * Задача 4. Калькулятор
 * 
 * @param {Number} digit_1 
 * @param {String} operation 
 * @param {Number} digit_2 
 * @returns {Number}
 */
export function calculator(digit_1, operation, digit_2) {
    return eval(`${digit_1} ${operation} ${digit_2}`).toFixed(2);
}
 
/**
 * Задача 5. Двоичное к десятичному
 * 
 * @param {String} binaryNum 
 * @returns {Number} 
 */
export function binary2decimal(binaryNum) {
    return [...binaryNum].reverse().reduce((acc, digit, index) => acc + digit * Math.pow(2, index), 0);
}