import type { AppProps } from "next/app"
import { AppStyled } from "global/styles"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AppStyled>
      <Component {...pageProps} />
    </AppStyled>
  )
}

export default MyApp
