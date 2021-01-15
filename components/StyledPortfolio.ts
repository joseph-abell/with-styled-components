import styled from "styled-components";

const StyledPortfolio = {
  Container: styled.div`
    background-color: white;
    padding-bottom: 40px;
  `,

  List: styled.ul`
    display: grid;
    grid-template-columns: repeat(
      auto-fill,
      minmax(${({ smallWidth }: any) => smallWidth || "180px"}, 1fr)
    );
    grid-gap: ${({ gridGap }: any) => gridGap || "0"};
    max-width: ${({ maxWidth }: any) => maxWidth || "auto"};
    margin: 0 auto;

    @media (min-width: 768px) {
      grid-template-columns: repeat(
        auto-fill,
        minmax(${({ largeWidth }: any) => largeWidth || "150px"}, 1fr)
      );
    }

    @media (min-width: 900px) {
      grid-template-columns: repeat(
        auto-fill,
        minmax(${({ largeWidth }: any) => largeWidth || "180px"}, 1fr)
      );
    }

    @media (min-width: 1025px) {
      grid-template-columns: repeat(
        auto-fill,
        minmax(${({ largeWidth }: any) => largeWidth || "220px"}, 1fr)
      );
    }
  `,

  Item: styled.li`
    align-self: center;
    line-height: 0;

    a {
      display: block;
      max-height: 400px;
    }

    img {
      width: 100%;
    }
  `,

  Title: styled.h1`
    padding-top: 40px;
    text-align: center;
  `,

  SubTitle: styled.h1`
    && {
      font-size: 23px;
      margin: -5px 0 20px 0;

      @media (min-width: 768px) {
        font-size: 28px;
      }
    }
  `,
};

export default StyledPortfolio;
