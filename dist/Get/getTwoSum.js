"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTwoSum = void 0;
// https://leetcode.com/problems/two-sum/
/**
 * Returns from the array the two number positions that sum up to the wished given result
 */
function getTwoSum(nums, target) {
    const map = new Map();
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        const subtraction = target - num;
        if (map.has(subtraction)) {
            return [map.get(subtraction), i];
        }
        map.set(num, i);
    }
    return [];
}
exports.getTwoSum = getTwoSum;
