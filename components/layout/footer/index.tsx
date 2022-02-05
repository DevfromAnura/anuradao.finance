import React from 'react'
import { Button, Center, Heading, Link } from '@chakra-ui/react'
import { useTheme } from '@chakra-ui/react'
import { Flex, Box, Container, Text } from '@chakra-ui/react'
import PrimaryTitleComponent from '../../primary-title'
import { Image } from '@chakra-ui/react'
import { faDiscord, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from './styles'
import { BsMedium } from 'react-icons/bs'

const FooterComponent = () => {
    const theme = useTheme()

    return (
        <Box>
            <Container maxW="container.xl" mb={10}>
                <Flex flexDirection="column" mt={['20px', '20px', '-100px']}>
                    <Flex
                        gap={10}
                        alignItems="center"
                        justifyContent="center"
                        flexDirection={['column', 'column', 'row']}
                        textAlign={['center', 'center', 'center', 'left']}
                    >
                        <Image
                            src="/images/magic-frog.png"
                            alt="Anura"
                            minWidth={['none', 'none', 300, 500]}
                            maxWidth={[100, 200, 500]}
                        />
                        <Box maxWidth={['auto', 500]}>
                            <Text flexGrow={0} fontSize="2xl">
                                We are still
                            </Text>
                            <Text
                                flexGrow={0}
                                fontSize="7xl"
                                fontWeight="bold"
                                bgClip="text"
                                bgGradient={`linear(to-l, ${theme.palette.error.main}, ${theme.palette.info.main})`}
                            >
                                Cooking
                            </Text>
                            <Text flexGrow={0} fontSize="2xl">
                                The rest of the roadmap with the ingredients
                                inspired by
                            </Text>
                            <Text
                                flexGrow={0}
                                fontSize="7xl"
                                fontWeight="bold"
                                bgClip="text"
                                bgGradient={`linear(90deg,${theme.palette.warning.main}, ${theme.palette.secondary.main})`}
                            >
                                You
                            </Text>
                        </Box>
                    </Flex>
                </Flex>
            </Container>

            <Box bg="rgba(0,0,0,0.15)" p="2.5% 2.5% 1.5% 2.5%">
                <Center justifyContent="space-between">
                    <Box w="33%" />
                    <Center w="33%" fontSize="1rem">
                        ©Copyright 2021
                    </Center>
                    <Flex w="33%" gap={5} justifyContent="flex-end">
                        <Link isExternal href="https://discord.gg/fDHkgfMkGX">
                            <Button {...styles.socialLinks}>
                                <FontAwesomeIcon icon={faDiscord} size="2x" />
                            </Button>
                        </Link>
                        <Link
                            isExternal
                            href="https://twitter.com/anuradao?s=21"
                        >
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
            </Box>
        </Box>
    )
}

export default FooterComponent
