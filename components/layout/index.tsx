import React from 'react'
import Header from './header'
import Footer from './footer'

const styles = {
    root: {
        background: '#0F181A',
        color: '#FFFFFF',
    },
}

const Layout = ({ children }) => {
    return (
        <div {...styles.root}>
            <Header />
            {children}
            <Footer />
        </div>
    )
}

export default Layout
