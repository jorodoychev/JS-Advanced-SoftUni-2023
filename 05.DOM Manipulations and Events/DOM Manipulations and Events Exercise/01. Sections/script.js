function create(words) {

    words.forEach(el => {
        let div = document.createElement('div')
        let p = document.createElement('p')
        p.textContent = el
        p.style.display = 'none'
        div.appendChild(p)
        div.addEventListener('click', () => p.style.display = 'block')
        let content = document.getElementById('content')
        content.appendChild(div)
    })

}