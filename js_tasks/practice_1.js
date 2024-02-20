/**
 * Задача 1. Возраст
 * 
 * @param {Number} age 
 * @returns {String}
 */
export function determine(age) {
    if (age < 0) {
        return 'Неверные данные.';
    }

    if (age >= 0 && age <= 2) {
        return 'Младенец';
    }

    if (age >= 3 && age <= 13) {
        return 'Ребенок';
    }

    if (age >= 14 && age <= 19) {
        return 'Подросток';
    }

    if (age >= 20 && age <= 65) {
        return 'Взрослый';
    }

    return 'Пожилой';
}

/**
 * Задача 2. Округление
 * 
 * @param {Number} num 
 * @param {Number} limit 
 * @returns {Number}
 */
export function roundNumber(num, limit) {
    if (limit < 0) {
        return -1;
    }

    if (limit > 15) {
        limit = 15;
    }

    return Math.round(num * Math.pow(10, limit)) / Math.pow(10, limit);
}

/**
 * Задача 3. Делитель
 * 
 * @param {Number} num 
 * @returns {String}
 */
export function findDivisor(num) {
    if (num % 10 == 0) {
        return 'Число делится на 10';
    }

    if (num % 7 === 0) {
        return 'Число делится на 7';
    }

    if (num % 6 === 0) {
        return 'Число делится на 6';
    }

    if (num % 3 === 0) {
        return 'Число делится на 3';
    }

    if (num % 2 === 0) {
        return 'Число делится на 2';
    }

    return 'Не делится';
}

/**
 * Задача 4. Отпуск
 * 
 * @param {Number} amount 
 * @param {String} type 
 * @param {String} day 
 * @returns {Number}
 */
export function estimateCost(_amount, _type, _day) {
    return (function(amount, type, day) {
        const priceList = {
            Students: { Friday: 8.45, Saturday: 9.80, Sunday: 10.46 },
            Corporative: { Friday: 10.90, Saturday: 15.60, Sunday: 16 },
            Regular: { Friday: 15, Saturday: 20, Sunday: 22.50 }
        };

        if (type === 'Students' && amount >= 30) {
            return priceList[type][day] * amount * 0.85;
        }

        if (type === 'Corporative' && amount >= 100) {
            return priceList[type][day] * (amount - 10);
        }

        if (amount >= 10 && amount <= 20) {
            return priceList[type][day] * amount * 0.95;
        }

        return priceList[type][day] * amount;
    })(_amount, _type, _day).toFixed(2);
}

/**
 * Задача 5. Високосный год
 * 
 * @param {Number} year 
 * @returns {Boolean}
 */
export function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0 || year % 400 === 0) ? 'yes' : 'no';
}