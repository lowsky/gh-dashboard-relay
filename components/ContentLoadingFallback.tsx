import { VStack, Flex, Container } from '@chakra-ui/react';
import { Spinner } from './Spinner';

export function ContentLoadingFallback() {
    return (
        <Container>
            <VStack align="start">
                <Flex gap="1rem" alignItems="center">
                    <Spinner />
                    Loading ...
                </Flex>
            </VStack>
        </Container>
    );
}
