/**
 * Задача 1. Школьная задача
 */
export function handleSubtract() {
    const firstNumber = Number(document.getElementById('firstNumber').innerHTML);
    const secondNumber = Number(document.getElementById('secondNumber').innerHTML);

    document.getElementById('result').innerHTML = firstNumber - secondNumber;
}

/**
 * Задача 2. Pascal Case и Camel Case
 * 
 * @param {String} text 
 * @param {String} caseType 
 */
export function formatCase(text, caseType) {
    text = text.split();
    const node = document.querySelector('span');

    switch (caseType) {
        case 'Pascal Case': 
            node.innerHTML = text.map(item => item[0].toUpperCase() + item.slice(1).toLowerCase()).join();
            break;

        case 'Camel case': 
            node.innerHTML = text.map((item, index) => {
                if (index === 0) {
                    return item.toLowerCase();
                }
                return item[0].toUpperCase() + item.slice(1).toLowerCase()
            }).join();
            break;
        
        default: 
            node.innerHTML = 'Ошибка!';
    }
}

/**
 * Задача 3. Аккордеон
 */
export function stateHandler() {
    const textNode = document.querySelector('.text');
    if (textNode.style.display === 'none') {
        textNode.style.display = 'block';
    } else {
        textNode.style.display = 'none';
    }
}

/**
 * Задача 4. Поиск
 */
export function search() {
    const searchText = document.getElementById('searchInput').value.toLowerCase();
    const cityList = document.getElementById('cityList').getElementsByTagName('li');
    let matches = 0;
    for (let i = 0; i < cityList.length; i++) {
        const city = cityList[i];
        const cityName = city.textContent.toLowerCase();
        if (cityName.includes(searchText)) {
            city.innerHTML = cityName.replace(new RegExp(searchText, 'gi'), match => `<span class="highlight">${match}</span>`);
            matches++;
        } else {
            city.innerHTML = cityName;
        }
    }
    document.getElementById('matchesFound').innerText = `${matches} matches found`;
}


/**
 * Задача 5. Поиск в таблице
 */
export function searchInTable() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    const tableRows = document.getElementsByTagName('tr');
    for (let i = 1; i < tableRows.length; i++) {
        const cells = tableRows[i].getElementsByTagName('td');
        let rowContainsSearch = false;
        for (let j = 0; j < cells.length; j++) {
            const cellText = cells[j].innerText.toLowerCase();
            if (cellText.includes(searchInput) || cellText.split(' ').includes(searchInput)) {
                rowContainsSearch = true;
                break;
            }
        }
        if (rowContainsSearch) {
            tableRows[i].classList.add('select');
        } else {
            tableRows[i].classList.remove('select');
        }
    }
}

/**
 * Задача 6. Конвертер
 * 
 * @param {String} unit 
 */
export function convertTime(unit) {
    const daysInput = document.getElementById('daysInput');
    const hoursInput = document.getElementById('hoursInput');
    const minutesInput = document.getElementById('minutesInput');
    const secondsInput = document.getElementById('secondsInput');
    
    let totalSeconds = 0;
    if (unit === 'days') {
        totalSeconds = parseFloat(daysInput.value) * 24 * 60 * 60;
    } else if (unit === 'hours') {
        totalSeconds = parseFloat(hoursInput.value) * 60 * 60;
    } else if (unit === 'minutes') {
        totalSeconds = parseFloat(minutesInput.value) * 60;
    } else if (unit === 'seconds') {
        totalSeconds = parseFloat(secondsInput.value);
    }

    const remainingSeconds = totalSeconds % 60;
    const totalMinutes = (totalSeconds - remainingSeconds) / 60;
    const remainingMinutes = totalMinutes % 60;
    const totalHours = (totalMinutes - remainingMinutes) / 60;
    const remainingHours = totalHours % 24;
    const totalDays = (totalHours - remainingHours) / 24;

    daysInput.value = totalDays;
    hoursInput.value = remainingHours;
    minutesInput.value = remainingMinutes;
    secondsInput.value = remainingSeconds;
}


/**
 * Задача 7. Профиля - без заготовки не смогу сделать
 */
export function lockedProfile() {
    const profileButtons = document.querySelectorAll('.profile button');
  
    profileButtons.forEach(button => {
      button.addEventListener('click', function() {
        const profile = this.parentNode;
        const isLocked = profile.querySelector('input[name="userLocked"]:checked').value === 'lock';
        const hiddenFields = profile.querySelector('.hiddenFields');
  
        if (isLocked) {
          return;
        }
  
        if (this.textContent === 'Show more') {
          hiddenFields.style.display = 'block';
          this.textContent = 'Hide it';
        } else {
          hiddenFields.style.display = 'none';
          this.textContent = 'Show more';
        }
      });
    });
  }
  

/**
 * Задача 8. Дропдаун
 */
export function addOptionToSelect() {
    const newItemText = document.getElementById('newItemText').value;
    const newItemValue = document.getElementById('newItemValue').value;
    const selectMenu = document.getElementById('menu');

    const option = document.createElement('option');
    option.text = newItemText;
    option.value = newItemValue;
    selectMenu.add(option);
}
