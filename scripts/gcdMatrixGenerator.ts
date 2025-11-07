import fs from "fs";
import path from "path";

// Euclidean algorithm
function gcd(a: number, b: number): number {
    while (b !== 0) {
        [a, b] = [b, a % b];
    }
    return a;
}

// Precompute matrix
export function generateGCDMatrix(size: number): number[][] {
    return Array.from({ length: size + 1 }, (_, i) =>
        Array.from({ length: size + 1 }, (_, j) => gcd(i, j))
    );
}

// Save matrix to file as JS export
export function saveGCDMatrixToFile(filePath: string, size = 100) {
    const matrix = generateGCDMatrix(size);
    const content = `export const MAX_VALUE = ${size};
export const gcdMatrix = ${JSON.stringify(matrix)};`;
    fs.writeFileSync(filePath, content, "utf-8");
    console.log(`GCD matrix (0 to ${size}) saved to ${filePath}`);
}

// Run this directly
saveGCDMatrixToFile(path.resolve(__dirname, "gcdMatrix.ts"), 500);
