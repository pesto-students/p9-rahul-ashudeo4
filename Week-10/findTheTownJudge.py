class Solution:
    def findJudge(self, n: int, trust: List[List[int]]) -> int:
        inDegree = {val+1:0 for val in range(n)}
        outDegree = {val+1:0 for val in range(n)}
        graph = {val+1:[] for val in range(n)}
        for parent,child in trust:
            graph[parent].append(child)
            inDegree[child]+=1
            outDegree[parent]+=1
        print(graph,inDegree,outDegree)
        for key in outDegree:
          if outDegree[key] == 0 and inDegree[key]==n-1:
            return key
        return -1
            

"""
Time Complexity - O(n)
Space Complexity - O(n)
Link - https://leetcode.com/problems/find-the-town-judge/description/
"""
        