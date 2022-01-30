
// Place to run code and test DSA 

/**
 * Refer - https://www.geeksforgeeks.org/implementation-stack-javascript/
 * Stack is a very useful data structure and has a wide range of application. Stack is a linear data structure in which 
 * addition or removal of element follows a particular order i.e. LIFO(Last in First Out) AND FILO(First in Last Out).
 * 
 * Functions to be implemented
 * push(item)
 * pop()
 * peek()
 * isEmpty()
 * printStack()
 */

class Stack {
    items = [];
    constructor(array) {
        // push element into the items
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
let array = [];
const stack = new Stack(array);
stack.push(1);
stack.push(2);
stack.pop();

console.log({ array })

let array1 = [];
const stack1 = new Stack(array1);
stack1.push(1);
stack1.push(1);
stack1.push(1);
console.log(stack1.peek());
console.log({ array1 });



// creating object for stack class
var stacks = new Stack([]);

// testing isEmpty and pop on an empty stack

// returns false
console.log(stacks.isEmpty());

// returns Underflow
console.log(stacks.pop());



