import React, { useState } from "react";
// import Banner from "../../assets/Pepper.png";
import Bus from "../../assets/Bus.png";
// import Team from "../../assets/Team.png";
import styled, { keyframes } from "styled-components";
import { bounce } from "react-animations";
// import Header from "../Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlayCircle,
  faChevronCircleDown,
} from "@fortawesome/free-solid-svg-icons";
import { Modal, ModalHeader, ModalBody } from "reactstrap";
// import AboutBG from "../../assets/AboutBG.png";
// import { Link } from "react-router-dom";
// import Carousel from "../Snippets/Carousel";
// import Dave from '../../assets/Dave.png';
// import Map from '../../assets/Map.png';
// import News from './HomePost';

export default function Home() {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  const bounceAnimation = keyframes`${bounce}`;
  const NextSection = styled.div`
    animation: 5s infinite ${bounceAnimation};
    text-align: center;
    background-color: transparent;
    padding-bottm: 50px;
  `;
  return (
    <React.Fragment>
      <BannerUnderlay>
        {/* <Header /> */}
        <Container>
          <BannerSection>
            <BannerHeading>
              Enrich all regions of the world through the creation of innovative
              businesses
            </BannerHeading>
            <BannerSubHeading>
              Creating decentralized solutions to bridge the gap between
              high-quality Japanese products and the growth economies they offer
            </BannerSubHeading>
            <PlayButton onClick={toggle}>
              Who are we ...
              <FontAwesomeIcon className="ml-4" icon={faPlayCircle} />
            </PlayButton>
            <Modal isOpen={modal} toggle={toggle}>
              <ModalHeader toggle={toggle}></ModalHeader>
              <ModalBody>
                <div
                  className="video"
                  style={{
                    position: "relative",
                    paddingBottom: "56.25%" /* 16:9 */,
                    paddingTop: 25,
                    height: 0,
                  }}
                >
                  <iframe
                    title="youtube"
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                    }}
                    src="https://www.youtube.com/embed/AdTSoVmaxsM?autoplay=1&mute=1"
                    frameBorder="0"
                  />
                </div>
              </ModalBody>
            </Modal>
          </BannerSection>
          <NextSection>
            <NextButton>
              <FontAwesomeIcon icon={faChevronCircleDown} />{" "}
            </NextButton>
          </NextSection>
        </Container>
      </BannerUnderlay>
      {/* <AboutSection>
        <Container>
          <AboutWrapper>
            <AboutHeader>
              About Us
              <hr />
            </AboutHeader>
            <div className="row align-items-center">
              <div className="col-lg-6 col-md-6">
                <img src={Team} alt="Standage Team" />
              </div>
              <div className="col-lg-6 col-md-6">
                <RightAboutHeading>
                  We make Quality Japanese Products Available Wherever in the
                  World.
                </RightAboutHeading>
                <RightAboutSubHeading>
                  STANDAGE.inc is a Japan based technology company established
                  2017. We provide digital platform to international trading
                  businesses & Importation of Japanese Products Across the
                  World.
                </RightAboutSubHeading>
              </div>
            </div>
          </AboutWrapper>
          <ViewMoreDiv>
            <Link to="/">View More . . .</Link>
          </ViewMoreDiv>
        </Container>
      </AboutSection> */}
      {/* <ProductSection>
        <Container>
          <ProductHeader>
            Our Products
            <hr />
          </ProductHeader>
          <Carousel />
        </Container>
      </ProductSection> */}

      {/* <News/> */}

      {/* <CEO>
<BackgroundOne>
<Container>
<TeamHeader>
  Our Team
  <hr/>
</TeamHeader>
<TeamRow>
<CEOText>
      <CEOName>
            Dave Gabriel
      </CEOName>
      <CEOTitle>
            C.E.O 
      </CEOTitle>
      <CEOQuote>
        We are here to present the kind of Trading experience never witnessed in Nigeria. Watch out for the space !!!
      </CEOQuote>
</CEOText>
<CEOimg>
<img src={Dave} alt="Dave Gabriel"/>
</CEOimg>
</TeamRow>
</Container>

</BackgroundOne>
<BackgroundTwo>

</BackgroundTwo>
</CEO> */}
      {/* <MapSection>
          <img src={Map} alt="Nigerian Map"/>
      </MapSection> */}
    </React.Fragment>
  );
}

const BannerUnderlay = styled.div`
  background-image: url(${Bus});
  background-size: cover;
  background-repeat: no-repeat;
  height: 600px;
  overflow: hidden;
  padding-top: 47px;
  @media (max-width: 576px) {
    height: 700px;
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
`;

const BannerSection = styled.div`
  width: 600px;
  @media (max-width: 768px) {
    width: 500px;
  }
  @media (max-width: 576px) {
    width: 400px;
    padding-top: 100px;
  }
  @media (max-width: 426px) {
    width: 310px;
  }
`;
const BannerHeading = styled.div`
  font-size: 40px;
  line-height: 54px;
  font-weight: bold;
  color: white;
  margin-top: 20px;
  @media (max-width: 768px) {
    font-size: 36px;
  }
  @media (max-width: 576px) {
    font-size: 36px;
    line-height: 45px;
  }
  @media (max-width: 426px) {
    font-size: 28px;
    line-height: 35px;
  }
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
  @media (max-width: 576px) {
    font-size: 16px;
    line-height: 24px;
  }
  @media (max-width: 426px) {
    font-size: 14px;
    line-height: 21px;
    margin-top: 20px;
  }
`;
const PlayButton = styled.button`
  background-color: #f8951d;
  color: white;
  border: none;
  width: 324px;
  height: 81px;
  margin-bottom: 2%;
  font-size: 24px;
  font-weight: bold;
  :active {
    outline: 0;
    border: none;
    -moz-outline-style: none;
  }
  :focus {
    outline: 0;
    border: none;
    -moz-outline-style: none;
  }
  @media (min-width: 1200px) {
    margin-right: auto;
    margin-top: 30px;
    margin-bottom: 55px;
    padding: 8px 28px;
  }
  @media (min-width: 991px) and (max-width: 1199.9px) {
    margin-top: 30px;
    margin-bottom: 25px;
    padding: 10px 24px;
  }
  @media (min-width: 576px) and (max-width: 990.9px) {
    margin-top: 30px;
    margin-bottom: 25px;
    ${"" /* padding: 10px 24px; */}
    width:260px;
    padding: 6px 16px;
    height: 64px;
  }
  @media (max-width: 576.1px) {
    width: 200px;
    font-size: 14px;
    height: 40px;
    margin-top: 30px;
  }
`;
const NextButton = styled.button`
  background: transparent;
  color: white;
  font-size: 32px;
  outline: 0;
  border: none;
  -moz-outline-style: none;
`;
// const AboutSection = styled.div`
//   background-image: url(${AboutBG});
//   height: 720px;
//   display: flex;
// `;
// const AboutWrapper = styled.div`
//   padding-left: 15px;
//   padding-right: 15px;
// `;
// const AboutHeader = styled.div`
//   font-size: 30px;
//   color: var(--lightBlue);
//   font-weight: bold;
//   display: block;
//   margin-bottom: 45px;
// `;
// const ProductHeader = styled.div`
//   font-size: 30px;
//   color: var(--lightBlue);
//   font-weight: bold;
//   display: block;
//   margin-bottom: 45px;
//   padding-left: 15px;
//   padding-right: 15px;
// `;
// const RightAboutHeading = styled.div`
//   font-size: 30px;
//   font-weight: bold;
// `;
// const RightAboutSubHeading = styled.div`
//   font-size: 15px;
//   margin-top: 20px;
// `;
// const ViewMoreDiv = styled.div`
//   text-align: right;
//   margin-top: 30px;
//   a {
//     font-size: 20px;
//     color: black;
//   }
//   a:hover {
//     color: var(--mainOrange);
//     text-decoration: none;
//   }
// `;
// const ProductSection = styled.div`
//   background-color: var(--mainAsh);
//   height: 1000px;
//   padding-top: 120px;
  
// `;
// const MapSection = styled.div`
//   height: 650px;
//   overflow: hidden;

//   img {
//     width: 100%;
//   }
//   @media (min-width: 1400px) {
//     height: 800px;
//   }
//   @media (min-width: 2000px) {
//     height: 1000px;
//   }
// `;
// const CEO = styled.div``;
// const BackgroundOne = styled.div`
//   height: 500px;
//   background-color: var(--mainAsh);
// `;
// const BackgroundTwo = styled.div`
//   height: 230px;
//   background-color: black;
// `;
// const TeamHeader = styled.div`
//   font-size: 30px;
//   color: var(--lightBlue);
//   font-weight: bold;
//   display: block;
//   margin-bottom: 45px;
//   text-align: left;
//   padding-top: 40px;
// `;
// const TeamRow = styled.div`
//   display: flex;
//   align-items: center;
// `;
// const CEOText = styled.div``;
// const CEOName = styled.div`
//   font-size: 30px;
//   font-weight: bold;
// `;
// const CEOTitle = styled.div`
//   font-size: 24px;
//   font-weight: bold;
//   color: var(--mainOrange);
//   padding-bottom: 40px;
// `;
// const CEOQuote = styled.div`
//   width: 530px;
//   height: 200px;
//   font-size: 22px;
//   font-weight: bold;
// `;
// const CEOimg = styled.div`
//   img {
//     width: 450px;
//   }
// `;
