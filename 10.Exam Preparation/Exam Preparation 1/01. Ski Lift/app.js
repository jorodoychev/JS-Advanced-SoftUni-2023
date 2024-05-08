window.addEventListener('load', solve)

function solve() {

    const inputElements = document.querySelectorAll('form input')
    const nextBtnEl = document.getElementById('next-btn')
    const ulElPreview = document.getElementsByClassName('ticket-info-list')[0]
    const ulElConfirm = document.getElementsByClassName('confirm-ticket')[0]
    const divEl = document.getElementById('main')

    const ticketDetails = {}

    nextBtnEl.addEventListener('click', (e) => {
        e.preventDefault()

        const hasEmptyInput = Array.from(inputElements).some(x => !x.value || x.value.trim() === '')

        if (hasEmptyInput) {
            return
        }

        Array.from(inputElements).forEach(x => {
            ticketDetails[x.id] = x.value
        })

        const articleEl = createDomElement('article', {},
            [
                createDomElement('h3', {}, [`Name: ${ticketDetails['first-name']} ${ticketDetails['last-name']}`]),
                createDomElement('p', {}, [`From date: ${ticketDetails['from-date']}`]),
                createDomElement('p', {}, [`For ${ticketDetails['days-count']} days`]),
                createDomElement('p', {}, [`For ${ticketDetails['people-count']} people`]),
            ])

        const liEl = createDomElement('li', {class: 'ticket'}, [
            articleEl
        ])

        const editBtnEl = createDomElement('button', {class: 'edit-btn'}, ['Edit'])
        const continueBtnEl = createDomElement('button', {class: 'continue-btn'}, ['Continue'])

        liEl.appendChild(articleEl)
        liEl.appendChild(editBtnEl)
        liEl.appendChild(continueBtnEl)
        ulElPreview.appendChild(liEl)

        Array.from(inputElements).forEach(x => {
            x.value = ''
        })

        nextBtnEl.disabled = true

        editBtnEl.addEventListener('click', (e) => {
            e.preventDefault()

            Array.from(inputElements).forEach(x => {
                x.value = ticketDetails[x.id]
            })

            ulElPreview.removeChild(liEl)
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
            ulElConfirm.appendChild(liEl)

            confirmBtnEl.addEventListener('click', (e) => {
                e.preventDefault()

                divEl.remove()

                const h1El = createDomElement('h1', {id: 'thank-you'}, ['Thank you, have a nice day! '])
                const backBtn = createDomElement('button', {id: 'back-btn'}, ['Back '])

                document.body.appendChild(h1El).appendChild(backBtn)

                backBtn.addEventListener('click', () => {
                    location.reload()
                })

            })

            cancelBtnEl.addEventListener('click', (e) => {
                e.preventDefault()

                ulElConfirm.removeChild(liEl)
                nextBtnEl.disabled = false

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


    
    
