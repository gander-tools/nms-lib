const expeditionsRankUps: [number, number][] = [
    [0, 0],
    [4, 1],
    [8, 2],
    [15, 3],
    [25, 4],
    [30, 5],
    [35, 6],
    [40, 7],
    [45, 8],
    [50, 9],
    [55, 10],
];

export const MAX_BONUS = 60;
export const MAX_EXPEDITIONS = 55;

export type SumStatsArgument = number | string | undefined | null;

export function sumStats(stats: SumStatsArgument[] = []): number {
    return stats
        .map((v: SumStatsArgument) => Number.parseInt(String(v)))
        .filter((v) => Number.isInteger(v))
        .reduce((s, v) => s + v, 0);
}

export function calcBaseStats(mainStats: number, bonusStats: number, rank_ups: number): number {
    return mainStats - (Math.min(bonusStats, MAX_BONUS) + 6 * rank_ups);
}

export function calcRankUps(expeditions: number): number {
    const correctExpeditions = Math.min(Math.max(0, expeditions), MAX_EXPEDITIONS);
    let closestRank = 0;
    for (const [expCount, rankCount] of expeditionsRankUps) {
        if (expCount <= correctExpeditions) {
            closestRank = rankCount;
        }
    }
    return closestRank;
}

export function isGlitched(baseStats: number, expeditions: number): boolean {
    if (baseStats < 0) {
        return true;
    }

    for (const [expCount] of expeditionsRankUps) {
        if (expCount > 0 && expCount === expeditions) {
            return true;
        }
    }

    return false;
}
