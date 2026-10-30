---
name: backlog
description: Plan the site's work as GitHub issues, one per block or page. Use only when Joan asks to plan, organize or create the backlog.
allowed-tools: Read, Glob, Grep, Bash(gh issue:*), Bash(gh repo view:*)
---

# Plan the backlog

Follow these steps in order.

1. **Read the sources.** Read the design repo as `AGENTS.md` says
   (`../jlp-website-design`: `README.md` and `components/<Name>/README.md`) and
   take the blocks in the order of the `02 Home` page. Run
   `gh issue list --state all` so nothing is duplicated. If the design repo does
   not list the blocks, ask Joan. Do not guess them. A block can have a
   reference image at `components/<Name>/xl.png` in the design repo (Joan
   exports it from Penpot). List which blocks have one with Glob.
2. **Propose the list in the chat. Create nothing yet.** For each item give:
   - a title in commit style, such as `feat: add hero block` (no scope, no
     "and");
   - a one-line goal;
   - its order and what it depends on (`after #n`, or the item's position
     until the numbers exist);
   - the atoms and molecules it reuses and the ones it introduces. The first
     block that needs an atom builds it.
   - whether it has a reference image. If some blocks have none, say which, and
     ask Joan to export them. Never invent or describe an image that is not
     there.
   - Ask Joan to confirm the images are committed and pushed to the design repo
     before you create the issues, because the links return 404 until then.
3. **Wait for Joan's answer.** Apply his changes and show the list again if it
   changed much.
4. **Create the issues in order**, so a dependency can name a real issue
   number: `gh issue create --title "<title>" --body-file <file>`. Write each
   body file in a temporary directory, not in the repo. Use this body:

   ```markdown
   ## Goal

   <One sentence.>

   ## Design

   - Penpot: `<component name>`, variants xl, md, base (names as in the
     component README)
   - Spec: `components/<Name>/README.md` in the design repo
   - Reference image (xl): [<Name> at xl](https://github.com/juanlopez4691/jlp-website-design/blob/main/components/<Name>/xl.png),
     or "none yet"

   ## Depends on

   <#n, or "nothing">

   ## Acceptance outline

   - <3 to 6 points, each one checkable>

   ## Not in this issue

   - <...>
   ```

   Link the image, do not embed it: whether an embedded image from the design
   repo renders inside an issue depends on that repo's visibility, and a link
   works either way. The body has no implementation detail. The Senior Dev writes the spec when
   the work starts, against the code as it is then.

5. **Report** the issues with their URLs. Never close, delete, edit or reorder
   existing issues, and do not add labels, milestones or assignees unless Joan
   asks.
