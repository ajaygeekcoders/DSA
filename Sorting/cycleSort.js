
class CycleSort {

    sort(arr = []) {
        let i = 0;
        while(i < arr.length){
            let correct = arr[i] - 1;
            if(arr[i] != arr[correct]){
                this.swap(arr, i, correct);
            } else {
                i++;
            }
        }
    }

    swap(arr, first, second) {
        let temp = arr[first];
        arr[first] = arr[second];
        arr[second] = temp;
    }
}

let arr = [6, 5, 4, 3, 2, 1]; // work for 1 - N number, when it's mention
// lot of question related to it come in FANG, for finding duplicate and missing number
// For that you need to change the code if any element does not have their index in array like 
// [4, 0, 1, 2] = in this case 4 need to be handle as we do not have index 4
// [1, 2, 3, 2, 0] = in this case duplicate need to handle

let cycleSort = new CycleSort();
cycleSort.sort(arr);
console.log(arr);


// Cyclic Sort Question Coming Like - LeetCode
//  Find missing number in array or find all missing number in array
// Given array nums of n integers where nums[i] is in the range [1, n], 
// return an array of all the integers in the range [1, n] that do not appear in nums