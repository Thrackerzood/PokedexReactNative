/* eslint-disable */
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomePage from './homePagePokemon';
import LegendariesPage from './legendariesPage';
import PokedexPage from './pokedexPagePokemon';
import ComparePage from './comparePagePokemon';

const Tab = createNativeStackNavigator();

export const Navigation = () => {
  return (
        <Tab.Navigator 
            screenOptions={{
                headerShown: false
            }}
            initialRouteName= 'PokedexPage'
        >
            <Tab.Screen
                name="HomePage"
                component={HomePage}
            ></Tab.Screen>
            <Tab.Screen
                name="PokedexPage"
                component={PokedexPage}
            ></Tab.Screen>
            <Tab.Screen
                name="LegendariesPage"
                component={LegendariesPage}
            ></Tab.Screen>
            <Tab.Screen
                name="ComparePage"
                component={ComparePage}
            ></Tab.Screen>
        </Tab.Navigator>
    );
};