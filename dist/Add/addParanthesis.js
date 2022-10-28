"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addParanthesis = void 0;
// https://leetcode.com/problems/generate-parentheses/
/**
 * Returns the string surrounded by paranthesis
 */
function addParanthesis(givenString, paranthesis) {
    return `${paranthesis || '('}${givenString}${paranthesis || ')'}`;
}
exports.addParanthesis = addParanthesis;
