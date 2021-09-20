/* eslint-disable */

import { useLinkTo } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { TouchableHighlight , Animated} from 'react-native';
import styled from 'styled-components/native';
import { INavigationBar } from './interface/interface';

//top navBar
const NavigationBarSection = styled.View
`
min-height: 64px;
position: relative;
background: #F5DB13;
align-items: flex-end;
flex-direction: column;
justify-content: center;
`
const NavigationBarImage = styled.ImageBackground
`
left: 26px;
width: 58.5px;
height: 22px;
position: absolute;
`
const SwitchNavigation = styled.View
`
width: 30px;
height: 30px;
margin: 0 28px;
`
const SubSwitchNavigation = styled.View
`
width: 30px;
height: 5px;
background: black;
border-radius: 5px;
margin: 2px 0 2px 2px;
`
//subNavBarSection
const DropNavBarSection = styled.View
`
top: 0;
left: 0;
z-index: 20;
position: absolute;
background: #F5DB13;
border-bottom-leftRadius: 20;
border-bottom-RightRadius: 20;
`
const NavigationLink = styled.Text
`
min-width: 100%;
font-size: 27px;
text-align: center;
font-family: Karla;
margin-bottom: 16px;
text-shadow: 4px 4px 20px rgba(1, 28, 64, 0.2);
`
const DropNavBarBackground = styled.Text
`
left: 0;
top: 64px;
z-index: 19;
width: 100%;
height: 100%;
position: absolute;
background: rgba(0,0,0,0.2);
`
const ImageDropNavigation = styled.ImageBackground
`
width: 138px;
height: 51px;
margin: 26px auto;
`
const LableSwitchTheme = styled.View
`
width: 80px;
height: 44px;
margin-left: 25%;
border-radius: 22px;
margin-bottom: 38px;
background: rgba(0, 0, 0, 0.1);
`
const SubLableSwitchTheme = styled.View
`
margin: 2px;
width: 40px;
height: 40px;
background: #FFFbbb;
border-radius: 22px;
`
const LableSwitchThemeImage = styled.ImageBackground
`
width: 20px;
height: 20px;
margin: 10px;
`
const valueAnimation = useState(new Animated.ValueXY({x: 0, y:0}))[0]
const valueAnimationTopBar = useState(new Animated.ValueXY({x: 0, y:0}))[0]
function moveAnimationTopBarOff (){
    Animated.timing(valueAnimationTopBar , {
        toValue: {x: 0, y: -64},
        duration: 300,
        useNativeDriver: false,
    }).start()
}
function moveAnimationTopBarOn (){
    Animated.timing(valueAnimationTopBar , {
        toValue: {x: 0, y: 0},
        duration: 300,
        useNativeDriver: false,
    }).start()
}
function moveSwitchOff (){
    Animated.timing(valueAnimation , {
        toValue: {x: 36, y: 0},
        duration: 500,
        useNativeDriver: false,
    }).start()
}
function moveSwitchOn (){
    Animated.timing(valueAnimation , {
        toValue: {x: 0, y: 0},
        duration: 500,
        useNativeDriver: false,
    }).start()
}
const DropNavBar = (props:INavigationBar) => {
    const linkTo = useLinkTo()
    const [lableState, setLableState] = useState<boolean>(true)  
    return (<>
        <DropNavBarSection>
                <TouchableHighlight onPress={() => {
                    linkTo('/HomePage')
                    moveAnimationTopBarOn()
                }}>
                    <ImageDropNavigation source={require('./img/Logo.png')}/>
                </TouchableHighlight>
                <NavigationLink 
                    onPress={() => {
                        linkTo('/HomePage')
                        moveAnimationTopBarOn()
                    }}
                    >Home</NavigationLink>
                <NavigationLink 
                    onPress={() => {
                        linkTo('/PokedexPage')
                        moveAnimationTopBarOn()
                    }}
                    >Pokedex</NavigationLink>
                <NavigationLink 
                    onPress={() => {
                        linkTo('/LegendariesPage')
                        moveAnimationTopBarOn()
                    }}
                    >Legendarios</NavigationLink> 
                <NavigationLink 
                    onPress={() => {
                        linkTo('/ComparePage')
                        moveAnimationTopBarOn()
                    }}
                    >Compare</NavigationLink>
                
                        <LableSwitchTheme>

                            <TouchableHighlight onPress={() => {
                                setLableState(!lableState)
                                lableState 
                                ? moveSwitchOff()
                                : moveSwitchOn() 
                                }}>

                                <Animated.View style={valueAnimation.getLayout()}>
                                    <SubLableSwitchTheme>
                                        {lableState 
                                        ? <LableSwitchThemeImage source={
                                            require('./img/dark.png') 
                                        }/>
                                        :
                                        <LableSwitchThemeImage source={
                                            require('./img/sun.png')
                                        }/>}
                                    </SubLableSwitchTheme>
                                </Animated.View>
                            </TouchableHighlight>
                        </LableSwitchTheme> 
            </DropNavBarSection>
           <DropNavBarBackground onPress={() => {
               props.props.setStateSwitch(!props.props.switchState)
               moveAnimationTopBarOn()
           }}/> 
        </>)
}
const SwitchNavBar = () => {
    return  <SwitchNavigation>
                <SubSwitchNavigation/>
                <SubSwitchNavigation/>
                <SubSwitchNavigation/>
            </SwitchNavigation>
}
const NavigationBar = () => {
  const [switchState, setStateSwitch] = useState<boolean>(false)
  useEffect(() => {}, [switchState])
  return (<>
  <Animated.View style={valueAnimationTopBar.getLayout()}>
    <NavigationBarSection>
        <NavigationBarImage source={require('./img/Logo.png')}/>
        <TouchableHighlight onPress={() => {
            setStateSwitch(!switchState)
            moveAnimationTopBarOff()
        }}>
            <SwitchNavBar/>
        </TouchableHighlight>
    </NavigationBarSection>
  </Animated.View>
        {switchState && <DropNavBar props={{switchState, setStateSwitch}}/>}
    </>);
};

export default NavigationBar;
