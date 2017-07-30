FROM node:8-alpine

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

COPY package.json /usr/src/app/

# replacement for npm install
## Disabled, because might not yet work nicely?
## COPY yarn.lock /usr/src/app/

RUN yarn

COPY . /usr/src/app

RUN yarn run build
