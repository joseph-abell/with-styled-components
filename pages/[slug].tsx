import React from "react";
import styled from "styled-components";
import Head from "next/head";
import marked from "marked";
import Image, { StyledImage } from "../components/Image";
import StyledPortfolio from "../components/StyledPortfolio";
import { getCaseStudyPaths, getCaseStudyFromSlug } from "../data";

const StyledTitle = styled.h1`
  color: rgba(0, 0, 0, 0.8);
`;

const StyledSubTitle = styled.h2``;

const ImageContainer = styled.div`
  ${StyledImage} {
    width: auto;
  }
`;

export async function getStaticProps({ params }) {
  const caseStudy = await getCaseStudyFromSlug(params.slug);

  return {
    props: {
      ...caseStudy,
    },
  };
}

export async function getStaticPaths() {
  const paths = await getCaseStudyPaths();
  return {
    paths,
    fallback: false,
  };
}

const CaseStudies = ({
  hidden,
  title,
  deck = "",
  primaryImage,
  primaryImageWidth,
  primaryImageHeight,
  images,
  initialTitle,
}) => {
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
  if (hidden) return <div>Missing Case Study</div>;
  return (
    <>
      <Head>
        <title>
          {title} - {initialTitle}
        </title>
      </Head>
      <StyledTitle>Case Study</StyledTitle>
      <StyledSubTitle>{title}</StyledSubTitle>
      {primaryImage && (
        <ImageContainer>
          <Image
            src={primaryImage}
            width={primaryImageWidth}
            height={primaryImageHeight}
          />
        </ImageContainer>
      )}
      <div dangerouslySetInnerHTML={{ __html: marked(deck) }}></div>
      {images && (
        <StyledPortfolio.List>
          {images?.map((image) => (
            <StyledPortfolio.Item key={image.image || image}>
              <Image
                src={image.image || image}
                width={image.imageWidth}
                height={image.imageHeight}
              />
            </StyledPortfolio.Item>
          ))}
        </StyledPortfolio.List>
      )}
    </>
  );
};

export default CaseStudies;
