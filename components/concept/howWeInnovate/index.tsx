import { Flex, Center, Text, Box } from '@chakra-ui/react'
import React from 'react'
import PrimaryTitleComponent from '../../primary-title'
const WhyAnurasDifferent = () => {
    return (
        <Box w="100%" flexDir="column">
            <PrimaryTitleComponent showCircle={false}>
                Why we're different
            </PrimaryTitleComponent>
            <Text flexGrow={0} padding="20px" fontSize="2xl" textAlign="left">
                Sometimes it can be challenging to know what intentions are in
                DeFi. Organizations can be formed anonymously under the guise of
                being a DAO, only to have many of the core systems stripped away
                or modified beyond recognition. Anura DAO is one of the only
                true governance-first organizations in decentralized finance.
                Community members own the organization, and they determine its
                direction. We are focused on providing opportunities for all
                members to attain financial freedom using our platform.
            </Text>
        </Box>
    )
}
export default WhyAnurasDifferent
