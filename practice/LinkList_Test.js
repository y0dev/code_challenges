const {LinkList} = require('../lib/LinkList');

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
