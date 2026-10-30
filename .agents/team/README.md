# Agent team

Three roles, one worktree per PR (see "Workflow" in `AGENTS.md`). These files
are the source of truth for each role. `.claude/agents/` and `.pi/prompts/`
only point at them.

| Role        | Harness                  | Start with                   | Job                    |
| ----------- | ------------------------ | ---------------------------- | ---------------------- |
| Senior Dev  | Claude Code              | `claude --agent senior-dev`  | Spec, review, draft PR |
| Coder       | Pi, an OpenCode Go model | `pi`, then `/implement`      | Implement and commit   |
| PR reviewer | Claude Code              | `claude --agent pr-reviewer` | Cold review of the PR  |

Opening the PR is part of the Senior Dev role. The Senior Dev also does any web
research. On request, it also plans the backlog with the `backlog` skill: it proposes a
list of GitHub issues and creates them only after Joan approves the list. Neither
has a separate agent.

## Work files

The roles hand work to each other through files in `.agents/work/`. They are
git-ignored and live in one worktree only:

- `spec.md`: written by the Senior Dev, read by the Coder.
- `handoff.md`: written by the Coder when it stops, read by the Senior Dev.
- `review.md`: written by the Senior Dev, read by the Coder.

Templates are in `.agents/templates/`. Anything that should outlive the PR (a
rule, a convention, a decision) goes into `AGENTS.md` or the design repo. The
Senior Dev proposes it in the PR body and never edits `AGENTS.md` itself.

## Flow

1. Joan creates the worktree and starts the Senior Dev with a brief (a prompt,
   or a GitHub or Linear issue).
2. The Senior Dev writes `spec.md`. Joan answers its open questions.
3. The Coder runs `/implement`: code, checks, commits, `handoff.md`.
4. The Senior Dev reviews and writes `review.md`. If changes are requested, the
   Coder runs `/fix-review`. Repeat, at most 3 rounds, then Joan decides.
5. When the review is approved and the checks pass, the Senior Dev pushes the
   branch and opens a draft PR with `gh`.
6. The PR reviewer reads the PR cold and comments on GitHub.
7. The Senior Dev triages each comment in `review.md` (accept or reject, with a
   reason). The Coder fixes the accepted ones. The Senior Dev pushes.
8. The PR reviewer reports that the PR is ready. Joan reviews and merges.

## Rules for every role

- `AGENTS.md` applies in full.
- Only Joan merges or closes a PR. Nobody uses `--no-verify`.
- Do not read or print `.env`.
- Stop and ask Joan when the design or the spec does not answer something.
  Do not guess.

## Coder model

Export `OPENCODE_API_KEY` (the OpenCode Go key), start `pi`, and pick the
`opencode-go` provider with `/model`. To change the model later, run `/model`
again. Nothing else depends on it.
