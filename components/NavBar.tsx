'use client';
import { Center, Collapsible, Flex, Group, Icon, IconButton, Link, Stack, useDisclosure } from '@chakra-ui/react';

import { GiHamburgerMenu } from 'react-icons/gi';
import { MdClose } from 'react-icons/md';

import InternalLink from './InternalLink';
import { DarkLightThemeToggle } from './DarkLightThemeToggle';
import { ColorModeButton, useColorModeValue } from './ui/color-mode';
import { LuGithub, LuHouse } from 'react-icons/lu';
import { getColor } from 'components/theme-contrast';
import Breadcrumbs, { NavItems } from 'components/Breadcrumbs';

interface NavBarProps {
    navItems?: NavItems;
}

export function NavBar({ navItems }: NavBarProps) {
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
                    justify="space-between"
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
                    width="100%"
                    align="center"
                    justify="space-between"
                    direction="row"
                    display={{ base: 'none', md: 'flex' }}
                    as="nav"
                    aria-label="Main navigation">
                    <DesktopNav navItems={navItems} />
                    <DesktopRight />
                </Flex>
            </Flex>

            <Collapsible.Root open={open}>
                <Collapsible.Content>
                    <MobileNav />
                </Collapsible.Content>
            </Collapsible.Root>
        </>
    );
}
const DesktopRight = () => (
    <Center>
        <Link href="https://www.github.com/lowsky/gh-dashboard-relay" aria-label="GitHub Repository">
            <LuGithub />
            Sources
        </Link>
        <DarkLightThemeToggle />
    </Center>
);

const DesktopNav = ({ navItems }: { navItems?: NavItems }) => (
    <Flex direction="row" gap={1}>
        <>GitHub Dashboard</>
        <Breadcrumbs items={navItems} display={{ md: 'flex', base: 'none' }} />
    </Flex>
);

const MobileNav = () => {
    const mode = useColorModeValue('light', 'dark') satisfies 'light' | 'dark';
    const backgroundColor = getColor(mode, 'background');

    return (
        <Stack bg={backgroundColor} p={4} width="100%" align="start" direction="column" display={{ md: 'none' }}>
            <Group orientation={'vertical'} align="start">
                <div>
                    <InternalLink href="/">
                        <LuHouse />
                        Home
                    </InternalLink>
                </div>

                <div>
                    <InternalLink
                        href="https://www.github.com/lowsky/gh-dashboard-relay"
                        aria-label="GitHub Repository">
                        <LuGithub />
                        Sources
                    </InternalLink>
                </div>
                <div>
                    Theme
                    <ColorModeButton />
                </div>
            </Group>
        </Stack>
    );
};
