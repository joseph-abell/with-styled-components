import React from "react";
import Head from "next/head";
import StyledPortfolio from "../components/StyledPortfolio";

const Error404Page = ({ initialTitle }) => {
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
};

export default Error404Page;
