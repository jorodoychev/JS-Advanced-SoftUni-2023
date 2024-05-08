function editElement(reference, match, replacer) {
    const content = reference.textContent
    const matcher = new RegExp(match, 'g')
    reference.textContent = content.replace(matcher, replacer)
}