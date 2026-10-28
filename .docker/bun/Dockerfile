FROM oven/bun

# We extend the oven/bun image to add git, so git commands work inside the
# container.
RUN apt-get update && apt-get install -y --no-install-recommends git \
    && rm -rf /var/lib/apt/lists/*
