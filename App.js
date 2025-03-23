import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './src/screens/Home';
import Anamnese from './src/screens/AnamneseCrianca';
import AdolescenteIdentificacao from './src/screens/AdolescenteIdentificacaoScreen';
import AdolescenteSintomas from './src/screens/AdolescenteSintomasScreen';
import AdolescenteHistoricoScreen from './src/screens/AdolescenteHistoricoScreen';
import Profissionais from './src/screens/ProfissionaisResponsaveisScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Anamnese - Criança" component={Anamnese} />
        <Stack.Screen name="Identificação - Adolescente" component={AdolescenteIdentificacao} />
        <Stack.Screen name='Sintomas - Adolescente' component={AdolescenteSintomas}/>
        <Stack.Screen name='Histórico - Adolescente' component={AdolescenteHistoricoScreen}/>
        <Stack.Screen name='Profissionais responsáveis' component={Profissionais}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}