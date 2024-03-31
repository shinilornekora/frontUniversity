/**
 * Задача 1. Школьная задача
 */
export function subtract() {
    const firstNumber = Number(document.getElementById('firstNumber').value);
    const secondNumber = Number(document.getElementById('secondNumber').value);

    document.getElementById('result').innerHTML = firstNumber - secondNumber;
}

/**
 * Задача 2. Pascal Case и Camel Case
 * 
 * @param {String} text 
 * @param {String} caseType 
 */
export function solve() {
    const text = document.querySelector('#text').value.split(' ');
    const caseType = document.querySelector('#naming-convention').value.toLowerCase();
    const node = document.querySelector('#result');

    switch (caseType) {
        case 'pascal case': 
            node.innerHTML = text.map(item => item[0].toUpperCase() + item.slice(1).toLowerCase()).join('');
            break;

        case 'camel case': 
            node.innerHTML = text.map((item, index) => {
                if (index === 0) {
                    return item.toLowerCase();
                }
                
                return item[0].toUpperCase() + item.slice(1).toLowerCase();
              }).join('');
              break;
          
          default: 
              node.innerHTML = 'Error!';
    }
}

/**
 * Задача 3. Аккордеон
 */
export function toggle() {
    const textNode = document.querySelector('#extra');

    if (textNode.style.display === 'none' || !textNode.style.display) {
        return textNode.style.display = 'block';
    } 
    
    return textNode.style.display = 'none';
}

/**
 * Задача 4. Поиск
 */
export function search() {
    const searchText = document.getElementById('searchText').value.toLowerCase();
    const cityList = document.getElementById('towns').getElementsByTagName('li');
 
    let matches = 0;
 
    for (let i = 0; i < cityList.length; i++) {
       const city = cityList[i];
       const cityName = city.textContent;
 
       console.log(cityName, searchText);
 
       if (cityName.toLowerCase().includes(searchText)) {
          city.style.textDecoration = 'underline';
          city.style.fontWeight = 'bold';
          matches++;
          continue;
       } 
       
       city.style.textDecoration = 'none';
       city.style.fontWeight = '200';
    }
    document.getElementById('result').innerText = `${matches} matches found`;
 }


/**
 * Задача 5. Поиск в таблице
 */
export function solve() {
    document.querySelector('#searchBtn').addEventListener('click', onClick);
 
    function onClick() {
       const searchInput = document.getElementById('searchField').value.toLowerCase();
       const tableRows = document.getElementsByTagName('tr');
 
       for (let i = 1; i < tableRows.length; i++) {
          const cells = tableRows[i].getElementsByTagName('td');
          let rowContainsSearch = false;
 
          for (let j = 0; j < cells.length - 1; j++) {
               const cellText = cells[j].innerText.toLowerCase();
               if (cellText.includes(searchInput) || cellText.split(' ').includes(searchInput)) {
                   rowContainsSearch = true;
                   break;
               }
          }
          if (rowContainsSearch) {
               tableRows[i].classList.add('select');
               continue;
          }
          
           tableRows[i].classList.remove('select');
       }
    }
 }

/**
 * Задача 6. Конвертер
 * 
 * @param {String} unit 
 */
export function attachEventsListeners() {
    const buttons = [
        document.getElementById('daysBtn'),
        document.getElementById('hoursBtn'),
        document.getElementById('minutesBtn'),
        document.getElementById('secondsBtn'),
    ]

    for (btn of buttons) {
        btn.addEventListener('click', calculate);
    }
}

/**
 * Основная функция которая вызывается по клику
 * 
 * @param {Event} event
 */
function calculate(event) {
    const unit = event.target.id

    const daysInput = document.getElementById('days');
    const hoursInput = document.getElementById('hours');
    const minutesInput = document.getElementById('minutes');
    const secondsInput = document.getElementById('seconds');
    
    let totalSeconds = 0;
    
    if (unit === 'daysBtn') {
        totalSeconds = parseFloat(daysInput.value) * 24 * 60 * 60;
    } else if (unit === 'hoursBtn') {
        totalSeconds = parseFloat(hoursInput.value) * 60 * 60;
    } else if (unit === 'minutesBtn') {
        totalSeconds = parseFloat(minutesInput.value) * 60;
    } else if (unit === 'secondsBtn') {
        totalSeconds = parseFloat(secondsInput.value);
    }

    daysInput.value = Math.round(totalSeconds / (3600 * 24));
    hoursInput.value = Math.round(totalSeconds / 3600);
    minutesInput.value = Math.round(totalSeconds / 60);
    secondsInput.value = totalSeconds;
}


/**
 * Задача 7. Заблокированные профили
 */
export function lockedProfile() {
    const profileButtons = document.querySelectorAll('.profile button');
  
    profileButtons.forEach((button, index) => {
        button.addEventListener('click', function() {
            const profile = this.parentNode;
            const isLocked = profile.querySelector(`input[name="user${index + 1}Locked"]:checked`).value === 'lock';
            const hiddenFields = profile.querySelector(`#user${index + 1}HiddenFields`);
            
            console.log(profile, isLocked, hiddenFields)

            if (isLocked) {
                return;
            }
    
            if (this.textContent === 'Show more') {
                hiddenFields.style.display = 'block';
                this.textContent = 'Hide it';
                return;
            }

            hiddenFields.style.display = 'none';
            this.textContent = 'Show more';
        });
    });
}
  

/**
 * Задача 8. Дропдаун
 */
export function addItem() {
    const newItemText = document.getElementById('newItemText').value;
    const newItemValue = document.getElementById('newItemValue').value;
    const selectMenu = document.getElementById('menu');

    const option = document.createElement('option');
    option.text = newItemText;
    option.value = newItemValue;
    selectMenu.add(option);
}
