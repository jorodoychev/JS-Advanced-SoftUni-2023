window.addEventListener("load", solve);

function solve() {
    const title = document.getElementById('post-title')
    const category = document.getElementById('post-category')
    const content = document.getElementById('post-content')
    const inputElements = [title, category, content]
    const publishBtn = document.getElementById('publish-btn')
    const clearBtn = document.getElementById('clear-btn')
    const ulReviewEl = document.getElementById('review-list')
    const ulPublishedEl = document.getElementById('published-list')

    const posts = {}

    publishBtn.addEventListener('click', (e) => {
        e.preventDefault()

        const hasEmptyInput = Array.from(inputElements).some(x => !x.value || x.value.trim() === '')

        if (hasEmptyInput) {
            return
        }

        Array.from(inputElements).forEach(x => {
            posts[x.id] = x.value
        })


        const articleEl = createDomElement('article', {},
            [
                createDomElement('h4', {}, [`${posts['post-title']}`]),
                createDomElement('p', {}, [`Category: ${posts['post-category']}`]),
                createDomElement('p', {}, [`Content: ${posts['post-content']}`]),

            ])

        const liEl = createDomElement('li', {class: 'rpost'}, [
            articleEl])


        const editBtnEl = createDomElement('button', {class: 'action-btn edit'}, ['Edit'])
        const approveBtnEl = createDomElement('button', {class: 'action-btn approve'}, ['Approve'])

        liEl.appendChild(articleEl)
        liEl.appendChild(editBtnEl)
        liEl.appendChild(approveBtnEl)
        ulReviewEl.appendChild(liEl)

        Array.from(inputElements).forEach(x => {
            x.value = ''
        })

        editBtnEl.addEventListener('click', (e) => {
            e.preventDefault()

            Array.from(inputElements).forEach(x => {
                x.value = posts[x.id]
            })


            ulReviewEl.removeChild(liEl)

        })

        approveBtnEl.addEventListener('click', (e) => {
            e.preventDefault()

            liEl.removeChild(editBtnEl)
            liEl.removeChild(approveBtnEl)
            ulReviewEl.removeChild(liEl)
            ulPublishedEl.appendChild(liEl)

        })

        clearBtn.addEventListener('click', (e) => {
            e.preventDefault()

            ulPublishedEl.removeChild(liEl)
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
