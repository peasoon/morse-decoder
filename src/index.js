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
  let temp = expr.split('**********');
  temp = temp.map(item => {
    return item.replace(/(\d{10})/g, '$1 ').trim().split(' ')
  })
  temp = temp.map(item => {
    return item.map(el => {
      return el.replace(/10/g, '.').replace(/11/g, '-').replace(/0/g, '')
    })
  })
  temp = temp.map(item => {
    return item.map(el => {
      return MORSE_TABLE[el]
    }).join('')
  }).join(' ')
  return temp
}

module.exports = {
    decode
}