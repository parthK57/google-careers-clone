import { evenOrOdd, multiply } from "@/Playground.js";

describe("basic math", () => {
  it("adds two numbers", () => {
    expect(1 + 1).toBe(2);
  });

  describe("evenOrOdd", () => {
    it("checks even or odd", () => {
      expect(evenOrOdd(3)).toBe("Odd");
      expect(evenOrOdd(2)).toBe("Even");
    });
  });

  describe("multiply", () => {
    it("multiplies two numbers", () => {
      expect(multiply(2, 4)).toBe(8);
    });
  });
});
