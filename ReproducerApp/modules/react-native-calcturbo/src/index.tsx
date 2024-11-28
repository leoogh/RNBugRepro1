const Calcturbo = require('./NativeCalcturbo').default;

export function multiply(a: number, b: number): number {
  return Calcturbo.multiply(a, b);
}
