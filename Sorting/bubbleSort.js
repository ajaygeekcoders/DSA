// Bubble Sort
class BubbleSort {

    sort() {
        for (let i = 0; i < arr.length; i++) {
            let swapped = false;
            for (let j = 1; j < arr.length - i; j++) {
                if (arr[j] < arr[j - 1]) {
                    this.swap(arr, j, j - 1)
                    swapped = true
                }
            }
            if (!swapped) { // break the loop if no swap is happening, As array is sorted or become sorted
                break;
            }
        }
    }

    swap(arr, first, second) {
        let temp = arr[first];
        arr[first] = arr[second];
        arr[second] = temp;
    }
}

let arr = [6, 5, 4, 3, 2, 1];


let bubbleSort = new BubbleSort();
bubbleSort.sort(arr);
console.log(arr);



// Space Complexity = O(1), As no other space required to sort the array;


// Time Complexity 
// Best Case  - O(N), When array is sorted - [1, 2, 3, 4, 5];
// Worst Case - O(N to the power 2 ) or O(N square),  When array is sorted in reverse order [5, 4, 3, 2, 1]