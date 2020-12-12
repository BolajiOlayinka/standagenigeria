import React from "react";
import OwlCarousel from "react-owl-carousel";
import "../../../node_modules/owl.carousel/dist/assets/owl.carousel.min.css";
import "../../../node_modules/owl.carousel/dist/assets/owl.theme.default.min.css";
import Digitrad from "../../assets/Digitrad.png";
import YuasaImg from "../../assets/YuasaImg.png";
import YuasLogo from "../../assets/Yuasa.png";
import Desktop from "../../assets/desktop.png";
import BeForwardImg from "../../assets/BeForwardImage.png";
import BeForwardLogo from "../../assets/BeForward.png";
import styled from "styled-components";
import {Link} from 'react-router-dom'

export default function Carousel() {
  return (
    <React.Fragment>
      <OwlCarousel
        items="1"
        loop
        autoplay
        className="d-lg-block d-lg-block d-lg-block d-lg-block">
        {/* <div className="item">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-6">
              <ProductLogo src={Digitrad} alt="Client Logo" />
              <ProductText>
                A Modern E-COMMERCE platform Designed to Meet All Needs
              </ProductText>

              <ProductSubText>
                DIGITRAD provides traditional and Crypto-payment to ease the
                transition of trading across the economies of the World.
              </ProductSubText>
            </div>
            <div className="col-lg-6 col-md-6">
              <ProductImageSec>
                <img src={DigitradImg} alt="Digitrad" />
              </ProductImageSec>
            </div>
            
          </div>
          <ViewMoreDiv>
                                <Link to ="/">View More . . .</Link>
                            </ViewMoreDiv>
        </div> */}
        <div className="item">
        <DigitradSection>
        <DigitradLogo src={Digitrad} alt="Digitrad Logo" />
        <ProductText>
        A Modern E-COMMERCE platform Designed to Meet All Needs
              </ProductText>
              <ProductSubText>
              DIGITRAD provides traditional and Crypto-payment to ease the
                transition of trading across the economies of the World.
              </ProductSubText>
        </DigitradSection>
        <ProductImageSec>
          <ProductBanner src={Desktop} alt="Digitrad"/>
          </ProductImageSec>
          <ViewMoreDiv>
            <Link to ="/">Learn More . . .</Link>
        </ViewMoreDiv>
        </div>
        
        <div className="item">
        <BeforwardSection>
        <BeforwardLogo src={BeForwardLogo} alt="Beforward Logo" />
        <ProductText>
        Best of Auto-Deals Available  for You Anytime. 
              </ProductText>
              <ProductSubText>
              A Decent Collection of Used Imported Cars, Available At Affordable Price & Best Conditions.
              </ProductSubText>
        </BeforwardSection>
        <ProductImageSec>
        <ProductBanner src={BeForwardImg} alt="Beforward"/>
        </ProductImageSec>
          
          <ViewMoreDiv>
            <Link to ="/">Learn More . . .</Link>
        </ViewMoreDiv>
        </div>
        <div className="item">
        <YuasaSection>
        <YuasaLogo src={YuasLogo} alt="Yuasa Logo" />
        <ProductText>
        Creating the Future of Energy
              </ProductText>
              <ProductSubText>
              Through Creating the New Value With Batteries, We will Continue to 
              Contribute to the Happiness  of People and the Sustainable Growth of Society as a Whole
              </ProductSubText>
        </YuasaSection>
        <ProductImageSec>
        <ProductBanner src={YuasaImg} alt="Beforward"/>
        </ProductImageSec>
          
          <ViewMoreDiv>
            <Link to ="/">Learn More . . .</Link>
        </ViewMoreDiv>
        </div>
      </OwlCarousel>
    </React.Fragment>
  );
}

const DigitradLogo = styled.img`
width:300px
 
`;
const BeforwardLogo = styled.img`
width:300px
 
`;
const YuasaLogo = styled.img`
width:300px
 
`;
const ProductText = styled.div`
  font-size: 30px;
  font-weight: bold;
  margin-top:20px;
  color:var(--mainBlack)!important;
`;
const ProductImageSec = styled.div`
height:400px;
`;
const ProductSubText = styled.div`
margin-top:20px;
  font-size: 15px;
`;
const ViewMoreDiv = styled.div `
text-align:right;
margin-top:30px;
a{
    font-size:20px;
    color:black;
}
a:hover{
    color:var(--mainOrange);
    text-decoration:none;
}
`
const BeforwardSection = styled.div `
width:400px;
height:300px;
margin-left:auto;
`
const YuasaSection = styled.div `
width:400px;
height:300px;
margin-left:auto;
`
const DigitradSection = styled.div `
width:400px;
height:300px;

`
const ProductBanner = styled.img `
width:800px!important;
margin:auto!important;
`