function solve() {
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