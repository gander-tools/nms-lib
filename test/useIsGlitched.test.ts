import { isRef, ref } from "@vue/reactivity";
import { describe, expect, it, test } from "vitest";
import { useIsGlitched } from "../src";

describe("useIsGlitched", () => {
    it("should be defined", () => {
        expect(useIsGlitched).toBeDefined();
    });

    it("is likely glitched when negative baseStats", () => {
        const baseStats = ref(-10);
        const expeditions = ref(0);

        const result = useIsGlitched(baseStats, expeditions);

        expect(isRef(result)).toBe(true);
        expect(result.value).toBe(true);
    });

    it("is not glitched when positive baseStats", () => {
        const baseStats = ref(10);
        const expeditions = ref(0);

        const result = useIsGlitched(baseStats, expeditions);

        expect(isRef(result)).toBe(true);
        expect(result.value).toBe(false);
    });

    test.each([
        { expeditions: 0, rankUp: false },
        { expeditions: 1, rankUp: false },
        { expeditions: 2, rankUp: false },
        { expeditions: 3, rankUp: false },
        { expeditions: 4, rankUp: true },
        { expeditions: 5, rankUp: false },
        { expeditions: 6, rankUp: false },
        { expeditions: 7, rankUp: false },
        { expeditions: 8, rankUp: true },
        { expeditions: 9, rankUp: false },
        { expeditions: 10, rankUp: false },
        { expeditions: 11, rankUp: false },
        { expeditions: 12, rankUp: false },
        { expeditions: 13, rankUp: false },
        { expeditions: 14, rankUp: false },
        { expeditions: 15, rankUp: true },
        { expeditions: 16, rankUp: false },
        { expeditions: 17, rankUp: false },
        { expeditions: 18, rankUp: false },
        { expeditions: 19, rankUp: false },
        { expeditions: 20, rankUp: false },
        { expeditions: 21, rankUp: false },
        { expeditions: 22, rankUp: false },
        { expeditions: 23, rankUp: false },
        { expeditions: 24, rankUp: false },
        { expeditions: 25, rankUp: true },
        { expeditions: 26, rankUp: false },
        { expeditions: 27, rankUp: false },
        { expeditions: 28, rankUp: false },
        { expeditions: 29, rankUp: false },
        { expeditions: 30, rankUp: true },
        { expeditions: 31, rankUp: false },
        { expeditions: 32, rankUp: false },
        { expeditions: 33, rankUp: false },
        { expeditions: 34, rankUp: false },
        { expeditions: 35, rankUp: true },
        { expeditions: 36, rankUp: false },
        { expeditions: 37, rankUp: false },
        { expeditions: 38, rankUp: false },
        { expeditions: 39, rankUp: false },
        { expeditions: 40, rankUp: true },
        { expeditions: 41, rankUp: false },
        { expeditions: 42, rankUp: false },
        { expeditions: 43, rankUp: false },
        { expeditions: 44, rankUp: false },
        { expeditions: 45, rankUp: true },
        { expeditions: 46, rankUp: false },
        { expeditions: 47, rankUp: false },
        { expeditions: 48, rankUp: false },
        { expeditions: 49, rankUp: false },
        { expeditions: 50, rankUp: true },
        { expeditions: 51, rankUp: false },
        { expeditions: 52, rankUp: false },
        { expeditions: 53, rankUp: false },
        { expeditions: 54, rankUp: false },
        { expeditions: 55, rankUp: true },
        { expeditions: 56, rankUp: false },
        { expeditions: 57, rankUp: false },
        { expeditions: 58, rankUp: false },
        { expeditions: 59, rankUp: false },
        { expeditions: 60, rankUp: false },
    ])("is glitched when $expeditions match rankUp", ({ expeditions, rankUp }) => {
        const exp = ref(expeditions);
        const stats = ref(0);

        const result = useIsGlitched(stats, exp);

        expect(isRef(result)).toBe(true);
        expect(result.value).toBe(rankUp);
    });
});
