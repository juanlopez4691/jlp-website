import { expect, test } from "bun:test"
import { markdownToHtml } from "satteri"
import { markdownScrollable } from "./markdownScrollable"

const render = (source: string) =>
  markdownToHtml(source, { hastPlugins: [markdownScrollable] }).html

test("a table is wrapped in a named, focusable region", () => {
  const html = render("| Name | Price |\n| --- | --- |\n| A | 1 |")

  expect(html).toContain(
    '<div class="table-scroll" role="region" aria-label="Name, Price" tabindex="0">'
  )
})

test("column alignment becomes a class, not an inline style", () => {
  const html = render("| Name | Price |\n| :--- | ---: |\n| A | 1 |")

  expect(html).toContain('<th class="text-left">Name</th>')
  expect(html).toContain('<th class="text-right">Price</th>')
  expect(html).toContain('<td class="text-left">A</td>')
  expect(html).not.toContain("style=")
})

test("a cell with no alignment gets no class", () => {
  const html = render("| Name | Price |\n| :--- | --- |\n| A | 1 |")

  expect(html).toContain("<th>Price</th>")
})

test("a code block's pre can be reached by the keyboard", () => {
  expect(render("```js\nconst a = 1\n```")).toContain('<pre tabindex="0">')
})

test("a table with empty headers gets no empty name, and stays focusable", () => {
  const html = render("|  |  |\n| --- | --- |\n| A | 1 |")

  expect(html).toContain('<div class="table-scroll" tabindex="0">')
  expect(html).not.toContain("aria-label")
  expect(html).not.toContain('role="region"')
})
