import { Code, Heading, Box, Text, Link, Stack } from '@chakra-ui/react';
const indexPageContent = () => (
    <Box p="2rem">
        <Stack direction="column">
            <Heading size={'4'} as="h1">
                What is it?
            </Heading>
            <Text>
                The main goal was to compare a <strong>Relay based GraphQL</strong> and <strong>regular Rest</strong>{' '}
                approach for fetching data in a web client.
            </Text>
            <Text>
                Additionally, is contains a solution for mixing <strong>Relay</strong> and <strong>normal React</strong>{' '}
                components.
            </Text>

            <Box>You can use the links above in the nav bar for different views:</Box>
            <Box pl="1rem">
                <ul>
                    <li>
                        <strong>Storybook</strong> shows all components.
                    </li>
                    <li>
                        <strong>GraphQL + Relay</strong> - fetches all information from a locally installed relay
                        server. <strong>Note:</strong>
                        <i>This needs a backend server / currently implemented as lambda function...</i>
                    </li>
                    <li>
                        <strong>RESTFul Demo</strong> - just fetches info from Github&apos;s public open API via Rest
                        calls.
                    </li>
                </ul>
            </Box>

            <Heading size={'4'} as="h3">
                Examples
            </Heading>
            <Box pl="1rem">
                <ul>
                    <li>
                        <>lowsky/dashboard:</>
                        <Link href="./restful/lowsky/dashboard">
                            <strong>Rest</strong>
                        </Link>
                        or
                        <Link href="./relay/lowsky/dashboard">
                            <strong>GraphQL Relay</strong>
                        </Link>
                        based, or
                        <Link href="./side-by-side/lowsky/dashboard">
                            <strong>side-by-side</strong>
                        </Link>
                    </li>
                    <li>
                        <>lowsky/spotify-graphql-server:</>
                        <Link href="./restful/lowsky/spotify-graphql-server">
                            <strong>Rest</strong>
                        </Link>
                        or
                        <Link href="./relay/lowsky/spotify-graphql-server">
                            <strong>GraphQL Relay</strong>
                        </Link>
                        based, or
                        <Link href="./side-by-side/lowsky/spotify-graphql-server">
                            <strong>side-by-side</strong>
                        </Link>
                    </li>
                </ul>
            </Box>

            <Heading size={'4'} as="h3">
                How to start the local server
            </Heading>
            <Box>
                After installing the dependencies via <Code>yarn install</Code> you also need to configure GitHub
                authentication token in the <Code>server/.env</Code> file, then simply run the local graphql server via
                and web app via <Code>yarn run dev</Code>
            </Box>
        </Stack>
    </Box>
);

export default indexPageContent;
