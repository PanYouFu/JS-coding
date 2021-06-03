// 二叉树实现
function Node(data, left, right) {
  this.data = data;this.left = left;this.right = right;this.show = show;
}
function show() {
  return this.data;
}
function BST() {
  this.root = null;this.insert = insert;
}
function insert(data) {
  var n = new Node(data, null, null);
  if (this.root == null) {
    this.root = n;
  }
  else {
    var current = this.root;
    var parent;
    while (true) {
      parent = current;
      if (data < current.data) {
        current = current.left;
        if (current == null) {
          parent.left = n;
          break;
        }
      }
      else {
        current = current.right;
        if (current == null) {
          parent.right = n;
          break;
        }
      }
    }
  }
}
var bst = new BST();
var nums = [10, 3, 18, 2, 4, 13, 21, 9, 8, 9];
for(var i = 0; i < nums.length; i++) {
    bst.insert(nums[i]);
}

console.log(bst)

// 层序遍历
var levelOrder = function(root) {
	if(!root){
		return;
	}
	var checkArr = [root];
	while (checkArr.length > 0) {
		var newCheckArr = [];
		for (var i = 0; i < checkArr.length; i++) {
			var item = checkArr[i];
			console.log(item.root.data);
			item.root.left && newCheckArr.push(item.root.left);	
			item.root.right && newCheckArr.push(item.root.right);	
		}
		checkArr = newCheckArr;
	}
};
levelOrder(bst);//1 2 3 4 5 6 7

// 先序遍历

// 中序遍历

// 根序遍历
