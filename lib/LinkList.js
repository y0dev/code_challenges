class LinkNode {
    constructor(value,next = null) {
        this.value = value;
        this.next = next;
    }
}

function LinkedList() {
    function ListNode(val,next) {
        this.val = (val===undefined ? 0 : val);
        this.next = (next===undefined ? null : next);
    }
    let length = 0;
    let head = null;
    this.append = function(value) {
        if(head === null)
            head = new ListNode(value);
        else {
            let current = head;
            while(current.next) {
                current = current.next;
            }
            current.next = new ListNode(value);
        }
        length++;
    }

    this.insert = function(position,value) {
        if(position > -1 && position < length) {
            let index = 0;
            let current = head;
            let previous;
            while(index++ < position) {
                previous = current;
                current = current.next;
            }
            previous.next = new ListNode(value,current);
            length++;
        }
    }

    this.removeAt = function(position) {
        if (position > 0 && position < length) {
            let index = 0;
            let current = head;
            let previous;
            while(index++ < position) {
                previous = current;
                current = current.next;
            }
            previous.next = current.next;
            length--;
        }
    }

    this.remove = function(value) {
        if(head === null)
            return false;
        else {
            let current = head;
            let previous = null;
            while(current) {
                if(current.val === value) {
                    if(previous === null)
                        head = current.next
                    else 
                        previous.next = current.next;
                    length--;
                    return true;
                }
                previous = current;
                current = current.next;
            }
        }
        return false;
    }

    this.indexOf = function(value) {
        if(head === null)
            return null;
        else {
            let index = 0;
            let current = head;
            while (current){
                if(current.val === value) {
                    return index;
                }
                current = current.next;
                index++;
            }
        }
        return null;
    }
    
    this.isEmpty = function() {
        return length < 1;
    }
    
    this.size = function() {
        return length;
    }

    this.toString = function() {
        let string = '';
        if(head === null)
            return string;
        else {
            let current = head;
            let index = 0;
            while(current) {
                string += `${index}: ${current.val}` + (current.next ? ', ' : '');
                current = current.next;
                index++;
            }
        }
        return string;
    }
    
    this.print = function() {
        console.log(this.toString());
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
    LinkList,
    LinkedList
}
