function wordsUppercase(words) {
    const pattern = /\w+/g;
    const output = words.match(pattern).join(", ").toUpperCase();
    console.log(output);
}

wordsUppercase('Hi, how are you?')
wordsUppercase('Functions in JS can be nested, i.e. hold other functions')