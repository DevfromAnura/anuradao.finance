import { ChakraProvider } from '@chakra-ui/provider'
import { AppProps } from 'next/app'
import Head from 'next/head'
import React from 'react'
import Layout from '../components/layout'
import theme from '../utils/theme'
import { DefaultSeo } from 'next-seo'
import icon from '../public/icons/favicon.ico'

import { config } from '@fortawesome/fontawesome-svg-core'
config.autoAddCss = false // Tell Font Awesome to skip adding the CSS automatically since it's being imported below
import '@fortawesome/fontawesome-svg-core/styles.css'

// Fonts
import '@fontsource/poppins/300.css'
import '@fontsource/poppins/400.css'
import '@fontsource/poppins/700.css'
import '@fontsource/poppins/900.css'
import { createSEOConfig } from '../utils/seoMeta'

const MyApp = ({ Component, pageProps }: AppProps) => (
    <ChakraProvider theme={theme}>
        <DefaultSeo {...createSEOConfig()} />
        <Head>
            <link rel="icon" href={icon.src} />
            <title>Anura DAO</title>
            <meta
                name="viewport"
                content="initial-scale=1, width=device-width"
            />
        </Head>
        <Layout>
            <Component {...pageProps} />
        </Layout>
    </ChakraProvider>
)

export default MyApp
