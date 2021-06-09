class TreeNode {
  value: number
  left: TreeNode | null
  right: TreeNode | null

  constructor(value: number) {
    this.value = value
    this.left = null
    this.right = null
  }
}

class BinaryTree {
  private root: TreeNode | null

  constructor() {
    this.root = null
  }

  add(node: TreeNode) {
    if (!this.root) {
      this.root = node
    } else {
      this.insertNode(this.root, node)
    }
  }

  private insertNode(current: TreeNode, node: TreeNode) {
    if (node.value < current.value) {
      if (!current.left) {
        current.left = node
      } else {
        this.insertNode(current.left, node)
      }
    } else {
      if (!current.right) {
        current.right = node
      } else {
        this.insertNode(current.right, node)
      }
    }
  }

  print() {
    console.log('====================================')
    console.log(this.root)
    console.log('====================================')
  }

  inverse() {
    // if (this.root) {
    this.inverseTree(this.root!)
    // }
  }

  private inverseTree(current: TreeNode) {
    if (current) {
      const left = current.left
      const right = current.right
      current.left = right
      current.right = left
      if (current.left) {
        this.inverseTree(current!.left)
      }
      if (current.right) {
        this.inverseTree(current!.right)
      }
    }
  }
}

export { TreeNode, BinaryTree }
