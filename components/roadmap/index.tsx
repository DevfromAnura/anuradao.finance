import React from 'react'
import { Heading } from '@chakra-ui/react'
import { useTheme } from '@chakra-ui/react'
import { Flex, Box, Container, Text, Link } from '@chakra-ui/react'
import SecondaryTitleComponent from '../secondary-title'
import LeftBox from './left-box'
import RightBox from './right-box'
import styles from './styles'
import MobileRoadMapComponent from './mobile'
import { GiCheckMark } from 'react-icons/gi'

const RoadMapComponent = () => {
    const theme = useTheme()

    return (
        <Container maxW="container.xl">
            <Flex flexDirection="column">
                <SecondaryTitleComponent>Roadmap</SecondaryTitleComponent>
                <Flex
                    mt="-10rem"
                    gap={0}
                    alignItems="center"
                    justifyContent="center"
                    display={['none', 'none', 'flex']}
                >
                    <Box mt="12.5rem">
                        <LeftBox icon={<GiCheckMark fontSize="4rem" />}>
                            <>
                                <Heading fontSize="2rem" mb={3}>
                                    1. Governance Token Creation and Launch{' '}
                                </Heading>
                                <Text>
                                    Create a governance token used for voting on
                                    the Anura DAO{' '}
                                    <Link
                                        color="blue.400"
                                        href="https://snapshot.org/#/anuradao.eth"
                                        isExternal
                                    >
                                        {`snapshot`}
                                    </Link>
                                    , and distribute tokens to members of the
                                    community.
                                </Text>
                            </>
                        </LeftBox>

                        <LeftBox>
                            <>
                                <Flex flexDir="column" mb={3}>
                                    <Heading fontSize="2rem">
                                        3. Launch of Ribbit (RIBT)
                                    </Heading>
                                    <Text ml="auto" color="green.500">
                                        Q1 2022
                                    </Text>
                                </Flex>
                                <Text>
                                    Ribbit will be launched on a sushiswap with
                                    an AVAX-RIBT liquidity pair. Ribbit will be
                                    given utility in upcoming Anura protocols.
                                </Text>
                            </>
                        </LeftBox>
                        <LeftBox>
                            <>
                                <Flex flexDir="column">
                                    <Heading fontSize="2rem">
                                        {' '}
                                        5. Development of the Ecosystem
                                    </Heading>
                                    <Text ml="auto" color="green.500">
                                        Q2 2022
                                    </Text>
                                </Flex>
                                <Text>
                                    Anura DAO intends to continue building
                                    protocols on top of the Anura ecosystem, and
                                    in doing so create an unparalleled utility
                                    for Ribbit.
                                </Text>
                            </>
                        </LeftBox>
                    </Box>

                    <Flex flexBasis="20px">
                        <Box {...styles.verticalLine} />
                    </Flex>

                    <Box mt="12.5rem">
                        <RightBox icon={<GiCheckMark fontSize="4rem" />}>
                            <>
                                <Heading fontSize="2rem" mb={3}>
                                    {' '}
                                    2. Bootstrap funding
                                </Heading>
                                <Text>
                                    Raise 200 AVAX from the community. Funds
                                    will be used for initial startup costs of
                                    Anura DAO.
                                </Text>
                            </>
                        </RightBox>

                        <RightBox mt="0rem">
                            {/* <>
                                <Flex flexDir="column" mb={3}>
                                    <Heading fontSize="2rem">
                                        {' '}
                                        4. Launch of Bullfrog capital (OHM fork)
                                    </Heading>
                                    <Text ml="auto" color="green.500">
                                        Q1 2022
                                    </Text>
                                </Flex>
                                <Text>
                                    Create and launch Anura’s first protocol in
                                    our ecosystem, Bullfrog capital.
                                </Text>
                            </> */}
                            <>
                                <Flex mb={3} flexDir="column">
                                    <Heading fontSize="2rem">
                                        4. Learn to Earn Program
                                    </Heading>
                                    <Text ml="auto" color="green.500">
                                        Q2 2022
                                    </Text>
                                </Flex>
                                <Text>
                                    Develop our Learn to Earn program where
                                    users can be rewarded with RIBT for taking
                                    part in our educational services.
                                </Text>
                            </>
                        </RightBox>

                        {/* <RightBox mt="0rem">
                            <>
                                <Flex flexDir="column">
                                    <Heading fontSize="2rem">
                                        {' '}
                                        6. Development of the Ecosystem
                                    </Heading>
                                    <Text ml="auto" color="green.500">
                                        Q2 2022
                                    </Text>
                                </Flex>
                                <Text>
                                    Anura DAO intends to continue building
                                    protocols on top of the Anura ecosystem, and
                                    in doing so create an unparalleled utility
                                    for Ribbit.
                                </Text>
                            </>
                        </RightBox> */}
                    </Box>
                </Flex>

                <MobileRoadMapComponent />
            </Flex>
        </Container>
    )
}

export default RoadMapComponent
