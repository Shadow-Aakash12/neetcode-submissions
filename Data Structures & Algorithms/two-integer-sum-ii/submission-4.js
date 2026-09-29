class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {

        let m = 1;
        let n = 0

        for(let i=0;i<numbers.length-1;i++) {
            let sum = numbers[n] + numbers[m];

            if(sum === target) {
                return [i+1, m+1];
            }
            m++;
            n++;
        }
        return [];
    }
}
