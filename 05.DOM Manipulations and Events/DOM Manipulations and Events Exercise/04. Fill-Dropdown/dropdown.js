function addItem() {
    const itemText = document.getElementById('newItemText')
    const itemValue = document.getElementById('newItemValue')
    const select = document.getElementById('menu')
    
    const option = document.createElement('option')
    option.textContent = itemText.value
    option.value = itemValue.value
    select.appendChild(option)
    itemText.value = ''
    itemValue.value = ''
}