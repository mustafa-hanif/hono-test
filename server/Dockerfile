# use the official Bun image
# see all versions at https://hub.docker.com/r/oven/bun/tags
FROM oven/bun:canary-debian AS base
WORKDIR /usr/src/bun-app
# RUN apt-get update && apt-get install -y python3 python3-pip
# install dependencies into temp directory
# this will cache them and speed up future builds
FROM base AS install
RUN mkdir -p /temp/prod
COPY package.json bun.lockb /temp/prod/
RUN cd /temp/prod && bun install --frozen-lockfile --production

# copy node_modules from temp directory
# then copy all (non-ignored) project files into the image
FROM base AS prerelease
COPY --from=install /temp/prod/node_modules node_modules
COPY . .

# [optional] tests & build
ENV NODE_ENV=production
RUN bun run server-build
COPY . .

# run the app
USER bun
EXPOSE 3060/tcp
# ENTRYPOINT [ "bun", "run", "server-run" ]
CMD ["bash"]