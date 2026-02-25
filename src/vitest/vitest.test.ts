import { describe, test, expect } from "vitest";

// sum.test.ts
export function sum(a: number, b: number): number {
  return a + b
}

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(4)
})


describe("test description", () => {
  test("test content", () => {
    expect(sum(1, 1)).toBe(2)
  })
})