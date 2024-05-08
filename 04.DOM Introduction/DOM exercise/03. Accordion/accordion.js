function toggle() {
    const btn = document.getElementsByClassName('button')[0]
    const div = document.getElementById('extra')

    if (div.style.display === 'block') {
        div.style.display = 'none'
        btn.textContent = 'More'
    } else {
        div.style.display = 'block'
        btn.textContent = 'Less'
    }
    
}