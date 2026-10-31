#!/usr/bin/env python3
"""Block the Senior Dev from changing files outside .agents/work/.

A PreToolUse hook registered in .claude/settings.json for Edit and Write. Exit
code 2 blocks the call and shows the message to the agent. It only acts when
agent_type is "senior-dev", a session started with `claude --agent senior-dev`.
The Coder worker changes the code, not the Senior Dev.
"""
import json
import os
import sys

ALLOWED_TEMP = ("/tmp/", "/private/tmp/", "/var/folders/", "/private/var/folders/")

try:
    data = json.load(sys.stdin)
except Exception:
    sys.exit(0)

if data.get("agent_type") != "senior-dev":
    sys.exit(0)

path = (data.get("tool_input") or {}).get("file_path") or ""
cwd = data.get("cwd") or os.getcwd()
root = os.environ.get("CLAUDE_PROJECT_DIR") or cwd
if not path:
    sys.exit(0)

full = os.path.realpath(path if os.path.isabs(path) else os.path.join(cwd, path))
work = os.path.realpath(os.path.join(root, ".agents", "work")) + os.sep

if full.startswith(work) or full.startswith(ALLOWED_TEMP):
    sys.exit(0)

print(
    f"Blocked: the Senior Dev only writes in .agents/work/ (tried {path}). "
    "Implementation is done by the Coder worker. Write a task for it instead.",
    file=sys.stderr,
)
sys.exit(2)
