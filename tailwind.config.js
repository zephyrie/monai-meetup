const plugin = require('tailwindcss/plugin')

module.exports = {
    theme: {
        extend: {
            zIndex: {
                '-10': '-10',
            },
            inset: {
                '100': '100%',
            },
            colors: {
                brand: {
                    DEFAULT: '#5DC1B7',
                    primary: '#02A3A3',
                    secondary: '#98D9D5',
                    light: '#E6F3F7',
                    dark: '#05789E'
                },
                neutral: {
                    darkestblack: '#272727',
                    gray1: '#5D5D5D',
                    gray2: '#BEBEBE',
                    lightgray: '#F5F5F5',
                    purewhite: '#FFFFFF'
                }
            },
            display: ['hover', 'group-hover'],
            height: {
                '19/20': '95vh',
                '128': '32rem'
            },
            width: { '19/20': '95vw' }
        }
    },
    variants: {},
    plugins: [],
}