class Node {
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

    addToBack = function(value) {
        if(this.head === null)
            this.head = new Node(value,this.head);
        else {
            let current = this.head;
            while(current.next !== null) {
                current = current.next;
            }
            current.next = new Node(value,null);
        }
        this.size++;
    }

    addToFront = function(value) {
        this.head = new Node(value,this.head);
        this.size++;
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
                string += `${current.value}`;
                current = current.next;
                if(current !== null)
                    string += ', ';
            }
            string += ']'
            return string;
        }
    }

    print = function() {
        console.log(this.toString());
    }


}

module.exports = {
    Node,
    LinkList
}