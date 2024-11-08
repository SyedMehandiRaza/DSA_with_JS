class Node {
    constructor(value){
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLInkedList{
    constructor(value){
        const newNode = new Node(value);
        this.head = newNode;
        this.tail = newNode;
        this.length = 1;
    }

    push(value){
        const newNode = new Node(value);
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
        }else{
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    pop(){
        if(this.length === 0) return undefined;

        let temp = this.tail;
        if(this.length===1){
            this.head = null;
            this.tail = null;
        }else{
            this.tail = this.tail.prev;
            this.tail.next = null;
            temp.prev = null;
        }
        this.length--;
        return temp;
    }
    unshift(value){
        const newNode = new Node(value);

        if(this.length === 0){
            this.head = newNode;
            this.tail = newNode;
        }else{
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
        }
        this.length++;
        return this;
    }

    shift() {
        if(this.length === 0) return undefined;
        let temp = this.head.next;
        if(this.length === 1){
            this.head = null; 
            this.tail = null;
        }else{
            this.head = null;
            temp.prev = null;
            this.head = temp;
        }
        this.length--;
        return this;
    }
}

let myDoublyLL = new DoublyLInkedList(2);
myDoublyLL.push(1)
myDoublyLL.shift()
myDoublyLL.shift()
console.log(myDoublyLL);
