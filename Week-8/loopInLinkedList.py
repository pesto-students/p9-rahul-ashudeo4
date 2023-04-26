# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, x):
#         self.val = x
#         self.next = None

class Solution:
    def hasCycle(self, head: Optional[ListNode]) -> bool:
        slow =head
        fast = head
        
        while slow and fast and fast.next:
            slow= slow.next
            fast=fast.next.next
            if slow == fast:
                return True
        return False
"""
Time Complexity - O(n)
Space Complexity - O(1)
Link - https://leetcode.com/problems/linked-list-cycle/
"""