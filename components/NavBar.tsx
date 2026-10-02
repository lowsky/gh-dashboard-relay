'use client'; // because it uses useParams

import { Box, Center, Collapsible, Flex, Icon, IconButton, Stack, useDisclosure } from '@chakra-ui/react';

import { GiHamburgerMenu } from 'react-icons/gi';
import { MdClose } from 'react-icons/md';

import InternalLink from './InternalLink';
import { DarkLightThemeToggle } from './DarkLightThemeToggle';
import { useColorModeValue } from './ui/color-mode';
import { getColor } from './theme-contrast';

export function NavBar() {
    const { open, onToggle } = useDisclosure();

    const mode = useColorModeValue('light', 'dark') satisfies 'light' | 'dark';
    const backgroundColor = getColor(mode, 'background');
    const borderColor = getColor(mode, 'border');
    const textColor = getColor(mode, 'textPrimary');

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
                align="center" role="navigation">
                <Flex
                    flex={{ base: 1, md: 'auto' }}
                    alignItems="center"
                    ml={{ base: -2 }}
                    display={{ base: 'flex', md: 'none' }}>
                    <IconButton onClick={onToggle} variant="ghost" aria-label="Toggle Navigation Menu">
                        <Icon w={3} h={3}>
                            {open ? <MdClose /> : <GiHamburgerMenu />}
                        </Icon>
                    </IconButton>
                    <Center>Github Dashboard</Center>
                </Flex>
                <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
                    <Flex display={{ base: 'none', md: 'flex' }} gap={4} as="nav" aria-label="Main navigation">
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
            <InternalLink href="/" aria-label="Home">Home</InternalLink>
            <InternalLink href="https://www.github.com/lowsky/gh-dashboard-relay" aria-label="GitHub Repository">GitHub/Repo</InternalLink>
        </Stack>
    );
};


const MobileNav = () => {
    const mode = useColorModeValue('light', 'dark') as 'light' | 'dark';
    const backgroundColor = getColor(mode, 'background');

    return (
        <Stack bg={backgroundColor} p={4} display={{ md: 'none' }}>
            <InternalLink href="https://www.github.com/lowsky/gh-dashboard-relay" aria-label="GitHub Repository">GitHub/Repo</InternalLink>
            <DarkLightThemeToggle />
        </Stack>
    )
};
