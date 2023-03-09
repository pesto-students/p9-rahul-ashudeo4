class Solution:
    def threeSumClosest(self, nums: List[int], target: int) -> int:
        nums.sort()
        mx=float('inf')
        
        for idx in range(len(nums)-2):
            start = idx + 1
            end = len(nums)-1
            
            while start < end:
                sumOfThree = nums[idx] + nums[start] + nums[end]
                value = target - sumOfThree

                if sumOfThree == target:
                    return target - value
                elif abs(value) < abs(mx):
                    mx=value
                elif value > 0:
                    start +=1
                else:
                    end-=1
        return target - mx


"""
Time Complexity: O(n*n)
Space Complexity: O(1)

Link: https://leetcode.com/problems/3sum-closest/
"""