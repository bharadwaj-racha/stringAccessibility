export const stringCalculator = (input: string): number => {
  if (!input.trim()) return 0;

  let numbersPart = input;
  let delimiter = /,|\n/;

  const customDelimiterMatch = input.match(/^\/\/(.+)\n(.*)$/);
  if (customDelimiterMatch) {
    delimiter = new RegExp(customDelimiterMatch[1]);
    numbersPart = customDelimiterMatch[2];
  }

  const tokens = numbersPart.split(delimiter).map((n) => n.trim());
  const numbers: number[] = [];

  for (const token of tokens) {
    if (token === '') continue;
    const num = Number(token);

    if (isNaN(num)) {
      throw new Error(`Invalid number: "${token}"`);
    }

    if (num < 0) {
      throw new Error(`Negative numbers not allowed: ${num}`);
    }

    if (num <= 1000) {
      numbers.push(num);
    }
  }

  return numbers.reduce((sum, n) => sum + n, 0);
};
