import styled from "styled-components";

const Container = styled.ul`
  list-style: none;

  a {
    color: #f0f1bf;
    text-decoration: none;
    padding: 20px;
    display: block;
    text-align: center;
  }
`;

const Item = styled.li`
  font-family: "Raleway", sans-serif;
  background-color: #3cb395;
  font-size: 28px;

  + li {
    background-color: #15a796;

    + li {
      background-color: #14808f;

      + li {
        background-color: #13688c;

        + li {
          background-color: #165876;
        }
      }
    }
  }
`;

const StyledMenu = {
  Container,
  Item,
};

export default StyledMenu;
