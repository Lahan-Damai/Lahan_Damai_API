# syntax=docker/dockerfile:1

ARG NODE_VERSION=18.18.0

FROM node:${NODE_VERSION}-alpine

ENV NODE_ENV production


WORKDIR /usr/src/app

# Download dependencies as a separate step to take advantage of Docker's caching.
# Leverage a cache mount to /root/.npm to speed up subsequent builds.
# Leverage a bind mounts to package.json and package-lock.json to avoid having to copy them into
# into this layer.
COPY package.json package-lock.json ./
RUN npm ci --omit=dev

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
