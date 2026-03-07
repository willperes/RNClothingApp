const palette = {
    purplePrimary: '#8E6CEF',

    black: {
        50: '#27272780',
        100: '#272727',
    },
    white: {
        50: '#FFFFFF80',
        100: '#FFFFFF',
    },
    background: {
        lightPrimary: '#FFFFFF',
        lightSecondary: '#F4F4F4',
        dark: '#1D182A',
        darkSecondary: '#342F3F',
    }
}

const lightTheme = {
    primary: palette.purplePrimary,
    primaryContrast: palette.white[100],

    background: palette.background.lightPrimary,
    backgroundSecondary: palette.background.lightSecondary,
    backgroundContrast: palette.black[100],

    textPrimary: palette.black[100],
    textSecondary: palette.black[50],

    iconPrimary: palette.black[100],
    iconSecondary: palette.black[50],
    iconBrand: palette.purplePrimary,
}

type Theme = typeof lightTheme;

const darkTheme: Theme = {
    primary: palette.purplePrimary,
    primaryContrast: palette.white[100],
    
    background: palette.background.dark,
    backgroundSecondary: palette.background.darkSecondary,
    backgroundContrast: palette.white[100],

    textPrimary: palette.white[100],
    textSecondary: palette.white[50],

    iconPrimary: palette.white[100],
    iconSecondary: palette.white[50],
    iconBrand: palette.purplePrimary,
}

export const Colors = { lightTheme, darkTheme };