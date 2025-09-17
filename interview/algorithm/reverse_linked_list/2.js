// 1<->2<->3->null 翻转
// head 3 
// 2 head 2.next 3 3.next = 2   head.next.next = head
// 1 head 1.next 2 2.next = 1 head.next.next = head
function reverseListRecursive(head) {
  // 递归结束条件
  if (!head || !head.next) {
    return head;
  }

  // 递归调用 交给下一个
  //  回溯？ 
   
  head.next.next = head; 
  head.next = null;
  return newHead;
}