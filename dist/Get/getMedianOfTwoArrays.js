"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMedianOfTwoArrays = void 0;
// https://leetcode.com/problems/median-of-two-sorted-arrays/
/**
 * Returns the median of two arrays including numbers
 */
function getMedianOfTwoArrays(nums1, nums2) {
    const mergedArray = [...nums1, ...nums2];
    mergedArray.sort((a, b) => a - b);
    const middleValue = Math.floor(mergedArray.length / 2);
    if (mergedArray.length % 2) {
        return mergedArray[middleValue];
    }
    return (mergedArray[middleValue - 1] + mergedArray[middleValue]) / 2;
}
exports.getMedianOfTwoArrays = getMedianOfTwoArrays;
