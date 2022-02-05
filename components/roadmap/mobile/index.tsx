import React from 'react'
import { Heading } from '@chakra-ui/react'
import { useTheme } from '@chakra-ui/react'
import { Flex, Box, Container, Text, Link } from '@chakra-ui/react'
import RightBox from '../right-box'
import LeftBox from '../left-box'

const MobileRoadMapComponent = () => {
    const theme = useTheme()

    return (
        <Flex
            gap="20px"
            flexDirection="column"
            display={['flex', 'flex', 'none']}
            mt={'40px'}
        >
            <Box
                bg="rgba(0,0,0,0.25)"
                padding="1.75rem"
                borderRadius="40px 0 40px 0"
                minHeight="100px"
            >
                <Heading>1. Governance Token Creation and Launch</Heading>
                <Text>
                    Create a governance token used for voting on the Anura DAO{' '}
                    <Link
                        color="blue.400"
                        href="https://snapshot.org/#/anuradao.eth"
                        isExternal
                    >
                        {`snapshot`}
                    </Link>
                    , and distribute tokens to members of the community.
                </Text>
            </Box>
            <Box
                bg="rgba(0,0,0,0.25)"
                padding="1.75rem"
                borderRadius="40px 0 40px 0"
                minHeight="100px"
            >
                <Heading> 2. Bootstrap funding</Heading>
                <Text>
                    Raise 200 AVAX from the community. Funds will be used for
                    initial startup costs of Anura DAO.
                </Text>
            </Box>
            <Box
                bg="rgba(0,0,0,0.25)"
                padding="1.75rem"
                borderRadius="40px 0 40px 0"
                minHeight="100px"
            >
                <Flex flexDir="column">
                    <Heading>3. Launch of Ribbit (RIBT)</Heading>
                    <Text ml="auto" color="green.500">
                        Q1 2022
                    </Text>
                </Flex>
                <Text>
                    Ribbit will be launched on a sushiswap with an AVAX-RIBT
                    liquidity pair. Ribbit will be given utility in upcoming
                    Anura protocols.
                </Text>
            </Box>

            <Box
                bg="rgba(0,0,0,0.25)"
                padding="1.75rem"
                borderRadius="40px 0 40px 0"
                minHeight="100px"
            >
                <Flex flexDir="column">
                    <Heading>4. Learn to Earn Program </Heading>
                    <Text ml="auto" color="green.500">
                        Q2 2022
                    </Text>
                </Flex>
                <Text>
                    Develop our Learn to Earn program where users can be
                    rewarded with RIBT for taking part in our educational
                    services.
                </Text>
            </Box>
            <Box
                bg="rgba(0,0,0,0.25)"
                padding="1.75rem"
                borderRadius="40px 0 40px 0"
                minHeight="100px"
            >
                <Flex flexDir="column">
                    <Heading>5. Development of the Ecosystem</Heading>
                    <Text ml="auto" color="green.500">
                        Q2 2022
                    </Text>
                </Flex>
                <Text>
                    Anura DAO intends to continue building protocols on top of
                    the Anura ecosystem, and in doing so create an unparalleled
                    utility for RIbbit.
                </Text>
            </Box>
        </Flex>
    )
}

export default MobileRoadMapComponent
