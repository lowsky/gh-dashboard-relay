[![Codacy Badge](https://api.codacy.com/project/badge/Grade/5f6f0a485bfe4afab427fdba4eae3ac2)](https://www.codacy.com/app/skylab/dashboard)

[![Snyk Known Vulnerabilities](https://snyk.io/test/github/lowsky/dashboard/badge.svg)](https://snyk.io/test/github/lowsky/dashboard) 

![CircleCI](https://circleci.com/gh/lowsky/dashboard.svg?style=svg) 
[![Waffle.io - Columns and their card count](https://badge.waffle.io/lowsky/dashboard.svg?columns=all)](https://waffle.io/lowsky/dashboard)

This project was used to figure out and to demonstrate, how to develop a frontend UI with Facebook's _Relay_ and _GraphQL_ libraries.

For deep interns of GraphQL concepts, see the [presentation at the EnterJS Conference 2016](https://lowsky.github.io/deck-graphql-relay-talk) with its [slide sources](https://www.github.com/lowsky/deck-graphql-relay-talk)

## Purpose of this dashboard

This web app lists the (feature) branches of a specific github repository,

-   shows the last commit's build status
-   shows the last commit's commit message
-   links to running running docker containers for each feature (not implemented yet)

On a Docker Meetup, I presented some details about the background idea: You can find the [slides here](https://github.com/lowsky/dockerMeetupSlides)

## Getting started locally

After invoking this in a shell, a page with a restful functionality works out-of-the box

    git clone https://github.com/lowsky/dashboard
    cd dashboard
    
    # Install the dependencies of the react app and
    # installs the server's dependencies, too:
    yarn 
    
then run  

    yarn run dev
    
for a simple dev mode where it starts the server and the web app in parallel.


### Built-in GraphQL-backend

It also provides a GraphIql Playground at <http://localhost:3000/.netlify/functions/graphql> - which is great 
(Note: you may need to specify this endpoint http://localhost:3000/.netlify/functions/graphql , too)
for using and playing with different graphql queries, e.g.:
```graphql
{
  github {
    user(username: "lowsky") {
      login
      avatar_url
    }
    repo(ownerUsername: "lowsky", name: "dashboard") {
      name
      branches{name}
    }
  }
}
```

Have fun!
    
**Note:**
### docker build

    docker build -t dashboard .
    
    ### docker run
    # injecting the github creds per .env file
    
    docker run --rm -v $PWD/server/.env:/usr/src/app/server/.env \
               -p 3000:3000 \
               -e NODE_ENV=production \
               dashboard

**Note:**
You  **need to create your own github-token** (see https://github.com/settings/tokens/) and 
store it locally in `server/.env` file (similar to [server/.env.example](server/.env.example) )

    # create your own .env file as a copy of .env.example by
    cp .env.example .env
    
    # ... and replace the XXX with your API key
    

## ScreenShot

![Preview image](./assets/images/DashboardDemo.png)


## License

Licensed under the Apache License 2.0, Copyright ©️ 2018 Robert Hostlowsky. See [LICENSE](LICENSE) for more information.

![Analytics](https://ga-beacon.appspot.com/UA-72383363-1/lowsky/dashboard/README.md)
