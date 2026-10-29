---
name: git-commit
description: Commit finished work in this repo, one topic per commit, following its commit rules. Use whenever changes are ready to commit, not only when asked for a message.
allowed-tools: Bash(git status:*), Bash(git diff:*), Bash(git log:*), Bash(git add:*), Bash(git commit:*), Bash(git branch:*)
---

# Commit changes

Follow these steps in order.

1. **Check the branch.** Run `git branch --show-current`. If it is `main`, stop
   and tell the user: agents do not commit to `main`.
2. **Look at the changes.** Run `git status --short` and `git diff`, plus
   `git log --oneline -10` to match the existing subjects. Stop if there is
   nothing to commit.
3. **Split by topic.** One topic per commit. If the changes cover several
   topics (a new component and a config change, say), commit them one after the
   other, staging only the paths of that topic with `git add <paths>`. Never
   `git add .` or `git add -A`. A commit never mixes these three categories:
   `content`, `ai`, and everything else.
4. **Pick the type.** Conventional Commits types, no scope, plus two:
   - `content`: site copy, translations and the assets they reference.
   - `ai`: agent instructions and skills (`AGENTS.md`, `CLAUDE.md`, `.claude/`).

   Use `feat` for new site behavior or components, `fix`, `refactor`, `style`
   (formatting only), `docs`, `build` (dependencies, build setup) and `chore`.
   - Wiring in a new tool is `build: setup <tool>`. Building a feature on top
     of a tool that is already installed is `feat`.
   - Dependencies: one dependency per commit, and never add, remove and update
     in the same commit. Subjects: `build: add dependency <name> <version>`,
     `build: remove dependency <name>` and
     `build: update dependency <name> to <version>`.

5. **Write the subject.** `type: lowercase imperative description`, about 50
   characters (up to 60 when needed, never padded), no final period, no "and".
   Say what changed in plain words, like `feat: add button component`.
6. **No body.** If the reason is not obvious from the subject, make the
   subject clearer or split the commit.
7. **Commit.** Run `git commit -m "<subject>"`.
   - Add the trailers the session asks for, if any, each as its own `-m` so
     they form a footer after a blank line. Keep each trailer line under 100
     characters. Use the real model name of the session; never copy an example
     or guess.
   - For a fixup of an earlier commit on the branch, use
     `git commit --fixup=<sha>` with no trailers.
   - The pre-commit hook formats the staged files and the commit-msg hook runs
     commitlint, both inside the Docker container.
   - If the hook says the container is not running, run `./scripts/up.sh` and
     commit again. Never run the checks on the host as a replacement.
   - If a hook fails, fix the cause and commit again. Never use `--no-verify`.
     If you cannot fix it, stop and report the error.
8. **Report.** Show `git log --oneline` for the new commits. Do not push.
