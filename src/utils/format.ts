import type { ChartData } from "../types/Coin";

export function formatNumber(num: number | undefined | null): number | null {
  if (!num) {
    return null
  }

  if (num >= 1 || num <= -1) {
    return Number(num.toFixed(2))
  } else if (num >= 0.01 || num <= -0.01) {
    return Number(num.toFixed(4))
  } else if (num >= 0.0001 || num <= -0.0001) {
    return Number(num.toFixed(6))
  } else return Number(num.toFixed(8))
}

export function formatMatricPrefix(num: number | undefined | null): string {

  if (!num) return ""
  if (num >= 10 ** 12) {
    return (num / 10 ** 12).toFixed(2) + "T"
  } else if (num >= 10 ** 9) {
    return (num / 10 ** 9).toFixed(2) + "B"
  } else if (num >= 10 ** 6) {
    return (num / 10 ** 6).toFixed(2) + "M"
  } else { return String(num) }
}

export function capitalise(str: string | undefined): string {
  if (!str) return "";

  return str.charAt(0).toUpperCase() + str.slice(1);
}


export function getTimeTicks(data: ChartData[]): number[] {
  const tickCount = 7;

  if (data.length === 0) return [];

  if (data.length <= tickCount) {
    return data.map(point => point.time);
  }

  const step = (data.length - 1) / (tickCount - 1);

  return Array.from({ length: tickCount }, (_, i) => {
    const index = Math.round(i * step);
    return data[index].time;
  });

}

export function getPriceTicks(data: ChartData[], tickCount = 5): number[] {
  if (data.length === 0) return [];

  const prices = data.map(point => point.price);

  const min = Math.min(...prices);
  const max = Math.max(...prices);

  if (min === max) return [min];

  const step = (max - min) / (tickCount - 1);

  return Array.from({ length: tickCount }, (_, i) => {
    return min + step * i;
  });
}