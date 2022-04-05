import type { NextPage } from "next"
import Head from "next/head"
import styled from "styled-components"
import { ImageEditor } from "components/organism/ImageEditor"
import { PosterOptions } from "components/organism/PosterOptions"

const TitleStyled = styled.h1`
  color: ${({ theme }) => theme.colors.primary};
`

const PosterCreator: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Poster creator</title>
        <meta name="description" content="Create your incredible poster with printed files" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <TitleStyled>
          Poster creator
        </TitleStyled>
        <ImageEditor/>
        <PosterOptions/>
      </main>
    </div>
  )
}

export default PosterCreator
