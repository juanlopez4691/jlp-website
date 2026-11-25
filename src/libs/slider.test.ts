import { expect, test } from "bun:test"
import { currentStop, sliderStops } from "./slider"

test("two in view: the last item is clamped and shares a stop", () => {
  expect(sliderStops([0, 173, 346, 519], 346)).toEqual([0, 173, 346])
})

test("two rows share stops", () => {
  expect(sliderStops([0, 346, 692, 0, 346], 692)).toEqual([0, 346, 692])
})

test("2px apart is one stop", () => {
  expect(sliderStops([0, 173, 344, 519], 346)).toEqual([0, 173, 344])
})

test("3px apart is two stops", () => {
  expect(sliderStops([0, 173, 343, 519], 346)).toEqual([0, 173, 343, 346])
})

test("an item that cannot reach the left edge has its own stop", () => {
  expect(sliderStops([0, 293, 586], 520)).toEqual([0, 293, 520])
})

test("a track that cannot scroll has one stop", () => {
  expect(sliderStops([0, 346, 692], 0)).toEqual([0])
})

test("currentStop gives the nearest stop", () => {
  const stops = [0, 346, 692]

  expect(currentStop(stops, 0)).toBe(0)
  expect(currentStop(stops, 172)).toBe(0)
  expect(currentStop(stops, 174)).toBe(1)
  expect(currentStop(stops, 518)).toBe(1)
  expect(currentStop(stops, 520)).toBe(2)
  expect(currentStop(stops, 692)).toBe(2)
})
