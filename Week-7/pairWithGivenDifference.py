class Solution:
    # @param A : list of integers
    # @param B : integer
    # @return an integer
    def solve(self, A, B):
        
        map = {}
        for val in A:
            if val in map:
                map[val]+=1
            else:
                map[val]=1
        if B == 0:
            return 0 if len(A)==len(map) else 1
        for val in A:
            if (val+B) in map:
                return 1
        return 0
        
            
"""
Time Complexity: O(n)
Space Complexity: O(len(A))

Link: https://www.interviewbit.com/problems/pair-with-given-difference/
"""