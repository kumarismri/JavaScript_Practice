// Find the first non-repeating character in a transaction reference string.

let str = "smritisimmi";

function nonRepeating(str) {
    let freqMap = new Map();

    // Count frequencies
    for (let ch of str) {
        freqMap.set(ch, (freqMap.get(ch) || 0) + 1);
    }

    // Find first non-repeating character
    for (let ch of str) {
        if (freqMap.get(ch) === 1) {
            return ch;
        }
    }

    return null;
}

console.log(nonRepeating(str));