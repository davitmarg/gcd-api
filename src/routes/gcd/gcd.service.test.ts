import { calculateGCD, calculateGCDArray } from "./gcd.service";

describe("GCD Service", () => {
    describe("calculateGCD", () => {
        test("should return correct GCD for two simple numbers", () => {
            expect(calculateGCD(810, 1638)).toBe(18);
        });

        test("should return the number itself when params are equal", () => {
            expect(calculateGCD(10, 10)).toBe(10);
        });

        test("should return 1 for prime numbers", () => {
            expect(calculateGCD(17, 13)).toBe(1);
        });

        test("should handle zero correctly (a, 0) -> a", () => {
            expect(calculateGCD(5, 0)).toBe(5);
        });

        test("should handle zero correctly (0, b) -> b", () => {
            expect(calculateGCD(0, 8)).toBe(8);
        });
    });

    describe("calculateGCDArray", () => {
        test("should return correct GCD for a simple array", () => {
            expect(calculateGCDArray([48, 18, 24, 1890])).toBe(6);
        });

        test("should return 0 for an empty array", () => {
            expect(calculateGCDArray([])).toBe(0);
        });

        test("should return the number itself for a single-item array", () => {
            expect(calculateGCDArray([7])).toBe(7);
        });
    });
});
