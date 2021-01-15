import React from "react";
import { Image, CloudinaryContext } from "cloudinary-react";
import styled from "styled-components";

export const StyledImage = styled(Image)`
  width: 100%;
`;

const Img = ({ src, width, height }) => {
  const publicId = src
    ?.split("/img/")
    .join("")
    .split(".jpg")
    .join("")
    .split("jpeg")
    .join("")
    .split(".svg")
    .join("")
    .split(".png")
    .join("");

  return (
    <CloudinaryContext cloudName="abelldesign">
      <StyledImage
        publicId={publicId}
        width={width}
        height={height}
        crop="limit"
        rel="preload"
        secure
      />
    </CloudinaryContext>
  );
};

export default Img;
