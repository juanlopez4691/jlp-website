/**
 * The scroll stops of a slider: one per position where an item can rest against
 * the left edge. Cards that share a position share a stop, which is why a
 * two-row grid, whose rows repeat the same offsets, gives as many stops as a
 * single row. Each offset is clamped to what the track can scroll, so a last
 * card that cannot reach the edge still gets its own stop.
 *
 * @param offsets - The left offset of each item, measured from the track's
 *   content edge.
 * @param max - The furthest the track can scroll: `scrollWidth - clientWidth`.
 *
 * @returns The stops, ascending, at least 2px apart.
 */
export function sliderStops(offsets: number[], max: number): number[] {
  const stops: number[] = []

  for (const offset of offsets
    .map((offset) => Math.min(Math.max(offset, 0), max))
    .sort((a, b) => a - b)) {
    const last = stops.at(-1)
    // Browsers round layout to whole pixels, so equal positions can differ by 1.
    if (last === undefined || offset - last >= 2) stops.push(offset)
  }

  return stops
}

/**
 * The stop the track is nearest to, which is the dot that is current.
 *
 * @param stops - The stops, ascending, as `sliderStops` returns them.
 * @param position - Where the track is scrolled to, in pixels.
 *
 * @returns The index of the nearest stop, and 0 when there is none.
 */
export function currentStop(stops: number[], position: number): number {
  let nearest = 0

  for (const [index, stop] of stops.entries())
    if (
      index > 0 &&
      Math.abs(stop - position) < Math.abs((stops[nearest] ?? 0) - position)
    )
      nearest = index

  return nearest
}
