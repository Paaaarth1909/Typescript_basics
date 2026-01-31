/* Given an array arr of numbers, return the largest number in the array.
If the array is empty, return null.

Examples:

Input: arr = [3, 1, 2]
Output: 3

Input: arr = [-5, 2, -3, 4]
Output: 4

Input: arr = [0, 2, 3]
Output: 3

Input: arr = []
Output: null */

function findLargest(arr: any[]): number | null | false {
    if (!Array.isArray(arr)) return false;
    if (arr.length === 0) return null;

    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] !== "number" || !Number.isFinite(arr[i])) {
            return false;
        }
    }

    let max = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }

    return max;
}

export { findLargest };

