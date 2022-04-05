import type { NextPage } from "next"
import Head from "next/head"
import styled from "styled-components"
import { ImageEditor } from "components/organism/ImageEditor"
import { PosterOptions } from "components/organism/PosterOptions"

const TitleStyled = styled.h1`
  color: ${({ theme }) => theme.colors.primary};
`

const PosterCreatorStyled = styled.div`
  > main {
    display: grid;
    grid-template-columns: minmax(250px, 1fr) minmax(250px, 1fr);
    grid-gap: 30px;
  }
`

const PosterCreator: NextPage = () => {
  return (
    <PosterCreatorStyled>
      <Head>
        <title>Poster creator</title>
        <meta name="description" content="Create your incredible poster with printed files" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <TitleStyled>
          Poster creator
      </TitleStyled>

      <main>
        <ImageEditor/>
        <PosterOptions/>
      </main>
    </PosterCreatorStyled>
  )
}

export default PosterCreator
