// function TreeNode(val) {
//   const root = val
//   const descendents = []
// }

// const abe = new TreeNode('Abe')
// const homer = new TreeNode('Homer')
// const bart = new TreeNode('Bart')
// const lisa = new TreeNode('Lisa')
// const maggie = new TreeNode('Maggie')

// console.log('abeDescendents', abe)

// We have covered much ground for trees. Let’s sum it up with bullets:

// The tree is a data structure where a node has 0 or more descendants/children.
// Tree nodes don’t have cycles (acyclic). If it has cycles, it is a Graph data structure instead.
// Trees with two children or less are called: Binary Tree
// When a Binary Tree is sorted in a way that the left value is less than the parent and the right children is higher,
// then and only then we have a Binary Search Tree.
// You can visit a tree in a pre/post/in-order fashion.
// An unbalanced has a time complexity of O(n). 🤦🏻‍
// A balanced has a time complexity of O(log n). 🎉

class TreeNode {
  constructor(value) {
    this.value = value
    this.descendents = []
  }
}

const abe = new TreeNode('Abe')
const homer = new TreeNode('Homer')
const bart = new TreeNode('Bart')
const lisa = new TreeNode('Lisa')
const maggie = new TreeNode('Maggie')

// associate root with is descendents
abe.descendents.push(homer)
homer.descendents.push(bart, lisa, maggie)
console.log('abe', abe.descendents[0])
