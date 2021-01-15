import React from "react";
import styled from "styled-components";
import marked from "marked";
import Head from "next/head";
import Image, { StyledImage } from "../../components/Image";
import StyledPortfolio from "../../components/StyledPortfolio";
import { getServicePaths, getServiceFromSlug } from "../../data";

const StyledTitle = styled.h1`
  color: rgba(0, 0, 0, 0.8);
`;

const ImageContainer = styled.div`
  ${StyledImage} {
    width: auto;
  }
`;

export async function getStaticProps({ params }) {
  const service = await getServiceFromSlug(params.slug);
  if (service.is404) return { notFound: true };
  return {
    props: {
      ...service,
    },
  };
}

export async function getStaticPaths() {
  const paths = await getServicePaths();
  return {
    paths,
    fallback: false,
  };
}

const Service = (props) => {
  const {
    title,
    content,
    primaryImage,
    primaryImageWidth,
    primaryImageHeight,
    images,
    deck,
    initialTitle,
  } = props;

  if (!title)
    return (
      <>
        <Head>
          <title>Page Not Found - {initialTitle}</title>
        </Head>
        <StyledPortfolio.Container>
          <StyledPortfolio.SubTitle>Page Not Found</StyledPortfolio.SubTitle>
        </StyledPortfolio.Container>
      </>
    );

  return (
    <>
      <Head>
        <title>
          {title} - {initialTitle}
        </title>
      </Head>
      <StyledTitle>Service</StyledTitle>

      <h2>{title}</h2>

      {primaryImage && (
        <p>
          <ImageContainer>
            <Image
              src={primaryImage || ""}
              width={primaryImageWidth}
              height={primaryImageHeight}
            />
          </ImageContainer>
        </p>
      )}

      <div dangerouslySetInnerHTML={{ __html: marked(deck || "") }} />

      {content && (
        <ul>
          {content.map((c, id) => (
            <li key={id}>
              {c.text && (
                <div dangerouslySetInnerHTML={{ __html: marked(c.text) }} />
              )}

              {c.image && (
                <Image
                  src={c.image}
                  width={c.imageWidth}
                  height={c.imageHeight}
                />
              )}
            </li>
          ))}
        </ul>
      )}

      <StyledPortfolio.List>
        {images?.map((image) => (
          <StyledPortfolio.Item key={image}>
            <Image
              src={image.image}
              width={image.imageWidth}
              height={image.imageHeight}
            />
          </StyledPortfolio.Item>
        ))}
      </StyledPortfolio.List>
    </>
  );
};

export default Service;
