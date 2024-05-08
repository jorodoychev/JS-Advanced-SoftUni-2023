function encodeAndDecodeMessages() {
    const [encodeBtn, decodeBtn] = document.querySelectorAll('button');
    const [messageInput, messageOutput] = document.querySelectorAll('textarea');

    encodeBtn.addEventListener('click', encodeMessages);
    decodeBtn.addEventListener('click', decodeMessages);

    function encodeMessages() {
        messageOutput.value = Array
            .from(messageInput.value)
            .map(char => String.fromCharCode(char.charCodeAt(0) + 1)).join('');
        messageInput.value = '';
    }

    function decodeMessages() {
        messageOutput.value = Array
            .from(messageOutput.value)
            .map(char => String.fromCharCode(char.charCodeAt(0) - 1)).join('');
    }
}
