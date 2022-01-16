
class InsertionSort {

    sort(arr = []) {
        for (let i = 0; i < arr.length - 1; i++) {
            for (let j = i + 1; j > 0; j--) {
                if (arr[j] < arr[j - 1]) {
                    this.swap(arr, j, j - 1);
                } else {
                    break;
                }
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


let insertionSort = new InsertionSort();
insertionSort.sort(arr);
console.log(arr);