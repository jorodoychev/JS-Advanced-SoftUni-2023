window.addEventListener("load", solve);

function solve() {
    const firstName = document.getElementById('first-name')
    const lastName = document.getElementById('last-name')
    const age = document.getElementById('age')
    const selectEl = document.getElementById('genderSelect')
    const textArea = document.getElementById('task')
    const submitBtn = document.getElementById('form-btn')
    const clearBtn = document.getElementById('clear-btn')
    const counter = document.getElementById('progress-count')

    const inputElements = [firstName, lastName, age, textArea, selectEl]

    const ulInProgress = document.getElementById('in-progress')
    const ulFinished = document.getElementById('finished')

    const dishDetails = {}

    submitBtn.addEventListener('click', (e) => {
        e.preventDefault()

        const hasEmptyInput = Array.from(inputElements).some(x => !x.value || x.value.trim() === '')

        if (hasEmptyInput) {
            return
        }

        Array.from(inputElements).forEach(x => {
            dishDetails[x.id] = x.value
        })


        const articleEl = createDomElement('article', {},
            [
                createDomElement('h4', {}, [`${dishDetails['first-name']} ${dishDetails['last-name']}`]),
                createDomElement('p', {}, [`${dishDetails['genderSelect']}, ${dishDetails['age']}`]),
                createDomElement('p', {}, [`Dish description: ${dishDetails['task']}`]),
            ])

        const liEl = createDomElement('li', {class: 'each-line'}, [
            articleEl
        ])


        const editBtnEl = createDomElement('button', {class: 'edit-btn'}, ['Edit'])
        const completeBtnEl = createDomElement('button', {class: 'complete-btn'}, ['Mark as complete'])


        liEl.appendChild(articleEl)
        liEl.appendChild(editBtnEl)
        liEl.appendChild(completeBtnEl)
        ulInProgress.appendChild(liEl)

        counter.textContent++

        Array.from(inputElements).forEach(x => {
            x.value = ''
        })

        editBtnEl.addEventListener('click', (e) => {
            e.preventDefault()

            Array.from(inputElements).forEach(x => {
                x.value = dishDetails[x.id]
            })

            ulInProgress.removeChild(liEl)

        })

        completeBtnEl.addEventListener('click', (e) => {
            e.preventDefault()

            liEl.removeChild(editBtnEl)
            liEl.removeChild(completeBtnEl)
            ulInProgress.removeChild(liEl)
            ulFinished.appendChild(liEl)
            counter.textContent--
        })

        clearBtn.addEventListener('click', (e) => {
            e.preventDefault()

            ulFinished.removeChild(liEl)
        })

    })


    function createDomElement(tagName, attributes = {}, children = []) {
        const element = document.createElement(tagName)

        for (const key in attributes) {
            if (Object.prototype.hasOwnProperty.call(attributes, key)) {
                element.setAttribute(key, attributes[key])
            }
        }

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
