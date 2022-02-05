import theme from '../../utils/theme'

const styles = {
    verticalLine: {
        width: '20px',
        height: ['1100px', '1100px', '1400px', '1300px', '1100px'],
        marginTop: '15rem',
        borderRadius: '10px',
        bgGradient: `linear(${theme.palette.warning.main}, ${theme.palette.error.main})`,
        zIndex: '1',
        display: ['none', 'none', 'block', 'block', 'block'],
    },
}
export default styles
