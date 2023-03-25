export default function listToArray(list) {
  const arr = [];
  let node = list.head;
  while (node) {
    arr.push(node);
    node = node.next;
  }
  return arr;
}
