import { Flex, Center, Text, Box } from '@chakra-ui/react'
import React from 'react'
import SecondaryTitleComponent from '../../secondary-title'
const DaoConcept = () => {
    return (
        <Box w="100%" flexDir="column">
            <SecondaryTitleComponent showCircle={false}>
                What are DAOs?
            </SecondaryTitleComponent>
            <Text textAlign="left" flexGrow={0} padding="20px" fontSize="2xl">
                In its purest form, a decentralized autonomous organization has
                no central leadership. It relies on a voting system where
                decisions are made collectively by the group; when done
                correctly, a DAO functions from the bottom-up. Members can pool
                their resources into a community treasury and proposals are
                voted on to determine how funds will be allocated.
            </Text>
        </Box>
    )
}
export default DaoConcept
