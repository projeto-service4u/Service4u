import { purple, green } from '@material-ui/core/colors'
import { createTheme } from '@material-ui/core/styles'
import { ThemeProvider } from '@material-ui/styles'

import { Cores } from './cores'
export const theme = {
  colors: {
    primaryColor: Cores.PRIMARIA_1,
    secondaryColor: Cores.SECUNDARIA_2,
    white: '#FFFFFF',
    mediumGray: Cores.FUNDO
  },
  font: {
    family: {
      default: "'Poppins', sans-serif",
      secondary: "'Montserrat', sans-serif"
    },
    sizes: {
      xsmall: '8rem',
      small: '1.6rem',
      medium: '2.4rem',
      large: '3.2rem',
      xlarge: '4.0rem',
      xxlarge: '4.8rem',
      huge: '5.6rem',
      xhuge: '6.4rem'
    }
  },
  media: {
    lteMedium: '(max-width: 768px)'
  },
  spacings: {
    xsmall: '8rem',
    small: '1.6rem',
    medium: '2.4rem',
    large: '3.2rem',
    xlarge: '4.0rem',
    xxlarge: '4.8rem',
    huge: '5.6rem',
    xhuge: '6.4rem'
  }
}
