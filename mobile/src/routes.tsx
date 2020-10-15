import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const {Navigator, Screen} = createStackNavigator();

import OrphanagesMap from '../src/pages/OrphanagesMap';
import OrphanagesDetails from '../src/pages/OrphanageDetails';

export default function Routes(){
  return(
    <NavigationContainer>
      <Navigator screenOptions={{ headerShown: false}}>{/*false para ocultar o header*/}
        <Screen 
          name="OrphanagesMap" 
          component={OrphanagesMap}
          options={{ headerShown: true}}
        />
        <Screen name="OrphanagesDetails" component={OrphanagesDetails}/>
      </Navigator>
    </NavigationContainer>
  );
}
