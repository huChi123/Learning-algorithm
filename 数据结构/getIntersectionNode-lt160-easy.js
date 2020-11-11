// 编写一个程序，找到两个单链表相交的起始节点。
// 如下面的两个链表：
//
// 在节点 c1 开始相交。
//
// 示例 1：
//
// 输入：intersectVal = 8, listA = [4,1,8,4,5], listB = [5,0,1,8,4,5], skipA = 2, skipB = 3
// 输出：Reference of the node with value = 8
//     输入解释：相交节点的值为 8 （注意，如果两个链表相交则不能为 0）。从各自的表头开始算起，链表 A 为 [4,1,8,4,5]，链表 B 为 [5,0,1,8,4,5]。在 A 中，相交节点前有 2 个节点；在 B 中，相交节点前有 3 个节点。
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
// 哈希表解法
var getIntersectionNode = function(headA, headB) {
    let set = new Set();
    let currA = headA, currB = headB;
    while (currA) {
        set.add(currA);
        currA = currA.next;
    }
    while (currB) {
        if (set.has(currB)) {
            return currB;
        }
        currB = currB.next;
    }
    return null;
};

var getIntersectionNode2 = function(headA, headB) {
    let pA = headA, pB = headB;
    while (pA !== pB) {
        pA = pA === null ? headB : headA.next;
        pB = pB === null ? headA : headB.next;
    }
    return pA;
};

