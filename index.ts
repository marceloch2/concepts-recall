import { TreeNode, BinaryTree } from './binary_tree'
// import { LinkedList, Node } from './linked_list'

// const list = new LinkedList()

// list.add(new Node(3))
// list.add(new Node(7))
// list.add(new Node(8))
// list.add(new Node(12))
// list.add(new Node(29))

// list.print()
// list.reverse()
// list.print()

const tree = new BinaryTree()
tree.add(new TreeNode(8))
tree.add(new TreeNode(3))
tree.add(new TreeNode(10))
tree.add(new TreeNode(1))
tree.add(new TreeNode(6))
tree.add(new TreeNode(14))
// tree.add(new TreeNode(13))
// tree.add(new TreeNode(7))
// tree.add(new TreeNode(4))
tree.print()
tree.inverse()
tree.print()
