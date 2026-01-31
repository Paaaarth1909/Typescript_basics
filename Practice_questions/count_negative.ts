/* Given an array arr of numbers, return the count of elements strictly less than 0.

Examples:

Input: arr = [-1, 0, 1]
Output: 1

Input: arr = [-2, -5, -7]
Output: 3

Input: arr = [0, 2, 3]
Output: 0

Input: arr = []
Output: 0
*/
function countNegatives(arr: any[]): number | false {
    if (!Array.isArray(arr)) return false;

    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] !== "number" || !Number.isFinite(arr[i])) {
            return false;
        }
    }

    let count = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            count++;
        }
    }

    return count;
}

export { countNegatives };
