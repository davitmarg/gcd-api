import request from "supertest";
import app from "../../server";

describe("GET /gcd (Integration Test)", () => {
    test("should return 200 and correct GCD for ?a=48&b=18", async () => {
        const response = await request(app).get("/gcd?a=48&b=18").expect(200); // Check for 200 OK status

        expect(response.body).toEqual({ gcd: 6 });
    });

    test("should return 200 and correct GCD for ?numbers=48&numbers=18", async () => {
        const response = await request(app)
            .get("/gcd?numbers=48&numbers=18&numbers=24")
            .expect(200);

        expect(response.body).toEqual({ gcd: 6 });
    });

    test("should return 400 for missing parameters", async () => {
        const response = await request(app).get("/gcd").expect(400); // Check for 400 Bad Request

        expect(response.body).toEqual({ error: "Missing parameters" });
    });

    test("should return 400 for invalid number ?a=foo", async () => {
        const response = await request(app).get("/gcd?a=foo&b=18").expect(400);

        expect(response.body).toEqual({ error: "Invalid numbers" });
    });

    test("should return 400 for invalid number in array", async () => {
        const response = await request(app)
            .get("/gcd?numbers=10&numbers=bar")
            .expect(400);

        expect(response.body).toEqual({ error: "Invalid number array" });
    });
});
