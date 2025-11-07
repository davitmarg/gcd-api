export interface GCDTwoNumbersRequest {
    a: number;
    b: number;
}

export interface GCDArrayRequest {
    numbers: number[];
}

export interface GCDResponse {
    gcd: number;
}

export type GCDRequest = GCDTwoNumbersRequest | GCDArrayRequest;
