/** Glyphs a letter shows while it decodes. */
export const GLYPHS = "abcdefghijklmnopqrstuvwxyz!#$%&*+-/<=>?@^_~[]{}()\\"

/** When each character settles: left to right with jitter, within `[0, duration]`. */
export const settleTimes = (
  count: number,
  duration: number,
  random: () => number = Math.random
): number[] =>
  Array.from(
    { length: count },
    (_, index) => ((index + 2 * random()) / (count + 1)) * duration
  )

/** One frame: settled characters and whitespace show the target, the rest a glyph. */
export const decodeFrame = (
  target: string,
  elapsed: number,
  settleAt: number[],
  glyphFor: (char: string) => string
): string =>
  [...target]
    .map((char, index) =>
      /\s/.test(char) || (settleAt[index] ?? 0) <= elapsed
        ? char
        : glyphFor(char)
    )
    .join("")
