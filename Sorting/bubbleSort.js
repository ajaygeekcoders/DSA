// Bubble Sort

let arr = [6, 5, 4, 3, 2, 1];

for(let i = 0; i < arr.length; i++){
    let swap  = false;
    for(let j = 1; j < arr.length - i; j++){
        if(arr[j] < arr[j-1]){
            let temp = arr[j];
            arr[j] = arr[j-1];
            arr[j-1] = temp;
            swap = true
        }
    }
    if(!swap){ // break the loop if no swap is happening, As array is sorted or become sorted
        break;
    }
}

console.log(arr);



// Space Complexity = O(1), As no other space required to sort the array;


// Time Complexity 
// Best Case  - O(N), When array is sorted - [1, 2, 3, 4, 5];
// Worst Case - O(N to the power 2 ) or O(N square),  When array is sorted in reverse order [5, 4, 3, 2, 1]