import {
    Box,
    Button,
    Image,
    Flex,
    Center,
    Heading,
    Link,
    useMediaQuery,
    Menu,
    MenuButton,
    MenuItem,
    MenuList,
} from '@chakra-ui/react'
import React from 'react'
import { useTheme } from '@chakra-ui/react'
import {
    faDiscord,
    faMedium,
    faTwitter,
} from '@fortawesome/free-brands-svg-icons'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from './styles'
import { Link as SmoothScrollLink } from 'react-scroll'
import { BsMedium } from 'react-icons/bs'

const Header = () => {
    const theme = useTheme()

    return (
        // @ts-expect-error
        <Flex {...styles.backgroundImage}>
            <Flex
                id="navbar"
                {...styles.navButtonsContainer}
                display={['none', 'none', 'flex']}
            >
                <SmoothScrollLink
                    activeClass="active"
                    to="home"
                    spy={true}
                    smooth={true}

                    duration={500}
                >
                    <Button {...styles.navButtons}>Home</Button>
                </SmoothScrollLink>
                <SmoothScrollLink
                    activeClass="active"
                    to="about-us"
                    spy={true}
                    smooth={true}
                    offset={50}
                    duration={500}
                >
                    <Button {...styles.navButtons}>About us</Button>
                </SmoothScrollLink>

                <SmoothScrollLink
                    activeClass="active"
                    to="roadmap"
                    spy={true}
                    smooth={true}
                    offset={50}
                    duration={500}
                >
                    <Button {...styles.navButtons}>Roadmap</Button>
                </SmoothScrollLink>
            </Flex>

            <Flex display={['flex', 'flex', 'none']} justifyContent="flex-end">
                <Menu>
                    <Flex justifyContent="flex-end">
                        <MenuButton>
                            <FontAwesomeIcon icon={faBars} size="2x" />
                        </MenuButton>
                    </Flex>

                    <MenuList bg="#000" border={0}>
                        <SmoothScrollLink
                            activeClass="active"
                            to="roadmap"
                            spy={true}
                            smooth={true}
                            offset={50}
                            duration={500}
                        >
                            <MenuItem
                                _hover={{
                                    color: theme.palette.primary.main,
                                }}
                                _focus={{
                                    color: theme.palette.primary.main,
                                }}
                            >
                                Home
                            </MenuItem>
                        </SmoothScrollLink>
                        <SmoothScrollLink
                            activeClass="active"
                            to="about-us"
                            spy={true}
                            smooth={true}
                            offset={50}
                            duration={500}
                        >
                            <MenuItem
                                _hover={{
                                    color: theme.palette.primary.main,
                                }}
                                _focus={{
                                    color: theme.palette.primary.main,
                                }}
                            >
                                About us
                            </MenuItem>
                        </SmoothScrollLink>
                        <SmoothScrollLink
                            activeClass="active"
                            to="roadmap"
                            spy={true}
                            smooth={true}
                            offset={50}
                            duration={500}
                        >
                            <MenuItem
                                _hover={{
                                    color: theme.palette.primary.main,
                                }}
                                _focus={{
                                    color: theme.palette.primary.main,
                                }}
                            >
                                Roadmap
                            </MenuItem>
                        </SmoothScrollLink>
                    </MenuList>
                </Menu>
            </Flex>

            <Center h="100%" p="2.5%" flexDirection="column">
                <Image
                    src="/logo@2x.png"
                    width={['75%', '70%', '65%', '60%', '55%']}
                    alt="Anura"
                />
                {/* @ts-expect-error */}
                <Box {...styles.launchingSoonContainer}>
                    {/* @ts-expect-error */}
                    <Heading {...styles.launchingSoonHeaders} fontWeight="400">
                        LAUNCHING
                    </Heading>
                    {/* @ts-expect-error */}
                    <Heading
                        {...styles.launchingSoonHeaders}
                        color={theme.palette.secondary.main}
                        fontWeight="bold"
                    >
                        SOON
                    </Heading>
                </Box>
                <Flex {...styles.socialLinksContainer}>
                    <Link isExternal href="https://discord.gg/fDHkgfMkGX">
                        <Button {...styles.socialLinks}>
                            <FontAwesomeIcon icon={faDiscord} size="2x" />
                        </Button>
                    </Link>
                    <Link isExternal href="https://twitter.com/anuradao?s=21">
                        <Button {...styles.socialLinks}>
                            <FontAwesomeIcon icon={faTwitter} size="2x" />
                        </Button>
                    </Link>
                    <Link isExternal href="https://anuradao.medium.com/">
                        <Button {...styles.socialLinks}>
                            <BsMedium size="2x" />
                        </Button>
                    </Link>
                </Flex>
            </Center>
        </Flex>
    )
}

export default Header
