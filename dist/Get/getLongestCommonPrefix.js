"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getLongestCommonPrefix = void 0;
// https://leetcode.com/problems/longest-common-prefix/
/**
 * Returns the longest common prefix in an array of strings
 */
function getLongestCommonPrefix(givenStrings) {
    let longestCommonPrefix = '';
    // @ts-ignore
    for (let i = 0; i < givenStrings[0].length; i++) {
        // @ts-ignore
        const character = givenStrings[0][i];
        for (let j = 1; j < givenStrings.length; j++) {
            // @ts-ignore
            if (givenStrings[j][i] !== character) {
                return longestCommonPrefix;
            }
        }
        longestCommonPrefix += character;
    }
    return longestCommonPrefix;
}
exports.getLongestCommonPrefix = getLongestCommonPrefix;
