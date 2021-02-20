class LinkNode {
    constructor(value,next = null) {
        this.value = value;
        this.next = next;
    }
}

class LinkList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    append = function(value) {
        if(this.head === null)
            this.head = new LinkNode(value,this.head);
        else {
            let current = this.head;
            while(current.next !== null) {
                current = current.next;
            }
            current.next = new LinkNode(value);
        }
        this.size++;
    }

    addToFront = function(value) {
        this.insertAt(0,value);
    }

    insertAt = function(pos,value) {
        // Bound checking
        if(pos === 0) {
            this.head = new LinkNode(value,this.head);
            this.size++;
            return;
        }
            
        if(pos > 0 && pos < this.size) {
            let previous;
            let current = this.head;
            let index = 0;
            while(pos > index++) {
                previous = current;
                current = current.next;
            }
            previous.next = new LinkNode(value,current);
            this.size++;
        }
    }

    removeEnd = function(){
        if(this.head === null)
            return;
        else {
            let previous = null;
            let current = this.head;
            while(current.next !== null) {
                previous = current;
                current = current.next;
            }
            previous.next = current.next
        }
        this.size--;
    }

    toString() {
        if(this.head === null)
            return;
        else {
            let current = this.head;
            let string = '[';
            while(current !== null){
                string += `${current.value}` + (current.next ? ', ':'');
                current = current.next;
            }
            string += ']'
            return string;
        }
    }

    isEmpty(){
        return this.size === 0;
    }

    print = function() {
        console.log(this.toString());
    }


}

module.exports = {
    LinkNode,
    LinkList
}