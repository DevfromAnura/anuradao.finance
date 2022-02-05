import { Flex, Box, Center } from '@chakra-ui/react'
import React from 'react'
import AboutUsComponent from '../components/about-us'
import RoadMapComponent from '../components/roadmap'
import DaoConcept from '../components/concept/daoConcept'
import WhyAnurasDifferent from '../components/concept/howWeInnovate'
import Concept from '../components/concept'
import Head from 'next/head'

const IndexPage = () => {
    return (
        <Flex flexDirection="column" mt={20}>
            <Box pt="20" id="about-us">
                <AboutUsComponent />
            </Box>
            <Concept />
            <Box pt="20" id="roadmap">
                <RoadMapComponent />
            </Box>
        </Flex>
    )
}
export default IndexPage
