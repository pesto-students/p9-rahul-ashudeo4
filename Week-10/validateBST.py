# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def isValidBST(self, root: Optional[TreeNode]) -> bool:
        if not root:
            return False
        return solve(root,float("-inf"),float("inf"))
    
def solve(node,less,more):
    if node is None:
        return True
    if node.val <= less or node.val>= more:
        return False
    left = solve(node.left,less,node.val)
    right = solve(node.right,node.val,more)
    return left and right
    return False

"""
Time Complexity - O(n)
Space Complexity - O(h)
Link - https://leetcode.com/problems/validate-binary-search-tree/description/
"""