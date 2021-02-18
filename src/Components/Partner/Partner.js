import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import AboutBanner from "../../assets/StandageAbout.png";
import styled, { keyframes } from 'styled-components'
import partner1 from "../../assets/partner/partner1.png";
import partner2 from "../../assets/partner/partner2.png";
import partner3 from "../../assets/partner/partner3.png";
import partner4 from "../../assets/partner/partner4.png";
import partner5 from "../../assets/partner/partner5.png";
import partner6 from "../../assets/partner/partner6.png";
import partner7 from "../../assets/partner/partner7.png";
import partner8 from "../../assets/partner/partner8.png";
import partner9 from "../../assets/partner/partner9.png";
import partner10 from "../../assets/partner/partner10.png";
import partner11 from "../../assets/partner/partner11.png";
import partner12 from "../../assets/partner/partner12.png";
import partner13 from "../../assets/partner/partner13.png";
import partner14 from "../../assets/partner/partner14.png";
import partner15 from "../../assets/partner/partner15.png";
import partner16 from "../../assets/partner/partner16.png";
import partner17 from "../../assets/partner/partner17.png";
import partner18 from "../../assets/partner/partner18.png";
import Form from './PartnerForm';


export default function Partner() {
    useEffect(() => {
        Aos.init(
          {
            duration: 1200,
          },
          []
        );
      });
    return (
        <React.Fragment>
            <BannerUnderlay>
    
    <Container>
      <BannerSection>
        <BannerHeading>
        We Have a Robust Network of Companies that have formed a formidable Business Front.
        </BannerHeading>
        <BannerSubHeading>
        We Have built scaling Businesses, purposefully designed for value creation in Nigeria. 
        From our Parent firm in Japan, our aim to enrich regions of the World thereby bridge the 
        gap of wealth across Nations.
        </BannerSubHeading>
      </BannerSection>
     
      <BannerJoiner data-aos="fade-up"></BannerJoiner>
    </Container>
    
  </BannerUnderlay>
<Container>
<Partners>
      <LeftPartner>
        <BrandTitle>
        We Have a Robust Network of Companies that have formed a formidable Business Front.
        </BrandTitle>
        <BrandSubtitle>
        We Have built scaling Businesses, purposefully designed for value creation in Nigeria. 
        From our Parent firm in Japan, our aim to enrich regions of the World thereby bridge the gap of wealth across Nations.
        </BrandSubtitle>
      </LeftPartner>
      <RightPartner>
      <PartnerContainer>
        <LogoContainer>
            <img src={partner1} alt="partnerone"/>
        </LogoContainer>
        <LogoContainer>
            <img src={partner2} alt="partnertwo"/>
        </LogoContainer>
        <LogoContainer>
            <img src={partner3} alt="partnerthree"/>
        </LogoContainer>
        <LogoContainer>
            <img src={partner4} alt="partnerfour"/>
        </LogoContainer>
        <LogoContainer>
            <img src={partner5} alt="partnerfive"/>
        </LogoContainer>
        <LogoContainer>
            <img src={partner6} alt="partnersix"/>
        </LogoContainer>
        <LogoContainer>
            <img src={partner7} alt="partnerseven"/>
        </LogoContainer>
        <LogoContainer>
            <img src={partner8} alt="partnereight"/>
        </LogoContainer>
        <LogoContainer>
            <img src={partner9} alt="partnernine"/>
        </LogoContainer>
        <LogoContainer>
            <img src={partner10} alt="partnerten"/>
        </LogoContainer>
        <LogoContainer>
            <img src={partner11} alt="partnereleven"/>
        </LogoContainer>
        <LogoContainer>
            <img src={partner12} alt="partnertwelve"/>
        </LogoContainer>
        <LogoContainer>
            <img src={partner13} alt="partnerthirteen"/>
        </LogoContainer>
        <LogoContainer>
            <img src={partner14} alt="partnerfourteen"/>
        </LogoContainer>
        <LogoContainer>
            <img src={partner15} alt="partnerfiftteen"/>
        </LogoContainer>
        <LogoContainer>
            <img src={partner16} alt="partnersixteen"/>
        </LogoContainer>
        <LogoContainer>
            <img src={partner17} alt="partnerseventeen"/>
        </LogoContainer>
        <LogoContainer>
            <img src={partner18} alt="partnereighteen"/>
        </LogoContainer>
        <LogoContainer>
            <img src={partner14} alt="partnerfourteen"/>
        </LogoContainer>
        <LogoContainer>
            <img src={partner2} alt="partnertwo"/>
        </LogoContainer>
        <LogoContainer>
            <img src={partner12} alt="partnertwelve"/>
        </LogoContainer>
        <LogoContainer>
            <img src={partner9} alt="partnernine"/>
        </LogoContainer>
        <LogoContainer>
            <img src={partner5} alt="partnerfive"/>
        </LogoContainer>
        <LogoContainer>
            <img src={partner16} alt="partnersixteen"/>
        </LogoContainer>
        <LogoContainer>
            <img src={partner1} alt="partnerone"/>
        </LogoContainer>
        <LogoContainer>
            <img src={partner11} alt="partnereleven"/>
        </LogoContainer>
        <LogoContainer>
            <img src={partner2} alt="partnertwo"/>
        </LogoContainer>
        <LogoContainer>
            <img src={partner15} alt="partnerfiftteen"/>
        </LogoContainer>
        <LogoContainer>
            <img src={partner6} alt="partnersix"/>
        </LogoContainer>
        <LogoContainer>
            <img src={partner18} alt="partnereighteen"/>
        </LogoContainer>
        {/* Add Linkmine, kolbelco, medage */}
        </PartnerContainer>
      </RightPartner>
  </Partners>
  <FormWrapper>
  <FormTitle>
PARTNER WITH US
</FormTitle>
   <FormContainer>
   <FormHeader>
<span>Partnership Form</span>
Fill the required details for a possible pitch with us  </FormHeader>
<Form/>
   </FormContainer>
  
 </FormWrapper>
</Container>
 
        </React.Fragment>
    )
}
const BannerUnderlay = styled.div`
  background-image: url(${AboutBanner});
  background-size: cover;
  background-repeat: no-repeat;
  display:flex;
  align-items:center;
  height:400px;
  ${'' /* padding-top: 47px; */}
  position: relative;
@media(max-width:1199px){
  height:380px;
}
@media(max-width:576px){
  height:600px;
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
const BannerSection = styled.div`
  width: 600px;
  height:300px;
  @media(max-width:768px){
    width:90%;
  }
  @media(max-width:576px){
    height:400px;
  }
`;
const BannerHeading = styled.div`
  font-size: 30px;
  line-height: 44px;
  font-weight: bold;
  color: white;
  margin-top: 20px;
  ${"" /* padding-top:${(props)=> props.offsetTop}px!important; */}
`;
const BannerSubHeading = styled.div`
  font-size: 18px;
  font-weight: 400;
  line-height: 28px;
  color: white;
  margin-top: 10px;
  animation: bounce 2s infinite 2s;
  -webkit-transition: all 0.2s ease-in;
  transition: all 0.2s ease-in;
`;


const BannerJoiner = styled.div`
  width: 30px;
  height: 200px;
  position: absolute;
  z-index: 5;
  background-color: var(--mainOrange);
  margin-top: -80px;

  @media(max-width:1199px){
    margin-top:-30px;
    height:180px;
  }
  @media (max-width: 575.9px) {
    display: none;
  }
`;

const Partners = styled.div `
display:flex;
align-items:center;
background-color:white;

`
const RightPartner =styled.div `
margin-left:auto;
height:550px;
overflow:hidden;
width:550px;
`
const RightUp = keyframes`
 from {bottom:0px;}
  to {bottom: 530px;}
`
const PartnerContainer = styled.div `
width:100%;
height:1100px;
display:flex;
flex-wrap:wrap;
position:relative;
justify-content:space-around;
animation: ${RightUp} infinite;
animation-duration: 15s;
  animation-delay: 0s;
animation-timing-function: ease; 
animation-direction: alternate;
`
const LeftPartner = styled.div `
width:420px;

`
const BrandTitle =styled.div `
font-size:26px;
font-weight:bold;
padding-bottom:15px;
`
const BrandSubtitle = styled.div `
line-height:22px;

`
const LogoContainer = styled.div `
background-color:var(----mainAsh);
width:150px;
display:flex;
align-items:center;
justify-content:center;
height:70px;
box-shadow: 0 0 15px rgb(136 153 166 / 20%), 0 0 3px 1px rgb(136 153 166 / 15%);
img{
    width:100px;
}

`

const FormWrapper = styled.div `
backgroundColor:var(--mainAsh);

padding-top:45px;
padding-bottom:100px;
`
const FormTitle = styled.div `
font-size:24px;
width:300px;
margin:auto;
font-weight:bold;
padding-bottom:35px;
`
const FormContainer = styled.div `
width:600px;
margin:auto;
`

const FormHeader = styled.div `
display:flex;
align-items:center;
margin-bottom:20px;
span{
  width:180px;
  height:50px;
  display:flex;
  align-items:center;
  justify-content:center;
  background-color:var(--lightBlue);
  color:white;
  margin-right:10px;
}
`