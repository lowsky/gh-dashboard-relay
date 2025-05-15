'use client'; // because it uses useParams

import { Box, Center, Collapsible, Flex, Icon, IconButton, Stack, useDisclosure } from '@chakra-ui/react';

import { GiHamburgerMenu } from 'react-icons/gi';
import { MdClose } from 'react-icons/md';

import InternalLink from './InternalLink';
import { DarkLightThemeToggle } from './DarkLightThemeToggle';
import { useColorModeValue } from './ui/color-mode';

export function NavBar() {
    const { open, onToggle } = useDisclosure();

    const backgroundColor = useColorModeValue('white', 'gray.400');
    const borderColor = useColorModeValue('gray.200', 'gray.900');
    const textColor = useColorModeValue('gray.600', 'white');

    return (
        <Box>
            <Flex
                bg={backgroundColor}
                color={textColor}
                minH="60px"
                py={{ base: 2 }}
                px={{ base: 4 }}
                borderBottom={1}
                borderStyle="solid"
                borderColor={borderColor}
                align="center">
                <Flex
                    flex={{ base: 1, md: 'auto' }}
                    alignItems="center"
                    ml={{ base: -2 }}
                    display={{ base: 'flex', md: 'none' }}>
                    <IconButton onClick={onToggle} variant="ghost" aria-label="Toggle Navigation">
                        <Icon w={3} h={3}>
                            {open ? <MdClose /> : <GiHamburgerMenu />}
                        </Icon>
                    </IconButton>
                    <Center>Github Dashboard</Center>
                </Flex>
                <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
                    <Flex display={{ base: 'none', md: 'flex' }} gap={4}>
                        <DesktopNav />
                        <DarkLightThemeToggle />
                    </Flex>
                </Flex>
            </Flex>
            <Collapsible.Root open={open}>
                <Collapsible.Content>
                    <MobileNav />
                </Collapsible.Content>
            </Collapsible.Root>
        </Box>
    );
}

const DesktopNav = () => {
    return (
        <Stack direction="row" gap={4} align="center">
            <InternalLink href="/">Home</InternalLink>
            <InternalLink href="https://www.github.com/lowsky/gh-dashboard-relay">GitHub/Repo</InternalLink>
        </Stack>
    );
};

const MobileNav = () => (
    <Stack bg={useColorModeValue('white', 'gray.800')} p={4} display={{ md: 'none' }}>
        <br />
        <InternalLink href="https://www.github.com/lowsky/gh-dashboard-relay">GitHub/Repo</InternalLink>
        <DarkLightThemeToggle />
    </Stack>
);
