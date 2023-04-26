class Queue:
    def __init__(self):
        self.s1 = []
        self.s2 = []
 
    def enQueue(self, x):
 
        while len(self.s1) != 0:
            self.s2.append(self.s1[-1])
            self.s1.pop()
 
        self.s1.append(x)
 
        while len(self.s2) != 0:
            self.s1.append(self.s2[-1])
            self.s2.pop()
 
    def deQueue(self):
 
        if len(self.s1) == 0:
            print("Q is Empty")
 
        x = self.s1[-1]
        self.s1.pop()
        return x
    def display(self):
        print(self.s1)

n = 5
inp = [1,2,1,3,2,1,4,2]
q = Queue()
idx=0
while idx < len(inp):
    if inp[idx] == 1:
        idx+=1
        q.enQueue(inp[idx])
    
    else:
        val=q.deQueue()
    q.display()
    idx+=1

"""
Time Complexity - O(n)
Space Complexity - O(n)
EnQueue - O(n)
DeQueue - O(1)
"""
    


