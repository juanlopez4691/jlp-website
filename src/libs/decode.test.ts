import { expect, test } from "bun:test"
import { decodeFrame, settleTimes } from "./decode"

const DURATION = 700
const glyphFor = () => "*"

test("a character settles inside the duration, left to right", () => {
  const times = settleTimes(12, DURATION, () => 0.5)

  expect(times).toHaveLength(12)
  times.forEach((time) => {
    expect(time).toBeGreaterThanOrEqual(0)
    expect(time).toBeLessThanOrEqual(DURATION)
  })
  for (let index = 1; index < times.length; index++)
    expect(times[index]).toBeGreaterThanOrEqual(times[index - 1])
})

test("the extremes of the random stay inside the duration", () => {
  for (const random of [() => 0, () => 1]) {
    const times = settleTimes(6, DURATION, random)
    expect(Math.min(...times)).toBeGreaterThanOrEqual(0)
    expect(Math.max(...times)).toBeLessThanOrEqual(DURATION)
  }
})

test("spaces never scramble and a frame keeps the target length", () => {
  const target = "solid web"
  const settleAt = settleTimes(target.length, DURATION, () => 0.5)

  for (const elapsed of [-1, 0, 250, DURATION]) {
    const frame = decodeFrame(target, elapsed, settleAt, glyphFor)
    expect(frame).toHaveLength(target.length)
    ;[...target].forEach((char, index) => {
      if (char === " ") expect(frame[index]).toBe(" ")
    })
  }
})

test("every position is settled at the end of the decode", () => {
  const target = "solid web"
  const settleAt = settleTimes(target.length, DURATION, () => 1)

  expect(decodeFrame(target, DURATION, settleAt, glyphFor)).toBe(target)
})

test("no target letter shows before the decode starts", () => {
  const target = "solid web"
  const settleAt = settleTimes(target.length, DURATION, () => 0)
  const expected = [...target]
    .map((char) => (char === " " ? char : glyphFor()))
    .join("")

  expect(decodeFrame(target, -1, settleAt, glyphFor)).toBe(expected)
})
