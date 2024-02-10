


// Find max sum of sub array size k
// input arr= [2, 4, 6, 3, -2, 3], k = 3
/**
 * 2,4,6 = 12
 * 4,6,3 = 13
 * 6,3,-2 = 7
 * 3,-2,3 = 4
 */



const numArray = [2, 4, 6, 3, -2, 3];

// Sliding Window Way 
// Time Complexity - O(n)
function findMaxSubArraySum(arr, k){
    let cSum = 0; let mSum = -Infinity;

    for(let i = 0; i < k; i++){
        cSum += arr[i];
    }
    mSum = Math.max(mSum, cSum);

    for(let i = k; i < arr.length; i++){
        cSum = cSum + arr[i] - arr[i-k]; // 12 + 3 - 2
        mSum = Math.max(mSum, cSum);
    }

    return mSum;
}

console.log(findMaxSubArraySum(numArray, 4));


// Brute Way Force
// Time Complexity - O(n2)
function findMaxSubArraySumBruteForce(arr, k){
    let cSum = 0; let mSum = -Infinity;

    for(let i  = 0; i < arr.length - k; i++){
        cSum = 0;
        for(let j = i; j < i + k; j++){ 
            cSum += arr[j];
        }
        mSum = Math.max(mSum, cSum);
    }
    return mSum;
}

console.log(findMaxSubArraySumBruteForce(numArray, 4));
