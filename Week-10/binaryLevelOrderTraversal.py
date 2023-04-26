# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def levelOrder(self, root: Optional[TreeNode]) -> List[List[int]]:
        if not root:
            return []
        queue = [root]
        result= []
        while len(queue):
            temp =[]
            for idx in range(len(queue)):
                node=queue.pop(0)
                temp.append(node.val)

                if node.left:
                    queue.append(node.left)
                if node.right:
                    queue.append(node.right)
            result.append(temp)
        return result

"""
Time Complexity - O(n)
Space Complexity - O(n)
Link - https://leetcode.com/problems/binary-tree-level-order-traversal/description/
"""