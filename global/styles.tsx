import { FC } from "react"
import { createGlobalStyle, ThemeProvider } from "styled-components"
import { Theme } from "./types"

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    min-height: 100vh;
    font-family: 'Inter', Arial, sans-serif;
  }
  * {
    box-sizing: border-box;
  }
`

export const theme: Theme = {
  colors: {
    primary: "#ff70f3",
  },
}

export const AppStyled: FC = ({ children }) => (<>
  <GlobalStyle />
  <ThemeProvider theme={theme}>
    {children}
  </ThemeProvider>
</>
)