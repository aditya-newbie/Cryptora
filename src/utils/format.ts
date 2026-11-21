import dayjs from "dayjs"

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

export function formatChartPrice(price: number): string {

  if (price < 1) {
    return String(price.toFixed(6))
  } else if (price < 10) {
    return String(price.toFixed(4))
  } else if (price < 1000) {
    return String(price.toFixed(2))
  } else if (price < 10 ** 6) {
    return `${(price / 1000).toFixed(1)}k`
  } else if (price < 10 ** 9) {
    return `${(price / 10 ** 6).toFixed(2)}M`
  } else if (price < 10 ** 12) {
    return `${(price / 10 ** 9).toFixed(2)}B`
  } else {
    return `${(price / 10 ** 12).toFixed(2)}T`
  }
}

export function formatChartTime(timeMs: number, timeSpan: string): string {

  switch (timeSpan) {
    case "24h":
      return dayjs(timeMs).format("ha");
    case "7d":
      return dayjs(timeMs).format("dddd");
    case "1m":
      return dayjs(timeMs).format("D MMM");
    case "3m":
      return dayjs(timeMs).format("D MMM");
    case "1y":
      return dayjs(timeMs).format("MMM");
    default:
      return dayjs(timeMs).format("DD MMM YYYY")
  }
}