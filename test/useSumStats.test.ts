import {describe, expect, it} from 'vitest';
import {useSumStats} from '../src';
import {isRef, ref} from '@vue/reactivity';

describe('useSumStats', () => {
    it('should be defined', () => {
        expect(useSumStats).toBeDefined();
    });

    it('should sum empty array to 0', () => {
        const result = useSumStats(ref([]));

        expect(isRef(result)).toBe(true);
        expect(result.value).toBe(0);
    });

    it('should sum integer values', () => {
        const result = useSumStats(ref([1, 3.9, '4.9', undefined, null, 'nope', '0', '0.9', '2']));

        expect(isRef(result)).toBe(true);
        expect(result.value).toBe(10);
    });

    it('should sum positive and negative values', () => {
        const result = useSumStats(ref([1, 3.9, '-4.9', undefined, null, 'nope', '0', '0.9', '-2']));

        expect(isRef(result)).toBe(true);
        expect(result.value).toBe(-2);
    });

});
