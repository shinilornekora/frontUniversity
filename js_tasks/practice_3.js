/**
 * Задача 1. Операции
 * 
 * @param {Number[]} array 
 * @returns {Array}
 */
export function changeArrayValues(array) {
    const startSum = array.reduce((acc, item) => acc + item, 0);
    array = array.map((item, index) => item % 2 === 0 ? item + index : item - index);
    const endSum = array.reduce((acc, item) => acc + item, 0);

    return [array, startSum, endSum];
}

/**
 * Задача 2. Общие элементы
 * 
 * @param {Array} array_1 
 * @param {Array} array_2 
 * @returns {Array} 
 */
export function commonElements(array_1, array_2) {
    const set = new Set(array_1);
    
    return array_2.filter((item) => set.has(item));
}

/**
 * Задача 3. Вращение массива
 * 
 * @param {Array} array 
 * @param {Number} rotateNum 
 * @returns {Array}
 */
export function rotateArray(array, rotateNum) {
    const rotation = rotateNum % array.length;

    return [...array.slice(rotation), ...array.slice(0, rotation)];
}

/**
 * Задача 4. Чудесная матрица
 * 
 * @param {Array} matrix 
 * @returns {Boolean}
 */
export function isWonderfulMatrix(matrix) {
    if (!matrix[0]) {
        return true;
    }

    const predSums = [...matrix];
    const compareValue = matrix[0].reduce((acc, num) => acc + num, 0);
    
    for (let i = 0; i < matrix[0].length; i++) {
        predSums.push(matrix.map((matrixString) => matrixString[i]))
    }

    return predSums.every((numbers) => numbers.reduce((acc, num) => acc + num, 0) === compareValue)
}