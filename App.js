import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import IdentificacaoScreen from './src/screens/anamnese/IdentificacaoScreen';
import SintomasScreen from './src/screens/anamnese/SintomasScreen';
import AdolescenteHistoricoScreen from './src/screens/anamnese/adolescentes/AdolescenteHistoricoScreen';
import Profissionais from './src/screens/anamnese/ProfissionaisResponsaveisScreen';
import LoginScreen from './src/screens/LoginScreen';
import CriancaHistoricoScreen from './src/screens/anamnese/criancas/CriancasHistoricoScreen';
import SetorScreen from './src/screens/SetorScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name='Setores' component={SetorScreen}/>
        <Stack.Screen name="Identificação" component={IdentificacaoScreen} />
        <Stack.Screen name='Sintomas' component={SintomasScreen}/>
        <Stack.Screen name='Histórico - Adolescente' component={AdolescenteHistoricoScreen}/>
        <Stack.Screen name='Histórico - Crianças' component={CriancaHistoricoScreen}/>
        <Stack.Screen name='Profissionais responsáveis' component={Profissionais}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}