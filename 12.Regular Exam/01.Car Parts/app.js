window.addEventListener('load', solve)

function solve() {
    const inputElements = document.querySelectorAll('form input')
    const selectEl = document.getElementById('condition')
    const nextBtnEl = document.getElementById('next-btn')
    const ulInfoList = document.getElementsByClassName('info-list')[0]
    const ulConfirmList = document.getElementsByClassName('confirm-list')[0]
    const imgEl = document.getElementById('complete-img')
    const pEl = document.getElementById('complete-text')


    const carDetails = {}


    nextBtnEl.addEventListener('click', (e) => {
        e.preventDefault()

        const hasEmptyInput = Array.from(inputElements).some(x => !x.value || x.value.trim() === '')

        if (hasEmptyInput) {
            return
        }

        const selectedIndex = selectEl.selectedIndex
        const selectedOption = selectEl.options[selectEl.selectedIndex]
        const originalValue = selectedOption.value

        if (!originalValue) {
            return
        }

        if (inputElements[1].value < 1980 || inputElements[1].value > 2023) {
            return
        }

        Array.from(inputElements).forEach(x => {
            carDetails[x.id] = x.value
        })

        const articleEl = createDomElement('article', {},
            [
                createDomElement('p', {}, [`Car Model: ${carDetails['car-model']}`]),
                createDomElement('p', {}, [`Car Year: ${carDetails['car-year']}`]),
                createDomElement('p', {}, [`Part Name: ${carDetails['part-name']}`]),
                createDomElement('p', {}, [`Part Number: ${carDetails['part-number']}`]),
                createDomElement('p', {}, [`Condition: ${originalValue}`]),
            ])

        const liEl = createDomElement('li', {class: 'part-content'}, [
            articleEl
        ])

        const editBtnEl = createDomElement('button', {class: 'edit-btn'}, ['Edit'])
        const continueBtnEl = createDomElement('button', {class: 'continue-btn'}, ['Continue'])


        imgEl.style.visibility = 'hidden'
        pEl.textContent = ''

        liEl.appendChild(articleEl)
        liEl.appendChild(editBtnEl)
        liEl.appendChild(continueBtnEl)
        ulInfoList.appendChild(liEl)

        Array.from(inputElements).forEach(x => {
            x.value = ''
        })

        selectEl.selectedIndex = -1
        nextBtnEl.disabled = true

        editBtnEl.addEventListener('click', (e) => {
            e.preventDefault()

            Array.from(inputElements).forEach(x => {
                x.value = carDetails[x.id]
            })


            selectEl.selectedIndex = selectedIndex

            ulInfoList.removeChild(liEl)
            nextBtnEl.disabled = false
        })

        continueBtnEl.addEventListener('click', (e) => {
            e.preventDefault()

            liEl.removeChild(editBtnEl)
            liEl.removeChild(continueBtnEl)
            const confirmBtnEl = createDomElement('button', {class: 'confirm-btn'}, ['Confirm'])
            const cancelBtnEl = createDomElement('button', {class: 'cancel-btn'}, ['Cancel'])
            liEl.appendChild(confirmBtnEl)
            liEl.appendChild(cancelBtnEl)
            ulConfirmList.appendChild(liEl)

            confirmBtnEl.addEventListener('click', (e) => {
                e.preventDefault()

                ulConfirmList.removeChild(liEl)
                nextBtnEl.disabled = false
                imgEl.style.visibility = 'visible'
                pEl.textContent = 'Part is Ordered!'


            })

            cancelBtnEl.addEventListener('click', (e) => {
                e.preventDefault()
                nextBtnEl.disabled = false
                ulConfirmList.removeChild(liEl)

            })

        })


    })

    function createDomElement(tagName, attributes = {}, children = []) {
        const element = document.createElement(tagName)

        // Set attributes
        for (const key in attributes) {
            if (Object.prototype.hasOwnProperty.call(attributes, key)) {
                element.setAttribute(key, attributes[key])
            }
        }

        // Append children
        children.forEach(child => {
            if (typeof child === 'string') {
                element.appendChild(document.createTextNode(child))
            } else if (child instanceof HTMLElement) {
                element.appendChild(child)
            }
        })

        return element
    }
}


    
    
