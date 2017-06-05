FROM node:8.0-alpine

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

COPY package.json /usr/src/app/

## Disabled, because might not yet work nicely?
## COPY yarn.lock /usr/src/app/

# replacement for npm install
RUN yarn
COPY . /usr/src/app

CMD [ "npm", "start" ]

EXPOSE 3000
