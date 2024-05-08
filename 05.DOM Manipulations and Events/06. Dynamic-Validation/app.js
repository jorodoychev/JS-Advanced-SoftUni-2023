function validate() {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const input = document.getElementById('email')


    input.addEventListener('change', () => {
      
        if (!emailRegex.exec(input.value)) {
            input.classList.add('error')
        } else {
            input.classList.remove('error')
        }
    })
    
}