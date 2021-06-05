class Node {
  value: number
  next: Node | null

  constructor(v: number) {
    this.value = v
    this.next = null
  }
}

class LinkedList {
  root: Node | null = null

  clear() {
    this.root = null
  }

  print() {
    let printContent = ''
    let aux = this.root
    while (aux) {
      printContent += `${aux!.value}${aux!.next ? ' -> ' : ''}`
      aux = aux!.next
    }

    console.log('====================================')
    console.log(printContent)
    console.log('====================================')
  }

  add(node: Node) {
    if (!this.root) {
      this.root = node
    } else {
      let aux = this.root

      while (aux.next) {
        aux = aux.next
      }
      aux.next = node
    }
  }

  reverse() {
    if (!this.root!.next) {
      return
    }

    let node = this.root
    let previous = null
    let tmp = null

    while (node) {
      tmp = node.next
      node.next = previous
      previous = node
      node = tmp
    }

    this.root = previous
  }
}

export { Node, LinkedList }
