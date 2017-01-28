FROM node:6.2.2

ENV yarnVersion 0.18.1

# It was set to info, which enables
# log output for downloading dependencies.
# there is no unset, right
ENV NPM_CONFIG_LOGLEVEL warn

# reduce log output for progress
RUN  \
  npm i -g yarn@$yarnVersion && \
  npm cache clean

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Could be set while building per --build-arg ...
ARG NODE_ENV
ENV NODE_ENV $NODE_ENV

COPY package.json /usr/src/app/

## Disabled, because might not yet work nicely?
## COPY yarn.lock /usr/src/app/

# replacement for npm install
RUN yarn
COPY . /usr/src/app

CMD [ "npm", "start" ]

EXPOSE 3000
