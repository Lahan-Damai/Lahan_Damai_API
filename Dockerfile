# syntax=docker/dockerfile:1

ARG NODE_VERSION=22.7.0

FROM node:${NODE_VERSION}-alpine

ENV NODE_ENV production


WORKDIR /usr/src/app

# Download dependencies as a separate step to take advantage of Docker's caching.
# Leverage a cache mount to /root/.npm to speed up subsequent builds.
# Leverage a bind mounts to package.json and package-lock.json to avoid having to copy them into
# into this layer.
RUN --mount=type=bind,source=package.json,target=package.json \
    --mount=type=bind,source=package-lock.json,target=package-lock.json \
    --mount=type=cache,target=/root/.npm \
    npm ci --omit=dev

COPY . .

ARG DATABASE_URL
ENV DATABASE_URL ${DATABASE_URL}

ARG DIRECT_URL
ENV DIRECT_URL ${DIRECT_URL}

RUN npx prisma generate

USER node

EXPOSE 3001

# Run the application.
CMD ["node", "src/index.js"]
