class Solution:
    def isValid(self, s: str) -> bool:
        if len(s) == 0:
            return True
        
        map = {
            "(":")",
            "{":"}",
            "[":"]"
        }
        
        stack = []
        
        for val in s:
            if val == "(" or val == "{" or val == "[":
                stack.append(val)
            else:
                if len(stack) and val == map[stack[len(stack)-1]]:
                    stack.pop()
                else:
                    return False
        return True if len(stack) == 0 else False
        

"""
Time Complexity - O(n)
Space Complexity - O(1)
Link - https://leetcode.com/problems/valid-parentheses/
"""