"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mergeNdArrayWithSorting = void 0;
// https://leetcode.com/problems/merge-k-sorted-lists/
/**
 * Sorts an n-dimensional array
 */
function mergeNdArrayWithSorting(givenArray) {
    return givenArray.reduce((acc, curr) => [...acc, ...curr], []).sort((a, b) => a - b);
}
exports.mergeNdArrayWithSorting = mergeNdArrayWithSorting;
