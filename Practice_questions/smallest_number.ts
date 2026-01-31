/* Given an array arr of numbers, return the smallest number in the array. If the array is empty, return null.

Examples:

Input: arr = [3, 1, 2]
Output: 1

Input: arr = [-5, 2, -3, 4]
Output: -5

Input: arr = [0, 2, 3]
Output: 0

Input: arr = []
Output: null 
*/
function findSmallest(arr: any[]): number | null | false {
    if (!Array.isArray(arr)) return false;
    if (arr.length === 0) return null;

    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] !== "number" || !Number.isFinite(arr[i])) {
            return false;
        }
    }

    let smallest = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < smallest) {
            smallest = arr[i];
        }
    }

    return smallest;
}

export { findSmallest };
