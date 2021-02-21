const {LinkList, LinkedList} = require('../lib/LinkList');

const list = new LinkList();
list.append(4);
list.append(1);
list.append(5);
list.addToFront(10);
list.print();
list.removeEnd();
list.print();
list.insertAt(1,2);
list.insertAt(0,2);
list.print();

const list1 = new LinkedList();
list1.append('spot');
list1.append('dog');
list1.append('car');
list1.print();
console.log(list1.isEmpty());
console.log(list1.size());
list1.remove('spot');
console.log(list1.indexOf('car'));
list1.print();