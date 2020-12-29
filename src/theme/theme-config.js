import { rgbaString } from '../utils/color-conversion'

const COLOR_NAMES = {
  lightestGrey: '#F5F7FE',
  lightGrey: '#D1D2E3',
  grey: '#A3ABC7',
  darkGrey: '#5F6887',
  darkestGrey: '#414A69',
  black: '#11141C',
  blue: '#527BFE',
  green: '#0ED08F',
  white: '#FFFFFF',
}

const themeConfig = {
  palette: {
    background: {
      special: 'linear-gradient(128deg, #5352B2 0%, #4983BD 100%, #4983BD 100%)',
    },
    text: {
      secondary: COLOR_NAMES.darkGrey,
      primary: COLOR_NAMES.black,
    },
    primary: {
      main: COLOR_NAMES.blue,
    },
    secondary: {
      main: COLOR_NAMES.darkGrey,
    },
    colors: COLOR_NAMES,
  },
  overrides: {
    MuiButton: {
      root: {
        borderRadius: '2px',
        fontSize: '1rem',
        padding: '10.5px 24px',
        fontFamily: 'Open Sans',
        fontWeight: 600,
        textAlign: 'center',
        lineHeight: '24px',
        textTransform: 'none',
      },
      contained: {
        color: COLOR_NAMES.lightestGrey,
        '&$disabled': {
          backgroundColor: COLOR_NAMES.lightGrey,
          color: COLOR_NAMES.lightestGrey,
        },
      },
      outlined: {
        padding: '10.5px 24px',
        fontSize: '1rem',
        fontWeight: 600,
        textAlign: 'center',
        lineHeight: '24px',
        color: COLOR_NAMES.darkGrey,
        backgroundColor: COLOR_NAMES.white,
        border: `1px solid ${COLOR_NAMES.lightGrey}`,
        '&$disabled': {
          backgroundColor: COLOR_NAMES.white,
          color: COLOR_NAMES.grey,
        },
        '&:hover': {
          backgroundColor: COLOR_NAMES.nearWhite,
        },
        '&:active': {
          borderColor: COLOR_NAMES.grey,
          backgroundColor: COLOR_NAMES.nearWhite,
        },
      },
    },
    MuiIconButton: {
      root: {
        color: COLOR_NAMES.grey,
      },
    },
    MuiOutlinedInput: {
      input: {
        padding: '0.875rem',
        color: COLOR_NAMES.darkestGrey,
        background: COLOR_NAMES.white,
        '&::placeholder': {
          color: COLOR_NAMES.lightGrey,
          opacity: 1,
        },
      },
      root: {
        '& $notchedOutline': {
          borderColor: COLOR_NAMES.lightGrey,
        },
        '&:hover:not($disabled):not($focused):not($error) $notchedOutline': {
          borderColor: COLOR_NAMES.lightGrey,
          '@media (hover: none)': {
            borderColor: COLOR_NAMES.lightGrey,
          },
        },
        '&$focused $notchedOutline': {
          borderColor: COLOR_NAMES.blue,
          borderWidth: 1,
        },
        '&$error $notchedOutline': {
          borderColor: COLOR_NAMES.red,
        },
        '&$disabled $notchedOutline': {
          borderColor: COLOR_NAMES.lightGrey,
          backgroundColor: rgbaString(COLOR_NAMES.lightestGrey, 0.6),
        },
      },
    },
    MuiTypography: {
      h3: {
        fontFamily: 'Open Sans',
        fontSize: '1.5rem',
        color: COLOR_NAMES.black,
        lineHeight: 1.333,
        fontWeight: 300,
      },
    },


  },
}

export { themeConfig }
