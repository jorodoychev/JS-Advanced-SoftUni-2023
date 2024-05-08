function deleteByEmail() {
    const input = document.getElementsByName('email')[0]
    const result = document.getElementById('result')
    const td = document.querySelectorAll('tbody tr td')

    for (let text of td) {
        if (input.value === text.textContent) {
            text.parentElement.remove()
            result.textContent = 'Deleted.'
        } else {
            result.textContent = 'Not found.'
        }
    }

}