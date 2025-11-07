import { gcdMatrix, MAX_VALUE } from "./utils/gcdMatrix";

export const calculateGCD = (a: number, b: number): number => {
    if (a <= MAX_VALUE && b <= MAX_VALUE) return gcdMatrix[a][b];

    while (b !== 0) [a, b] = [b, a % b];
    return a;
};

export const calculateGCDArray = (numbers: number[]): number => {
    if (numbers.length === 0) return 0;
    return numbers.reduce((acc, n) => calculateGCD(acc, n));
};
