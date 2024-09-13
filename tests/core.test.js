import {
  it,
  expect,
  describe,
  beforeEach,
  beforeAll,
  afterEach,
  afterAll,
} from 'vitest';
import {
  isValidUsername,
  isPriceInRange,
  validateUserInput,
  calculateDiscount,
  getCoupons,
  canDrive,
  fetchData,
} from '../src/core';

describe('getCoupons', () => {
  it('should generate the array of coupons', () => {
    const coupons = getCoupons();
    expect(Array.isArray(coupons)).toBe(true);
    expect(coupons).toHaveLength(2);
  }),
    it('it should be an array with a valid coupon codes', () => {
      const coupons = getCoupons();
      {
        coupons.forEach((coupon) => {
          expect(coupon).toHaveProperty('code');
          expect(typeof coupon.code).toBe('string');
          expect(coupon.code).toBeTruthy();

          expect(coupon.code).toMatch(/^[A-Z0-9]+$/);
          expect(coupon.code).toBe(coupon.code.toUpperCase());
        });
      }
    });
  it('it should be an array with a valid discount codes', () => {
    const coupons = getCoupons();
    {
      coupons.forEach((coupon) => {
        expect(coupon).toHaveProperty('discount');
        expect(typeof coupon.discount).toBe('number');
        expect(coupon.discount).toBeGreaterThanOrEqual(0);
        expect(coupon.discount).toBeLessThanOrEqual(1);
        expect(coupon.discount).toBeTruthy();
      });
    }
  });
});

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
});

describe('validateUserInput', () => {
  it('should return success if given a valid input', () => {
    expect(validateUserInput('Raivis', 44)).toMatch(/success/i);
  });

  it('should return an error if username is not a string', () => {
    expect(validateUserInput(1, 44)).toMatch(/invalid/i);
  });

  it('should return an error if username is less than 3 characters', () => {
    expect(validateUserInput('Ra', 44)).toMatch(/invalid/i);
  });

  it('it should return an error if age is less than 18', () => {
    expect(validateUserInput('Raivis', 17)).toMatch(/invalid/i);
  });

  it('should return and error if the age is more than 100', () => {
    expect(validateUserInput('Raivis', 101)).toMatch(/invalid/i);
  });

  it('should return an error if the string has more than 56 characters', () => {
    expect(validateUserInput('R'.repeat(57), 44)).toMatch(/invalid/i);
  });
  it('should return an error if username is not a string', () => {
    expect(validateUserInput(44, 44)).toMatch(/invalid/i);
  });
  it('should return and error if both username and age are invalid', () => {
    expect(validateUserInput('', 0)).toMatch(/invalid username/i);
    expect(validateUserInput('', 0)).toMatch(/invalid age/i);
  });
});

describe('isPriceInRange', () => {
  it.each([
    { scenario: 'price < min', price: -10, result: false },
    { scenario: 'price = min', price: 0, result: true },
    { scenario: 'price between min and max', price: 55, result: true },
    { scenario: 'price = max', price: 100, result: true },
    { scenario: 'price > max', price: 200, result: false },
  ])('should return $result for $price, $min, $max', ({ price, result }) => {
    expect(isPriceInRange(price, 0, 100)).toBe(result);
  });
});

describe('isValidUsername', function () {
  const minLength = 5;
  const maxLength = 50;
  it('should return false if username is shorter than min length', () => {
    expect(isValidUsername('a'.repeat(minLength - 1))).toBe(false);
  });
  it('should return false if username is longer than max length', () => {
    expect(isValidUsername('a'.repeat(maxLength + 1))).toBe(false);
  });
  it('should return true if username is equal to min or max length', () => {
    expect(isValidUsername('a'.repeat(minLength || maxLength))).toBe(true);
  });
  it('should return true if username is within the length constraint', () => {
    expect(isValidUsername('a'.repeat(minLength + 1 || maxLength - 1))).toBe(
      true
    );
  });

  it('should return false if username is not a string', () => {
    expect(isValidUsername(1)).toBe(false);
    expect(isValidUsername('')).toBe(false);
    expect(isValidUsername(0)).toBe(false);
    expect(isValidUsername(undefined)).toBe(false);
  });
});

describe('canDrive', () => {
  it.each([
    { age: 15, countryCode: 'US', result: false },
    { age: 16, countryCode: 'US', result: true },
    { age: 17, countryCode: 'US', result: true },
    { age: 16, countryCode: 'UK', result: false },
    { age: 17, countryCode: 'UK', result: true },
    { age: 18, countryCode: 'UK', result: true },
    { age: 18, countryCode: 'XX', result: 'Invalid country code' },
  ])(
    'should return $result for $age, $countryCode',
    ({ age, countryCode, result }) => {
      expect(canDrive(age, countryCode)).toBe(result);
    }
  );
});

// describe('fetchData', () => {
//   it('should return a promise that will resolve to an array of numbers', async () => {
//     try {
//       await fetchData();
//     } catch (error) {
//       expect(error).toHaveProperty('reason');
//       expect(error.reason).toMatch(/fail/i);
//     }
//   });
// });

describe('test suite', () => {
  beforeAll(() => {
    console.log('beforeAll Called');
  });

  beforeEach(() => {
    console.log('beforeEach  Called');
  });

  afterEach(() => {
    console.log('afterEach called');
  });

  afterAll(() => {
    console.log('afterAll called');
  });

  it('test case 1', () => {});
  it('test case 2', () => {});
});
