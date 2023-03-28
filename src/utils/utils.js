export default function listToArray(list) {
  const arr = [];
  let node = list.head;
  while (node) {
    arr.push(node);
    node = node.next;
  }
  return arr;
}

export function validateInput(index, length, option) {
  if (length === 0 && parseInt(index) === 0 && option === "Insert") {
    return null;
  }

  if (
    isNaN(index) ||
    parseInt(index) >= length ||
    parseInt(index) < 0 ||
    index === ""
  ) {
    return `(0 - ${length})`;
  }
  return null;
}
