const {LinkList} = require('../lib/LinkList');

const list = new LinkList();
list.addToBack(4);
list.addToBack(1);
list.addToBack(5);
list.addToFront(10);
list.print();
list.removeEnd();
list.print();
