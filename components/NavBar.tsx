import {
    Box,
    Button,
    Center,
    Collapse,
    Flex,
    IconButton,
    Popover,
    PopoverTrigger,
    Stack,
    Text,
    useColorMode,
    useColorModeValue,
    useDisclosure,
} from '@chakra-ui/react';

import { CloseIcon, HamburgerIcon, MoonIcon, SunIcon } from '@chakra-ui/icons';

import InternalLink from './InternalLink';
import { useRouter } from 'next/router';
import { ReactNode } from 'react';

export function NavBar() {
    const { isOpen, onToggle } = useDisclosure();
    const { owner, repo } = useOwnerRepoFromUrl('facebook', 'react');

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
    const hoverColor = useColorModeValue('gray.800', 'white');

    return (
        <Stack direction="row" spacing={4} align="center">
            {getNavItemsForRepo(owner, repo).map(({ href, label }) => (
                <Popover trigger="hover" placement="bottom-start" key={href}>
                    <PopoverTrigger>
                        <InternalLink href={href ?? '#'} _hover={{ textDecoration: 'none', color: hoverColor }}>
                            {label}
                        </InternalLink>
                    </PopoverTrigger>
                </Popover>
            ))}
        </Stack>
    );
};

const MobileNav = ({ owner, repo }) => (
    <Stack bg={useColorModeValue('white', 'gray.800')} p={4} display={{ md: 'none' }}>
        {getNavItemsForRepo(owner, repo).map(({ href, label }) => (
            <MobileNavItem key={href} label={label} href={href} />
        ))}
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

    return [
        {
            label: 'Home',
            href: '/',
        },
        {
            label: (
                <span>
                    {repo}
                    <br />
                    (old way)
                </span>
            ),
            href: '/restful/' + ownerRepo,
        },
        {
            label: (
                <span>
                    {repo}
                    <br />
                    (One Suspense)
                </span>
            ),
            href: '/wait-for-all/' + ownerRepo,
        },
        {
            label: (
                <span>
                    {repo}
                    <br />
                    Waterfall (2 Suspense)
                </span>
            ),
            href: '/waterfall/' + ownerRepo,
        },
        {
            label: (
                <span>
                    {repo}
                    <br />
                    side-by-side
                </span>
            ),
            href: '/side-by-side/' + ownerRepo,
        },
        {
            label: 'GitHub',
            href: 'https://www.github.com/lowsky/react-suspense-meetup-demo',
        },
    ];
}

function DarkLightThemeToggle() {
    const { colorMode, toggleColorMode } = useColorMode();

    return (
        <Box bg={useColorModeValue('white', 'gray.800')} px={4}>
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

function useOwnerRepoFromUrl(ownerFallback, repoFallback): { owner: string; repo: string } {
    const router = useRouter();
    const isRepoPage = /\/.*\/.*\/.*/.test(router.pathname);
    const { userName, repoName } = router.query;

    const [owner, repo] = isRepoPage ? [userName, repoName] : [ownerFallback, repoFallback];

    return { owner, repo };
}
