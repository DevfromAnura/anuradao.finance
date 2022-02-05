import theme from '../../../utils/theme'
const styles = {
    navButtons: {
        fontSize: ['0.5rem', '.75rem', '1rem', '1.25rem', '1.5rem'],
        fontWeight: '400',
        bg: 'transparent',
        size: 'sm',
        color: 'gray.400',
        fontFamily: theme.fonts.heading,
        _hover: { color: 'white' },
        _focus: {},
        _active: {},
    },
    navButtonsContainer: {
        justifyContent: 'flex-end',
        padding: ['0rem', '1rem', '1rem', '1.5rem', '2rem'],
        gap: ['0.5rem', '0rem', '0.75rem', '1rem', '1rem', '1.5rem'],
    },
    backgroundImage: {
        flexDirection: 'column',
        padding: '1rem',
        backgroundSize: 'cover',
        height: '100vh',
        bgPos: 'center',
        backgroundImage: `url(/bg-header.png)`,
        backgroundRepeat: 'no-repeat',
    },
    launchingSoonContainer: {
        display: 'flex',
        flexDirection: ['column', 'column', 'row', 'row', 'row'],
        marginTop: '-6%',
        mb: '1.5rem',
        gap: ['0rem', '0.25rem', '0.5rem', '0.75rem', '1rem'],
    },
    launchingSoonHeaders: {
        fontSize: ['1.25rem', '1.5rem', '1.75rem', '2rem', '2.5rem'],
        textAlign: 'center',
    },
    socialLinks: {
        fontSize: ['1rem', '1.5rem', '1.5rem'],
        borderRadius: '100%',
        width: ['4.25rem', '5.25rem', '6.75rem', '7.75rem', '8.5rem'],
        height: ['4.25rem', '5.25rem', '6.75rem', '7.75rem', '8.5rem'],
        background: 'rgb(0,0,0,0.10)',
        backgroundColor: 'unset',
        border: [
            '0.15rem solid #02E279',
            '0.3rem solid #02E279',
            '0.45rem solid #02E279',
            '0.65rem solid #02E279',
            '0.75rem solid #02E279',
        ],
        _hover: { background: theme.palette.primary.main, color: 'black' },
        _focus: {},
    },
    socialLinksContainer: {
        mt: ['1%', '1.5%', '1.75%', '2.5%', '3.5%'],
        gap: ['0.5rem', '1rem', '2.25rem', '3.5rem', '5rem'],
    },
}
export default styles
