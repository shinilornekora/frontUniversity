function addItem() {
    const newItemText = document.getElementById('newItemText').value;
    const newItemValue = document.getElementById('newItemValue').value;
    const selectMenu = document.getElementById('menu');

    const option = document.createElement('option');
    option.text = newItemText;
    option.value = newItemValue;
    selectMenu.add(option);
}