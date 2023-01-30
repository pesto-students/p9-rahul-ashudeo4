function createStack() {
  let items = [];
  function push(item) {
    items.push(item);
  }
  function pop() {
    return items.pop();
  }
  function print() {
    return items;
  }
  return {
    push(item) {
      push(item);
    },
    pop() {
      return pop();
    },
    print() {
      return print();
    },
  };
}

const stack = createStack();
stack.push(10);
stack.push(5);
stack.pop();
console.log(stack.print());
console.log(stack.items);
