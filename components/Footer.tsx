import React from "react";
import styled from "styled-components";

const StyledFooter = styled.footer`
  color: #f0f1bf;
  background-color: rgb(16, 60, 80);
  text-align: center;
  padding-bottom: 20px;
  padding-top: 20px;
`;

const Footer = (props) => {
  const { footer } = props || {};
  const { email, phoneNumber } = footer || {};
  return (
    <StyledFooter>
      <ul>
        {email && <li>{email}</li>}
        {phoneNumber?.trim() && <li>{phoneNumber}</li>}
      </ul>
    </StyledFooter>
  );
};

export default Footer;
