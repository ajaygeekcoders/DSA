class Node {
    value;
    next;
    prev;
    constructor(value){
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

class DoubleLinkedList {
    head;
    size;
    constructor(){
        this.head = null;
        this.size = 0;
    }

    addItem(value){
        const node = new Node(value);
        if(!this.head){
            this.head = node;
            return;
        }
        let curr = this.head;
        while(curr.next){
            curr = curr.next;
        }
        node.prev = curr
        curr.next = node;
        this.size++;
    }

    addItemAtStart(value){
        const node = new Node(value);
        if(!this.head){
            this.head = node;
            return;
        }
        this.head.prev = node;
        node.next = this.head;
        this.head = node;
        this.size++;
    }

    addItemAtIndex(index, value){
        if(index < 0 && index > this.size) return 'Invalid!!';
        if(index === 0){
            this.addItemAtStart(value);
            return;
        }
        const node = new Node(value);
        let curr = this.head;
        let prev = this.head
        while(index != 0){
            prev = curr;
            curr = curr.next;
            index--;
        }
        node.prev = prev;
        node.next = curr;
        prev.next = node;
        curr.prev = node;
        this.size++;
    }

    removeFromStart(){
        if(!this.head) return 'Empty';
        this.head = this.head.next;
        this.head.prev = null;
        this.size--;
    }

    removeFromEnd(){
        if(!this.head) return 'Empty';
        let curr = this.head;
        while(curr.next.next){
            curr = curr.next;
        }
        curr.next = null;
        this.size--;
    }

    removeAtIndex(index){
        if(index < 0 || index > this.size) return 'Invalid'
        if(index === 0) {
            this.removeFromStart();
            return;
        }
        let curr = this.head;
        let prev = this.head;
        while(curr.next.next){
            prev = curr;
            curr = curr.next;
        }
        prev.next = curr.next;
        curr.next.prev = prev
        this.size--;
    }

    print(){
        let arr = []
        let curr = this.head;
        while(curr){
            arr.push(curr.value);
            curr = curr.next;
        }
        console.log({ arr });
        return arr;
    }
    
}

const doubleLinkedList = new DoubleLinkedList();
doubleLinkedList.addItem(10);
doubleLinkedList.addItem(11);
doubleLinkedList.addItem(12);
doubleLinkedList.print();
doubleLinkedList.addItemAtStart(13);
doubleLinkedList.addItemAtStart(199);

doubleLinkedList.print();
doubleLinkedList.addItemAtIndex(2, 5);
doubleLinkedList.print();
doubleLinkedList.addItemAtIndex(5, 55);
doubleLinkedList.print();

doubleLinkedList.removeFromStart()
doubleLinkedList.print();

doubleLinkedList.removeFromEnd()
doubleLinkedList.print();

doubleLinkedList.removeAtIndex(3)
doubleLinkedList.print();
