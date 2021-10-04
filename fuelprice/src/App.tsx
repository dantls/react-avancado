
import {ThemeProvider} from 'styled-components'
import { GlobalStyles } from './styles/GlobalStyles';

import { FuelPage } from "./pages/Fuel"
import theme from './theme/theme'

function App() {

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <FuelPage />
    </ThemeProvider>
  )
}

export default App
