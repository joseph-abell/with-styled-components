import React from "react";
import MobileMenu from "react-burger-menu/lib/menus/slide";
import Link from "next/link";
import styled from "styled-components";
import Image, { StyledImage } from "./Image";

const StyledContainer = styled.header`
  background-color: white;
  width: 100%;
  position: fixed;
  transition: height 200ms;
  overflow: hidden;
  z-index: 2;

  @media (min-width: 768px) {
    padding: 0 20px 0 50px;
    position: static;
    height: auto;
    width: 175px;
    float: left;
  }
`;

const Breaker = styled.div`
  transition: height 200ms;

  @media (max-width: 767px) {
    height: 100px;
    margin-bottom: 20px;
  }

  @media (min-width: 768px) {
    display: none;
  }
`;

const InnerContainer = styled.div`
  width: 80vw;
  margin: 0 auto;
  padding-top: 36px;

  @media (min-width: 768px) {
    width: auto;
  }

  ${StyledImage} {
    width: 100px;
  }
`;

export const Menu = styled(MobileMenu)`
  float: right;
`;
// const Clear = styled.div`
//   clear: both;
// `;

// const Deck = styled.p`
//   width: 80vw;
//   margin: 0 auto;
//   color: #13688c;
//   font-family: 'Raleway', sans-serif;
//   font-size: 23px;
//   font-weight: 600;
//   line-height: 1.5em;

//   @media (min-width: 768px) {
//     width: auto;
//     margin: 20px auto;
//   }
// `
const Sidebar = styled.aside`
  display: none;
  list-style: none;
  font-weight: bold;

  a {
    text-decoration: none;
    color: #14808f;
  }

  @media (min-width: 768px) {
    display: block;
    clear: both;
  }
`;

const Header = ({ menu, logo, logoWidth, logoHeight }) => {
  return (
    <>
      <StyledContainer>
        <InnerContainer>
          <Link href="/">
            <a>
              <Image src={logo} width={logoWidth} height={logoHeight} />
            </a>
          </Link>
          <Sidebar>
            <ul>
              {menu?.map((m) => (
                <li key={m.url}>
                  <Link href={m.url}>{m.text}</Link>
                </li>
              ))}
            </ul>
          </Sidebar>
        </InnerContainer>
      </StyledContainer>
      <Breaker />
    </>
  );
};

export default Header;
