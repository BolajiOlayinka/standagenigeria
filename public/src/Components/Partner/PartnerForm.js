import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowAltCircleRight,
  
} from "@fortawesome/free-solid-svg-icons";

export default function PartnerForm() {
    return (
        <StyledForm>
        <InputGroup>
        <StyledInput type="type" placeholder="Email"/>

        </InputGroup>
        <InputGroup>
        <StyledInput type="text" placeholder="Company Name" required/>

        </InputGroup>
        <InputGroup>
        <StyledTextArea type="text" placeholder="Your Pitch" required/>

        </InputGroup>
        <InputGroup>
        <input type="file" placeholder="Attach File"/>

        </InputGroup>
       
        <Submit type="submit" placeholder="Submit" value="Submit"> Submit <FontAwesomeIcon className ="ml-2" icon={faArrowAltCircleRight}/> </Submit>

       
        </StyledForm>
    )
}

const StyledForm = styled.form `
text-align:center;
`
const StyledInput = styled.input `
width:100%;
border-radius:4px;
padding:10px 5px;
outline:0;
border: 0.5px solid #000000;
 box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);

 ::placeholder {
  color: #c4c4c4;
  padding-left:25px;
  padding-top:15px;
}
`
const StyledTextArea = styled.textarea`
width:100%;
border-radius:4px;
padding:5px;
outline:0;
border:1px solid black;
height:150px;
::placeholder {
  color: #c4c4c4;
  padding-left:25px;
  padding-top:15px;
}
`
const InputGroup = styled.div `
padding-bottom:25px;


`
const Submit = styled.button`

margin-bottom:10px;
background-color:var(--lightBlue);
border:transparent;
color:white;
padding:7px 20px;
border-radius:4px;
:hover{
    border:1px solid var(--lightBlue);
    background-color:white;
    color:var(--lightBlue);
}
`