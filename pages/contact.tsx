import React from "react";
import styled from "styled-components";
import GoogleMapReact from "google-map-react";
import marked from "marked";
import Head from "next/head";

import Image from "../components/Image";
import { getContactData } from "../data";

const StyledContact = {
  Header: styled.h1``,
  SocialMediaTitle: styled.h3`
    margin-bottom: 20px;
    font-weight: bold;
    font-size: 22px;
  `,
  SocialMediaList: styled.ul`
    clear: both;
  `,
  SocialMediaItem: styled.li`
    height: 20px;
    line-height: 20px;
    margin-bottom: 20px;
    font-size: 18px;

    img {
      float: left;
      margin-right: 10px;
    }

    a {
      text-decoration: none;
      color: #14808f;
    }
  `,
  ImageWrapper: styled.div`
    width: 32px;
    margin-right: 10px;
    float: left;
    clear: both;
  `,
  ImageTitle: styled.div`
    line-height: 32px;
  `,
  MapImage: styled.img`
    width: 64px;
    height: 64px;
    margin-left: -32px;
    margin-top: -32px;
  `,
};

export async function getStaticProps() {
  const contact = await getContactData();

  return {
    props: {
      ...contact,
    },
  };
}

const ContactPage = ({
  mapsImage,
  title,
  deck,
  address,
  email,
  phone,
  latitude,
  longitude,
  zoom,
  socialMedia,
  initialTitle,
}) => (
  <>
    <Head>
      <title>
        {title} - {initialTitle}
      </title>
    </Head>
    <StyledContact.Header>{title}</StyledContact.Header>

    <div itemScope itemType="http://schema.org/LocalBusiness">
      <div dangerouslySetInnerHTML={{ __html: marked(deck) }} />
      <div
        dangerouslySetInnerHTML={{ __html: marked(address) }}
        itemScope
        itemType="https://schema.org/PostalAddress"
        itemProp="address"
      />
      <p>
        <a href={`mailto:${email}`} itemProp="email">
          {email}
        </a>
      </p>
      <p itemProp="telephone">{phone}</p>
      <div style={{ height: "400px", width: "100%", marginBottom: "20px" }}>
        <GoogleMapReact
          bootstrapURLKeys={{
            key: "AIzaSyDDwiQ8OPTm6Km78-lpjBmo61uKfmXVVDE",
          }}
          defaultCenter={{ lat: Number(latitude), lng: Number(longitude) }}
          defaultZoom={Number(zoom)}
          yesIWantToUseGoogleMapApiInternals
        >
          <StyledContact.MapImage
            src={mapsImage}
            lat={Number(latitude)}
            lng={Number(longitude)}
          />
        </GoogleMapReact>
      </div>
    </div>

    {socialMedia.length > 0 && (
      <>
        <StyledContact.SocialMediaTitle>
          Follow Abell Design
        </StyledContact.SocialMediaTitle>
        <StyledContact.SocialMediaList>
          {socialMedia.map((i) => (
            <StyledContact.SocialMediaItem key={i.url}>
              <a href={i.url}>
                <StyledContact.ImageWrapper>
                  <Image
                    src={i.image}
                    width={i.imageWidth}
                    height={i.imageHeight}
                  />
                </StyledContact.ImageWrapper>
                <StyledContact.ImageTitle>{i.text}</StyledContact.ImageTitle>
              </a>
            </StyledContact.SocialMediaItem>
          ))}
        </StyledContact.SocialMediaList>
      </>
    )}
  </>
);

export default ContactPage;
