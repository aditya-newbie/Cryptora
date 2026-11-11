
export function formatNumber(num: number): number {
  if (num >= 1 || num <= -1) {
    return Number(num.toFixed(2))
  } else if (num >= 0.01 || num <= -0.01) {
    return Number(num.toFixed(4))
  } else if (num >= 0.0001 || num <= -0.0001) {
    return Number(num.toFixed(6))
  } else return Number(num.toFixed(8))
}