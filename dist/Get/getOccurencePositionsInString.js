"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getOccurencePositionsInString = void 0;
// https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/
/**
 * Returns the position of an occurence of a substring in a string
 */
function getOccurencePositionsInString(givenString, substring) {
    const occurencePositions = [];
    let position = givenString.indexOf(substring);
    while (position !== -1) {
        occurencePositions.push(position);
        position = givenString.indexOf(substring, position + 1);
    }
    return occurencePositions;
}
exports.getOccurencePositionsInString = getOccurencePositionsInString;
