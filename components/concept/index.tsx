import { Center, Flex } from '@chakra-ui/react'
import DaoConcept from './daoConcept'
import WhyAnurasDifferent from './howWeInnovate'
const Concept = () => {
    return (
        <Center pt="20">
            <Flex
                w="85%"
                gap={10}
                flexDir={['column', 'column', 'column', 'row', 'row']}
                display={['none', 'flex', 'flex', 'flex', 'flex']}
            >
                <DaoConcept />
                <WhyAnurasDifferent />
            </Flex>
        </Center>
    )
}
export default Concept
