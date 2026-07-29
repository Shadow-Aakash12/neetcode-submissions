class Solution {
    /**
     * @param {number[]} arr
     * @return {number[]}
     */
    replaceElements(arr) {

        let n = arr.length-1;

        let max = arr[arr.length-1];

        for(let i=n; i>=0;i--) {        // i = 3  , arr[3] = 3

            let currentEle = arr[i];
            arr[i] = max;                   // arr = [2,4,5,3,2,-1]
            max = Math.max(currentEle, max);    // MAX(3, 2) = 2

            // Last ele case check
            if(i === n) {
                arr[i] = -1;
            }

        }

        return arr;
    }
}
