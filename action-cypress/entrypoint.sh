#!/bin/sh

#Use set -eu in your shell script to avoid continuing when errors or undefined variables are present.

sh -c "echo Yea, entrypoint wrks"

env | sort

cat /github/workflow/event.json

cd /github/workspace

ls
echo

npm i -g cypress

#GITHUB_WORKSPACE

CYPRESS_INSTALL_BINARY=0 DEBUG=* $(npm -g bin)/cypress

npx cypress install

npx cypress verify

