import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import ImgOne from '../../assets/PostImgOne.png';
import ImgTwo from '../../assets/PostImgTwo.png';
import ImgThree from '../../assets/PostImgThree.png';
// import renderHTML from "react-render-html";
// import { Col } from "reactstrap";

export default function HomePost(props) {
  // const currentPosts = { props };
  // const truncate = (str, length, ending) => {
  //   if (length == null) {
  //     length = 30;
  //   }
  //   if (ending == null) {
  //     ending = "...";
  //   }
  //   if (str.length > length) {
  //     return str.substring(0, length - ending.length) + ending;
  //   } else {
  //     return str;
  //   }
  // };
  // console.log(currentPosts.props.post)
  return (
    <React.Fragment>
    <NewsWrapper>

    <Container>
        <Header> Company News <hr/></Header>
        <PostCard to ="/">
        <div className="row">
          <div className="col-xl-2 col-lg-2 col-md-3">
            <NewsPostImg>
              <img src={ImgOne} alt="Post"/>
            </NewsPostImg>
            <Date> 1 NOV 2020</Date>
          </div>
          <div className="col-xl-10 col-lg-10 col-md-9">
            <NewsPostHeading>
            STANDAGE NIGERIA In Conjunction With the Nigerian Chamber Of Commerce Introduces new Product.
            </NewsPostHeading>
            <NewsPostBody>
            In the Q2 of 2020, Standage Nigeria in conjucnction witih 
            the Nigerian Chamber of Commerce has established a payment platform that allows...
            </NewsPostBody>
          </div>
        </div>
        </PostCard>
        <hr/>
        <PostCard to ="/">
        <div className="row">
          <div className="col-xl-2 col-lg-2 col-md-3">
            <NewsPostImg>
              <img src={ImgTwo} alt="Post"/>
            </NewsPostImg>
            <Date> 1 NOV 2020</Date>
          </div>
          <div className="col-xl-10 col-lg-10 col-md-9">
            <NewsPostHeading>
            CBN & Indigenous Banks In Nigeria awards STANDAGE NIGERIA an Award of Excellence for her activities at...
            </NewsPostHeading>
            <NewsPostBody>
            The Central Bank of Nigeria has Identified the Corporate Responsibility Activities of 
            STANDAGE Nigeria Across the Thirty-Six States of the Federation and also for...
            </NewsPostBody>
          </div>
        </div>
        </PostCard>
        <hr/>
        <PostCard to ="/">
        <div className="row">
          <div className="col-xl-2 col-lg-2 col-md-3">
            <NewsPostImg>
              <img src={ImgThree} alt="Post"/>
            </NewsPostImg>
            <Date> 1 NOV 2020</Date>
          </div>
          <div className="col-xl-10 col-lg-10 col-md-9">
            <NewsPostHeading>
            JOB OPENING in STANDAGE JAPAN for the role of a Product Manager. Application Ends on ...
            </NewsPostHeading>
            <NewsPostBody>
            In the Q2 of 2020, Standage Nigeria in conjucnction witih the Nigerian Chamber of 
            Commerce has established a payment platform that allows...
            </NewsPostBody>
          </div>
        </div>
        </PostCard>
        
        </Container>
    </NewsWrapper>
     
    </React.Fragment>
  );
}

const NewsWrapper = styled.div `
background-color:white;
padding-bottom:40px;
padding-top:40px;
`
const PostCard = styled(Link) `
padding-left:15px;
padding-right:15px;
:hover{
  color:var(--mainOrange);
  text-decoration:none;
 
}
`
const Container = styled.div `

@media(min-width:1200px){
  width:1100px;
  margin:auto;
}
@media(max-width:1199px){
  width:90%;
  margin:auto;
}
`
const Header = styled.div `
font-size:30px;
font-weight:bold;
color:var(--lightBlue);
padding-bottom:15px;
`
const NewsPostImg =styled.div `
img{
  width:150px;
}
${'' /* @media(max-width:1024px){
  img{
    width:180px;
  }
} */}
`
const NewsPostHeading = styled.div `
color:var(--mainBlack);
font-size:18px;
font-weight:bold;
:hover{
  color:var(--mainOrange)
}
`
const NewsPostBody = styled.div `
color:var(--mainBlack);
:hover{
  color:var(--mainOrange)
}

`
const Date = styled.div `
color:var(--mainBlack);
`