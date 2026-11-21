

export function changeTextClass(change: number | null | undefined) {
  if (change == null) {
    return "text-gray-400";
  }

  return change < 0 ? "text-loss" : "text-gain";
}