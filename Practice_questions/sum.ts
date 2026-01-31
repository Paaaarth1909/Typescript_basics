/* Given an array arr of valid finite numbers, return the sum of all elements.

Examples:

Input: arr = [1, 2, 3]
Output: 6

Input: arr = [5]
Output: 5

Input: arr = []
Output: 0

Input: arr = [-1, 5, -4]
Output: 0
*/
function sumArray(arr: any[]): number | false {
    if (!Array.isArray(arr)) return false;

    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] !== "number" || !Number.isFinite(arr[i])) {
            return false;
        }
    }

    function helper(i: number): number {
        if (i === arr.length) return 0;
        return arr[i] + helper(i + 1);
    }

    return helper(0);
}

export { sumArray };
