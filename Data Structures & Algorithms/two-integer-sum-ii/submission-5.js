class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {

        let m = 0;

        for(let i=1;i<numbers.length;i++) {
            let sum = numbers[m] + numbers[i];

            if(sum === target) {
                return [m+1, i+1];
            }
        }
        return [];
    }
}
