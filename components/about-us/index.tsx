import React from 'react'
import { Heading } from '@chakra-ui/react'
import { useTheme } from '@chakra-ui/react'
import { Flex, Box, Container, Text } from '@chakra-ui/react'
import PrimaryTitleComponent from '../primary-title'
import { Image } from '@chakra-ui/react'

const AboutUsComponent = () => {
    const theme = useTheme()
    console.log()

    return (
        <Container maxW="container.xl">
            <Flex gap={20} flexDirection="column">
                <PrimaryTitleComponent>About Us</PrimaryTitleComponent>
                <Flex
                    gap={10}
                    alignItems="center"
                    justifyContent="center"
                    flexDirection={['column', 'column', 'row']}
                >
                    <Image
                        src="/images/frog.png"
                        alt="Anura"
                        minWidth={['none', 'none', 300, 500]}
                        maxWidth={[100, 200, 500]}
                    />
                    <Box maxWidth={['auto', 500]}>
                        <Text flexGrow={0} padding="20px" fontSize="2xl">
                            Dip your toads into our pond and learn about the
                            exciting world of Crypto and the DeFi space,
                            discover flourishing communities, and leap towards
                            previously unimaginable financial freedom!
                        </Text>
                        <Text
                            flexGrow={0}
                            padding="20px"
                            color={theme.palette.primary.main}
                            fontWeight="bold"
                            fontSize="2xl"
                        >
                            Anura, where the tadpoles of today transform into
                            the frogs of tomorrow.
                        </Text>
                    </Box>
                </Flex>
            </Flex>
        </Container>
    )
}

export default AboutUsComponent
