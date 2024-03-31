/**
 * Задача 1. Наименьшее из трех чисел
 * 
 * @param {Number} num_1 
 * @param {Number} num_2 
 * @param {Number} num_3 
 * @returns {Number}
 */
export function findMin(num_1, ...nums) {
    return Math.min(num_1, nums[0], nums[1]);
}

/**
 * Задача 2. Сумма и разность
 * 
 * @param {Number} num_1 
 * @param {Array} rest 
 * @returns {Number}
 */
export function subtract(num_1, ...rest) {
    return num_1 + rest[0] - rest[1];
}

/**
 * Задача 3. Матрица N*N
 * 
 * @param {Number} number 
 * @returns {Array}
 */
export function makeSquare(n) {
    const matrix = [];

    for (let i = 0; i < n; i++) {
        matrix.push(Array(n).fill(n));
    }

    return matrix;
}

/**
 * Задача 4. Прогресс бар
 * 
 * @param {Number} number 
 * @returns 
 */
export function progressBar(number) {
    const array = Array(10).fill('.');
    if (number % 10 === 0) {
        const lastIndex = Math.round(number / 10);
        
        for (let i = 0; i < lastIndex; i++) {
            array[i] = '#';
        }
        
        return console.log(`${number}% [${array.join('')}]\nStill loading...`);
    }

    return 'Still loading...';
}
