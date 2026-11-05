---
title: Test page
updated: 2026-11-04
noindex: true
---

Intro paragraph with [a link](#links), **bold**, _italic_ and `inline code`. A long paragraph wraps in several lines so the line height and the column width can be compared with the design: lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.

But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness.

No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful.

Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure.

To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying conse

## Who runs this site

Paragraph after an h2.

### How to get in touch

Paragraph after an h3.

#### What to include

Paragraph after an h4.

##### Language of replies

Paragraph after an h5.

###### A note on screen readers

Paragraph after an h6.

## Lists

- First item
- Second item with a longer text that wraps in two or three lines, to check that the wrapped lines align with the first one and not with the bullet of the item.
  - Nested item
  - Nested item
- Item with two paragraphs.

  Second paragraph of the same item.

1. First step
2. Second step
   1. Sub step
   2. Sub step

## Terms

<dl>
  <dt>Term</dt>
  <dd>Description of the term.</dd>
  <dt>Another term</dt>
  <dd>Another description.</dd>
</dl>

<blockquote>
  <p>A quote with an attribution below it.</p>
  <footer>Someone, somewhere</footer>
</blockquote>

## Table

<div class="table-scroll" role="region" aria-label="Sample table" tabindex="0">
  <table>
    <caption>Table caption</caption>
    <thead>
      <tr><th>Name</th><th>Purpose</th><th>Duration</th><th>Owner</th></tr>
    </thead>
    <tbody>
      <tr><td>session</td><td>Keeps you signed in</td><td>1 day</td><td>First party</td></tr>
      <tr><td>theme</td><td>Remembers the theme</td><td>1 year</td><td>First party</td></tr>
    </tbody>
  </table>
</div>

A plain Markdown table, with no wrapper:

| Name    | Purpose             | Duration | Owner       |
| ------- | ------------------- | -------- | ----------- |
| session | Keeps you signed in | 1 day    | First party |
| theme   | Remembers the theme | 1 year   | First party |

## Code

```js
const longLine =
  "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
```

### A long unbroken string

https://example.com/a/very/long/path/that/never/breaks/and/keeps/going/and/going/and/going/until/it/is/longer/than/the/column

<h2 id="links">Links</h2>

[External link](https://example.com) and [internal link](#links).

A paragraph with [a longer external link that wraps over the end of the line so the icon can be checked in that case too, as it can happen in real text](https://example.com/long) and [a link to this site](https://lojopez.dev/es/).

## Long lists

1. One
2. Two
3. Three
4. Four
5. Five
6. Six
7. Seven
8. Eight
9. Nine
10. Ten
11. Eleven
12. Twelve

---

End of the sample.

## Figure with caption

<figure>

![Two old telephones, engraved](../../../assets/telephones.webp)

<figcaption>A caption below the image, in a smaller size.</figcaption>
</figure>

## Footnotes

A sentence with a footnote.[^1] And a second one.[^2]

[^1]: The first note, with [a link](#links).

[^2]: The second note.

## Edge cases

| Left | Centre | Right |
| :--- | :----: | ----: |
| a    |   b    |     c |

### A heading with [a link](https://example.com/h) inside

Broken [bad](http://), upper [UP](HTTPS://EXAMPLE.COM), protocol [rel](//example.com/x), [mail](mailto:a@b.c), [own](https://lojopez.dev/x) and [relative](/es/).

## Many columns

| One     | Two                 | Three | Four        | Five | Six | Seven                      |
| ------- | ------------------- | ----- | ----------- | ---- | --- | -------------------------- |
| session | Keeps you signed in | 1 day | First party | Yes  | No  | A longer purpose text here |
