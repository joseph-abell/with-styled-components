import React from "react";
import styled from "styled-components";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Head from "next/head";

import StyledMenu from "./StyledMenu";
import Header, { Menu } from "./Header";
import Footer from "./Footer";

const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  color: #f0f1bf;
`;

const StyledContainer = styled.div`
  position: relative;
`;

const StyledArticle = styled.div`
  background: white;
  padding: 0 10vw 40px;
  overflow-x: hidden;
  position: relative;

  @media (min-width: 768px) {
    padding: 0 50px 40px 10px;
  }

  @media (min-width: 768px) {
    position: static;
  }
`;

const StyledMain = styled.div`
  @media (min-width: 768px) {
    border-top: 30px solid white;
    flex-grow: 3;
    background: white;
  }

  footer {
    position: relative;
    z-index: 2;
  }
`;

const StyledOuterContainer = styled.div`
  position: relative;
  z-index: 1;

  @media (min-width: 1200px) {
    background: white;
    min-height: 85vh;
  }
`;

const StyledInnerContainer = styled.div`
  @media (min-width: 768px) {
  }

  @media (min-width: 1200px) {
    width: 1024px;
    margin: 0 auto;
  }
`;

const Layout = ({
  children,
  menu,
  logo,
   logoHeight,
  logoWidth,
   footer,
  siteMetadata,
}) => {
  const { title, description, keywords } = siteMetadata || {};

  return (
    <StyledContainer>
      <Head>
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />,
        <meta property="og:description" content={description} />
        <meta property="og:type" content="business.business" />
        <meta property="og:url" content="/" />
        <meta property="og:image" content="/img/og-image.jpg" />
        <meta property="theme-color" content="#fff" />
        {keywords?.length > 0 && (
          <meta
            name="keywords"
            content={keywords?.map((k) => k.keyword).join(", ")}
          />
        )}
        <title>{title}</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Raleway:wght@400;500&display=swap"
          rel="stylesheet"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/img/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          href="/img/favicon-32x32.png"
          sizes="32x32"
        />
        <link
          rel="icon"
          type="image/png"
          href="/img/favicon-16x16.png"
          sizes="16x16"
        />
        <link
          rel="mask-icon"
          href="/img/safari-pinned-tab.svg"
          color="#ff4400"
        />
      </Head>
      <StyledOuterContainer id="outer-container">
        <StyledInnerContainer>
          <Header
            menu={menu}
            logo={logo}
            logoHeight={logoHeight}
            logoWidth={logoWidth}
          />
          <Menu
            right
            customCrossIcon={<StyledFontAwesomeIcon icon={faTimes} />}
            outerContainerId="outer-container"
          >
            <StyledMenu.Container>
              {menu?.map((m) => (
                <StyledMenu.Item key={m.url}>
                  <a href={m.url}>{m.text}</a>
                </StyledMenu.Item>
              ))}
            </StyledMenu.Container>
          </Menu>
          <StyledMain>
            <StyledArticle>{children}</StyledArticle>
          </StyledMain>
        </StyledInnerContainer>
      </StyledOuterContainer>
      <Footer footer={footer} />
    </StyledContainer>
  );
};

export default Layout;
