'use client';
import { BreadcrumbLink, Center, Collapsible, Flex, Icon, IconButton, Stack, useDisclosure } from '@chakra-ui/react';

import { GiHamburgerMenu } from 'react-icons/gi';
import { MdClose } from 'react-icons/md';

import InternalLink from './InternalLink';
import { DarkLightThemeToggle } from './DarkLightThemeToggle';
import { ColorModeButton, useColorModeValue } from './ui/color-mode';
import { LuGithub, LuHouse } from 'react-icons/lu';
import { BreadcrumbRoot } from 'components/ui/breadcrumb';
import { getColor } from 'components/theme-contrast';

export function NavBar() {
    const { open, onToggle } = useDisclosure();

    const mode = useColorModeValue('light', 'dark') satisfies 'light' | 'dark';
    const backgroundColor = getColor(mode, 'background');
    const borderColor = getColor(mode, 'border');
    const textColor = getColor(mode, 'textPrimary');

    return (
        <>
            <Flex
                bg={backgroundColor}
                color={textColor}
                minH="60px"
                py={{ base: 2 }}
                px={{ base: 4 }}
                borderBottom={1}
                borderStyle="solid"
                borderColor={borderColor}
                align="center"
                role="navigation">
                {/*Mobile*/}
                <Flex
                    flex={{ base: 1, md: 'auto' }}
                    alignItems="center"
                    justify={'space-between'}
                    ml={{ base: -2 }}
                    display={{ base: 'flex', md: 'none' }}>
                    <Center>GitHub Dashboard</Center>
                    <IconButton onClick={onToggle} variant="ghost" aria-label="Toggle Navigation Menu">
                        <Icon w={3} h={3}>
                            {open ? <MdClose /> : <GiHamburgerMenu />}
                        </Icon>
                    </IconButton>
                </Flex>
                {/* show on md / desktop only */}
                <Flex
                    width={'100%'}
                    align={'center'}
                    justify={'space-between'}
                    direction={'row'}
                    display={{ base: 'none', md: 'flex' }}
                    as="nav"
                    aria-label="Main navigation">
                    <DesktopNav />
                    <DesktopRight />
                </Flex>
            </Flex>

            <Collapsible.Root open={open || true}>
                <Collapsible.Content>
                    <MobileNav />
                </Collapsible.Content>
            </Collapsible.Root>
        </>
    );
}
const DesktopRight = () => {
    return (
        <Center>
            <InternalLink href="https://www.github.com/lowsky/gh-dashboard-relay" aria-label="GitHub Repository">
                <LuGithub />
                Sources
            </InternalLink>
            <DarkLightThemeToggle />
        </Center>
    );
};

const DesktopNav = () => {
    return (
        <Flex direction="row" justify="space-between">
            <BreadcrumbRoot size="lg">
                <BreadcrumbLink href="/">
                    <InternalLink href="/">GitHub Dashboard</InternalLink>
                </BreadcrumbLink>
            </BreadcrumbRoot>
        </Flex>
    );
};

const MobileNav = () => {
    const mode = useColorModeValue('light', 'dark') satisfies 'light' | 'dark';
    const backgroundColor = getColor(mode, 'background');

    return (
        <Stack bg={backgroundColor} p={4} width="100%" align="start" direction="column" display={{ md: 'none' }}>
            <InternalLink href="/">
                <LuHouse />
                Home
            </InternalLink>

            <InternalLink href="https://www.github.com/lowsky/gh-dashboard-relay" aria-label="GitHub Repository">
                <LuGithub />
                Sources
            </InternalLink>

            <Center>
                Theme
                <ColorModeButton />
            </Center>
        </Stack>
    );
};
