import React from "react";
import Link from "next/link";

import Image from "../components/Image";
import StyledPortfolio from "../components/StyledPortfolio";
import { getHomeData, getPortfolioData } from "../data";

export async function getStaticProps() {
  const home = await getHomeData();
  const portfolio = await getPortfolioData();
  const portfolioItems = await Promise.all(portfolio);
  return {
    props: {
      home,
      portfolio: portfolioItems,
    },
  };
}

const IndexPage = (props) => {
  const { home, portfolio } = props || { home: {}, portfolio: [] };
  const { deck } = home || {};

  return (
    <StyledPortfolio.Container>
      <StyledPortfolio.SubTitle>{deck}</StyledPortfolio.SubTitle>
      {portfolio?.length > 0 && (
        <StyledPortfolio.List>
          {portfolio
            ?.filter((i) => !i.hidden)
            .map((
              p
              // index
            ) => (
              <StyledPortfolio.Item key={p.title}>
                <Link href={`/${p.slug.split("/").join("")}`}>
                  <a>
                    <Image
                      src={p.featuredImage || ""}
                      width={p.featuredImageWidth}
                      height={p.featuredImageHeight}
                      //   priority={index < 10}
                    />
                  </a>
                </Link>
              </StyledPortfolio.Item>
            ))}
        </StyledPortfolio.List>
      )}
    </StyledPortfolio.Container>
  );
};

export default IndexPage;
