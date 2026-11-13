# Keep this version equal to `packageManager` in package.json; CI checks it.
FROM oven/bun:1.4.4

# We extend the oven/bun image to add git, so git commands work inside the
# container.
RUN apt-get update && apt-get install -y --no-install-recommends git \
    && rm -rf /var/lib/apt/lists/*
