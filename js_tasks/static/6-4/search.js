function search() {
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
