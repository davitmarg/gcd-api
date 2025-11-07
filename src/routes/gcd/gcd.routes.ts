import { Router } from "express";
import { getGCD } from "./gcd.controller";

export const gcdRouter = Router();

gcdRouter.get("/", getGCD);
