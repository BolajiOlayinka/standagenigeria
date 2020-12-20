import React from "react";
import styled from "styled-components";
import Logo from "../assets/LogoWhite.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarker } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faLongArrowAltRight } from "@fortawesome/free-solid-svg-icons";
import { faArrowCircleUp } from "@fortawesome/free-solid-svg-icons";
import facebook from "../assets/facebook.png";
import instagram from "../assets/instagram.png";
import linkedin from "../assets/linkedin.png";
import twitter from "../assets/twitter.png";
import whatsapp from "../assets/whatsapp.png";
import { Link } from "react-router-dom";
import message from "../assets/message.png";

export default function Footer() {
  return (
    <React.Fragment>
      <Wrapper>
        <Container>
          <FooterContainer>
            <ContentOne>
              <img src={Logo} alt="Standage White Logo" />
              <IconsContent>
                <StyledIcons icon={faMapMarker} />{" "}
                <IconsText>
                  No 1, Adedotuun Dina Crescent, Mende Maryland, Lagos. Nigeria
                </IconsText>
              </IconsContent>
              <IconsContent>
                <StyledIcons icon={faEnvelope} />{" "}
                <IconsText>info@standage.com.ng</IconsText>
              </IconsContent>
              <IconsContent>
                <StyledIcons icon={faPhone} />{" "}
                <IconsText>+234-7060508340</IconsText>
              </IconsContent>

              <MediaHandles>
                SOCIAL MEDIA HANDLES
                <IconsContainer>
                  <a href="/" target="_blank" referrer="no-referrer">
                    {" "}
                    <img src={facebook} alt="facebook" />
                  </a>
                  <a href="/" target="_blank" referrer="no-referrer">
                    {" "}
                    <img src={twitter} alt="twitter" />
                  </a>
                  <a href="/" target="_blank" referrer="no-referrer">
                    {" "}
                    <img src={instagram} alt="instagram" />
                  </a>
                  <a href="/" target="_blank" referrer="no-referrer">
                    {" "}
                    <img src={whatsapp} alt="whatsapp" />
                  </a>
                  <a href="/" target="_blank" referrer="no-referrer">
                    {" "}
                    <img src={linkedin} alt="linkedin" />
                  </a>
                </IconsContainer>
              </MediaHandles>
            </ContentOne>
            <SiteMap>
              <Header>SITE MAP</Header>
              <SiteContent>
                <div>
                  <Link to="/">Home</Link>
                </div>
                <div>
                  <Link to="/">FAQ</Link>
                </div>
              </SiteContent>
              <SiteContent>
                <div>
                  <Link to="/">About Us</Link>
                </div>
                <div>
                  <Link to="/">Privacy Policy</Link>
                </div>
              </SiteContent>
              <SiteContent>
                <div>
                  <Link to="/">Products</Link>
                </div>
                <div>
                  <Link to="/">Terms of Service</Link>
                </div>
              </SiteContent>
              <SiteContent>
                <div>
                  <Link to="/">News</Link>
                </div>
                <div>
                  <Link to="/">Our Team</Link>
                </div>
              </SiteContent>
            </SiteMap>
            <ContentThree>
              <img src={message} alt="partner email" />

              <PartnerText>
               <div> Partner </div><StyledFontAwesomeIcon icon={faLongArrowAltRight} />
              </PartnerText>
              <ScrollUp>
                <FontAwesomeIcon icon={faArrowCircleUp} />
              </ScrollUp>
              <NewsletterSection>
                <Header>NEWSLETTER</Header>
                <input type="email" name="email" />
                <button>Signup</button>
              </NewsletterSection>
            </ContentThree>
          </FooterContainer>
        </Container>
      </Wrapper>
    </React.Fragment>
  );
}
const Wrapper = styled.div`
  background-color: var(--lightBlue);
  height: 500px;
`;
const Container = styled.div`
  @media (min-width: 1200px) {
    width: 1100px;
    margin: auto;
  }
`;
const FooterContainer = styled.div`
  display: flex;
  width: 100%;
  color: white;
  height: 500px;
  padding-top: 50px;
  padding-bottom: 50px;
  ${"" /* align-items:center; */}
`;
const ContentOne = styled.div`
  width: 33%;
  border-right: 1px solid white;
  img {
    padding-bottom: 30px;
  }
`;
const SiteMap = styled.div`
  padding-left: 30px;
`;
const ContentThree = styled.div`
  text-align: right;
  margin-left: auto;
`;
const IconsContent = styled.div`
  display: flex;
  padding-bottom: 10px;
  padding-top: 10px;
`;
const StyledIcons = styled(FontAwesomeIcon)``;
const IconsText = styled.div`
  padding-left: 10px;
  font-size: 12px;
`;
const IconsContainer = styled.div`
  display: flex;
  align-items: center;
  width: 50%;
  justify-content: space-between;
  padding-top: 10px;
  padding-bottom: 10px;
`;
const MediaHandles = styled.div`
  padding-top: 30px;
  color: var(--mainOrange);
  font-weight: bold;
  a {
    color: white;
  }
  img {
    width: 18px;
  }
`;
const Header = styled.div`
  color: var(--mainOrange);
  font-size: 16px;
  font-weight: bold;
`;
const SiteContent = styled.div`
  display: flex;
  justify-content: space-between;
  width: 250px;
  font-size: 12px;
  padding-top: 15px;
  padding-bottom: 15px;
  text-align: left;
  a {
    color: white;
  }
  a:nth-child(2) {
    font-size: 16px;
  }
`;
const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  ${"" /* margin-left:5px; */}
`;
const PartnerText = styled.div`
  display: flex;
  align-items: center;
  font-size: 12px;
  padding-top: 10px;
`;
const ScrollUp = styled.div`
  margin-top: 130px;
  svg {
    color: var(--mainOrange);
    font-size: 30px;
  }
`;

const NewsletterSection = styled.div`
  margin-top: 85px;
  input {
    width: 280px;
    height: 40px;
    border-radius:5px;
    border:transparent;
    outline:0;
  }
  button {
    background-color: var(--mainOrange);
    border: transparent;
    outline: 0;
    height: 41px;
    color: white;
    width: 70px;
    font-size: 14px;
    margin-left:-5px;
    border-top-right-radius:5px;
    border-bottom-right-radius:5px;
  }
  div {
    padding-bottom: 10px;
  }
`;
