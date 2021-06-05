import { LinkedList, Node } from './linked_list'

const list = new LinkedList()
const node = new Node(3)
const node2 = new Node(7)
const node3 = new Node(29)

list.add(node)
list.add(node2)
list.add(node3)

list.print()
list.reverse()
list.print()
list.print()
list.reverse()
list.print()
