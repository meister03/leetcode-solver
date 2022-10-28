"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeDuplicatesFromArray = void 0;
// https://leetcode.com/problems/remove-duplicates-from-sorted-array/
/**
 * Removes the duplicates from the given array
 */
function removeDuplicatesFromArray(nums) {
    const map = new Map();
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        if (!map.has(num)) {
            map.set(num, i);
        }
    }
    return map.size;
}
exports.removeDuplicatesFromArray = removeDuplicatesFromArray;
