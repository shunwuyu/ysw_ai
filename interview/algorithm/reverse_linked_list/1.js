function reverseList(head) {
  let prev = null;
  let curr = head;
  // 空 跳出 
  while(curr) {
    const next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }
  return prev;
}