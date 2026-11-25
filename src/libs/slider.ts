// Items that rest at the same position share a stop.
export function sliderStops(offsets: number[], max: number): number[] {
  const stops: number[] = []

  for (const offset of offsets.map((offset) => Math.min(offset, max))) {
    const last = stops.at(-1)
    // Browsers round layout, so equal positions can differ by up to 2px.
    if (last === undefined || offset - last > 2) stops.push(offset)
  }

  return stops
}

export function currentStop(stops: number[], position: number): number {
  let nearest = 0

  for (const [index, stop] of stops.entries())
    if (Math.abs(stop - position) < Math.abs(stops[nearest] - position))
      nearest = index

  return nearest
}
