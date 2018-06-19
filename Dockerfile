FROM node:8-alpine@sha256:d743b4141b02fcfb8beb68f92b4cd164f60ee457bf2d053f36785bf86de16b0d

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# It was set to info, which enables
# log output for downloading dependencies.
# there is no unset, right
ENV NPM_CONFIG_LOGLEVEL warn

# Could be set while building per --build-arg ...
ARG NODE_ENV
ENV NODE_ENV $NODE_ENV
# override default (info) to reduce output
ENV NPM_CONFIG_LOGLEVEL warn

EXPOSE 3000
CMD [ "npm", "start" ]

COPY package.json yarn.lock /usr/src/app/

# replacement for npm install
RUN yarn 
#LATER: re-add: --frozen-lockfile # don't generate a lockfile and fail if an update is needed

COPY . /usr/src/app

RUN yarn run build
