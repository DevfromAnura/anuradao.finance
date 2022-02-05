import React from 'react'
import { Heading } from '@chakra-ui/react'
import { useTheme } from '@chakra-ui/react'
import { Flex, Box } from '@chakra-ui/react'

interface Props {
    children: string
    showCircle?: boolean
}

const SecondaryTitleComponent = ({ showCircle, children }: Props) => {
    const theme = useTheme()

    const styles = {
        decoration: {
            borderRadius: '100%',
            border: '10px solid',
        },
        first: {
            borderColor: theme.palette.warning.main,
        },
        second: {
            borderColor: theme.palette.error.main,
        },
        third: {
            borderColor: theme.palette.secondary.main,
        },
    }

    return (
        <Flex
            alignItems={'center'}
            justify={'center'}
            gap={10}
            flexDirection={['column', 'column', 'row']}
        >
            <Heading
                bgGradient={`linear(to-l, ${theme.palette.warning.main}, ${theme.palette.error.main})`}
                bgClip="text"
                fontSize={
                    showCircle
                        ? { base: '4xl', md: '5xl', lg: '6xl' }
                        : { base: '3xl', md: '4xl', lg: '5xl' }
                }
                fontWeight="black"
                as="h1"
                textAlign="center"
            >
                {children}
            </Heading>
            {showCircle !== false && (
                <Flex gap={10}>
                    <Box
                        width={['20px', '60px', '80px', '100px']}
                        height={['20px', '60px', '80px', '100px']}
                        {...styles.decoration}
                        {...styles.first}
                    />
                    <Box
                        width={['20px', '60px', '80px', '100px']}
                        height={['20px', '60px', '80px', '100px']}
                        {...styles.decoration}
                        {...styles.second}
                    />
                    <Box
                        width={['20px', '60px', '80px', '100px']}
                        height={['20px', '60px', '80px', '100px']}
                        {...styles.decoration}
                        {...styles.third}
                    />
                </Flex>
            )}
        </Flex>
    )
}

export default SecondaryTitleComponent
