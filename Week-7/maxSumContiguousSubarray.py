class Solution:
    def maxSubArray(self, nums: List[int]) -> int:
        
        maxSum=float("-inf")
        curSum=0
        for val in nums:
            curSum+=val
            maxSum=max(curSum,maxSum)
            
            if curSum<0:
                curSum=0
            
        return maxSum


"""
Time Complexity: O(n)
Space Complexity: O(1)

Link: https://leetcode.com/problems/maximum-subarray/
"""