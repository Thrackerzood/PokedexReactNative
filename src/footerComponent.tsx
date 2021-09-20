/* eslint-disable */
import React from 'react';
import styled from 'styled-components/native';


interface IFooterStyleObj{ 
  prop?: { 
    width: string; 
    height: string;
    background: string; 
  }
  color?: { 
    width: string;
    height: string;
    background: string; 
  }
}


const FooterStyleMain = styled.View
` 
height: ${(props:IFooterStyleObj) => props.color?.height};
width: ${(props:IFooterStyleObj) => props.color?.width};
background: ${(props:IFooterStyleObj) => props.color?.background};
`
const FooterBoldTextContent = styled.Text
`
width: 100%;
color: black;
font-size: 18px;
font-weight: bold;
line-height: 26px;
text-align: center;
`
const FooterTextNormalContent = styled.Text
`
width: 100%;
color: black;
font-size: 18px;
text-align: center;
`

export const Footer = (props:IFooterStyleObj) => {
  return  (<FooterStyleMain color={props.prop}>
            <FooterBoldTextContent>github</FooterBoldTextContent>
            <FooterTextNormalContent>Make with❤️</FooterTextNormalContent>
          </FooterStyleMain>);
}