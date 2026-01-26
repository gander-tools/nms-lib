import { describe, expect, it } from "vitest";
import { sumStats } from "../src";

describe("sumStats", () => {
    it("should be defined", () => {
        expect(sumStats).toBeDefined();
    });

    it("should no argument treat as empty array", () => {
        const result = sumStats();

        expect(result).toBe(0);
    });

    it("should sum empty array to 0", () => {
        const result = sumStats([]);

        expect(result).toBe(0);
    });

    it("should sum integer values", () => {
        const result = sumStats([
            1,
            3.9,
            "4.9",
            undefined,
            null,
            "nope",
            "0",
            "0.9",
            "2",
        ]);

        expect(result).toBe(10);
    });

    it("should sum positive and negative values", () => {
        const result = sumStats([
            1,
            3.9,
            "-4.9",
            undefined,
            null,
            "nope",
            "0",
            "0.9",
            "-2",
        ]);

        expect(result).toBe(-2);
    });
});
