import React from "react";
import Link from "next/link";
import Head from "next/head";
import styled from "styled-components";

import Image from "../../components/Image";
import StyledPortfolio from "../../components/StyledPortfolio";
import { getServicesData } from "../../data";
const StyledServices = {
  Header: styled.h1`
    line-height: 1.5em;
  `,
  List: styled.ul`
    background: white;
  `,
  Service: styled.li`
    width: 100%;
  `,
  Link: styled(Link)`
    display: block;
    width: 100%;
    text-decoration: none;
    color: #eff1bf;
    font-weight: bold;
    font-size: 28px;
  `,
  Title: styled.span`
    width: 100%;
    height: 100%;
    display: block;
    margin-top: -210px;
    margin-bottom: 150px;
    text-align: center;
  `,
};

export async function getStaticProps() {
  const services = await getServicesData();
  const serviceItems = await Promise.all(services);
  return {
    props: {
      services: serviceItems,
    },
  };
}

const ServicesPage = ({ services, initialTitle }) => {
  return (
    <>
      <Head>
        <title>Services - {initialTitle}</title>
      </Head>
      <StyledPortfolio.Container>
        <StyledServices.Header>Services</StyledServices.Header>
        <StyledPortfolio.List>
          {services?.map((service) => {
            const {
              title,
              featuredImage,
              featuredImageWidth,
              featuredImageHeight,
              slug,
            } = service;

            return (
              <StyledPortfolio.Item key={slug}>
                <Link href={slug}>
                  <a>
                    {featuredImage && (
                      <Image
                        src={featuredImage}
                        width={featuredImageWidth}
                        height={featuredImageHeight}
                      />
                    )}
                    <StyledServices.Title>{title}</StyledServices.Title>
                  </a>
                </Link>
              </StyledPortfolio.Item>
            );
          })}
        </StyledPortfolio.List>
      </StyledPortfolio.Container>
    </>
  );
};

export default ServicesPage;
