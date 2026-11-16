/*
 * `@types/bun` is not installed, so `astro check` needs this to type-check
 * `bun:test`. Only what the tests use.
 */
declare module "bun:test" {
  type Matchers = {
    toBe(expected: unknown): void
    toContain(expected: string): void
    toEqual(expected: unknown): void
    toThrow(expected?: string | RegExp): void
  }

  export function expect(actual: unknown): Matchers & { not: Matchers }

  export function test(name: string, fn: () => void | Promise<void>): void
}
