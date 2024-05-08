function focused() {
    const inputs = Array.from(document.getElementsByTagName('input'))

    function focusHandler(e) {
        e.target.parentElement.classList.add('focused')
        
    }

    function blurHandler(e) {
        e.target.parentElement.classList.remove('focused')
    }

    inputs.forEach(x=>{
        x.addEventListener('focus', focusHandler)
        x.addEventListener('blur', blurHandler)
    
    })
    
    
}