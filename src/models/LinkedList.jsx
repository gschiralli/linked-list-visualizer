export class LinkedList {
  constructor(head = null) {
    this.head = head;
    this.size = 0;
  }

  add(value, color) {
    let node = new ListNode(value, color);
    let current;
    if (this.head == null) {
      this.head = node;
    } else {
      current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
    this.size++;
  }

  insertAt(value, color, index) {
    if (index < 0 || index > this.size) {
      throw new Error("Please enter a valid index");
    } else {
      let node = new ListNode(value, color);
      let current, prev;
      current = this.head;
      if (index === 0) {
        node.next = this.head;
        this.head = node;
      } else {
        let i = 0;
        while (i < index) {
          i++;
          prev = current;
          current = current.next;
        }
        node.next = current;
        prev.next = node;
      }
      this.size++;
    }
  }
  removeFrom(index) {
    if (index < 0 || index >= this.size)
      throw new Error("Please Enter a valid index");
    else {
      let curr,
        prev,
        it = 0;
      curr = this.head;
      prev = curr;

      // deleting first element
      if (index === 0) {
        this.head = curr.next;
      } else {
        // iterate over the list to the
        // position to removce an element
        while (it < index) {
          it++;
          prev = curr;
          curr = curr.next;
        }

        // remove the element
        prev.next = curr.next;
      }
      this.size--;

      // return the remove element
      return curr.element;
    }
  }
  reverse() {
    if (this.size === 0) return;

    let prev = null;
    let current = this.head;
    let next = null;
    while (current != null) {
      next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }
    this.head = prev;
    return this;
  }
}
class ListNode {
  constructor(value, color) {
    this.value = value;
    this.color = color;
    this.next = null;
  }
}
