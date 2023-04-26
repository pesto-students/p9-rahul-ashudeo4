#User function Template for python3


class Solution:
    def nextLargerElement(self,arr,n):
        #code here
        res = [-1]*n
        stack=[]
        for idx in range(n):
            while len(stack)>0 and arr[idx]>arr[stack[-1]]:
                res[stack[-1]]=arr[idx]
                stack.pop()
            
            stack.append(idx)
        return res

#{ 
 # Driver Code Starts
#Initial Template for Python 3
import atexit
import io
import sys

_INPUT_LINES = sys.stdin.read().splitlines()
input = iter(_INPUT_LINES).__next__
_OUTPUT_BUFFER = io.StringIO()
sys.stdout = _OUTPUT_BUFFER

@atexit.register

def write():
    sys.__stdout__.write(_OUTPUT_BUFFER.getvalue())

if __name__ == '__main__':
    test_cases = int(input())
    for cases in range(test_cases) :
        n = int(input())

        a = list(map(int,input().strip().split()))
        obj = Solution()
        res = obj.nextLargerElement(a,n)
        for i in range (len (res)):
            print (res[i], end = " ")
        print ()
# } Driver Code Ends


"""
Time Complexity - O(n)
Space Complexity - O(n)
Link - https://practice.geeksforgeeks.org/problems/next-larger-element-1587115620/1
"""