/* eslint-disable */
import React, { useEffect, useState } from 'react';
import { ScrollView, Text, TouchableHighlight} from 'react-native';
import styled from 'styled-components/native';
import { Footer } from './footerComponent';
import { pokemonInitialValue } from './interface/initialValue';
import { IColorBackgound, IColorPokemonObj, IData, IPokemon, ISearch, IStat} from './interface/interface';
import NavigationBar from './navigationBar';
import { colorPokemonObj } from './utilits/colorTypePokemon';
import { loadDataPokemon } from './utilits/loadDataPokemon';

const PokedexMainPageContainer = styled.View
`
width: 100%;
min-height: 100%;
`
const MainContentFromPokedexTextContainer = styled.View
`
width: 100%;
height: 84px;
max-width: 316px;
margin: 20px auto;
`
const PokedexTextNormal = styled.Text
`
font-size: 24px;
text-align: center;
`
const PokedexTextBold = styled.Text
`
font-size: 24px;
font-weight: 700;
text-align: center;
`
const TextInputPokedex = styled.TextInput
`
width: 100%;
padding: 5px 10px;
margin: 20px auto;
border-radius: 40px;
background: #F2F2F2;
shadowColor: "#000";
shadowOffset: {
	width: 0;
	height: 1;
};
shadowOpacity: 0.22;
shadowRadius: 2.22;
elevation: 3;
`
const FilterPokedexContainer = styled.View
`
width: 77px;
height: 20px;
font-size: 12px;
background: #F2F2F2;
shadowColor: "#000";
shadowOffset: {
	width: 0;
	height: 1;
};
shadowOpacity: 0.22;
shadowRadius: 2.22;
elevation: 3;
border-radius: 8px;
`
const FilterPokedexText = styled.Text
`
font-size: 12px;
padding-left: 15px;
`
const PokemonDataContiner = styled.View
`
width: 100%;
margin: 100px auto 64px;
`
const SubPokemonDataContainer = styled.View
`
width: 100%;
height: 140px;
overflow: hidden;
max-width: 337px;
margin: 12px auto;
border-radius: 8px;
shadowColor: "#000";
shadowOffset: {
	width: 0;
	height: 1;
};
shadowOpacity: 1.18;
shadowRadius: 2.00;
elevation: 2;
background: white;
`
const PokemonDataImageContainer = styled.View
`
right: 0;
width: 222px;
height: 140px;
position: absolute;
background: ${(props:IColorBackgound) => props.props.background}
`
const PokemonImagePokedex = styled.ImageBackground
`
width: 140px;
height: 140px;
margin: 0 auto;
`
const PokemonNamePokedex = styled.Text
`
top: 5px;
left: 24px;
z-index: 2;
font-size: 18px;
position: absolute;
text-transform: capitalize;
`
const PokemonTypePokedex1 = styled.View
`
z-index: 2;
left: 24px;
width: 57px;
height: 16px;
bottom: 12px;
position: absolute;
border-radius: 11px;
shadowColor: "#000";
shadowOffset: {
	width: 0;
	height: 1;
};
shadowOpacity: 0.18;
shadowRadius: 1.00;
elevation: 1;
background: ${(props:IColorBackgound) => props.props.background}
`
const PokemonTypePokedex2 = styled.View
`
z-index: 2;
left: 94px;
width: 57px;
height: 18px;
bottom: 12px;
position: absolute;
border-radius: 11px;
${(props:IColorBackgound) => props?.props?.background && 
`shadowColor: "#000";
  shadowOffset: {
  width: 0;
  height: 1;
  };
  shadowOpacity: 0.18;
  shadowRadius: 1.00;
  elevation: 1;`}
${(props:IColorBackgound) => props?.props?.background && `background:${props?.props?.background}`}
`
const PokemonTypePokedexText = styled.Text
`
width: 100%;
font-size: 12px;
text-align: center;
`
const TextAttack = styled.Text
`
left: 24px;
bottom: 40px;
font-size: 12px;
position: absolute;
`
const TextDefense = styled.Text
`
left: 70px;
bottom: 40px;
font-size: 12px;
z-index: 2;
position: absolute;
`
const AttackStatPokemon = styled.View
`
top: 46px;
left: 27px;
width: 36px;
height: 36px;
z-index: 2;
position: absolute;
shadowColor: "#212121";
shadowOffset: {
	width: 1;
	height: 1;
};
shadowOpacity: 1.18;
shadowRadius: 1.00;
elevation: 2;
border-radius: 50px;
`
const AttackStatPokemonText = styled.Text
`
top: 10px;
width: 100%;
font-size: 14px;
text-align: center;
position: absolute;
border-radius: 150px;
`
const DefenseStatPokemon = styled.View
`
top: 46px;
left: 75px;
width: 36px;
height: 36px;
z-index: 2;
position: absolute;
shadowColor: "#212121";
shadowOffset: {
	width: 1;
	height: 1;
};
shadowOpacity: 1.18;
shadowRadius: 1.00;
elevation: 2;
border-radius: 50px;
`
const DefenseStatPokemonText = styled.Text
`
top: 10px;
width: 100%;
font-size: 14px;
text-align: center;
position: absolute;
border-radius: 150px;
`
const PopupPokemon = styled.View
`
top: 0;
left: 0;
z-index: 10;
width: 100%;
height: 100%;
background: white;
position: absolute;
background: ${(props:IColorBackgound) => props.props.background}
`
const PopupPokemonBackground = styled.View
`
left: 0;
bottom: 0;
width: 100%;
height: 65%;
position: absolute;
background: rgba(0,0,0,0.5)
border-top-left-radius: 16px;
border-top-right-radius: 16px;
`
const ClosePopupButton = styled.View
`
width: 35px;
margin: 14px;
height: 35px;
`
const SubClosePopupButtonOne = styled.View
`
left: 0;
top: 12px;
width: 35px;
height: 9px;
position: absolute;
border-radius: 4px;
background: #212121;
transform: rotate(45deg); 
`
const SubClosePopupButtonTwo = styled.View
`
left: 0;
top: 12px;
width: 35px;
height: 9px;
position: absolute;
border-radius: 4px;
background: #212121;
transform: rotate(130deg); 
`
const PopupPokemonName = styled.Text
`
z-index: 2;
width: 100%;
color: #FDFDFD;
font-size: 36px;
font-weight: bold;
text-align: center;
text-transform: capitalize;
`
const ImageContainerFromPopupPokemon = styled.View
`
top: 10%;
width: 100%;
height: 316px;
margin: 20px auto;
position: absolute;
`
const ImageBackgroundFromPopup = styled.ImageBackground
`
width: 100%;
height: 100%;
margin: 0 auto;
max-width: 316px;
max-height: 316px;
`
const PokemonTypeOneSection = styled.View
`
top: 50%;
width: 74px;
height: 21px;
right: 102px;
position: absolute;
border-radius: 11px;
background: ${(props:IColorBackgound) => props.props.background}
`
const PokemonTypeTwoSection = styled.View
`
top: 50%;
width: 74px;
right: 12px;
height: 21px;
position: absolute;
border-radius: 11px;
background: ${(props:IColorBackgound) => props.props.background}
`
const PokemonTypeOneText = styled.Text
`
width: 100%;
text-align: center;
shadowColor: "#000";
  shadowOffset: {
  width: 0;
  height: 1;
  };
  shadowOpacity: 0.18;
  shadowRadius: 1.00;
  elevation: 1;
`
const PokemonTypeTwoText = styled.Text
`
width: 100%;
text-align: center;
shadowColor: "#000";
  shadowOffset: {
  width: 0;
  height: 1;
  };
shadowOpacity: 0.18;
shadowRadius: 1.00;
elevation: 1;
`
const PokemonAbilitiesSection = styled.View
`
width: 96%;
height: 100px;
margin: 0 auto;
margin-top: 76%;
border-radius: 8px;
background: #FDFDFD;
shadowColor: "#000";
  shadowOffset: {
  width: 0;
  height: 1;
  };
shadowOpacity: 0.18;
shadowRadius: 1.00;
elevation: 1;
`
const PokemonAbilitiesText = styled.Text
`
padding: 5px 20px;
`
const PokemonAbilitiesTextTitle = styled.Text
`
font-size: 31px;
padding: 17px 20px 0;
`
const PokemonMainPoints = styled.View
`
margin: 20px auto;
width: 96%;
height: 185px;
border-radius: 8px;
background: #FDFDFD;
`
const PokedexPage = () => {
  const dataLoad = async() => {
    const result:IData = await loadDataPokemon('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=9')
      const allPokemonPromise:IPokemon[] = await Promise.all(
        await result.results.map(
          async(pokemon:IStat) => {
            return await loadDataPokemon(pokemon.url)
        })
      ) 
    setDataPokemon(allPokemonPromise)
  }
  useEffect(() => {
    dataLoad()
  }, [])
  const [search, setSearch] = useState<ISearch>({search: ''})
  const [dataPokemon, setDataPokemon] = useState<IPokemon[]>(pokemonInitialValue)
  const [showing, showingState] = useState<number>(-1)
  const MainContent = () => {
    const searchPokemon = (text:string) => {
      setSearch( (prevState) => {
        return {...prevState, search: text}
      })
    }
    const pokemonCard = (pokemon:IPokemon, i:number) => {
      const PokemonTypeOne: keyof IColorPokemonObj = pokemon?.types[0]?.type?.name
      const PokemonTypeTwo: keyof IColorPokemonObj = pokemon?.types[1]?.type?.name
      const PokemonTypeColorOne = colorPokemonObj?.[PokemonTypeOne]
      const PokemonTypeColorTwo = colorPokemonObj?.[PokemonTypeTwo]
      return <SubPokemonDataContainer key={i}>
      <PokemonNamePokedex>{pokemon.name}</PokemonNamePokedex>

      <PokemonTypePokedex1 props={{background: PokemonTypeColorOne}}>
        <PokemonTypePokedexText>
            {pokemon?.types[0]?.type?.name}
        </PokemonTypePokedexText>
      </PokemonTypePokedex1>

      <PokemonTypePokedex2 props={{background: PokemonTypeColorTwo}}>
        <PokemonTypePokedexText>
            {pokemon?.types[1]?.type?.name}
        </PokemonTypePokedexText>
      </PokemonTypePokedex2>

    <AttackStatPokemon>
        <AttackStatPokemonText>
            {pokemon?.stats[1]?.base_stat && pokemon?.stats[1]?.base_stat}
          </AttackStatPokemonText>
    </AttackStatPokemon>

    <DefenseStatPokemon>
        <DefenseStatPokemonText>
          {pokemon?.stats[2]?.base_stat && pokemon?.stats[2]?.base_stat}
        </DefenseStatPokemonText>
    </DefenseStatPokemon>

      <TextAttack>
        Attack
      </TextAttack>
      <TextDefense>
        Defense
      </TextDefense>
      <PokemonDataImageContainer props={{background: PokemonTypeColorOne}}>
          <PokemonImagePokedex source={{uri: pokemon.sprites.other['official-artwork'].front_default}}/>
      </PokemonDataImageContainer>
    </SubPokemonDataContainer>
    } 
    const MainPokemonState = () =>{
    return  <PokemonDataContiner>
    {dataPokemon.map((pokemon:IPokemon, i:number) => {
        return  <TouchableHighlight onPress={() => {
                    showingState(i)
                }}>
                  {pokemonCard(pokemon, i)}
                </TouchableHighlight>
    })}
  <Footer prop={{height: '64px',width: '100%' , background: '#F5DB13'}}/>
  </PokemonDataContiner>
  }
  return  <>
          <MainContentFromPokedexTextContainer>
            <PokedexTextNormal>
              800 <PokedexTextBold>Pokemons {' '}</PokedexTextBold>
                  for you {'\n'} to choose your {'\n'} favorite
              </PokedexTextNormal>
            <TextInputPokedex placeholder="Encuentra tu pokémon..." onChangeText={searchPokemon}/>
                <FilterPokedexContainer>
                  <FilterPokedexText>Filter</FilterPokedexText>
                </FilterPokedexContainer>
            </MainContentFromPokedexTextContainer>
            <MainPokemonState/>
            {showing > -1 && Popup()}
            </>
  }
  const Popup = () => {
    const PokemonTypeOne: keyof IColorPokemonObj = dataPokemon[showing].types[0]?.type?.name
    const PokemonTypeTwo: keyof IColorPokemonObj = dataPokemon[showing].types[1]?.type?.name
    const ColorTypePokemonOne = colorPokemonObj?.[PokemonTypeOne]
    const ColorTypePokemonTwo = colorPokemonObj?.[PokemonTypeTwo]

    const PopupButton = () => {
      return <ClosePopupButton>
              <SubClosePopupButtonOne/>
              <SubClosePopupButtonTwo/>
            </ClosePopupButton>
    }
    return  <PopupPokemon props={{background: ColorTypePokemonOne}}>
              <TouchableHighlight onPress={() => {
                    showingState(-1)
                }}>
                  <PopupButton/>
              </TouchableHighlight>
              <PopupPokemonBackground></PopupPokemonBackground>
                <PopupPokemonName>{dataPokemon[showing].name}</PopupPokemonName>
                <ImageContainerFromPopupPokemon>
                  <ImageBackgroundFromPopup source={{uri: dataPokemon[showing].sprites.other['official-artwork'].front_default}}/>
                </ImageContainerFromPopupPokemon>

                <PokemonTypeOneSection props={{background: ColorTypePokemonOne}}>
                  <PokemonTypeOneText>
                    {dataPokemon[showing].types[0]?.type?.name
                    && dataPokemon[showing].types[0]?.type?.name}
                  </PokemonTypeOneText>
                </PokemonTypeOneSection>

                <PokemonTypeTwoSection props={{background: ColorTypePokemonTwo}}>
                  <PokemonTypeTwoText>
                    {dataPokemon[showing].types[1]?.type?.name
                    && dataPokemon[showing].types[1]?.type?.name}
                  </PokemonTypeTwoText>
                </PokemonTypeTwoSection>
                  <PokemonAbilitiesSection>
                        <PokemonAbilitiesTextTitle>
                          Abilities
                        </PokemonAbilitiesTextTitle>
                      <PokemonAbilitiesText>
                        {dataPokemon[showing]?.abilities[0]?.ability?.name 
                          && dataPokemon[showing]?.abilities[0]?.ability?.name}
                          {'-'}
                          {dataPokemon[showing]?.abilities[1]?.ability?.name 
                          && dataPokemon[showing]?.abilities[1]?.ability?.name}
                      </PokemonAbilitiesText>
                  </PokemonAbilitiesSection>
                  <PokemonMainPoints>

                  </PokemonMainPoints>
            </PopupPokemon>
  }
  return  <PokedexMainPageContainer>
            <NavigationBar/>{/*header*/}
              {showing === -1 
              &&  <ScrollView contentContainerStyle={{flexGrow : 1}}>
                    <MainContent/>
                  </ScrollView>}
              {showing > -1 && Popup()}
          </PokedexMainPageContainer>
}

export default PokedexPage;
