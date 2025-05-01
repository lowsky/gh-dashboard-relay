[![Chromatic](https://github.com/lowsky/gh-dashboard-relay/actions/workflows/chromatic.yml/badge.svg)](https://github.com/lowsky/gh-dashboard-relay/actions/workflows/chromatic.yml)[![Snyk Known Vulnerabilities](https://snyk.io/test/github/lowsky/gh-dashboard-relay/badge.svg)](https://snyk.io/test/github/lowsky/gh-dashboard-relay)
![CircleCI](https://circleci.com/gh/lowsky/dashboard.svg?style=svg)

## Stack

- [GraphQL](https://graphql.org/)
- [Next.js](https://nextjs.org/)
- ~~[Netlify](https://www.netlify.com/)~~/[Vercel](https://vercel.com/)
- ~~GraphQL server~~
    - ~~[ApolloServer](https://www.apollographql.com/docs/apollo-server/)~~ ~~[Helix](https://www.graphql-helix.com/)~~
    - ~~[Envelop](https://the-guild.dev/graphql/yoga-server)~~ ~~[Yoga](https://the-guild.dev/graphql/yoga-server)~~
- [Relay](https://relay.dev/)
- ~~[Bulma](https://bulma.io/)~~ [ChakraUI](https://chakra-ui.com/)
- React
- [Storybook](https://storybook.js.org/)
- [Chromatic](https://storybook.js.org/)
- [Typescript](https://www.typescriptlang.org/)
- [Jest](https://jestjs.io/)
- ~~[Storyshots](https://storybook.js.org/addons/@storybook/addon-storyshots)~~

## Purpose

List the `(feature) branches` of a GitHub repository with its `last commit's`

- build status
- linked PR
- commit message and author
- linked deployment

The idea behind this was, to provide easy access to all feature branches before releasing them.
So you can test a new version of a new feature before bringing it live.

Very very old presentation at a Docker Meetup: Find the [slides here](https://github.com/lowsky/dockerMeetupSlides)

## Getting started

After invoking this in a shell

    git clone https://github.com/lowsky/gh-dashboard-relay
    cd gh-dashboard-relay

    # Install the dependencies of the react app and
    # installs the server's dependencies, too:
    yarn

then set up the `github-token` (see [Setup GitHub Token](#setupgithubtoken) ) before starting local dev mode via:

    yarn dev

This runs Next.js dev-mode which includes the endpoints for the graphql API.

Open the home [http://localhost:3000](http://localhost:3000) with your browser.

Or **even better** the dashboard project page: [http://localhost:3000/relay/lowsky/gh-dashboard-relay](http://localhost:3000/relay/lowsky/gh-dashboard-relay)

Have fun!

### setupGithubToken

You **need to create your own github-token** (see https://github.com/settings/tokens/) and
store it locally in `.env` file

    # create an .env file with this content ...

GITHUB_TOKEN=XXX

    # ... and replace the XXX with your API key
    # typically something like ghp_....

## ScreenShot

![Preview image](./assets/images/DashboardDemo.png)

# Background

This project was used to figure out and to demonstrate, how to develop a frontend UI with Facebook's _Relay_ and _GraphQL_ libraries.

For deep interns of GraphQL concepts, see the [presentation at the EnterJS Conference 2016](https://lowsky.github.io/deck-graphql-relay-talk) with its [slide sources](https://www.github.com/lowsky/deck-graphql-relay-talk)

## License

Licensed under the Apache License 2.0, Copyright ©️ 2018 Robert Hostlowsky. See [LICENSE](LICENSE) for more information.
