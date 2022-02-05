import theme from '../../../utils/theme'

const styles = {
    socialLinks: {
        fontSize: ['0.5rem', '0.75rem', '0.75rem', '1rem', '1.5rem'],
        borderRadius: '100%',
        width: ['3rem', '3.75rem', '4.75rem', '5.75rem', '6.25rem'],
        height: ['3rem', '3.75rem', '4.75rem', '5.75rem', '6.25rem'],
        background: 'rgb(255,255,255,0.10)',
        border: [
            '0.15rem solid #04ECF6',
            '0.175rem solid #04ECF6',
            '0.2rem solid #04ECF6',
            '0.25rem solid #04ECF6',
            '0.3rem solid #04ECF6',
        ],

        _hover: { background: theme.palette.warning.main, color: 'black' },
        _focus: {},
    },
}
export default styles
