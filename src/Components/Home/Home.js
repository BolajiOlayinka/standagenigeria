import React from 'react'
import Banner from '../../assets/Pepper.png';
import styled from 'styled-components';
import Header from '../Header';

export default function Home() {
    return (
        <React.Fragment>
           <BannerUnderlay>
            <Header/>
           </BannerUnderlay>
           <BannerUnderlay>
               
           </BannerUnderlay>
        </React.Fragment>
    )
}

const BannerUnderlay = styled.div `
background-image:url(${Banner});
background-size:cover;
background-repeat:no-repeat;
height:800px;
padding-top:47px;
`
