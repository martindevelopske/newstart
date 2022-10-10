
import React from 'react'
import { ThemeProvider } from 'styled-components'
import HomePage from './Pages/HomePage'

const theme={
  colorPrimary: "#00E6C4",
  bgColor: "#21201E",
  fillColor: "rgba(206, 205, 202, 0.06)",
  textColor: "#DDE2EA"
}
function App() {
  return (
    
    <ThemeProvider theme={theme}>
      <HomePage />
    </ThemeProvider>
    
    
  )
}

export default App