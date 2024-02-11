
/**
 * Linkedlist Data Structure
 * {
 *      value: 7,
 *      next:{
 *          value: 12,
 *          next:{
 *              value: 5,
 *              next:{
 *                  value: 2,
 *                  next: null
 *              }
 *          }
 *      }
 * }
 */

class Node {
    value;
    next;
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    head;
    size;
    constructor(){
       this.head = null;
       this.size = 0;
    }

    addNodeAtSpecificIndex(value, index){
        if(index > this.size+1|| index <= 0) {
            return 'Index Not Exist'
        }   
        if(index ===  1){
            this.addNodeStartOfList(value)
        } else if(index ===  this.size+1){
            this.addNode(value)
        } else {
        const node = new Node(value);
        let i = 1;
        let curr = this.head;
        let prev = this.curr;
        while(i != index){
            prev = curr;
            curr = curr.next;
            i++;
        }
            node.next = curr;
            prev.next = node;
            this.size++;
     }
    }

    addNodeStartOfList(value){
        const node = new Node(value);
        if(this.head === null) {
            this.head = node;
        } else {
            node.next = this.head;
            this.head = node;
        }
        this.size++;
    }

    addNode(value){
        const node = new Node(value);
        if(this.head === null) {
            this.head = node;
        } else {
            let curr = this.head;
            while(curr.next != null){
                curr = curr.next;
            };
            curr.next = node;   
        }
        this.size++;
    }

    getSize(){
        return this.size;
    }

    print(){
        if(this.head === null) return 'List is Empty!!'
    
        let curr = this.head;
        let arr = [];
        while(curr.next) {
            arr.push(curr.value)
            curr = curr.next;
        }
        arr.push(curr.value)
        return arr.join(", ");
    }


    removeHead(){
        if(!this.head) return 'List is Empty'
        let curr = this.head;
        this.head = curr.next;
        this.size--;
    }

    removeTail(){
        if(!this.head) return 'List is Empty'
        let curr = this.head;
        if(this.head.next === null){
            this.head = null;
        } else {
            while(curr.next.next){
                curr = curr.next;
            }
        }
        curr.next = null;
        this.size--;
    }

    removeFromIndex(index){
        if(!this.head) return 'List is Empty';
        if(index > this.size) return 'Index not exist';
        let i = 1;
        let curr = this.head;
        let prev = this.head
        while(i != index){
            prev = curr;
            curr = curr.next;
            i++;
        }
        prev.next = curr.next;
    }
}

const linkList = new LinkedList();

console.log({ linkList: linkList.print() })

linkList.addNode(7);
linkList.addNode(12);
console.log(linkList.getSize());
linkList.addNode(5);
linkList.addNode("Anshul");
linkList.addNodeStartOfList(10);
console.log(linkList.getSize());

linkList.addNodeAtSpecificIndex(9, 3)
linkList.addNodeAtSpecificIndex(19, 1)

console.log({ linkList: linkList.print() })
linkList.addNodeAtSpecificIndex(11, 8)
console.log({ linkList: linkList.print() })
linkList.removeHead()
linkList.removeHead()

console.log({ linkList: linkList.print() })

linkList.removeTail();

console.log({ linkList: linkList.print() })

linkList.removeFromIndex(5);
console.log({ linkList: linkList.print() })

linkList.removeFromIndex(3);
console.log({ linkList: linkList.print() })

linkList.removeFromIndex(3);
console.log({ linkList: linkList.print() })
