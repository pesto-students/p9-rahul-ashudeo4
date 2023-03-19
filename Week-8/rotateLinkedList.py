# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def rotateRight(self, head: Optional[ListNode], k: int) -> Optional[ListNode]:
        if not head:
            return head
        
        length = 1
        lenNode=head
        while lenNode.next:
            lenNode=lenNode.next
            length+=1
        
        k = k%length
        
        lenNode.next = head
        tempNode = head
        for _ in range(length-k-1):
            tempNode=tempNode.next
            
        answer = tempNode.next
        tempNode.next = None
        
        return answer
        
"""
Time Complexity - O(n)
Space Complexity - O(1)
Link - https://leetcode.com/problems/rotate-list/
"""