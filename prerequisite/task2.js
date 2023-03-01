/**
 * returns total amount of seconds starting
 * from the beginning of today and till now.
 */
function secondsPassed() {
    const now = new Date();
    return now.getSeconds() + 60 * (now.getMinutes() + 60 * now.getHours());
}
