"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getLongestPalindromicSubstring = void 0;
// https://leetcode.com/problems/longest-palindromic-substring/
/**
 * Returns the substring that has the longest palindromic substring
 */
function getLongestPalindromicSubstring(givenString) {
    let longestSubstring = '';
    for (let i = 0; i < givenString.length; i++) {
        let substring = givenString[i];
        for (let j = i + 1; j < givenString.length; j++) {
            const character = givenString[j];
            substring += character;
            if (isPalindrome(substring) && substring.length > longestSubstring.length) {
                longestSubstring = substring;
            }
        }
    }
    return longestSubstring;
}
exports.getLongestPalindromicSubstring = getLongestPalindromicSubstring;
function isPalindrome(substring) {
    return substring === substring.split('').reverse().join('');
}
