import { NextSeoProps } from 'next-seo'
import image from '../public/images/anuradao_background.png'
const config = {
    author: 'Anura DAO Developers',
    siteName: 'Anura DAO',
    siteDescription: `Learn more about our goals and objectives are here at Anura. Come join us on our mission to educate crypto beginners and take over the DeFi space.`,
    defaultPageTitle: 'Anura DAO website',
    blogTitle: 'Anura landing page',
    baseUrl: 'www.anuradao.xyz/',
    websiteLogo: image.src,
}
export default config

type DataType = {
    title?: string
    seoDescription?: string
    canonicalUrl?: string
    imageUrl?: string
    slug?: string
    publishDate?: string
    modifiedDate?: string
}

const getImage = (data: DataType = {}) => {
    if (data.imageUrl) {
        return [
            { url: data.imageUrl, width: 600, height: 300, alt: data.title },
        ]
    }
    if (data.slug) {
        return [
            {
                url: `/${data.slug}`,
                width: 600,
                height: 300,
                alt: data.title,
            },
        ]
    }
    return [
        {
            url: config.websiteLogo,
            width: 280,
            height: 280,
            alt: 'Anura DAO',
        },
    ]
}

export function createSEOConfig(data: DataType = {}): NextSeoProps {
    const title = data.title || config.defaultPageTitle
    const description = data.seoDescription
        ? data.seoDescription
        : config.siteDescription

    return {
        title,
        description,
        openGraph: {
            type: 'website',
            locale: 'en_US',
            url: data.canonicalUrl,
            title,
            description,
            images: getImage(data),
            site_name: config.siteName,
        },
    }
}
