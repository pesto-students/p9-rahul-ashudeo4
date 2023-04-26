class Solution:
    def sortColors(self, nums: List[int]) -> None:
        """
        Do not return anything, modify nums in-place instead.
        """
        if len(nums)==1:
            return
        i=0
        j=len(nums)-1
        t=0
        
        while t<=j:
            
            if nums[t]==0:
                nums[t],nums[i]=nums[i],nums[t]
                i+=1
                t+=1
                
            elif nums[t]==2:
                nums[t],nums[j]=nums[j],nums[t]
                j-=1
                
            elif nums[t]==1:
                t+=1
        print(nums)

"""
Time Complexity: O(n)
Space Complexity: O(1)

Link: https://leetcode.com/problems/sort-colors/
"""