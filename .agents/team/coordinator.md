# Orchestrated run

The Senior Dev runs a whole issue as coordinator, using Orca orchestration.
Joan starts it once. It stops twice: when the spec is ready, and at the end.

Start it in the issue's worktree with `claude --agent senior-dev` and the
prompt "Run issue #<n> as described in `.agents/team/coordinator.md`".

## Settings

Change the Coder here, nowhere else.

- Coder agent: `opencode`
- Coder model: `opencode-go/deepseek-v4.1-flash`
- Reviewer agent: `claude`
- Review rounds: at most 3
- Wait for a worker: 900000 ms per check

## Before you start

1. The issue has the `ai:ready` label. If not, stop and ask Joan.
2. You are in a worktree, not on `main`.
3. `orca status --json` succeeds.
4. Run `orca skills get orchestration --full` and read it. If a flag in this
   file differs from the guide, the guide wins and you tell Joan.
5. Use `--json` on every `orca` command.

## Steps

1. **Spec.** Do "1. Spec" in `senior-dev.md`. Then stop and ask Joan to approve
   `.agents/work/spec.md` in the chat. Go on only after a clear yes.
2. **Run.** Create it with
   `orca orchestration run-create --objective "Issue #<n>: <title>"`.
3. **Implement.** Repeat for each round, up to 3:
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
   6. Review as "2. Review" in `senior-dev.md` says: run the checks yourself and
      write `.agents/work/review.md` with the `Verdict:` line.
   7. If the verdict is "approved", leave the loop. If it is "changes
      requested", start the next round. After round 3, stop and tell Joan
      what is still open.
4. **Pull request.** Do "3. Pull request" in `senior-dev.md`.
5. **PR review.** Create a task and start a worker with the reviewer agent. Its
   task spec is: "You are the PR reviewer. Read
   `.agents/team/pr-reviewer.md` and review PR #<number>. Do not read
   `.agents/work/`." Wait, then release it.
6. **Comments.** Do "4. PR comments" in `senior-dev.md`. Send the accepted ones
   to the Coder as one more round, then push.
7. **Finish.** Tell Joan the PR is ready for review, with the URL, the number of
   rounds used, and anything left open. Do not merge or close.

## Rules

- Start no other worker than the ones above.
- Never run `orca orchestration reset` and never touch other runs or terminals.
- Release every worker you start when it is done.
- Workers share this worktree. Never run two that edit files at the same time.
- If anything fails in a way this file does not cover, stop and report the exact
  message. Do not improvise around it.
