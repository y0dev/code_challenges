class TreeNode {
    constructor(value,leftNode = null,rightNode = null) {
        this.value = value;
        this.leftNode = leftNode;
        this.rightNode = rightNode;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
        this.levels = 1;
        this.nodes = 0;
    }

    insert(value) {
        if(this.root === null)
            this.root = new TreeNode(value);
        else {
            let node = this.root;
            let newNode = new TreeNode(value);
            this.#searchTree(node,newNode);
        }
    }

    searchFor(value) {
        if(this.root == null)
            return;
        else {
            let node = this.root;
            if(value < node.value) {
                if(node.leftNode !== null) {
                    return this.searchFor(node.leftNode.value);
                }
            } else if(value > node.value) {
                if(node.rightNode !== null) {
                    return this.searchFor(node.rightNode.value);
                }
            } else {
                return node;
            }
        }
    }

    #searchTree = function(node,newNode) {
        console.log(`${node.value} : ${newNode.value}`);
        // determine if node is for left node
        if(node.value > newNode.value) {
            console.log(`Left: ${newNode.value}`);
            // Check if left leaf is null
            if (node.leftNode === null) {
                node.leftNode = newNode;
            } else {
                return this.#searchTree(node.leftNode,newNode);
            }
        } else {
            console.log(`Right: ${newNode.value}`);
            // Check if right leaf is null
            if (node.rightNode === null) {
                node.rightNode = newNode;
            } else {
                return this.#searchTree(node.rightNode,newNode);
            }
        }
    };
}

module.exports = {
    TreeNode,
    BinarySearchTree
}