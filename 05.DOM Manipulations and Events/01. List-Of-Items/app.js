function addItem() {
    const input = document.getElementById('newItemText')
    const list = document.getElementById('items')
    const li = document.createElement('li')
    
    if (input.value){
        li.textContent = input.value
        list.appendChild(li)
    }

}