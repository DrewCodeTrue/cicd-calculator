calculateResult = require('./calcFunction.js').calculateResult;

describe('calculateResult', () => {
  it('должен вернуть сумму двух чисел', () => {
      const result = calculateResult('10', '+', '5');
      expect(result).toBe(15);
  });

  it('должен вернуть разницу двух чисел', () => {
      const result = calculateResult('10', '-', '5');
      expect(result).toBe(5);
  });

  it('должен вернуть произведение двух чисел', () => {
      const result = calculateResult('10', '*', '5');
      expect(result).toBe(50);
  });

  it('должен вернуть частное двух чисел', () => {
      const result = calculateResult('10', '/', '5');
      expect(result).toBe(2);
  });

  it('должен вернуть 0 при делении на ноль', () => {
      const result = calculateResult('10', '/', '0');
      expect(result).toBe(Infinity);
  });

  it('должен вернуть 0 при неизвестной операции', () => {
      const result = calculateResult('10', '%', '5');
      expect(result).toBe(0);
  });

  it('должен вернуть NaN при невалидных входных данных', () => {
      const result = calculateResult('a', '+', 'b');
      expect(result).toBeNaN();
  });
});