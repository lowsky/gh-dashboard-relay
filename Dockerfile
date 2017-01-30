FROM node:6.2.2

ENV yarnVersion 0.18.1

# It was set to info, which enables
# log output for downloading dependencies.
# there is no unset, right
ENV NPM_CONFIG_LOGLEVEL warn


RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
RUN mkdir -p yarn && cd yarn && \
  wget https://github.com/yarnpkg/yarn/releases/download/v$yarnVersion/yarn-v$yarnVersion.tar.gz && \
  tar xzf yarn-v$yarnVersion.tar.gz && rm yarn-v$yarnVersion.tar.gz && pwd && ls -l

# Could be set while building per --build-arg ...
ARG NODE_ENV
ENV NODE_ENV $NODE_ENV

COPY package.json /usr/src/app/
COPY yarn.lock /usr/src/app/

# replacement for npm install
RUN yarn
RUN yarn/dist/bin/yarn --verbose
COPY . /usr/src/app

CMD [ "npm", "start" ]

EXPOSE 3000
