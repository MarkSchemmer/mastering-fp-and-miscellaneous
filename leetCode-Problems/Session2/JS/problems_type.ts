/**
 * - problem 136 -
 * @param {number[]} nums
 * @return {number}
 */
export const singleNumber = (nums: number[]) => {
    if (nums.length === 1) return nums[0];
    
    const repeatDictionary = nums.reduce((acc, cur) => {
        if (cur in acc) { acc[cur] = acc[cur] += 1; } else { acc[cur] = 0; }
        return acc;
    }, {});

    const [k, v] = Object.entries(repeatDictionary).filter(([key, val]) => val === 0)[0];

    return parseInt(k);
};

/**
 * Problem 169 - Majority number
* @param {number[]} nums
* @return {number}
*/
export const majorityElement = (nums) => {
   const pairs = nums.reduce((a, c) => c in a ? (a[c]+=1,a) : (a[c] = 0,a), {});
   const [k, v] = (Object.entries(pairs).sort((a:any, b:any) => b[1] - a[1]))[0];
   return parseInt(k);
}
