import React from "react";
import { ThemeProvider } from "styled-components";
import matter from "gray-matter";
import { GlobalStyle, theme } from "../styles/index";

import Layout from "../components/Layout";

function App({ Component, pageProps, menu, header, footer, siteMetadata }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Layout
          menu={menu}
          logo={header?.logo}
          logoHeight={header?.logoHeight}
          logoWidth={header?.logoWidth}
          footer={footer}
          siteMetadata={siteMetadata}
        >
          <Component {...pageProps} initialTitle={siteMetadata?.title} />
        </Layout>
      </ThemeProvider>
    </>
  );
}

App.getInitialProps = async () => {
  const menuRes = await fetch(
    "https://abelldesignadmin.netlify.app/content/menu.md"
  );
  const headerRes = await fetch(
    "https://abelldesignadmin.netlify.app/content/header.md"
  );
  const footerRes = await fetch(
    "https://abelldesignadmin.netlify.app/content/footer.md"
  );
  const siteMetadataRes = await fetch(
    "https://abelldesignadmin.netlify.app/content/siteMetadata.md"
  );

  const menu = matter((await menuRes.text()) || "")?.data.menu;
  const header = matter((await headerRes.text()) || "")?.data;
  const footer = matter((await footerRes.text()) || "")?.data;
  const siteMetadata = matter((await siteMetadataRes.text()) || "")?.data;

  return {
    menu,
    header,
    footer,
    siteMetadata,
  };
};

export default App;
