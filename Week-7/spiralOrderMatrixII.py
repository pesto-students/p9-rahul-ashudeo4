class Solution:
    def generateMatrix(self, n: int) -> List[List[int]]:
        mat = [[None for _ in range(n)] for _ in range(n)]
        count = 1
        m=n
        a=0
        b=n-1
        while count<=n*n:
        
            for i in range(a,b+1):
                mat[a][i]=count
                count+=1
                
            for j in range(a+1,b+1):
                mat[j][b]=count
                count+=1
            
            for k in range(b-1,a-1,-1):
                mat[b][k]=count
                count+=1
            
            for l in range(b-1,a,-1):
                mat[l][a]=count
                count+=1
            a+=1
            b-=1
            
        print(mat)
        return mat

"""
Time Complexity: O(n*n)
Space Complexity: O(n*n)

Link: https://leetcode.com/problems/spiral-matrix-ii/
"""