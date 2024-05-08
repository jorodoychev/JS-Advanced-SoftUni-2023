function attachGradientEvents() {
   const result = document.getElementById('result')
    
    const field = document.getElementById('gradient')
    
    field.addEventListener('mousemove', (e)=>{
        let power = e.offsetX / e.target.clientWidth
        power = Math.floor(power * 100);
        result.textContent = power + "%";
    })
    
}