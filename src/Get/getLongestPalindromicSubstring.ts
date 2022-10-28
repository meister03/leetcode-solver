// https://leetcode.com/problems/longest-palindromic-substring/
/**
 * Returns the substring that has the longest palindromic substring
 */
export function getLongestPalindromicSubstring(givenString: string): string {
    let longestSubstring = '';
    for (let i = 0; i < givenString.length; i++) {
        let substring = givenString[i] as string;
        for (let j = i + 1; j < givenString.length; j++) {
            const character = givenString[j] as string;
            substring += character;
            if (isPalindrome(substring) && substring.length > longestSubstring.length) {
                longestSubstring = substring;
            }
        }
    }
    return longestSubstring;
}

function isPalindrome(substring: string) {
    return substring === substring.split('').reverse().join('');
}
