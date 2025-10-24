import { describe, it, expect } from 'vitest';
import { stringCalculator } from './stringCalculator';

describe('stringCalculator', () => {
  it('returns 0 for empty string', () => {
    expect(stringCalculator('')).toBe(0);
  });

  it('adds comma-separated numbers', () => {
    expect(stringCalculator('1,2,3')).toBe(6);
  });

  it('handles newlines as delimiters', () => {
    expect(stringCalculator('1\n2,3')).toBe(6);
  });

  it('supports custom delimiter ";"', () => {
    expect(stringCalculator('//;\n1;2;3')).toBe(6);
  });

  it('ignores empty values', () => {
    expect(stringCalculator('1,\n,2')).toBe(3);
  });

  it('throws error for invalid characters', () => {
    expect(() => stringCalculator('1,a,3')).toThrow('Invalid number: "a"');
  });

  it('throws error for negative numbers', () => {
    expect(() => stringCalculator('1,-2,3')).toThrow('Negative numbers not allowed: -2');
  });

  it('ignores numbers greater than 1000', () => {
    expect(stringCalculator('2,1001')).toBe(2);
  });

  it('works with single number input', () => {
    expect(stringCalculator('7')).toBe(7);
  });

  it('works with multiple custom delimiters in string', () => {
    expect(stringCalculator('//;\n1;2;3')).toBe(6);
    expect(stringCalculator('//#\n4#5#6')).toBe(15);
  });

  it('trims spaces around numbers', () => {
    expect(stringCalculator(' 1 , 2 ,3 ')).toBe(6);
  });

  it('handles mixed commas and newlines with spaces', () => {
    expect(stringCalculator('1, \n2 ,3')).toBe(6);
  });
});
