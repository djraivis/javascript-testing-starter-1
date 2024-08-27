import { describe, it, expect } from 'vitest';
import { calculateAverage, factorial, fizzBuzz, max } from '../src/intro';

// MAX TEST
describe('max', () => {
    it ('should return the first argument if it is greater', () => {
        // ARRANGE
        const a = 5;
        const b = 2;
        // ACT
        const result = max(a, b);
        // ASSERT
        expect(result).toBe(5);
    });

    it ('it should return the second argument if it is greater', () => {
        expect(max(2, 4)).toBe(4);
    });

    it ('it should return the first argument if argument are equal', () => {
        expect(max(1, 1)).toBe(1);
    });
}),
// FIZZBUZZ TEST
describe ('fizzBuzz', () => {
    it ('should return FizzBuzz if the number is divisible by 3 and 5', () => {
        expect(fizzBuzz(15)).toBe('FizzBuzz');
    }   );
    it ('should return Fizz if the number is divisible by 3', () => {
        expect(fizzBuzz(9)).toBe('Fizz');
    }   );
    it ('should return Buzz if the number is divisible by 5', () => {
        expect(fizzBuzz(5)).toBe('Buzz');
    }   );
    it ('should return the number as a string if it is not divisible by 3 or 5', () => {
        expect(fizzBuzz(1)).toBe('1');
    }   ); 
}),
// AVERAGE TEST
describe ('calculateAverage', () => {
  it ('it should return a NaN if given an empty array', () => {
      expect (calculateAverage([])).toBe(NaN)
  });
  it ('it should calculate the average of an array with a single elemnt', () => {
      expect (calculateAverage([4])).toBe(4)
  });
  it ('it should calculate the average of an array with a two elements', () => {
      expect (calculateAverage([1, 2])).toBe(1.5)
  });
  it ('it should calculate the average of an array with a three elements', () => {
      expect (calculateAverage([1, 2, 3])).toBe(2

      ) 
  });
})
// FACTORIAL TEST
// 0! = 1      | // 0! = 1
// 1! = 1      | // 1! = 1
// 2! = 2      | // 2! = 2 * 1
// 3! = 6      | // 3! = 3 * 2 * 1
// 4! = 24     | // 4! = 4 * 3 * 2 * 1
// 5! = 120    | // 5! = 5 * 4 * 3 * 2 * 1
// 6! = 720    | // 6! = 6 * 5 * 4 * 3 * 2 * 1
describe ('factorial', () => {
    it ('it should return undefined if the number is negative', () => {
        expect (factorial(-1)).toBe(undefined)
    });
    it ('it should return 1 if the number is 0', () => {
        expect (factorial(0)).toBe(1)
    });
    it ('it should return 1 if the number is 1', () => {
        expect (factorial(1)).toBe(1)
    });
    it ('it should return 2 if the number is 2', () => {
        expect (factorial(2)).toBe(2)
    });
    it ('it should return 6 if the number is 3', () => {
        expect (factorial(3)).toBe(6)
    });
    it ('it should return 24 if the number is 4', () => {
        expect (factorial(4)).toBe(24)
    });
})