# Orchestrated run

The Senior Dev runs a whole issue as coordinator, using Orca orchestration.
Joan starts it once and is asked for two things: to approve the spec, and to
review the finished PR. Everything between is yours. Do not ask Joan whether to
continue.

Start it in the issue's worktree with `claude --agent senior-dev` and a prompt
such as "Run issue #<n>". Any prompt that names an issue is an orchestrated run,
unless Joan says "only the spec" or "only the backlog".

## Settings

Change the Coder here, nowhere else.

- Coder agent: `opencode`
- Coder model: `opencode-go/deepseek-v4.1-flash`
- Reviewer agent: `claude`
- Review rounds: at most 3
- Wait for a worker: 900000 ms per check

## Hard rules

- Only a Coder worker changes the code. You write in `.agents/work/` and
  nowhere else, and a hook blocks anything else. Do not work around it with
  `sed`, `tee` or shell redirects.
- If a Coder round fails twice in a row, stop and tell Joan. Do not take over
  the implementation.
- Start no other worker than the ones named below.
- Never run `orca orchestration reset`, and never touch other runs or terminals.
- Release every worker you start when it is done.
- Workers share this worktree. Never run two that edit files at once.
- If something fails in a way this file does not cover, stop and report the
  exact message. Do not improvise around it.

## Run log

Keep `.agents/work/run.md`: one line per finished step, with the step name and
the ids involved (run, task, dispatch, PR). If it already exists when you start,
resume after its last line instead of starting again.

## Before you start

1. The issue has the `ai:ready` label. If not, stop and ask Joan.
2. You are in a worktree, not on `main`.
3. The branch contains `origin/main`: run `git fetch origin` and
   `git merge-base --is-ancestor origin/main HEAD`. If it fails, stop and
   ask Joan to rebase before you write the spec.
4. `orca status --json` succeeds.
5. Run `orca skills get orchestration --full` and read it. If a flag in this
   file differs from the guide, the guide wins and you tell Joan.
6. Use `--json` on every `orca` command.
7. Create the Run with
   `orca orchestration run-create --objective "Issue #<n>: <title>"`. Your first
   message to Joan is one line: `Coordinator run <run id> for issue #<n>`.

## Steps

1. **Spec.** Do "1. Spec" in `senior-dev.md`. Then stop and ask Joan to approve
   `.agents/work/spec.md`. Go on only after a clear yes. This is the only stop
   before the end.
2. **Implement.** Repeat for each round, up to 3:
   1. Create a task with `task-create --task-title` and `--spec`. The spec text
      is: "You are the Coder. Read `.agents/team/coder.md` and `AGENTS.md`,
      then do the "Implement" section for `.agents/work/spec.md`" in round 1,
      or the "Fix a review" section for `.agents/work/review.md` in later
      rounds. Finish with `worker_done`."
   2. Start the worker with `worker-start --task <id> --worktree current
--agent <coder agent> --model <coder model>`.
   3. Wait with `check --wait --types worker_done,escalation,question
--timeout-ms <wait>`, then `check --ack <deliveryId>`. Answer a
      `question` from the spec. If the spec does not answer it, ask Joan.
   4. Heartbeats and terminal activity mean the worker is alive, not done.
      Do not stop it only because it has not finished. If a wait times out,
      look with `worker-show` and `worker-read`, then decide.
   5. After an accepted `worker_done`, run `worker-release`.
   6. Check that `.agents/work/handoff.md` exists and that the code changed
      (`git diff main...HEAD --stat`). If not, the round failed.
   7. Review as "2. Review" in `senior-dev.md` says: run the checks yourself
      and write `.agents/work/review.md` with the `Verdict:` line.
   8. If the verdict is "approved", leave the loop. If it is "changes
      requested", start the next round. After round 3, stop and tell Joan
      what is still open.
3. **Pull request.** Do "3. Pull request" in `senior-dev.md`.
4. **PR review.** Create a task and start a worker with the reviewer agent. Its
   task spec is: "You are the PR reviewer. Read
   `.agents/team/pr-reviewer.md` and review PR #<number>. Do not read
   `.agents/work/`." Wait, then release it.
5. **Comments.** Do "4. PR comments" in `senior-dev.md`. Send the accepted ones
   to the Coder as one more round, then push.
6. **Finish.** Tell Joan the PR is ready for review, with the URL, the number of
   rounds used, the tasks that ran, and anything left open. Do not merge or
   close.

After each step, add its line to `.agents/work/run.md`.
