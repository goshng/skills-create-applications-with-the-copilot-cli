const { add, subtract, multiply, divide, modulo, power, squareRoot, calculator } = require('../calculator');

describe('Calculator Functions', () => {
  describe('Addition', () => {
    test('should add two positive numbers', () => {
      expect(add(2, 3)).toBe(5);
    });

    test('should add two negative numbers', () => {
      expect(add(-5, -3)).toBe(-8);
    });

    test('should add a positive and negative number', () => {
      expect(add(10, -4)).toBe(6);
    });

    test('should add zero to a number', () => {
      expect(add(5, 0)).toBe(5);
    });

    test('should add decimal numbers', () => {
      expect(add(2.5, 3.2)).toBeCloseTo(5.7, 5);
    });

    test('should add large numbers', () => {
      expect(add(1000000, 2000000)).toBe(3000000);
    });
  });

  describe('Subtraction', () => {
    test('should subtract two positive numbers', () => {
      expect(subtract(10, 4)).toBe(6);
    });

    test('should subtract and get negative result', () => {
      expect(subtract(3, 8)).toBe(-5);
    });

    test('should subtract two negative numbers', () => {
      expect(subtract(-5, -3)).toBe(-2);
    });

    test('should subtract zero from a number', () => {
      expect(subtract(7, 0)).toBe(7);
    });

    test('should subtract a number from zero', () => {
      expect(subtract(0, 5)).toBe(-5);
    });

    test('should subtract decimal numbers', () => {
      expect(subtract(10.5, 3.2)).toBeCloseTo(7.3, 5);
    });

    test('should subtract large numbers', () => {
      expect(subtract(5000000, 2000000)).toBe(3000000);
    });
  });

  describe('Multiplication', () => {
    test('should multiply two positive numbers', () => {
      expect(multiply(45, 2)).toBe(90);
    });

    test('should multiply two negative numbers', () => {
      expect(multiply(-5, -3)).toBe(15);
    });

    test('should multiply positive and negative number', () => {
      expect(multiply(6, -4)).toBe(-24);
    });

    test('should multiply by zero', () => {
      expect(multiply(100, 0)).toBe(0);
    });

    test('should multiply by one', () => {
      expect(multiply(42, 1)).toBe(42);
    });

    test('should multiply decimal numbers', () => {
      expect(multiply(2.5, 4)).toBe(10);
    });

    test('should multiply large numbers', () => {
      expect(multiply(1000, 2000)).toBe(2000000);
    });

    test('should multiply small decimal numbers', () => {
      expect(multiply(0.1, 0.2)).toBeCloseTo(0.02, 5);
    });
  });

  describe('Division', () => {
    test('should divide two positive numbers', () => {
      expect(divide(20, 5)).toBe(4);
    });

    test('should divide and get decimal result', () => {
      expect(divide(10, 4)).toBeCloseTo(2.5, 5);
    });

    test('should divide two negative numbers', () => {
      expect(divide(-20, -5)).toBe(4);
    });

    test('should divide positive by negative number', () => {
      expect(divide(20, -5)).toBe(-4);
    });

    test('should divide zero by a number', () => {
      expect(divide(0, 5)).toBe(0);
    });

    test('should throw error when dividing by zero', () => {
      expect(() => divide(10, 0)).toThrow('Division by zero is not allowed');
    });

    test('should throw error when dividing by zero with decimal', () => {
      expect(() => divide(5.5, 0)).toThrow('Division by zero is not allowed');
    });

    test('should divide large numbers', () => {
      expect(divide(1000000, 1000)).toBe(1000);
    });

    test('should divide decimal numbers', () => {
      expect(divide(7.5, 2.5)).toBe(3);
    });
  });

  describe('Calculator Main Function', () => {
    describe('Addition operator', () => {
      test('should calculate 2 + 3 = 5', () => {
        expect(calculator('2', '+', '3')).toBe(5);
      });

      test('should calculate with string numbers', () => {
        expect(calculator('10', '+', '5')).toBe(15);
      });
    });

    describe('Subtraction operator', () => {
      test('should calculate 10 - 4 = 6', () => {
        expect(calculator('10', '-', '4')).toBe(6);
      });
    });

    describe('Multiplication operator', () => {
      test('should calculate 45 * 2 = 90', () => {
        expect(calculator('45', '*', '2')).toBe(90);
      });

      test('should handle decimal multiplication', () => {
        expect(calculator('2.5', '*', '4')).toBe(10);
      });
    });

    describe('Division operator', () => {
      test('should calculate 20 / 5 = 4', () => {
        expect(calculator('20', '/', '5')).toBe(4);
      });

      test('should throw error for division by zero', () => {
        expect(() => calculator('10', '/', '0')).toThrow('Division by zero is not allowed');
      });
    });

    describe('Error handling', () => {
      test('should throw error for invalid operator', () => {
        expect(() => calculator('10', '^', '2')).toThrow('Unknown operator');
      });

      test('should throw error for non-numeric first argument', () => {
        expect(() => calculator('abc', '+', '5')).toThrow('Invalid input');
      });

      test('should throw error for non-numeric second argument', () => {
        expect(() => calculator('10', '+', 'xyz')).toThrow('Invalid input');
      });
    });
  });

  describe('Edge Cases and Special Scenarios', () => {
    test('should handle very small decimal numbers in addition', () => {
      expect(add(0.0001, 0.0002)).toBeCloseTo(0.0003, 5);
    });

    test('should handle very large numbers in multiplication', () => {
      expect(multiply(999999, 999999)).toBe(999998000001);
    });

    test('should handle negative results correctly', () => {
      expect(subtract(5, 15)).toBe(-10);
    });

    test('should maintain precision in division', () => {
      expect(divide(1, 3)).toBeCloseTo(0.333333, 5);
    });

    test('should handle string conversion in calculator function', () => {
      expect(calculator('10.5', '+', '20.5')).toBeCloseTo(31, 5);
    });
  });

  describe('Modulo', () => {
    test('should calculate modulo of two positive numbers', () => {
      expect(modulo(5, 2)).toBe(1);
    });

    test('should calculate modulo with remainder of zero', () => {
      expect(modulo(10, 5)).toBe(0);
    });

    test('should handle modulo with negative dividend', () => {
      expect(modulo(-10, 3)).toBe(-1);
    });

    test('should handle modulo with negative divisor', () => {
      expect(modulo(10, -3)).toBe(1);
    });

    test('should handle modulo with both negative numbers', () => {
      expect(modulo(-10, -3)).toBe(-1);
    });

    test('should throw error for modulo by zero', () => {
      expect(() => modulo(10, 0)).toThrow('Modulo by zero is not allowed');
    });

    test('should calculate modulo with decimal numbers', () => {
      expect(modulo(5.5, 2)).toBeCloseTo(1.5, 5);
    });

    test('should calculate modulo with large numbers', () => {
      expect(modulo(1000000, 3)).toBe(1);
    });
  });

  describe('Power/Exponentiation', () => {
    test('should calculate power with positive base and exponent', () => {
      expect(power(2, 3)).toBe(8);
    });

    test('should calculate power with 2 ** 8', () => {
      expect(power(2, 8)).toBe(256);
    });

    test('should calculate power with decimal exponent', () => {
      expect(power(4, 0.5)).toBe(2);
    });

    test('should calculate power with exponent of zero', () => {
      expect(power(5, 0)).toBe(1);
    });

    test('should calculate power with exponent of one', () => {
      expect(power(7, 1)).toBe(7);
    });

    test('should calculate power with negative exponent', () => {
      expect(power(2, -2)).toBe(0.25);
    });

    test('should calculate power with negative base and even exponent', () => {
      expect(power(-2, 2)).toBe(4);
    });

    test('should calculate power with negative base and odd exponent', () => {
      expect(power(-2, 3)).toBe(-8);
    });

    test('should handle large exponents', () => {
      expect(power(10, 6)).toBe(1000000);
    });

    test('should calculate power with decimal base', () => {
      expect(power(1.5, 2)).toBeCloseTo(2.25, 5);
    });
  });

  describe('Square Root', () => {
    test('should calculate square root of 16', () => {
      expect(squareRoot(16)).toBe(4);
    });

    test('should calculate square root of 25', () => {
      expect(squareRoot(25)).toBe(5);
    });

    test('should calculate square root of 2', () => {
      expect(squareRoot(2)).toBeCloseTo(1.414214, 5);
    });

    test('should calculate square root of zero', () => {
      expect(squareRoot(0)).toBe(0);
    });

    test('should calculate square root of one', () => {
      expect(squareRoot(1)).toBe(1);
    });

    test('should calculate square root of decimal numbers', () => {
      expect(squareRoot(2.25)).toBe(1.5);
    });

    test('should calculate square root of large numbers', () => {
      expect(squareRoot(1000000)).toBe(1000);
    });

    test('should throw error for square root of negative number', () => {
      expect(() => squareRoot(-4)).toThrow('Cannot calculate square root of a negative number');
    });

    test('should throw error for square root of negative decimal', () => {
      expect(() => squareRoot(-0.5)).toThrow('Cannot calculate square root of a negative number');
    });

    test('should handle very small positive numbers', () => {
      expect(squareRoot(0.01)).toBe(0.1);
    });
  });

  describe('Calculator Main Function - Advanced Operations', () => {
    describe('Modulo operator', () => {
      test('should calculate 5 % 2 = 1', () => {
        expect(calculator('5', '%', '2')).toBe(1);
      });

      test('should calculate with string numbers', () => {
        expect(calculator('10', '%', '3')).toBe(1);
      });

      test('should throw error for modulo by zero', () => {
        expect(() => calculator('10', '%', '0')).toThrow('Modulo by zero is not allowed');
      });
    });

    describe('Exponentiation operator', () => {
      test('should calculate 2 ** 3 = 8', () => {
        expect(calculator('2', '**', '3')).toBe(8);
      });

      test('should calculate 2 ^ 8 = 256', () => {
        expect(calculator('2', '**', '8')).toBe(256);
      });

      test('should handle decimal exponents', () => {
        expect(calculator('4', '**', '0.5')).toBe(2);
      });

      test('should handle negative exponents', () => {
        expect(calculator('2', '**', '-2')).toBe(0.25);
      });

      test('should handle zero exponent', () => {
        expect(calculator('10', '**', '0')).toBe(1);
      });
    });
  });
});
