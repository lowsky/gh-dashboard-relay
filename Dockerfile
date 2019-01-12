FROM node:8-alpine@sha256:d75742c5fd41261113ed4706f961a21238db84648c825a5126ada373c361f46e

RUN mkdir -p /usr/src/app && mkdir -p /usr/src/app/server
WORKDIR /usr/src/app/server

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

COPY server/package.json server/yarn.lock /usr/src/app/server/
# fetch server dependencies
RUN yarn

COPY package.json yarn.lock /usr/src/app/
# fetch client dependencies
RUN cd .. ; yarn --frozen-lockfile
# ... don't generate a lockfile and fail if an update is needed

COPY . /usr/src/app


# create client javascript bundle
RUN cd .. ; pwd ; ls

RUN cd .. ; yarn run build
