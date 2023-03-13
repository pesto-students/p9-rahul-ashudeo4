# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def reverseList(self, head: Optional[ListNode]) -> Optional[ListNode]:
        prev = None
        ptr=head
        
        while ptr is not None:
            temp=ptr.next
            ptr.next=prev
            prev=ptr
            ptr = temp
        
        return prev

"""
Time Complexity - O(n)
Space Complexity - O(1)
Link - https://leetcode.com/problems/reverse-linked-list/
"""