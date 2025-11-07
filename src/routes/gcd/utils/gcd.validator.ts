const isNonNegativeInteger = (value: any): value is number =>
    typeof value === "number" &&
    Number.isFinite(value) &&
    Number.isInteger(value) &&
    value >= 0;

export const isValidNumber = (value: any): value is number =>
    isNonNegativeInteger(value);

export const isValidNumberArray = (arr: any): arr is number[] =>
    Array.isArray(arr) && arr.every(isNonNegativeInteger);
