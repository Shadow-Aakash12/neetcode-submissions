class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {

        let m = 1;

        for(let i=0;i<numbers.length-1;i++) {
            let sum = numbers[i] + numbers[m];

            if(sum === target) {
                return [i+1, m+1];
            }
            m++;
        }
        return [];
    }
}
