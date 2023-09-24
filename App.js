import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text } from 'react-native';

import StatusInversion from './apps/screens/status.js';
import PrimerPregunta from './apps/screens/primerPregunta.js';
import SegundaPregunta from './apps/screens/segundaPregunta.js';
import TerceraPregunta from './apps/screens/terceraPregunta.js';
import InversionResultsL from './apps/screens/inversionResultsL.js';
import InversionResultsM from './apps/screens/inversionResultsM.js';
import InversionResultsS from './apps/screens/inversionResultsS.js';
import ChatBot from './apps/screens/chatbot.js';


const Stack = createStackNavigator();

export default function App() {
  return (
    //<ChatBot />

    <NavigationContainer>
      <Stack.Navigator initialRouteName="Loading...">
        <Stack.Screen name="Perfil de Inversión" component={StatusInversion} />

        <Stack.Screen name="PrimerPregunta" component={PrimerPregunta} />
        <Stack.Screen name="SegundaPregunta" component={SegundaPregunta} />
        <Stack.Screen name="TerceraPregunta" component={TerceraPregunta} />

        <Stack.Screen name="InversionResultsS" component={InversionResultsS} />
        <Stack.Screen name="InversionResultsM" component={InversionResultsM} />
        <Stack.Screen name="InversionResultsL" component={InversionResultsL} />
      </Stack.Navigator>
    </NavigationContainer>

  );
}
