class Solution:
    def allPathsSourceTarget(self, graph: List[List[int]]) -> List[List[int]]:
        n=len(graph)-1
        g = {}
        for idx in range(len(graph)):
            g[idx]=graph[idx]
        res = []
        solve(g,0,n,res,[])
        return res
def solve(g,src,des,res,temp):
    temp.append(src)
    if src == des:
        res.append(temp[:])
        return
    for val in g[src]:
        solve(g,val,des,res,temp)
        temp.pop()

