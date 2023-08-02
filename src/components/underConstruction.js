import React from "react";
import BackgroundImage from "gatsby-background-image";
import { Link } from "gatsby";
import { useIntl } from "gatsby-plugin-intl";
import { graphql, useStaticQuery } from "gatsby";
import styled from "@emotion/styled";

const ImageBackground = styled(BackgroundImage)`
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Button = styled(Link)`
  margin-top: 2rem;
  padding: 1rem;
  background-color: #ef6c33;
  width: 30%;
  color: #fff;
  display: block;
  text-decoration: none;
  text-transform: uppercase;
  border-radius: 1rem;
  font-weight: 700;
  text-align: center;

  &:hover {
    background-color: #ef8e33;
  }

  @media (min-width: 768px) {
    width: 15%;
  }
`;

const ImageText = styled.div`
  background-image: linear-gradient(
    to top,
    rgba(34, 49, 63, 0.7),
    rgba(34, 49, 63, 0.7)
  );
  color: #fff;
  height: 100%;
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;
  justify-content: center;

  h1 {
    font-size: 3rem;
    margin-bottom: 1rem;

    @media (min-width: 768px) {
      font-size: 4.5rem;
    }
  }

  p {
    font-size: 1.8rem;
    text-align: center;
    line-height: 3rem;
    width: 90%;

    @media (min-width: 768px) {
      font-size: 2.5rem;
      width: 50%;
      line-height: 4rem;
    }
  }
`;

const UnderConstruction = () => {
  const { image } = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "bg-landscape.jpg" }) {
        sharp: childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);

  const intl = useIntl();

  return (
    <ImageBackground tag="section" fluid={image.sharp.fluid} fadeIn="soft">
      <ImageText>
        <h1>{intl.formatMessage({ id: "title" })}</h1>
        <p>{intl.formatMessage({ id: "paragraph" })}</p>
        <Button href={"mailto: info@3allez.com"}>
          {intl.formatMessage({ id: "button-title" })}
        </Button>
      </ImageText>
    </ImageBackground>
  );
};

export default UnderConstruction;
