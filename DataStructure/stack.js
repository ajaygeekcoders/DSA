/**
 * Refer - https://www.geeksforgeeks.org/implementation-stack-javascript/
 * Refer - https://www.geeksforgeeks.org/stack-data-structure/
 *  Stack is a very useful data structure and has a wide range of application. Stack is a linear data structure in which 
 *  addition or removal of element follows a particular order i.e. LIFO(Last in First Out) AND FILO(First in Last Out).
 * LIFO / FILO
 * 
 * Functions to be implemented
 * push(item) - Add item to array
 * pop() - Remove item from array
 * peek() - Return last or top most element from array
 * isEmpty() - Helper Methods
 * printStack() - Helper Methods
 */

// Stack Class
class Stack {
    items = [];    // Array is used to implement stack

    constructor(array) {
        this.items = array;
    }

    // push function
    push(element) {
        // push element into the items
        this.items.push(element);
    }

    // pop function
    pop() {
        // return top most element in the stack
        // and removes it from the stack
        // Underflow if stack is empty
        if (this.items.length == 0)
            return "Underflow";
        return this.items.pop();
    }

    // peek function
    peek() {
        // return the top most element from the stack
        // but does'nt delete it.
        return this.items[this.items.length - 1];
    }

    // isEmpty function
    isEmpty() {
        // return true if stack is empty
        return this.items.length == 0;
    }

    // printStack function
    printStack() {
        var str = "";
        for (var i = 0; i < this.items.length; i++)
            str += this.items[i] + " ";
        return str;
    }

}

// Example
let array = [];
const stack = new Stack(array);
stack.push(1);
stack.push(2);
stack.pop();

console.log({ array })

// Example
let array1 = [];
const stack1 = new Stack(array1);
stack1.push(1);
stack1.push(1);
stack1.push(1);
console.log(stack1.peek());
console.log({ array1 });


// Example
// creating object for stack class
const stacks = new Stack([]);

// testing isEmpty and pop on an empty stack
// returns false
console.log(stacks.isEmpty());
// returns Underflow
console.log(stacks.pop());



