"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkParanthesis = void 0;
// https://leetcode.com/problems/valid-parentheses/
/**
 * Returns true if the given string has valid paranthesis
 */
function checkParanthesis(givenString) {
    const paranthesisMap = {
        '(': ')',
        '{': '}',
        '[': ']'
    };
    const paranthesisStack = [];
    for (let i = 0; i < givenString.length; i++) {
        const character = givenString[i];
        // @ts-ignore
        if (paranthesisMap[character]) {
            // @ts-ignore
            paranthesisStack.push(paranthesisMap[character]);
        }
        else if (character !== paranthesisStack.pop()) {
            return false;
        }
    }
    return paranthesisStack.length === 0;
}
exports.checkParanthesis = checkParanthesis;
