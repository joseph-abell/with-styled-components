import React from "react";
import styled from "styled-components";
import Head from "next/head";

import Image, { StyledImage } from "../components/Image";

import { getAboutData } from "../data";

const StyledAbout = {
  Header: styled.h1``,
  Image: styled(Image)`
    max-width: 100%;
  `,
  Deck: styled.div`
    width: 100%;

    strong {
      font-size: 16px;
    }

    ul {
      margin-bottom: 20px;
    }

    li {
      list-style: disc inside;
      margin-bottom: 10px;
    }
  `,
};

const ImageContainer = styled.div`
  ${StyledImage} {
    width: auto;
  }
`;

export async function getStaticProps() {
  const about = await getAboutData();

  return {
    props: {
      ...about,
    },
  };
}

const AboutPage = ({
  title,
  deck,
  image,
  imageHeight = "1",
  imageWidth = "1",
  initialTitle,
}) => (
  <>
    <Head>
      <title>About - {initialTitle}</title>
    </Head>
    <div itemScope itemType="https://schema.org/LocalBusiness">
      <StyledAbout.Header>{title}</StyledAbout.Header>

      <ImageContainer imageWidth={imageWidth} imageHeight={imageHeight}>
        <Image src={image} width={imageWidth} height={imageHeight} />
      </ImageContainer>

      <StyledAbout.Deck
        dangerouslySetInnerHTML={{ __html: deck }}
        itemProp="description"
      />
    </div>
  </>
);

export default AboutPage;
