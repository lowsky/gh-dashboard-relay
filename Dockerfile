FROM node:6.2.2

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# It was set to info, which enables
# log output for downloading dependencies.
# there is no unset, right
ENV NPM_CONFIG_LOGLEVEL warn

ENV yarnVersion 0.19.1

RUN mkdir -p yarn && cd yarn && \
  wget https://github.com/yarnpkg/yarn/releases/download/v$yarnVersion/yarn-v$yarnVersion.tar.gz && \
  tar xzf yarn-v$yarnVersion.tar.gz && rm yarn-v$yarnVersion.tar.gz

# Could be set while building per --build-arg ...
ARG NODE_ENV
ENV NODE_ENV $NODE_ENV

COPY package.json /usr/src/app/

## Disabled, because might not yet work nicely?
## COPY yarn.lock /usr/src/app/

# replacement for npm install
RUN yarn/dist/bin/yarn
COPY . /usr/src/app

CMD [ "npm", "start" ]

EXPOSE 3000
