const {sum, diff, product} = require("./mathOperation")

describe("sum", ()=>{
    test("add 1+2 to equal 3", ()=>{
        expect(sum(1, 2)).toBe(3);
    })

    test("add 1 and -2 to equal -1", ()=>{
        expect(sum(1,-2)).toBe(-1)
    })
})

describe("diff", () => {
  test("add 2-1 to equal 1", () => {
    expect(diff(2, 1)).toBe(1);
  });

  test("add 1 and -2 to equal 3", () => {
    expect(diff(1, -2)).toBe(3);
  });
});

describe("multiply", () => {
  test("add 1*2 to equal 2", () => {
    expect(product(1, 2)).toBe(2);
  });

  test("add 1 and -2 to equal -2", () => {
    expect(product(1, -2)).toBe(-2);
  });
});