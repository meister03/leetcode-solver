"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeNumberFromArrayWithPosition = void 0;
// https://leetcode.com/problems/remove-nth-node-from-end-of-list/
/**
 * Removes the number on the given array position
 */
function removeNumberFromArrayWithPosition(nums, position) {
    const newArray = [];
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        if (i !== position) {
            newArray.push(num);
        }
    }
    return newArray;
}
exports.removeNumberFromArrayWithPosition = removeNumberFromArrayWithPosition;
