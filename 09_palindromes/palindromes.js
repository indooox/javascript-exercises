const palindromes = function (str) {
    const letrasNums = 'abcdefghijklmnopqrstuvwxyz0123456789'

    const strLimpio = str
        .toLowerCase()
        .split('')
        .filter((letter) => letrasNums.includes(letter))
        .join();

    const reverso = strLimpio.split('').reverse().join('');

    return reverso === strLimpio;
};

// Do not edit below this line
module.exports = palindromes;
