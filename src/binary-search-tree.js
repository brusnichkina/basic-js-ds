const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {

constructor () {
    this.rootie = null;
}


  root() {
       return this.rootie;
  }


  
  add(data) {
    if (this.rootie === null) {
      this.rootie = new Node(data);
      return;
    }
    else {
      function search (node) {
        if (data < node.data) {
          if (node.left === null) {
            node.left = new Node(data);
            return;
          }
          else {
            return search(node.left);
          };
        }

        else if (data > node.data) {
          if (node.right === null) {
            node.right = new Node(data);
            return;
          }
          else {
            return search(node.right);
          };
        }

        else if (data === node.data) {
          return null;
        };
      };

      return search(this.rootie);
    };
    }


  has(data) {
    function hasData(node, data) {
      if (node === null) {
        return false;
      }
      else if (data === node.data) {
        return true;
      }
      else if (data < node.data) {
        return hasData(node.left, data);
      }
      else if (data > node.data) {
        return hasData(node.right, data);
      };
    };
    return hasData(this.rootie, data);
}

  find(data) {
    function findData(node, data) {
      if (node === null) {
        return null;
      }
      else if (data === node.data) {
        return node;
      }
      else if (data < node.data) {
        return findData(node.left, data);
      }
      else if (data > node.data) {
        return findData(node.right, data);
      };
    };
    return findData(this.rootie, data);
  }

  remove(data) {
    function removeData (node, data) {
      if (node === null) {
        return null;
      };
      if (data < node.data) {
        node.left = removeData(node.left, data);
        return node;
      }
      else if (data > node.data) {
        node.right = removeData(node.right, data);
        return node;
      }
      else if (data === node.data) {
        if (node.left === null && node.right === null) {
          return null;
        }
        else if (node.left === null) {
          return node.right;
        }
        else if (node.right === null) {
          return node.left;
        };

      let switchNode = node.right;
        while (switchNode.left !== null) {
          switchNode = switchNode.left;
        }
        node.data = switchNode.data;
        node.right = removeData(node.right, switchNode.data);
        return node;
      } 
    };
    this.rootie = removeData(this.rootie, data);
  }

  min() {
    let thisMin = this.rootie;
    while (thisMin.left !== null) {
      thisMin = thisMin.left;
    }
    return thisMin.data;
  }

  max() {
    let thisMax = this.rootie;
    while (thisMax.right !== null) {
      thisMax = thisMax.right;
    }
    return thisMax.data;
  }
}

module.exports = {
  BinarySearchTree
};