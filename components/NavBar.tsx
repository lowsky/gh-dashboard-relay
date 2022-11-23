import {
    Box,
    Button,
    Collapse,
    Flex,
    Center,
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

export function NavBar() {
    const { isOpen, onToggle } = useDisclosure();

    return (
        <Box>
            <Flex
                bg={useColorModeValue('white', 'gray.800')}
                color={useColorModeValue('gray.600', 'white')}
                minH="60px"
                py={{ base: 2 }}
                px={{ base: 4 }}
                borderBottom={1}
                borderStyle="solid"
                borderColor={useColorModeValue('gray.200', 'gray.900')}
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
                        <DesktopNav />
                        <DarkLightThemeToggle />
                    </Flex>
                </Flex>
            </Flex>

            <Collapse in={isOpen} animateOpacity>
                <MobileNav />
            </Collapse>
        </Box>
    );
}

const DesktopNav = () => {
    const color = useColorModeValue('gray.800', 'white');
    return (
        <Stack direction="row" spacing={4} align="center">
            {NAV_ITEMS.map(({ href, label }) => (
                <Popover trigger="hover" placement="bottom-start" key={label}>
                    <PopoverTrigger>
                        <InternalLink href={href ?? '#'} _hover={{ textDecoration: 'none', color }}>
                            {label}
                        </InternalLink>
                    </PopoverTrigger>
                </Popover>
            ))}
        </Stack>
    );
};

const MobileNav = () => (
    <Stack bg={useColorModeValue('white', 'gray.800')} p={4} display={{ md: 'none' }}>
        {NAV_ITEMS.map(({ href, label }) => (
            <MobileNavItem key={label} label={label} href={href} />
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
    label: string;
    href?: string;
}

const NAV_ITEMS: Array<NavItem> = [
    {
        label: 'Home',
        href: '/',
    },
    {
        label: 'React (old way)',
        href: '/restful/facebook/react',
    },
    {
        label: 'React, (One Suspense)',
        href: '/wait-for-all/facebook/react',
    },
    {
        label: 'React, Waterfall (2 Suspense)',
        href: '/waterfall/facebook/react',
    },
    {
        label: 'Side-by-side',
        href: '/side-by-side/lowsky/spotify-graphql-server',
    },
    {
        label: 'GitHub',
        href: 'https://github.com/lowsky/dashboard',
    },
];

export function DarkLightThemeToggle() {
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
