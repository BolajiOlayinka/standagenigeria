import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
// import ImgOne from '../../assets/PostImgOne.png';
// import ImgTwo from '../../assets/PostImgTwo.png';
// import ImgThree from '../../assets/PostImgThree.png';
import renderHTML from "react-render-html";
import DayJS from "react-dayjs";
// import { Col } from "reactstrap";

export default function HomePost(props) {
  const currentPosts = { props };
  const truncate = (str, length, ending) => {
    if (length == null) {
      length = 60;
    }
    if (ending == null) {
      ending = "...";
    }
    if (str.length > length) {
      return str.substring(0, length - ending.length) + ending;
    } else {
      return str;
    }
  };
  const date = currentPosts.props.post.date

  console.log(currentPosts.props.post)
  return (
    <React.Fragment>
    <NewsWrapper>

    <Container>
        
        <PostCard to ={`/news/${currentPosts.props.post.id}`}>
        <div className="row">
          <div className="col-xl-2 col-lg-2 col-md-3">
            <NewsPostImg>
              <img src={currentPosts.props.post["_embedded"]["wp:featuredmedia"][0]['source_url']} alt={currentPosts.props.post["_embedded"]["wp:featuredmedia"][0]['alt_text']}/>
            </NewsPostImg>
            <Date> <DayJS format="MM-DD-YYYY">{ date }</DayJS></Date>
          </div>
          <div className="col-xl-10 col-lg-10 col-md-9">
            <NewsPostHeading>
            {truncate(renderHTML(currentPosts.props.post.title.rendered))}
            </NewsPostHeading>
            <NewsPostBody>
           {renderHTML(currentPosts.props.post.excerpt.rendered)}
            </NewsPostBody>
          </div>
        </div>
        </PostCard>
        <hr/>
        </Container>
    </NewsWrapper>
     
    </React.Fragment>
  );
}

const NewsWrapper = styled.div `
background-color:white;
padding-bottom:40px;

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
@media(max-width:576px){
  font-size:13px;
}

`
const Date = styled.div `
color:var(--mainBlack);
`