'use client'; // because it uses useParams

import { ReactNode } from 'react';
import { useParams, usePathname } from 'next/navigation';

import {
    Box,
    Button,
    Center,
    Collapse,
    Flex,
    IconButton,
    Stack,
    Text,
    useColorMode,
    useColorModeValue,
    useDisclosure,
} from '@chakra-ui/react';

import { CloseIcon, HamburgerIcon, MoonIcon, SunIcon } from '@chakra-ui/icons';

import InternalLink from './InternalLink';

export function NavBar() {
    const params = useParams();
    const { userName: owner, repoName: repo } = params ?? {};
    const { isOpen, onToggle } = useDisclosure();

    const backgroundColor = useColorModeValue('white', 'gray.800');
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
                    <IconButton
                        onClick={onToggle}
                        icon={isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />}
                        variant="ghost"
                        aria-label="Toggle Navigation"
                    />
                    <Center>Github Dashboard</Center>
                </Flex>
                <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
                    <Flex display={{ base: 'none', md: 'flex' }}>
                        <DesktopNav owner={owner} repo={repo} />
                        <DarkLightThemeToggle />
                    </Flex>
                </Flex>
            </Flex>
            <Collapse in={isOpen} animateOpacity>
                <MobileNav owner={owner} repo={repo} />
            </Collapse>
        </Box>
    );
}

const DesktopNav = ({ owner, repo }) => {
    const pathname = usePathname();
    return (
        <Stack direction="row" spacing={4} align="center">
            <InternalLink href="/">Home</InternalLink>
            {owner && repo && <strong>{repo}</strong>}
            {getNavItemsForRepo(owner, repo).map(({ href, label }) => (
                <InternalLink
                    key={href}
                    href={href ?? '#'}
                    fontWeight={pathname === href ? 'bold' : ''}
                    textDecoration={pathname === href ? 'underline' : ''}>
                    {label}
                </InternalLink>
            ))}
            <InternalLink href="https://www.github.com/lowsky/gh-dashboard-relay">GitHub/Repo</InternalLink>
        </Stack>
    );
};

const MobileNav = ({ owner, repo }) => (
    <Stack bg={useColorModeValue('white', 'gray.800')} p={4} display={{ md: 'none' }}>
        <InternalLink href="/">Home</InternalLink>
        <br />
        {owner && repo && (
            <Text>
                open <strong>{repo}</strong> via:
            </Text>
        )}
        {getNavItemsForRepo(owner, repo).map(({ href, label }) => (
            <MobileNavItem key={href} label={label} href={href} />
        ))}
        <InternalLink href="https://www.github.com/lowsky/gh-dashboard-relay">GitHub/Repo</InternalLink>
        <DarkLightThemeToggle />
    </Stack>
);

const MobileNavItem = ({ label, href }: NavItem) => {
    const color = useColorModeValue('gray.600', 'gray.200');

    return (
        <Stack spacing={4}>
            <Flex py={2} as={InternalLink} href={href ?? '#'} justify="space-between" align="center">
                <Text fontWeight={600} color={color}>
                    {label}
                </Text>
            </Flex>
        </Stack>
    );
};

interface NavItem {
    label: string | ReactNode;
    href?: string;
}

function getNavItemsForRepo(owner, repo): NavItem[] {
    const ownerRepo = owner + '/' + repo;
    if (owner && repo)
        return [
            {
                label: <span>Next.js+rfc220</span>,
                href: '/next/' + ownerRepo,
            },
            {
                label: <span>Classic</span>,
                href: '/restful/' + ownerRepo,
            },
            {
                label: <span>Relay GraphQL</span>,
                href: '/relay/' + ownerRepo,
            },
        ];

    return [];
}

function DarkLightThemeToggle() {
    const { colorMode, toggleColorMode } = useColorMode();
    const colorModeValue = useColorModeValue('white', 'gray.800');

    return (
        <Box bg={colorModeValue} px={4}>
            <Flex h={8} alignItems="center" justifyContent="space-between">
                <Flex alignItems="center">
                    <Stack direction="row">
                        <Button onClick={toggleColorMode}>{colorMode === 'light' ? <MoonIcon /> : <SunIcon />}</Button>
                    </Stack>
                </Flex>
            </Flex>
        </Box>
    );
}
