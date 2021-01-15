import React from "react";
import marked from "marked";
import styled from "styled-components";
import Head from "next/head";

import Image, { StyledImage } from "../../components/Image";
import StyledPortfolio from "../../components/StyledPortfolio";
import { getBlogFromSlug, getBlogPaths } from "../../data";

const ImageContainer = styled.div`
  ${StyledImage} {
    width: auto;
  }
`;

export async function getStaticProps({ params }) {
  const blog = (await getBlogFromSlug(params.slug)) as { [key: string]: any };
  if (blog.is404) return { notFound: true };
  return {
    props: {
      ...blog,
    },
  };
}

export async function getStaticPaths() {
  const paths = await getBlogPaths();
  return {
    paths: paths,
    fallback: false,
  };
}

const Blog = ({
  title,
  content,
  primaryImage,
  primaryImageHeight,
  primaryImageWidth,
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
  return (
    <>
      <Head>
        <title>
          {title} - {initialTitle}
        </title>
      </Head>
      <h1>{title}</h1>

      {primaryImage && (
        <ImageContainer>
          <Image
            width={primaryImageWidth}
            height={primaryImageHeight}
            src={primaryImage}
          />
        </ImageContainer>
      )}

      {content && (
        <ul>
          {content.map((c, id) => (
            <li key={id}>
              {c.text && (
                <div dangerouslySetInnerHTML={{ __html: marked(c.text) }} />
              )}

              {c.showImage && (
                <div style={{ marginBottom: "20px" }}>
                  <Image
                    src={c.image}
                    width={c.imageWidth}
                    height={c.imageHeight}
                  />
                </div>
              )}
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default Blog;
