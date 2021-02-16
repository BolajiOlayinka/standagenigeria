import React, { useState, useEffect } from "react";
import styled from "styled-components";
import AboutBanner from "../../assets/StandageAbout.png";
// import Check from '../../assets/check.png';
// import Header from '../Header';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { Modal, ModalHeader, ModalBody } from "reactstrap";
import Aos from "aos";
import "aos/dist/aos.css";
import pic0 from '../../assets/about1.jpg';
import pic1 from '../../assets/about2.jpg';
// import pic2 from '../../assets/about3.jpg';
// import pic3 from '../../assets/about4.jpg';
import pic4 from '../../assets/about5.jpg';
// import pic5 from '../../assets/about6.jpg';
import pic6 from '../../assets/about7.jpg';
import pic7 from '../../assets/about8.jpg';

export default function About() {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  // const [offsetTop, setOffsetTop] = useState(0)
  const fixedScroll = () => {
    if (window.pageYOffset >= 100) {
    } else {
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
    <React.Fragment>
 <BannerUnderlay>
      {/* <Header/> */}
      <Container>
        <BannerSection>
          <BannerHeading>
          We are focused on Value chain Creation through scaling Businesses in Nigeria.
          </BannerHeading>
          <BannerSubHeading>
            STANDAGE.inc is a Japan based technology company established 2017.
            We provide digital platform to international trading businesses &
            Importation of Japanese Products Across the World.
          </BannerSubHeading>
        </BannerSection>
        {/* <ButtonSection>
          <PlayButton onClick={toggle}>
            Who are we ...
            <FontAwesomeIcon className="ml-4" icon={faPlayCircle} />
          </PlayButton>
        </ButtonSection> */}

        <Modal isOpen={modal} toggle={toggle}>
          <ModalHeader toggle={toggle}></ModalHeader>
          <ModalBody>
            <div
              className="video"
              style={{
                position: "relative",
                paddingBottom: "56.25%",
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
      
    </BannerUnderlay>
    <MissionSection>
        <Container>
          <MissionContainer>
            <MissionBody>
              <Head> Mission</Head>
              <BodyContent>
                " Enhancing the Quality of Life Through the Creation of
                Innovative Business in Africa "
              </BodyContent>
            </MissionBody>
            <hr/>
            <VisionBody>
              <Head> Vision</Head>
              <BodyContent>
                
                  <div>To be Africa's No. 1 Quality Product Provider </div>
                   <div>To be Africa's No. 1 Quality Employee Provider </div>
                  
                    <div>To be Africa's No. 1 Quality Technology & Service Provider</div>
                  
                
              </BodyContent>
            </VisionBody>
          </MissionContainer>
        </Container>
      </MissionSection>
      <TeamSection className="team">
      <Container>
      <TeamHeader></TeamHeader>
          <TeamSubHeader>
            <div>Excellence Is Our Priority </div>
            <div>We Believe that Business Transcends Just Profit-Making</div>
          </TeamSubHeader>
          <Small>
            <TextSection>
                  <h5>Our Values</h5>
                
                 <Section><span><FontAwesomeIcon icon={faCheckCircle}/></span><div>We Are in Africa to Provide Businesses that Pitch 
                  the African Continent At Par With the Rest of the WORLD.</div></Section> 
                  
                 <Section><span><FontAwesomeIcon icon={faCheckCircle}/></span><div>The Best Way to Make the Difference is to a Livelihood for Nigerians. 
                  We CREATE Inclusive Businesses to CATER for EVERYONES' Needs</div></Section> 
             
            </TextSection>
            </Small>
          <TeamContainer>
            <PictureSection>
            
        <PictureOne>
          <div>
          <div><img src={pic1} alt="standage One" /></div>
          <div><img src={pic7} alt="standage Eight" /></div>
          </div>
          <SecondLong><img src={pic4} alt="standage Two" /></SecondLong>
        </PictureOne>
        <PictureTwo>
        <div><img src={pic0} alt="standage One" /></div>
          <div><img src={pic6} alt="standage Eight" /></div>
        </PictureTwo>
            </PictureSection>
            <Large>
            <TextSection>
                  <h5>Our Values</h5>
                
                 <Section><span><FontAwesomeIcon icon={faCheckCircle}/></span><div>We Are in Africa to Provide Businesses that Pitch 
                  the African Continent At Par With the Rest of the WORLD.</div></Section> 
                  
                 <Section><span><FontAwesomeIcon icon={faCheckCircle}/></span><div>The Best Way to Make the Difference is to a Livelihood for Nigerians. 
                  We CREATE Inclusive Businesses to CATER for EVERYONES' Needs</div></Section> 
             
            </TextSection>
            </Large>
            
          </TeamContainer>
          
      </Container>
        
      </TeamSection>
    </React.Fragment>
   
  );
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
const MissionSection = styled.div`
  background-color:white;;
  width: 100%;
 padding-top:100px;
 padding-bottom:50px;
  margin: auto;
`;
const MissionContainer = styled.div`
  display: flex;
  margin:auto;
hr{
  border:0.5px solid black;
  height:200px;
  margin-top:-50px;
}
@media(max-width:991px){
  flex-direction:column;
  hr{
  display:none;
}
}

`;
const MissionBody = styled.div`
  width: 488px;
  margin-left:auto;
  margin-right:auto;

  text-align: center;
  @media (max-width: 575.9px) {
    width:90%;
    margin:auto;
  }
`;
const BodyContent = styled.div`
padding-top:15px;

`;
const VisionBody = styled.div`
  width: 488px;
  margin-left:auto;
  margin-right:auto;
  text-align: center;
  @media(max-width:991px){
  padding-top:30px;

}
@media (max-width: 575.9px) {
    width:90%;
    margin:auto;
  }
`;
const Head = styled.div`
  width: 200px;
  background-color: var(--mainOrange);
  color: white;
  display: flex;
  justify-content:center;
  margin:auto;
  padding:8px 15px;
  border-radius:4px;

`;
const TeamHeader = styled.div `
padding-top:30px;
padding-bottom:20px;
`
const TeamSection = styled.div `
background-color:var(--mainAsh);
padding-bottom:100px;
`
const TeamSubHeader = styled.div `
font-size:26px;
width:506px;
color:#DB5215;
font-weight:bold;
div:first-child{
  color:black;
}
padding-top:30px;
padding-bottom:30px;
@media(max-width:991px){
  width:360px;
  margin:auto;
  text-align:center;
}
@media(max-width:425px){
  font-size:24px;
  width:100%;
  
}
`
const TeamContainer = styled.div `
display:flex;
align-items:center;
justify-content:space-between;
@media(max-width:991px){
  flex-direction:column;
}
`
const PictureSection = styled.div `

`
const PictureTwo = styled.div `
display:flex;

img{
  width:300px;
  border-radius:10px;
  margin-bottom:20px;
  margin-right:20px;
}
div{
border-radius:10px;
}
@media(max-width:991px){
  img{
    width:200px;
  }
}
@media(max-width:576px){
  img{
    width:150px;
    height:80px;
    border-radius:5px;
  }
}
`

const PictureOne = styled.div `
display:flex;
align-items:flex-end;
overflow:hidden;
img{
  width:300px;
  height:200px;
  margin-bottom:20px;
  margin-right:20px;
  border-radius:10px;

  ${'' /* padding-right:20px; */}
  

}
@media(max-width:991px){
  img{
    width:200px;
    height:150px;
  }
  
}
@media(max-width:576px){
  img{
    width:150px;
    height:80px;
    border-radius:5px;
  }
}
`
const SecondLong = styled.div `
 height:320px;
 overflow:hidden;
 margin-bottom:20px;
 border-radius:10px;
img{
 height:350px;
 

}
@media(max-width:991px){
  height:230px;
  img{
    
    height:250px;
  }
}
@media(max-width:576px){
  height:150px;
  img{
    width:150px;
    height:220px
  }
}
`
const TextSection = styled.div `
width:300px;
margin:auto;
text-align:center;
h5{
  text-align:center;
  margin-bottom:0px;
  font-weight:bold;
  font-size:20px;
  color:var(--lightBlue);
  padding-bottom:10px;

}
`
const Large =styled.div `
@media(max-width:991px){
  display:none;
}
`
const Small =styled.div `
@media(min-width:991.1px){
  display:none;
}
`
const Section = styled.div `
display:flex;
padding-top:5px;
padding-bottom:10px;
div{
  padding-left:10px;
}
span{
  color:#5D8D72;
  font-size:20px;
}


`