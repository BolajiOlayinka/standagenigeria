import React from "react";
import styled from "styled-components";
import Logo from "../assets/LogoWhite.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarker } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faLongArrowAltRight } from "@fortawesome/free-solid-svg-icons";
import { faArrowCircleUp } from "@fortawesome/free-solid-svg-icons";
import {faInstagram, faMedium, faLinkedin, faTwitter, faWhatsapp , faFacebook, faYoutube} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
import message from "../assets/message.png";
import animateScrollTo from "animated-scroll-to";


export default function Footer() {
 
  const ScrolltoTop = () => {
    animateScrollTo(0);
  };
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

              <LargeMediaHandles>
                SOCIAL MEDIA HANDLES
                <IconsContainer>
                  <a href="/" target="_blank" referrer="no-referrer">
                    {" "}
                    <FontAwesomeIcon icon={faFacebook}/>
                    
                  </a>
                  <a href="/" target="_blank" referrer="no-referrer">
                    {" "}
                    
                    <FontAwesomeIcon icon={faTwitter}/>
                  </a>
                  <a href="/" target="_blank" referrer="no-referrer">
                    {" "}
                    
                    <FontAwesomeIcon icon={faInstagram}/>
                  </a>
                  <a href="/" target="_blank" referrer="no-referrer">
                    {" "}
                    <FontAwesomeIcon icon={faWhatsapp}/>
                   
                  </a>
                  <a href="/" target="_blank" referrer="no-referrer">
                    {" "}
                   
                    <FontAwesomeIcon icon={faLinkedin}/>
                  </a>
                  <a href="/" target="_blank" referrer="no-referrer">
                    {" "}
                    
                    <FontAwesomeIcon icon={faYoutube}/>
                  </a>
                  <a href="/" target="_blank" referrer="no-referrer">
                    {" "}
                  
                    <FontAwesomeIcon icon={faMedium}/>
                  </a>
                </IconsContainer>
              </LargeMediaHandles>
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
              

              <PartnerText>
             Partner <StyledFontAwesomeIcon icon={faLongArrowAltRight} />
               <img src={message} alt="partner email" />
              </PartnerText>
              <ScrollUp onClick ={ScrolltoTop}>
                <FontAwesomeIcon icon={faArrowCircleUp} />
              </ScrollUp>
              <NewsletterSection>
                <Header>NEWSLETTER</Header>
                <LetterForm>
                <input type="email" name="email" />
                <button>Signup</button>
                </LetterForm>
              </NewsletterSection>
            </ContentThree>
            <SmallMediaHandles>
                SOCIAL MEDIA HANDLES
                <IconsContainer>
                  <a href="/" target="_blank" referrer="no-referrer">
                    {" "}
                    <FontAwesomeIcon icon={faFacebook}/>
                    
                  </a>
                  <a href="/" target="_blank" referrer="no-referrer">
                    {" "}
                    
                    <FontAwesomeIcon icon={faTwitter}/>
                  </a>
                  <a href="/" target="_blank" referrer="no-referrer">
                    {" "}
                    
                    <FontAwesomeIcon icon={faInstagram}/>
                  </a>
                  <a href="/" target="_blank" referrer="no-referrer">
                    {" "}
                    <FontAwesomeIcon icon={faWhatsapp}/>
                   
                  </a>
                  <a href="/" target="_blank" referrer="no-referrer">
                    {" "}
                   
                    <FontAwesomeIcon icon={faLinkedin}/>
                  </a>
                  <a href="/" target="_blank" referrer="no-referrer">
                    {" "}
                    
                    <FontAwesomeIcon icon={faYoutube}/>
                  </a>
                  <a href="/" target="_blank" referrer="no-referrer">
                    {" "}
                  
                    <FontAwesomeIcon icon={faMedium}/>
                  </a>
                </IconsContainer>
              </SmallMediaHandles>
          </FooterContainer>
        </Container>
      </Wrapper>
    </React.Fragment>
  );
}
const Wrapper = styled.div`
  background-color: var(--lightBlue);
  height: 500px;
  position:relative!important;
  @media(max-width:1100px){
    height:600px;
  }
  @media(max-width:768px){
    height:800px;
  }
`;
const Container = styled.div`
  width: 100%;
  @media (min-width: 1200px) {
    width: 1100px;
    margin: auto;
  }
  @media (max-width: 1199px) {
    width: 90%;
    margin: auto;
  }
  @media (max-width: 576px) {
    width: 80%;
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
  @media(max-width:1100px){
    flex-wrap:wrap;
  }
  @media(max-width:768px){
    flex-direction:column;
    flex-wrap:nowrap;
  }
  ${"" /* align-items:center; */}
`;
const ContentOne = styled.div`
  width: 33%;
  border-right: 1px solid white;
  img {
    padding-bottom: 30px;
  }
  @media(max-width:1100px){
    width:50%;
    
  }
  @media(max-width:768px){
    width:450px;
    border:0px;
    margin:auto;
    justify-content:center;
  }
  @media(max-width:576px){
  
  width:350px;
  margin:auto;
    }
    @media(max-width:426px){
  
  width:100%;
  margin:auto;
    }
`;
const SiteMap = styled.div`
  width:250px;
  margin:auto;
padding-bottom:30px;
  @media(max-width:1100px){
    padding-top:30px;
    width:250px;
    border:transparent;
    padding-bottom:0px;
  }
  @media(max-width:768px){
  padding-left:0px;
  padding-top:30px;
  width:450px;;
margin:auto;
  }
  @media(max-width:576px){
  
    width:350px;
margin:auto;
  }
  @media(max-width:426px){
  
  width:100%;
  margin:auto;
    }
`;
const ContentThree = styled.div`
  text-align: right;
  margin-left: auto;
  @media(max-width:1100px){
    width:100%;
    border:transparent;
    display:flex;
    margin:auto;
    
  }
  img{
    @media(max-width:1100px){
    display:none;
  }
  }
  @media(max-width:768px){
    width:450px;
  }
  @media(max-width:576px){
  
    width:350px;
  margin:auto;
    }
    @media(max-width:426px){
  
  width:100%;
  margin:auto;
    }
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
  width:90%;
`;
const IconsContainer = styled.div`
  display: flex;
  align-items: center;
  width: 70%;
  justify-content: space-between;
  padding-top: 10px;
  padding-bottom: 10px;
`;
const LargeMediaHandles = styled.div`
  padding-top: 30px;
  color: var(--mainOrange);
  font-weight: bold;
  a {
    color: white;
  }
  img {
    width: 18px;
  }
  @media(max-width:1100px){
    padding-bottom:30px;
  }
  @media(max-width:768px){
    display:none;
  }
`;
const SmallMediaHandles = styled.div`
  padding-top: 30px;
  color: var(--mainOrange);
  font-weight: bold;
  width:450px;;
  margin:auto;
  a {
    color: white;
  }
  img {
    width: 18px;
  }
  @media(max-width:1100px){
    padding-bottom:30px;
  }
  @media(min-width:768.1px){
   
    display:none;
  }
  @media(max-width:576px){
    width:350px;
 }
 @media(max-width:426px){
   width:100%;
 }
`;
const Header = styled.div`
  color: var(--mainOrange);
  font-size: 16px;
  font-weight: bold;
  @media(max-width:768px){
    text-align:left;
  }
`;
const SiteContent = styled.div`
  display: flex;
  justify-content: space-between;
  width: 250px;
  font-size: 12px;
  padding-top: 15px;
  padding-bottom: 15px;
  text-align: left;
  margin:auto;
  a {
    color: white;
  }
  a:nth-child(2) {
    font-size: 16px;
    margin-left:auto;
  }
  @media(max-width:768px){
    width:100%;
  }
`;
const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
font-size:20px;
@media(max-width:1100px){
    display:none;
  }
  ${"" /* margin-left:5px; */}
`;
const PartnerText = styled.div`
  display: flex;
  align-items: center;
  font-size: 12px;
  padding-top: 10px;
  justify-content:space-between;
  @media(max-width:1100px){
    display:none;
  }
`;
const ScrollUp = styled.div`
  margin-top: 130px;
  svg {
    color: var(--mainOrange);
    font-size: 30px;
  }
  @media(max-width:1100px){
    margin-right:10px;
    margin-top:60px;
    position:absolute;
    right:0;
    margin-right:10%;

  }
  @media(max-width:768px){
    bottom:0;
    margin-bottom:20px;
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
    ${'' /* height: 40px; */}
    padding-top:10px;
    padding-bottom:9px;
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
  @media(max-width:1100px){
    margin-top:18px;
  }
  @media(max-width:768px){
   text-align:center;
   width:100%;
   button{
    
     width:20%;
   }
   input{
     width:80%;
   }
  }
  
`;
const LetterForm =styled.div `
@media(max-width:768px){
  display:flex;
}
`
