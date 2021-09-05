import { ThemeProvider } from '@material-ui/styles'
import theme from './Theme'
import Header from './components/Header'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header></Header>
      Hello!!
    </ThemeProvider>
  )
}

export default App
