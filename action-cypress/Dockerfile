FROM cypress/base:10

LABEL "com.github.actions.name"="My Cypress runner"
LABEL "com.github.actions.description"="run cypress. - soon"
LABEL "com.github.actions.icon"="mic"
LABEL "com.github.actions.color"="green"

LABEL "repository"="http://github.com/skylab/dashboard"
LABEL "homepage"="http://github.com/skylab/dashboard"
LABEL "maintainer"="Skylab <skylab@github>"

ADD entrypoint.sh /entrypoint.sh
ENTRYPOINT ["/entrypoint.sh"]
