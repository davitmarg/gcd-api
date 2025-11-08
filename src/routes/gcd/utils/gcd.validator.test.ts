import { isValidNumber, isValidNumberArray } from "./gcd.validator";

describe("Input Validator", () => {
    describe("isValidNumber", () => {
        test("should return true for valid numbers", () => {
            expect(isValidNumber(10)).toBe(true);
        });

        test("should return false for NaN", () => {
            expect(isValidNumber(NaN)).toBe(false);
        });

        test("should return false for Infinity", () => {
            expect(isValidNumber(Infinity)).toBe(false);
        });

        test("should return true for 0", () => {
            expect(isValidNumber(0)).toBe(true);
        });

        test("should return false for negative numbers", () => {
            expect(isValidNumber(-5)).toBe(false);
        });

        test("should return false for floating point numbers", () => {
            expect(isValidNumber(3.14)).toBe(false);
        });
    });

    describe("isValidNumberArray", () => {
        test("should return true for a valid array of numbers", () => {
            expect(isValidNumberArray([1, 2, 3, 4])).toBe(true);
        });

        test("should return false for an array containing NaN", () => {
            expect(isValidNumberArray([1, 2, NaN])).toBe(false);
        });

        test("should return false for an array containing Infinity", () => {
            expect(isValidNumberArray([1, Infinity, 3])).toBe(false);
        });

        test("should return false for an array containing negative numbers", () => {
            expect(isValidNumberArray([1, -2, 3])).toBe(false);
        });

        test("should return false for an array containing floating point numbers", () => {
            expect(isValidNumberArray([1, 2.5, 3])).toBe(false);
        });

        test("should return false when input is not an array", () => {
            expect(isValidNumberArray(123 as any)).toBe(false);
            expect(isValidNumberArray("hello" as any)).toBe(false);
            expect(isValidNumberArray(null as any)).toBe(false);
        });
    });
});
