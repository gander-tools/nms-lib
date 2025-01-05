import {describe, expect, it, test} from 'vitest';
import {calcRankUps} from '../src';

describe('calcRankUps', () => {
    it('should be defined', () => {
        expect(calcRankUps).toBeDefined();
    });

    test.each([
        {expeditions: 0, total: 0},
        {expeditions: 1, total: 0},
        {expeditions: 2, total: 0},
        {expeditions: 3, total: 0},
        {expeditions: 4, total: 1},
        {expeditions: 5, total: 1},
        {expeditions: 6, total: 1},
        {expeditions: 7, total: 1},
        {expeditions: 8, total: 2},
        {expeditions: 9, total: 2},
        {expeditions: 10, total: 2},
        {expeditions: 11, total: 2},
        {expeditions: 12, total: 2},
        {expeditions: 13, total: 2},
        {expeditions: 14, total: 2},
        {expeditions: 15, total: 3},
        {expeditions: 16, total: 3},
        {expeditions: 17, total: 3},
        {expeditions: 18, total: 3},
        {expeditions: 19, total: 3},
        {expeditions: 20, total: 3},
        {expeditions: 21, total: 3},
        {expeditions: 22, total: 3},
        {expeditions: 23, total: 3},
        {expeditions: 24, total: 3},
        {expeditions: 25, total: 4},
        {expeditions: 26, total: 4},
        {expeditions: 27, total: 4},
        {expeditions: 28, total: 4},
        {expeditions: 29, total: 4},
        {expeditions: 30, total: 5},
        {expeditions: 31, total: 5},
        {expeditions: 32, total: 5},
        {expeditions: 33, total: 5},
        {expeditions: 34, total: 5},
        {expeditions: 35, total: 6},
        {expeditions: 36, total: 6},
        {expeditions: 37, total: 6},
        {expeditions: 38, total: 6},
        {expeditions: 39, total: 6},
        {expeditions: 40, total: 7},
        {expeditions: 41, total: 7},
        {expeditions: 42, total: 7},
        {expeditions: 43, total: 7},
        {expeditions: 44, total: 7},
        {expeditions: 45, total: 8},
        {expeditions: 46, total: 8},
        {expeditions: 47, total: 8},
        {expeditions: 48, total: 8},
        {expeditions: 49, total: 8},
        {expeditions: 50, total: 9},
        {expeditions: 51, total: 9},
        {expeditions: 52, total: 9},
        {expeditions: 53, total: 9},
        {expeditions: 54, total: 9},
        {expeditions: 55, total: 10},
        {expeditions: 56, total: 10},
        {expeditions: 57, total: 10},
        {expeditions: 58, total: 10},
        {expeditions: 59, total: 10},
        {expeditions: 60, total: 10},
    ])('calc rankUps for $expeditions expeditions', ({expeditions, total}) => {
        expect(calcRankUps(expeditions)).toBe(total);
    });
});


