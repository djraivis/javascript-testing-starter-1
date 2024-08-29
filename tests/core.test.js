import { it, expect, describe, vitest } from 'vitest'
import { calculateDiscount, getCoupons } from '../src/core';

describe('getCoupons', () => {
    it('should generate the array of coupons', () => {
        const coupons = getCoupons();
        expect (Array.isArray(coupons)).toBe (true);
        expect(coupons).toHaveLength(2);
    }),

    it('it should be an array with a valid coupon codes', () => {
     const coupons = getCoupons(); {
        coupons.forEach(coupon => {
        expect (coupon).toHaveProperty('code');
        expect (typeof coupon.code).toBe('string');
        expect (coupon.code).toBeTruthy();
        
        expect (coupon.code).toMatch(/^[A-Z0-9]+$/);
        expect (coupon.code).toBe(coupon.code.toUpperCase());
        });
     }
    })
    it('it should be an array with a valid discount codes', () => {
     const coupons = getCoupons(); {
        coupons.forEach(coupon => {
        expect (coupon).toHaveProperty('discount');
        expect (typeof coupon.discount).toBe('number');
        expect (coupon.discount).toBeGreaterThanOrEqual(0);
        expect (coupon.discount).toBeLessThanOrEqual(1);
        expect (coupon.discount).toBeTruthy();
        });
     }
    })
})

describe('calculateDiscount', () => {
    it('it should return a discounted price if given valid code', () => {
        expect(calculateDiscount(10, 'SAVE10')).toBe(9);
        expect(calculateDiscount(10, 'SAVE20')).toBe(8);
    });
    it('should handle non-numeric price', () => {
        expect(calculateDiscount('10', 'SAVE10')).toMatch(/invalid/i);
    });
    it('should handle negative price', () => {
        expect(calculateDiscount(-10, 'SAVE10')).toMatch(/invalid/i);
    });
    it('should handle non-string discount code', () => {
        expect(calculateDiscount(10, 10)).toMatch(/invalid/i);
    });
    it('should handle invalid discount code', () => {
        expect(calculateDiscount(10, 'INVALID')).toBe(10);
    });

})