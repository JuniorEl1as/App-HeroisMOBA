import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../pages/Home';
import DescricaoHeroi from '../pages/Descricao-Herois';
import { Heroi } from '../context';

export type ParametroRota = {
  Home: undefined,
  DescricaoHeroi: HeroiObjt
};

interface HeroiObjt {
  nome: string,
  imagem: string,
  id: string,
  tag: string, 
  todos: string,
  bio: string,
  skills: string,
}

export default function Router() {

  const Stack = createStackNavigator<ParametroRota>();

  return (
    <NavigationContainer>
      <Stack.Navigator >
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
        <Stack.Screen name="DescricaoHeroi" component={DescricaoHeroi} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

