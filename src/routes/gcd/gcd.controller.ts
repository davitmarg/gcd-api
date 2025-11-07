// src/routes/gcd/gcd.controller.ts
import { Request, Response } from "express";
import { calculateGCD, calculateGCDArray } from "./gcd.service";
import { isValidNumber, isValidNumberArray } from "./utils/gcd.validator";
import {
    GCDResponse,
    GCDTwoNumbersRequest,
    GCDArrayRequest,
} from "./gcd";

export const getGCD = (req: Request, res: Response) => {
    const { a, b, numbers } = req.query;

    let result: GCDResponse;

    if (numbers) {
        // Array form
        const arr = Array.isArray(numbers)
            ? numbers.map(Number)
            : [Number(numbers)];

        if (!isValidNumberArray(arr)) {
            return res.status(400).json({ error: "Invalid number array" });
        }

        const request: GCDArrayRequest = { numbers: arr };
        result = { gcd: calculateGCDArray(request.numbers) };
    } else if (a !== undefined && b !== undefined) {
        // Two numbers form
        const numA = Number(a);
        const numB = Number(b);

        if (!isValidNumber(numA) || !isValidNumber(numB)) {
            return res.status(400).json({ error: "Invalid numbers" });
        }

        const request: GCDTwoNumbersRequest = { a: numA, b: numB };
        result = { gcd: calculateGCD(request.a, request.b) };
    } else {
        return res.status(400).json({ error: "Missing parameters" });
    }

    res.json(result);
};
