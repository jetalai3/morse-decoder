const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    const morseWords = [];
    let i = 0;
        while (i != expr.length) {
            morseWords.push(getMorseChar(expr.slice(i, i+10)));
            i += 10;
        }
    return  morseWords.map(item => (item === '**********' ? ' ' : MORSE_TABLE[item])).join('');
}

function getMorseChar(expression) {
    let res = [];
    let i = 0;
    while (i != expression.length) {
        if (expression.slice(i, i + 2) === '00') {
            res.push('');
        } else if (expression.slice(i, i + 2) === '10') {
            res.push('.');
        } else if (expression.slice(i, i + 2) === '11') {
            res.push('-');
        } else if (expression.slice(i, i + 2) === '**') {
            res.push('**');
        }
        i += 2;
    }
    return res.join('');  
}

module.exports = {
    decode
}