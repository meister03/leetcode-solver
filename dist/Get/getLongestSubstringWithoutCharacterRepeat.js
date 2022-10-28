"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getLongestSubstringWithoutCharacterRepeat = void 0;
// https://leetcode.com/problems/longest-substring-without-repeating-characters/
/**
 * Returns the longest substring without repeating characters
 */
function getLongestSubstringWithoutCharacterRepeat(givenString) {
    let longestSubstring = '';
    for (let i = 0; i < givenString.length; i++) {
        let substring = givenString[i];
        for (let j = i + 1; j < givenString.length; j++) {
            const character = givenString[j];
            if (substring.indexOf(character) !== -1) {
                break;
            }
            substring += character;
        }
        if (substring.length > longestSubstring.length) {
            longestSubstring = substring;
        }
    }
    return longestSubstring;
}
exports.getLongestSubstringWithoutCharacterRepeat = getLongestSubstringWithoutCharacterRepeat;
