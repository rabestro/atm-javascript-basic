const MAX_NUMBER = 100;
const ARRAY_LENGTH = 10;

/**
 * Random integer value
 *
 * @param bound a maximum bound of random number
 * @returns {number} a random integer value from 0 (inclusive) till bound (exclusive)
 */
const randomInteger = bound => Math.floor(Math.random() * bound);

/**
 * Fulfills array with 10 random integer values
 *
 * @returns {number[]} an array with 10 random integer values
 */
const tenRandomIntegersArray = () => Array
    .from({length: ARRAY_LENGTH}, () => randomInteger(MAX_NUMBER));

/**
 * Multiply of 3 greatest values
 *
 * @param array with numbers
 * @returns {number} a multiply of 3 greatest values.
 */
const multiplyThreeGreatest = array => {
    array.sort((a, b) => b - a);
    return array[0] * array[1] * array[2];
}

/**
 * Fulfills array with 10 random integer values
 * and returns a multiply of 3 greatest values.
 *
 * @returns {number} a multiply of 3 greatest values
 */
function task1() {
    return multiplyThreeGreatest(tenRandomIntegersArray());
}