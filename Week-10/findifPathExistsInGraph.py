class Solution:
    def validPath(self, n: int, edges: List[List[int]], source: int, destination: int) -> bool:
        graph = {val : [] for val in range(n)}
        for parent,child in edges:
            graph[parent].append(child)
            graph[child].append(parent)
        print(graph)
        visited = set()
        visited.add(source)
        return solve(source,destination,graph,visited)

def solve(src,dest,graph,visited):
    print(src,dest)
    if src == dest:
        return True
    for val in graph[src]:
        if val not in visited:
            visited.add(val)
            val=solve(val,dest,graph,visited)
            if val:
                return True
    return False

"""
Time Complexity - O(n)
Space Complexity - O(n)
Link - https://leetcode.com/problems/find-if-path-exists-in-graph/description/
"""