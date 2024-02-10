
Note: It work only if sum indices are near to each other, look other approach
/**
https://leetcode.com/problems/two-sum/description/
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.


Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
Example 2:

Input: nums = [3,2,4], target = 6
Output: [1,2]
Example 3:

Input: nums = [3,3], target = 6
Output: [0,1]
 */


// Sliding Window
function findMaxSubArraySum(arr, k, target){
    let cSum = 0; let cIndex = [];

    for(let i = 0; i < k; i++){
        cSum += arr[i];
        cIndex.push(i); // [0,1]
    }

    if(cSum === target) return cIndex;
   
    for(let i = k; i < arr.length; i++){
        cSum = cSum + arr[i] - arr[i-k];
        cIndex.push(i);
        cIndex.shift();
        if(cSum === target) return cIndex;
    }

    return cIndex; 
}

console.log(findMaxSubArraySum([2,7,11,15], 2, 9));
console.log(findMaxSubArraySum([3,2,4], 2, 6));
console.log(findMaxSubArraySum([3,3], 2), 6);



// Brute Way Force
// Time Complexity - O(n2)
function findMaxSubArraySumBruteForce(arr, k, target){
    let cSum = 0; let cIndex = []

    for(let i  = 0; i <= arr.length - k; i++){
        cSum = 0;
        cIndex = [];
        for(let j = i; j < i + k; j++){ 
            cSum += arr[j];
         
            cIndex.push(j);
        }
       if(cSum === target) return cIndex; 
    }
    return cIndex;
}

console.log(findMaxSubArraySumBruteForce([2,7,11,15], 2, 9));
console.log(findMaxSubArraySumBruteForce([3,2,4], 2, 6));
console.log(findMaxSubArraySumBruteForce([3,3], 2, 6));
