/* eslint-disable */
import { useLinkTo } from '@react-navigation/native';
import React from 'react';
import { ScrollView, TouchableHighlight } from 'react-native';
import styled from 'styled-components/native';
import { Footer } from './footerComponent';
import NavigationBar from './navigationBar';

/*******************************************/

// main container

/*******************************************/
const MainHomePageContent = styled.View
`
width: 100%;
min-height: 100%;
background: #F5DB13;
flex-derection: center;
`
/*******************************************/

//text container

/*******************************************/
const HomeTextContainer = styled.View
`
margin-top: 30px;
max-width: 368px;
margin: 20px auto;
`
const BoldTitileText = styled.Text
`
width: 100%;
color: black;
margin: 0 auto;
font-size: 43px;
font-weight: bold;
text-align: center;
font-stretch: expanded;
`
const NormalTitileText = styled.Text
`
width: 100%;
color: black;
margin: 0 auto;
font-size: 43px;
text-align: center;
font-weight: normal;
font-stretch: expanded;
`
const SmollTitelText = styled.Text
`
font-size: 24px;
text-align: center;
`
const ButtonFromHomePage = styled.View
`
width: 80%;
max-width: 312px;
margin: 20px auto;
background: #73D677;
border-radius: 11px;
`
const ButtonFromHomePageText = styled.Text
`
width: 100%;
color: black;
margin: 10px 0;
font-size: 23px;
font-weight: bold;
text-align: center;
`
/*******************************************/

//image container

/*******************************************/
const HomePagePictureContainer = styled.View
`
z-index: 0;
width: 100%;
min-height: 287px;
position: relative;
background: #F5DB13;
`
const ImageHomePage = styled.ImageBackground
`
width: 100%;
height: 100%;
`
const ImageContainerFromClouds = styled.View
`
top: 46px;
z-index: 8;
left: 13px;
width: 289px;
height: 183px;
position: absolute;
`
const ImageContainerFromPokeball = styled.View
`
top: 38px;
z-index: 9;
right: 0px;
width: 133px;
height: 134px;
position: absolute;
`
const ImageContainerFromPikachu = styled.View
`
top: 60px;
left: 0px;
z-index: 10;
width: 285px;
height: 255px;
position: absolute;
`
const ImageContainerFromPokeballRCommand = styled.View
`
top: 56px;
left: 29px;
z-index: 7;
width: 70px;
height: 70px;
position: absolute;
`

/*******************************************/

//all image

/*******************************************/
const ImageContainer = () => {

  return  <HomePagePictureContainer>

                <ImageContainerFromClouds>
                    <ImageHomePage source={require('./img/Clouds.png')}/>
                </ImageContainerFromClouds>

                <ImageContainerFromPokeball>
                    <ImageHomePage source={require('./img/Pokeball2.png')}/>
                </ImageContainerFromPokeball>

                <ImageContainerFromPikachu>
                      <ImageHomePage source={require('./img/Pikachu.png')}/>
                </ImageContainerFromPikachu>

                <ImageContainerFromPokeballRCommand>
                    <ImageHomePage source={require('./img/PokeBall1.png')}/>
                </ImageContainerFromPokeballRCommand>

          </HomePagePictureContainer>
}
/*******************************************/

//all text

/*******************************************/
const TextContainer = () => {
  return  <HomeTextContainer>
            <BoldTitileText>Find {" "}
              <NormalTitileText>all your</NormalTitileText>
              <NormalTitileText>{"\n"}favorite</NormalTitileText>
            </BoldTitileText>
            <BoldTitileText>Pokemon</BoldTitileText>
              <SmollTitelText>
                You can know the type 
                of Pokemon, its strengths, 
                disadvantages and abilities
              </SmollTitelText>   
          </HomeTextContainer>
}
/*******************************************/


const HomePage = () => {
  const linkTo = useLinkTo();
  return (  <MainHomePageContent>
    <NavigationBar/>{/*header*/}
    <ScrollView contentContainerStyle={{flexGrow : 1}}>
        <ImageContainer/>{/*image 73*/}
        <TextContainer/>{/*text 22*/}
        <TouchableHighlight onPress={() => linkTo('/PokedexPage')}>
          <ButtonFromHomePage>
            <ButtonFromHomePageText>
              See pokemons
            </ButtonFromHomePageText>
          </ButtonFromHomePage>{/*button 57*/}
        </TouchableHighlight>
        <Footer prop={{height: '150px', width: '100%' , background: '#F5DB13'}}/>
    </ScrollView>
    </MainHomePageContent>);
};

export default HomePage;
