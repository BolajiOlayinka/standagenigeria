import React from "react";
import OwlCarousel from "react-owl-carousel";
import "../../../node_modules/owl.carousel/dist/assets/owl.carousel.min.css";
import "../../../node_modules/owl.carousel/dist/assets/owl.theme.default.min.css";
import Digitrad from "../../assets/Digitrad.png";
import YuasaImg from "../../assets/YuasaImg.png";
import YuasLogo from "../../assets/Yuasa.png";
import Desktop from "../../assets/desktop.png";
import BeForwardImg from "../../assets/BeForwardImage.png";
import MedageImg from "../../assets/MedageImage.png";
import BeForwardLogo from "../../assets/BeForward.png";
import styled from "styled-components";
import { Link } from "react-router-dom";

export default function Carousel() {
  return (
    <React.Fragment>
      <CarouselWrapper>
        <OwlCarousel
          items="1"
          loop
          autoplay
          dots
          className="d-lg-block d-xl-block d-md-block"
        >
          <div className="item">
            <ProductSection>
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
                <ProductBanner src={Desktop} alt="Digitrad" />
              </ProductImageSec>
              <ViewMoreDiv>
                <Link to="/">Learn More</Link>
              </ViewMoreDiv>
            </ProductSection>
          </div>

          <div className="item">
            <ProductSection>
              {" "}
              <BeforwardSection>
                <BeforwardLogo src={BeForwardLogo} alt="Beforward Logo" />
                <ProductText>
                  Best of Auto-Deals Available for You Anytime.
                </ProductText>
                <ProductSubText>
                  A Decent Collection of Used Imported Cars, Available At
                  Affordable Price & Best Conditions.
                </ProductSubText>
              </BeforwardSection>
              <ProductImageSec>
                <ProductBanner src={BeForwardImg} alt="Beforward" />
              </ProductImageSec>
              <ViewMoreDiv>
                <Link to="/">Learn More</Link>
              </ViewMoreDiv>
            </ProductSection>
          </div>
          <div className="item">
            <ProductSection>
              <YuasaSection>
                <YuasaLogo src={YuasLogo} alt="Yuasa Logo" />
                <ProductText>Creating the Future of Energy</ProductText>
                <ProductSubText>
                  Through Creating the New Value With Batteries, We will
                  Continue to Contribute to the Happiness of People and the
                  Sustainable Growth of Society as a Whole
                </ProductSubText>
              </YuasaSection>
              <ProductImageSec>
                <ProductBanner src={YuasaImg} alt="Beforward" />
              </ProductImageSec>

              <ViewMoreDiv>
                <Link to="/">Learn More</Link>
              </ViewMoreDiv>
            </ProductSection>
          </div>
          <div className="item">
            <MedageSection>
              <img src={MedageImg} alt="Medage" />
              <Overlay>Coming Soon</Overlay>
            </MedageSection>
          </div>
        </OwlCarousel>
      </CarouselWrapper>
    </React.Fragment>
  );
}

const CarouselWrapper = styled.div`
  padding-left: 15px;
  padding-right: 15px;
`;
const ProductSection = styled.div`
  height: 800px;
  @media (max-width: 576px) {
    height: 500px !important;
  }
  @media (max-width: 426px) {
    height: 300px;
  }
`;
const DigitradLogo = styled.img`
  width: 300px;
  @media (max-width: 768px) {
    width: 150px !important;
  }
  @media (max-width: 576px) {
    width: 150px !important;
    margin: auto;
    text-align: center;
  }
`;
const BeforwardLogo = styled.img`
  width: 300px;
  @media (max-width: 768px) {
    width: 150px !important;
    margin: auto;
    text-align: cente;
  }
`;
const YuasaLogo = styled.img`
  width: 300px;
  @media (max-width: 768px) {
    width: 150px !important;
    margin: auto;
    text-align: cente;
  }
`;
const ProductText = styled.div`
  font-size: 30px;
  font-weight: bold;
  margin-top: 20px;
  color: var(--mainBlack) !important;
  @media (max-width: 576px) {
    font-size: 26px;
    width: 300px;
    margin: auto;
    text-align: center;
    margin-top: 20px;
  }

  @media (max-width: 426px) {
    width: 240px;
  }
`;
const ProductImageSec = styled.div`
  height: 400px;
  @media (max-width: 576px) {
    height: 200px;
  }
  @media (max-width: 426px) {
    height: 150px;
  }
`;
const ProductSubText = styled.div`
  margin-top: 20px;
  font-size: 15px;
  @media (max-width: 576px) {
    width: 300px;
    margin: auto;
    text-align: center;
    font-size: 14px;
    margin-top: 20px;
  }
  @media (max-width: 426px) {
    width: 240px;
  }
`;
const ViewMoreDiv = styled.div`
  text-align: right;
  margin-top: 30px;
  a {
    font-size: 20px;
    color: var(--mainOrange);
    font-weight: bold;
    border-bottom: 1px solid var(--mainOrange);
  }
  a:hover {
    color: var(--mainBlack);
    text-decoration: none;
    border-bottom: 1px solid var(--mainBlack);
  }
`;
const BeforwardSection = styled.div`
  width: 400px;
  height: 300px;
  margin-left: auto;
  @media (max-width: 576px) {
    width: 100%;
    margin: auto;
  }
`;

const YuasaSection = styled.div`
  width: 400px;
  height: 300px;
  margin-left: auto;
  @media (max-width: 576px) {
    width: 100%;
    margin: auto;
  }
`;

const DigitradSection = styled.div`
  width: 400px;
  height: 300px;
  @media (max-width: 576px) {
    width: 100%;
  }
`;
const ProductBanner = styled.img`
  width: 800px !important;
  margin: auto !important;
  @media (max-width: 991px) {
    width: 100% !important;
  }
`;
const MedageSection = styled.div`
  height: 800px;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  img {
    width: 800px;
    margin: auto;
    opacity: 0.4;
  }
  @media (max-width: 991px) {
    img {
      width: 100%;
      margin: auto;
    }
  }
`;
const Overlay = styled.div`
  position: absolute;
  z-index: 5;
  background-color: rgba(0, 0, 0, 0.8);
  border-radius: 5px;
  color: var(--mainOrange);
  text-align: center;
  height: 70px;
  width: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  @media (max-width: 576px) {
    width: 100%;
    margin: auto;
  }
`;
// const BackgroundOverlay = styled.div`
//   background: rgba(0, 0, 0, 1);
//   opacity: 0.10;
//   position: absolute;
//   bottom: 0;
//   top: 0;
//   left: 0;
//   right: 0;

// `;
