/**
 * Задача 1. Сотрудники
 * 
 * @description Класс, описывающий сотрудника.
 */
export class Employee {
    /**
     * Конструктор, id - уникальный номер.
     * 
     * @param {String} name 
     */
    constructor(name) {
        this.name = name;
        this.id = name.length;
    }
}

/**
 * Решение через прототипы.
 * 
 * @param {String[]} list 
 * @returns {String} 
 */
export function employeeShowcaseProcess(list) {
    Employee.prototype.toString = function employeeToString() { 
        return `Name: ${this.name} - Personal Number: ${this.id}`;
    }

    list = list.map((name) => new Employee(name).toString());

    return list.forEach(e => console.log(e));
}

/**
 * Задача 2. Города
 * 
 * @param {String[]} towns 
 * @returns {Object[]}
 */
export function formatCityInfo(towns) {
    return towns.map(townInfo => townInfo.split(' | ')).map(townInfo => ({
        town: townInfo[0],
        latitude: String(Number(townInfo[1]).toFixed(2)),
        longitude: String(Number(townInfo[2]).toFixed(2)),
    })).forEach(e => console.log(e));
}

/**
 * Задача 3. Магазин
 * 
 * @param {String[]} productInfo 
 * @returns {String[]}
 */
export function formatStore(productInfo, orderInfo) {
    const storeInfo = {}
    
    for (let i = 0; i < productInfo.length; i += 2) {
        storeInfo[productInfo[i]] = Number(productInfo[i + 1]);
    }

    for (let i = 0; i < orderInfo.length; i += 2) {
        if (storeInfo[orderInfo[i]]) {
            storeInfo[orderInfo[i]] += Number(orderInfo[i + 1]) 
        }  
        
        storeInfo[orderInfo[i]] = orderInfo[i + 1] 
    }

    return Object.entries(storeInfo).map(([name, quantity]) => `${name} -> ${quantity}`).forEach(e => console.log(e));
}

/**
 * Задача 4. Фильмы
 * 
 * @description Класс для удобства построения фильмов.
 */
export class MovieConstructor {
    constructor() {
        this.movies = [];
    };

    getMovieIndex(name) {
        let index = -1;
        this.movies.forEach((movie, _index) => {
            if (movie.name === name) {
                index = _index;
            }
        });

        return index;
    }

    addMovie(name) {
        this.movies.push({ name });
    }

    directedBy(name, director) {
        let index = this.getMovieIndex(name);

        if (index !== -1) {
            this.movies[index]['director'] = director
        }
    }

    onDate(name, date) {
        let index = this.getMovieIndex(name);

        if (index !== -1) {
            this.movies[index]['date'] = date;
        }
    }

    getMovies() {
        return this.movies;
    }
}

/**
 * Контроллер
 * 
 * @param {String[]} array 
 * @returns {Object[]}
 */
export function handleMovieConstruct(array) {
    const movies = new MovieConstructor();

    array.forEach(command => {
        command = command.split(' ');

        if (command[0] === 'addMovie') {
            return movies.addMovie(command.slice(1).join(' '));
        }

        command.forEach((item, index) => {
            if (item === 'directedBy') {
                return movies.directedBy(command.slice(0, index).join(' '), command.slice(index + 1).join(' '))
            }

            if (item === 'onDate') {
                return movies.onDate(command.slice(0, index).join(' '), command.slice(index + 1).join(' '))
            }
            
            return new Error(`No commands found for: ${item}`);
        })
    })

    return movies.getMovies();
}
