// Selection Sort

class SelectionSort {

    sort(arr) {
        for (let i = 0; i < arr.length; i++) {
            // find the max item in the remaining array and swap with correct index
            let last = arr.length - i - 1;
            let maxIndex = this.getMaxIndex(arr, 0, last);
            this.swap(arr, maxIndex, last)
        }
        return arr;
    }

    swap(arr, first, second) {
        let temp = arr[first];
        arr[first] = arr[second];
        arr[second] = temp;
    }

    getMaxIndex(arr, start, end) {
        let max = start;
        for (let i = start; i <= end; i++) {
            if (arr[max] < arr[i]) {
                max = i;
            }
        }
        return max;
    }
}

let arr = [6, 5, 4, 3, 2, 1];
arr = [0,34, 1]

let selectionSort = new SelectionSort();
selectionSort.sort(arr);
console.log(arr);