function solve() {
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