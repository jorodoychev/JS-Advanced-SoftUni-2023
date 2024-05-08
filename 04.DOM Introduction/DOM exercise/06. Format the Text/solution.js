function solve() {
    const input = document.getElementById('input').value
    const output = document.getElementById('output')

    const sentences = input
        .split('.')
        .filter(str => str !== '')
        .map(str => str + '.')

    const paragraphRoof = Math.ceil(sentences.length / 3)
    
    for (let i = 0; i < paragraphRoof; i++) {
        const joinedSentences = sentences.splice(0, 3).join('')
        console.log(joinedSentences)
        output.innerHTML += `<p>${joinedSentences}</p>`
    }

}