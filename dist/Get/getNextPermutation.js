"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getNextPermutation = void 0;
// @ts-nocheck
// https://leetcode.com/problems/next-permutation/
/**
* Returns the next permutation of the given array
*/
function getNextPermutation(nums) {
    const length = nums.length;
    let i = length - 2;
    while (i >= 0 && nums[i] >= nums[i + 1]) {
        i--;
    }
    if (i >= 0) {
        let j = length - 1;
        while (j >= 0 && nums[j] <= nums[i]) {
            j--;
        }
        swap(nums, i, j);
    }
    reverse(nums, i + 1);
    return nums;
}
exports.getNextPermutation = getNextPermutation;
function swap(nums, i, j) {
    const temp = nums[i];
    nums[i] = nums[j];
    nums[j] = temp;
}
function reverse(nums, start) {
    let i = start;
    let j = nums.length - 1;
    while (i < j) {
        swap(nums, i, j);
        i++;
        j--;
    }
}
