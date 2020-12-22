import React,{useState,useEffect} from 'react';
import styled from 'styled-components';
import AboutBanner from '../../assets/About.png';
import Header from '../Header';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlayCircle,
} from "@fortawesome/free-solid-svg-icons";
import { Modal, ModalHeader, ModalBody } from "reactstrap";
import Aos from "aos";
import "aos/dist/aos.css";

export default function About() {
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);
    const [offsetTop, setOffsetTop] = useState(0)
    const fixedScroll = () => {
        if (window.pageYOffset >= 100) {
         
          setOffsetTop(100)
          
         
        } else {
         
          setOffsetTop(0)
          
         
        }
      };
      window.addEventListener("scroll", fixedScroll);
      useEffect(() => {
        Aos.init(
          {
            duration: 1200,
          },
          []
        );
      });
    return (
        <BannerUnderlay>
        <Header/>
            <Container>
            <BannerSection>
            <BannerHeading offsetTop={offsetTop}>
              Enrich all regions of the world through the creation of innovative
              businesses
            </BannerHeading>
            <BannerSubHeading>
              Creating decentralized solutions to bridge the gap between
              high-quality Japanese products and the growth economies they offer
            </BannerSubHeading>
            </BannerSection>
            <ButtonSection>
            <PlayButton onClick={toggle}>
              Who are we ...
              <FontAwesomeIcon className="ml-4" icon={faPlayCircle} />
            </PlayButton>
            </ButtonSection>

            
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
                    src="https://www.youtube.com/embed/TnR9O-d8nhY?autoplay=1&mute=1"
                    frameBorder="0"
                  />
                </div>
              </ModalBody>
            </Modal>
            <BannerJoiner data-aos="fade-up"></BannerJoiner>
            </Container>
            <MissionSection>
            <Container>
            <MissionBody>
                        Mission
                </MissionBody>
                <VisionBody>
                        Vision
                </VisionBody>
            </Container>
                
            </MissionSection>
        </BannerUnderlay>
    )
}


const BannerUnderlay = styled.div`
  background-image: url(${AboutBanner});
  background-size: cover;
  background-repeat: no-repeat;
  height: 450px;
  overflow: hidden;
  padding-top: 47px;
  position:relative;
`;
const Container = styled.div`
  @media (min-width: 1200px) {
    width: 1100px;
    margin: auto;
  }
`;
const BannerSection = styled.div`
  width: 600px;
`;
const BannerHeading = styled.div`
  font-size: 30px;
  line-height: 44px;
  font-weight: bold;
  color: white;
  margin-top: 20px;
  ${'' /* padding-top:${(props)=> props.offsetTop}px!important; */}
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
const ButtonSection = styled.div `
text-align:right;
margin-top:-45px;
`
const PlayButton = styled.button`
  background-color: #f8951d;
  color: white;
  border: none;
  width: 324px;
  height: 81px;
  margin-bottom: 2%;
  font-size: 24px;
  font-weight: bold;
  text-align:right;
  border-radius:5px;
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
    margin-bottom: 25px;
    padding: 10px 24px;
  }
  @media (min-width: 576px) and (max-width: 990.9px) {
    margin-bottom: 25px;
    padding: 10px 24px;
  }
  @media (max-width: 576.1px) {
    display: none;
  }
`;
const BannerJoiner = styled.div `
width:30px;
height:180px;
position:absolute;
z-index:5;
background-color:var(--mainOrange);
margin-top:-80px;
`
const MissionSection = styled.div `
background-color:var(--lightOrange);
display:flex;
align-items:center;
position:relative!important;
`
const MissionBody = styled.div `

`
const VisionBody = styled.div `

`