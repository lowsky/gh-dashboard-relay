import { ColorModeButton, useColorModeValue } from './ui/color-mode';
import { Box, Flex, Stack } from '@chakra-ui/react';

export function DarkLightThemeToggle() {
    const backgroundColor = useColorModeValue('white', 'gray.800');

    return (
        <Box bg={backgroundColor} mx={4}>
            <Flex h={8} alignItems="center" justifyContent="space-between">
                <Flex alignItems="center">
                    <Stack direction="row">
                        <ColorModeButton />
                    </Stack>
                </Flex>
            </Flex>
        </Box>
    );
}
