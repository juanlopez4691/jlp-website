import { expect, test } from "bun:test"
import { currentStop, sliderStops } from "./slider"

/** One card per stop: 326 wide with a gap of 20, in a track of 326. */
const oneRow = [0, 346, 692, 1038, 1384, 1730]

test("one row, one in view, one stop per card", () => {
  expect(sliderStops(oneRow, 1730)).toEqual(oneRow)
})

test("one row, two in view, the cards that share a position share a stop", () => {
  expect(sliderStops([0, 173, 346, 519], 346)).toEqual([0, 173, 346])
})

test("a last offset a pixel off the maximum does not add a stop", () => {
  expect(sliderStops([0, 173, 346, 347], 346)).toEqual([0, 173, 346])
})

test("stops 2 pixels apart merge into one", () => {
  expect(sliderStops([0, 173, 175, 346], 346)).toEqual([0, 173, 346])
})

test("two rows repeat the offsets of the first, and they merge", () => {
  expect(sliderStops([0, 346, 692, 0, 346, 692], 692)).toEqual([0, 346, 692])
  expect(sliderStops([0, 346, 692, 0, 346], 692)).toEqual([0, 346, 692])
})

test("a last card that cannot reach the left edge is clamped, and keeps its stop", () => {
  expect(sliderStops([0, 173, 346], 200)).toEqual([0, 173, 200])
})

test("a track that cannot scroll has one stop", () => {
  expect(sliderStops([0, 0, 0], 0)).toEqual([0])
  expect(sliderStops([], 0)).toEqual([])
})

test("the current stop is the nearest one, from the first to the last", () => {
  const stops = [0, 346, 692]

  expect(currentStop(stops, 0)).toBe(0)
  expect(currentStop(stops, 692)).toBe(2)
  expect(currentStop(stops, 699)).toBe(2)
  expect(currentStop(stops, 500)).toBe(1)
  expect(currentStop([], 120)).toBe(0)
})
