
class BinarySearch {

    // return the index
    // return -1 if it does not exist
    binarySearch(arr = [], target) {
        let start = 0;
        let end = arr.length - 1;

        // check whether array is sorted or not asc or desc

        let isAsc = arr[start] < arr[end];

        while (start <= end) {
            // find the middle element
            // we can also use `(start+end)/2` but it can have issue in case of long array as length in integer
            let mid = start + (end - start) / 2;
            mid = Math.trunc(mid);

            if (arr[mid] == target) {
                return mid;
            }

            if (isAsc) {
                if (target < arr[mid]) {
                    end = mid - 1;
                } else {
                    start = mid + 1;
                }
            } else {
                if (target > arr[mid]) {
                    end = mid - 1;
                } else {
                    start = mid + 1;
                }
            }
        }
        return -1;
    }

    binarySearchRecursive(arr = [], start, end, target) {

        if (end >= start) { // end index can never be equal to start
            let mid = start + (end - start) / 2;
            mid = Math.trunc(mid);

            if (arr[mid] == target) {
                return mid;
            }

            // check whether array is sorted or not asc or desc
            let isAsc = arr[start] < arr[end]; // array might be sorted but in reverse order so it's better to check

            if (isAsc) {
                if (target < arr[mid]) {
                    return this.binarySearchRecursive(arr, start, mid - 1, target);
                } 
                 return this.binarySearchRecursive(arr, mid + 1, end, target);
            } else {
                if (target > arr[mid]) {
                    return this.binarySearchRecursive(arr, start, mid - 1, target);
                }
                return this.binarySearchRecursive(arr, mid + 1, end, target);
            }
        }
        return -1;
    }
}


let search = new BinarySearch();

let arr = [1, 2, 3, 4, 5];
// arr = [5, 4, 3, 2, 1]; 

let target = 1;
let indexIterative = search.binarySearch(arr, target);
let indexRecursive = search.binarySearchRecursive(arr, 0, arr.length - 1, target);

console.log({indexIterative, indexRecursive});

// Time Complexity -
// The time complexity of the binary search algorithm is O(log n). 
// The best-case time complexity is O(1) when the center index value is same as search value

// Space Complexity - 
// There are two ways to implement it

// 1. Iterative method
// 2. Recursive method

// Iterative method, the space complexity is O(1). 
// Recursive method, the space complexity is O(log n). 