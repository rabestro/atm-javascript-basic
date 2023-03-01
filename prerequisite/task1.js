const MAX_NUMBER = 100;
const ARRAY_LENGTH = 10;
const randomInteger = bound => Math.floor(Math.random() * bound);
const fillArray = () => Array.from({length: ARRAY_LENGTH}, () => randomInteger(MAX_NUMBER));

const multiplyThreeGreatest = array => {
    array.sort((a, b) => b - a);
    return array[0] * array[1] * array[2];
}

