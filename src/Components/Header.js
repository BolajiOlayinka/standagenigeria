import React, { useState } from "react";
import styled from "styled-components";
import { Navbar, Nav, NavItem } from "reactstrap";
import Logo from "../assets/Logo.png";
import Email from "../assets/Email.svg";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";



export default function Header() {
  const [background, setBackground] = useState("rgba(0, 0, 0, 0.4)");
  const [mailPadding, setMailPadding]=useState(20)
  const [display, setDisplay] = useState("flex");
  const [fixed, setFixed] = useState("initial");
  const [showIcon, setShowIcon] = useState(true);
  const [showItem, setShowItem] = useState(false);
  // const [SmallBackground, setSmallBackground]=useState("black")

  const handleScroll = () => {
    
    if (window.pageYOffset > 0) {
      setBackground("rgba(0, 0, 0, 0.4)");
    } else {
      setBackground("rgba(0, 0, 0, 0.4)");
    }
  };
  const fixedScroll = () => {
    if (window.pageYOffset >= 100) {
      setFixed("fixed");
      setMailPadding(105)
     
    } else {
      setFixed("initial");
      setMailPadding(20) 
     
    }
  };
  const ScrollDisplay = () => {
    if (window.pageYOffset >= 1300) {
      setDisplay("none");
     
    } else {
      setDisplay("flex");
    
     
    }
  };
  window.addEventListener("scroll", handleScroll);
  window.addEventListener("scroll", fixedScroll);
  window.addEventListener("scroll", ScrollDisplay);

  const toggle = (e) => {
    setShowItem(!showItem, e);
    setShowIcon(!showIcon, e);
  };
  

  return (
    <React.Fragment>
        <NavWrapper background={background} fixed={fixed} display={display}>
      <StyledNavbar expand="sm">
        <div onClick={toggle} style={{ marginRight: "38px" }}>
          {showIcon ? (
            <StyledFontAwesome icon={faBars} />
          ) : (
            <StyledFontCancel icon={faTimesCircle} />
          )}
        </div>
        <LogoContainer>
          <Link to="/">
            <img src={Logo} alt="Standage Logo" />
          </Link>
        </LogoContainer>
        {showItem && (
          <StyledNav navbar>
            <NavItem>
              <StyledLink
                activestyle={{
                  fontWeight: "bold",
                  color: "#f8951d",
                  cursor: "pointer",
                  textDecoration: "none",
                  borderBottom: "7px solid #f8951d",
                }}
                to="/ja"
                onClick={toggle}
              >
                Home
              </StyledLink>
            </NavItem>
            <NavItem>
              <StyledLink
                activestyle={{
                  fontWeight: "bold",
                  color: "#f8951d",
                  cursor: "pointer",
                  textDecoration: "none",
                  borderBottom: "7px solid #f8951d",
                }}
                to="/news"
                onClick={toggle}
              >
                News
              </StyledLink>
            </NavItem>
            <NavItem>
              <StyledLink to="/news" onClick={toggle}>
                Service
              </StyledLink>
            </NavItem>
            <NavItem>
              <StyledLink
                activestyle={{
                  fontWeight: "bold",
                  color: "#f8951d",
                  cursor: "pointer",
                  textDecoration: "none",
                  borderBottom: "7px solid #f8951d",
                }}
                to="/about"
                onClick={toggle}
              >
                About Us
              </StyledLink>
            </NavItem>
          </StyledNav>
        )}
        <LargeNav className="ml-auto">
          <StyledNav navbar>
            <NavItem>
              <StyledLink to="/">Home</StyledLink>
            </NavItem>
            <NavItem>
              <StyledLink
                activeclassname="selected"
                activestyle={{
                  fontWeight: "bold",
                  color: "#f8951d",
                  cursor: "pointer",
                  textDecoration: "none",
                  borderBottom: "7px solid #f8951d",
                }}
                to="/news"
              >
                About Us
              </StyledLink>
            </NavItem>
            <NavItem>
              <StyledLink
                activeclassname="selected"
                activestyle={{
                  fontWeight: "bold",
                  color: "#f8951d",
                  cursor: "pointer",
                  textDecoration: "none",
                  borderBottom: "7px solid #f8951d",
                }}
                to="/#digitrad"
              >
                Service
              </StyledLink>
            </NavItem>
            <NavItem>
              <StyledLink
                activestyle={{
                  fontWeight: "bold",
                  color: "#f8951d",
                  cursor: "pointer",
                  textDecoration: "none",
                  borderBottom: "7px solid #f8951d",
                }}
                to="/about"
              >
                News
              </StyledLink>
            </NavItem>
            <NavItem>
              <StyledLink
                activestyle={{
                  fontWeight: "bold",
                  color: "#f8951d",
                  cursor: "pointer",
                  textDecoration: "none",
                  borderBottom: "7px solid #f8951d",
                }}
                to="/about"
              >
                Our Team
              </StyledLink>
            </NavItem>
          </StyledNav>
        </LargeNav>

        {/* <div className="ml-auto">
          <LanguageSwitcher />
        </div> */}
      </StyledNavbar>
     
    </NavWrapper>
    <MailContainer fixed={fixed} padding={mailPadding} display={display}>
    <Container>
    <Link to ="/"><img src={Email} alt="standage email"/></Link>
    </Container>
        
    </MailContainer>
    </React.Fragment>

  );
}

const NavWrapper = styled.div`
  z-index: 12;
  display: ${(props) => props.display} !important;
  flex: auto;
  align-items: center;
  position: ${(props) => props.fixed} !important;
  ${'' /* padding-top: 1em;
  padding-bottom: 1em; */}
  color: #373737;
  background: ${(props) => props.background} !important;
  transition: 0.4s all;
  width: -webkit-fill-available;
  
  @media (max-width: 576px) {
    background-color: rgba(0, 0, 0, 0.8);
  }
`;
const Container = styled.div `
@media(min-width:1200px){
  width:1100px;
  margin:auto;
}
`
const LogoContainer = styled.div`
  ${'' /* img {
    width: 150px;
    height: 38px;
  } */}
`;
const StyledNav = styled(Nav)`
  margin: auto;
  @media (max-width: 576px) {
    position: fixed;
    padding-top: 60px;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgb(0, 0, 0, 0.9);
    z-index: 1;
    width: 100%;
    li {
      padding: 10px;
      a {
        font-size: 20px !important;
      }
    }
  }
`;
const StyledNavbar = styled(Navbar)`
  flex: auto;
  @media (min-width: 1201px) {
    flex: none;
    width: 1200px;
    margin: auto;
  }
`;
const StyledLink = styled(Link)`
  color: white;
  line-height: 24px;
  margin-right: 33px;
  padding-bottom: 8px;
  font-size: 15px;
  font-weight:bold;
  
  :hover {
    color: #f8951d;
    cursor: pointer;
    text-decoration: none;

    border-bottom: 7px solid #f8951d;
  }
  :active {
    color: #f8951d;
    border-bottom: 7px solid #f8951d;
    transition: border-bottom 0.5s ease-in;
  }

  @media (max-width: 735px) {
    font-size: 12px;
    margin-right: 40px;
  }
  @media (max-width: 576px) {
    font-size: 13px;
    line-height: 32px;
    padding-left: 0.5em;
    :hover {
      border-bottom: 0px;
    }
    :active {
      border-bottom-color: transparent !important;
      border-bottom-style: none !important;
      border-bottom-width: 0 !important;
    }
  }
`;

const LargeNav = styled.div`
display:flex;
  @media (min-width: 768px) {
    display: block;
  }
  @media (max-width: 767.9px) {
    display: none;
  }
`;
const StyledFontAwesome = styled(FontAwesomeIcon)`
  color: white;
  font-size: 20px;

  @media (min-width: 768px) {
    display: none;
  }
`;
const StyledFontCancel = styled(FontAwesomeIcon)`
  z-index: 2;
  position: absolute;
  top: 0;
  color: white;
  margin-top: 9px;
  margin-left: -2px;
  font-size: 24px;
`;
const MailContainer = styled.div `
position: ${(props) => props.fixed} !important;
padding-top:${(props)=> props.padding}px!important;
display: ${(props) => props.display} !important;
text-align:right;
width:100%;
`
