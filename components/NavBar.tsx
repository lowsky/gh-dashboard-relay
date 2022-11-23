import {
    Box,
    Button,
    Collapse,
    Flex,
    Center,
    IconButton,
    Link as ChakraLink,
    Popover,
    PopoverTrigger,
    Stack,
    Text,
    useColorMode,
    useColorModeValue,
    useDisclosure,
} from '@chakra-ui/react';

import Link from 'next/link';

import { CloseIcon, HamburgerIcon, MoonIcon, SunIcon } from '@chakra-ui/icons';

export function NavBar() {
    const { isOpen, onToggle } = useDisclosure();

    return (
        <Box>
            <Flex
                bg={useColorModeValue('white', 'gray.800')}
                color={useColorModeValue('gray.600', 'white')}
                minH={'60px'}
                py={{ base: 2 }}
                px={{ base: 4 }}
                borderBottom={1}
                borderStyle={'solid'}
                borderColor={useColorModeValue('gray.200', 'gray.900')}
                align={'center'}>
                <Flex
                    flex={{ base: 1, md: 'auto' }}
                    alignItems={'center'}
                    ml={{ base: -2 }}
                    display={{ base: 'flex', md: 'none' }}>
                    <IconButton
                        onClick={onToggle}
                        icon={isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />}
                        variant={'ghost'}
                        aria-label={'Toggle Navigation'}
                    />
                    <Center>Github Dashboard</Center>
                </Flex>
                <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
                    <Flex display={{ base: 'none', md: 'flex' }}>
                        <DesktopNav />
                        <Navi />
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
    const linkHoverColor = useColorModeValue('gray.800', 'white');

    return (
        <Stack direction="row" spacing={4} align="center">
            {NAV_ITEMS.map((navItem) => (
                <Popover trigger={'hover'} placement={'bottom-start'} key={navItem.label}>
                    <PopoverTrigger>
                        <Link passHref legacyBehavior href={navItem.href ?? '#'}>
                            <ChakraLink _hover={{ textDecoration: 'none', color: linkHoverColor }}>
                                {navItem.label}
                            </ChakraLink>
                        </Link>
                    </PopoverTrigger>
                </Popover>
            ))}
        </Stack>
    );
};

const MobileNav = () => {
    return (
        <Stack bg={useColorModeValue('white', 'gray.800')} p={4} display={{ md: 'none' }}>
            {NAV_ITEMS.map((navItem) => (
                <MobileNavItem key={navItem.label} {...navItem} />
            ))}
            <Navi />
        </Stack>
    );
};

const MobileNavItem = ({ label, children, href }: NavItem) => {
    const { isOpen, onToggle } = useDisclosure();

    let color = useColorModeValue('gray.600', 'gray.200');
    return (
        <Stack spacing={4} onClick={children && onToggle}>
            {false && (
                <Flex py={2} as={Link} href={href ?? '#'} justify={'space-between'} align={'center'}>
                    <Text fontWeight={600} color={color}>
                        {label}
                    </Text>
                </Flex>
            )}

            <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
                <Stack
                    mt={2}
                    pl={4}
                    borderLeft={1}
                    borderStyle={'solid'}
                    borderColor={useColorModeValue('gray.200', 'gray.700')}
                    align={'start'}>
                    {children &&
                        children.map((child) => (
                            <ChakraLink key={child.label} py={2} href={child.href}>
                                <Text>{child.label}</Text>
                            </ChakraLink>
                        ))}
                </Stack>
            </Collapse>
        </Stack>
    );
};

interface NavItem {
    label: string;
    subLabel?: string;
    children?: Array<NavItem>;
    href?: string;
}

const NAV_ITEMS: Array<NavItem> = [
    {
        label: 'Home',
        href: '/',
    },
    {
        label: 'GraphQL+Relay Demo',
        href: '/relay/lowsky/dashboard',
    },
    {
        label: 'REST-based dashboard',
        href: '/restful/lowsky/dashboard',
    },
    {
        label: 'REST-based spotify...',
        href: '/restful/lowsky/spotify-graphql-server',
    },
    {
        label: 'Storybook',
        href: '/story-book/index.html',
    },
    {
        label: 'GitHub Repo',
        href: 'https://github.com/lowsky/dashboard',
    },
];

export function Navi() {
    const { colorMode, toggleColorMode } = useColorMode();

    return (
        <Box bg={useColorModeValue('white', 'gray.800')} px={4}>
            <Flex h={8} alignItems={'center'} justifyContent={'space-between'}>
                <Flex alignItems={'center'}>
                    <Stack direction={'row'}>
                        <Button onClick={toggleColorMode}>{colorMode === 'light' ? <MoonIcon /> : <SunIcon />}</Button>
                    </Stack>
                </Flex>
            </Flex>
        </Box>
    );
}
