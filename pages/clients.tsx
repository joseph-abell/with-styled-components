import React from "react";
import styled from "styled-components";
import Head from "next/head";

import StyledPortfolio from "../components/StyledPortfolio";
import Image from "../components/Image";
import { getClientsData } from "../data";

const StyledClients = {
  Header: styled.h1``,
  Author: styled.p`
    text-align: right;
    color: #14808f;
    border-bottom: 1px solid #15a796;
    padding-bottom: 20px;
  `,
  Brands: styled.ul`
    text-align: center;
  `,
  Brand: styled.li`
    margin-bottom: 20px;
  `,
  Image: styled(Image)``,
  BrandTitle: styled.h2`
    font-size: 28px;
    color: #14808f;
    font-weight: 600;
    text-align: center;
    margin-bottom: 40px;
  `,
};

export async function getStaticProps() {
  const clients = await getClientsData();

  return {
    props: {
      ...clients,
    },
  };
}

const ClientPage = ({ title, quotes, brandTitle, brands, initialTitle }) => (
  <>
    <Head>
      <title>
        {title} - {initialTitle}
      </title>
    </Head>
    <StyledPortfolio.Container>
      <StyledClients.Header>{title}</StyledClients.Header>
      {quotes.length > 0 && (
        <ul>
          {quotes.map((quote) => (
            <li
              key={quote.quote}
              itemScope={true}
              itemType="https://schema.org/Recommendation"
            >
              <p itemProp="reviewBody">{quote.quote}</p>
              <StyledClients.Author itemProp="author">
                {quote.author}
              </StyledClients.Author>
            </li>
          ))}
        </ul>
      )}

      <StyledClients.BrandTitle>{brandTitle}</StyledClients.BrandTitle>

      {brands.length > 0 && (
        <StyledPortfolio.List
          gridGap="40px"
          smallWidth="100px"
          largeWidth="100px"
          maxWidth="600px"
        >
          {brands?.map((brand) => (
            <StyledPortfolio.Item
              key={brand.image}
              itemScope
              itemType="https://schema.org/Brand"
            >
              <Image
                src={brand.image}
                width={brand.imageWidth}
                height={brand.imageHeight}
              />
            </StyledPortfolio.Item>
          ))}
        </StyledPortfolio.List>
      )}
    </StyledPortfolio.Container>
  </>
);

export default ClientPage;
