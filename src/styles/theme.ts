import { purple, green } from '@material-ui/core/colors'
import { createTheme } from '@material-ui/core/styles'
import { ThemeProvider } from '@material-ui/styles'

const theme = createTheme({
  palette: {
    primary: {
      main: purple[500]
    },
    secondary: {
      main: green[500]
    }
  },
  typography: {
    fontFamily: ['Roboto', 'sans-serif'].join(',')
  }
})

export default theme
