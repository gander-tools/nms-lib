import { isRef, ref } from "@vue/reactivity";
import { describe, expect, it } from "vitest";
import { useCalcBaseStats } from "../src";

describe("useCalcBaseStats", () => {
    it("should be defined", () => {
        expect(useCalcBaseStats).toBeDefined();
    });

    it("zero is zero", () => {
        const mainStats = ref(0);
        const bonusStats = ref(0);
        const rankUps = ref(0);

        const result = useCalcBaseStats(mainStats, bonusStats, rankUps);

        expect(isRef(result)).toBe(true);
        expect(result.value).toBe(0);
    });

    it("Example 1: Highest known possible frigate", () => {
        const mainStats = ref(7 + 11 + 7 + 4);
        const bonusStats = ref(1 - 6 - 4);
        const rankUps = ref(4);

        const result = useCalcBaseStats(mainStats, bonusStats, rankUps);

        expect(isRef(result)).toBe(true);
        expect(result.value).toBe(14);
    });

    it("Example 2: Worst support EVER! ", () => {
        const mainStats = ref(1 + 3 + 1 + 2);
        const bonusStats = ref(0);
        const rankUps = ref(2);

        const result = useCalcBaseStats(mainStats, bonusStats, rankUps);

        expect(isRef(result)).toBe(true);
        expect(result.value).toBe(-5);
    });

    it("Example 3: Best rank 1 support frigate", () => {
        const mainStats = ref(2 + 3 + 4 + 3);
        const bonusStats = ref(0);
        const rankUps = ref(0);

        const result = useCalcBaseStats(mainStats, bonusStats, rankUps);

        expect(isRef(result)).toBe(true);
        expect(result.value).toBe(12);
    });
});
