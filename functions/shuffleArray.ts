export default function shuffleArray(arr: any[]) {
  return arr
    .map(value => ({ value, random: Math.random() }))
    .sort((a, b) => a.random - b.random)
    .map(({ value }) => value)
} 