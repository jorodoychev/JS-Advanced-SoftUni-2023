window.addEventListener("load", solve);

function solve() {

    const inputElements = document.querySelectorAll('form input')
    const addGemBtnEl = document.getElementById('add-btn')
    const selectEl = document.getElementById('type')
    const ulPreviewEl = document.getElementById('preview-list')
    const ulCollectionEl = document.getElementById('collection')

    const gemDetails = {}

    addGemBtnEl.addEventListener('click', (e) => {
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


        Array.from(inputElements).forEach(x => {
            gemDetails[x.id] = x.value
        })

        const articleEl = createDomElement('article', {},
            [
                createDomElement('h4', {}, [`${gemDetails['gem-name']}`]),
                createDomElement('p', {}, [`Color: ${gemDetails['color']}`]),
                createDomElement('p', {}, [`Carats: ${gemDetails['carats']}`]),
                createDomElement('p', {}, [`Price: ${gemDetails['price']} $`]),
                createDomElement('p', {}, [`Type: ${originalValue}`]),
            ])

        const liEl = createDomElement('li', {class: 'gem-info'}, [
            articleEl
        ])

        const saveBtnEl = createDomElement('button', {class: 'save-btn'}, ['Save to Collection'])
        const editBtnEl = createDomElement('button', {class: 'edit-btn'}, ['Edit Information'])
        const cancelBtnEl = createDomElement('button', {class: 'cancel-btn'}, ['Cancel'])

        liEl.appendChild(articleEl)
        liEl.appendChild(saveBtnEl)
        liEl.appendChild(editBtnEl)
        liEl.appendChild(cancelBtnEl)
        ulPreviewEl.appendChild(liEl)


        Array.from(inputElements).forEach(x => {
            x.value = ''
        })

        selectEl.selectedIndex = -1
        addGemBtnEl.disabled = true
        addGemBtnEl.value = 'Add Gem'

        editBtnEl.addEventListener('click', (e) => {
            e.preventDefault()

            Array.from(inputElements).forEach(x => {
                x.value = gemDetails[x.id]
            })


            selectEl.selectedIndex = selectedIndex

            ulPreviewEl.removeChild(liEl)
            addGemBtnEl.disabled = false
            addGemBtnEl.value = 'Add Gem'
        })

        saveBtnEl.addEventListener('click', (e) => {
            e.preventDefault()

            const li = createDomElement('li', {}, [
                createDomElement('p', {class: 'collection-item'}, [`${gemDetails['gem-name']} - Color: ${gemDetails['color']}/
                 Carats: ${gemDetails['carats']}/ Price: ${gemDetails['price']}$/ Type: ${originalValue}`])

            ])

            ulPreviewEl.removeChild(liEl)
            ulCollectionEl.appendChild(li)
            addGemBtnEl.disabled = false
            addGemBtnEl.value = 'Add Gem'

        })

        cancelBtnEl.addEventListener('click', (e) => {
            e.preventDefault()
            addGemBtnEl.disabled = false
            addGemBtnEl.value = 'Add Gem'
            ulPreviewEl.removeChild(liEl)

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
