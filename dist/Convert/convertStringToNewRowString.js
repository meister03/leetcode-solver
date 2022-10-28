"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.convertStringToNewRowString = void 0;
// https://leetcode.com/problems/zigzag-conversion/
/**
 * Converts a given string to a new string with the given number of rows
 */
function convertStringToNewRowString(givenString, numberOfRows) {
    if (numberOfRows === 1) {
        return givenString;
    }
    const rows = new Array(numberOfRows).fill('');
    let goingDown = false;
    let currentRow = 0;
    for (let i = 0; i < givenString.length; i++) {
        const character = givenString[i];
        rows[currentRow] += character;
        if (currentRow === 0 || currentRow === numberOfRows - 1) {
            goingDown = !goingDown;
        }
        currentRow += goingDown ? 1 : -1;
    }
    // Fix Small Bug
    return rows.join('').replaceAll('undefined', '');
}
exports.convertStringToNewRowString = convertStringToNewRowString;
