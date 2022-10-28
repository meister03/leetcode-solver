"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mergeTwoArraysWithSorting = void 0;
// https://leetcode.com/problems/merge-two-sorted-lists/
/**
 * Returns the merged list of two sorted arrays
 */
function mergeTwoArraysWithSorting(l1, l2) {
    return [...l1, ...l2].sort((a, b) => a - b);
}
exports.mergeTwoArraysWithSorting = mergeTwoArraysWithSorting;
