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

/*
    Problem 160. 
*/
const getIntersectionNode = (headA, headB) => {

    const getLinkedListToArray = (n:any) => {
        let list:any = [];
        while (n) {
            list.push(n);
            n = n?.next;
        }

        list.reverse();
        return list;
    }

    let listA = getLinkedListToArray(headA);
    let listB = getLinkedListToArray(headB);

    while (listA && listB) {
        let [a1, a2, ...resta] = listA;
        let [b1, b2, ...restb] = listB;

        if (b2 !== a2) { return a1.val }

        listA = [a2, ...resta];
        listB = [b2, ...restb];
    }

    return null;
};