class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        maxProfit=0
        left=0
        right=1
        while right< len(prices):
            currentProfit = prices[right]-prices[left]
            if prices[left]<prices[right]:
                maxProfit = max(maxProfit,currentProfit)
            else:
                left=right
            right+=1
        return maxProfit
        

"""
Time Complexity: O(n)
Space Complexity: O(1)

Link: https://leetcode.com/problems/best-time-to-buy-and-sell-stock/
"""