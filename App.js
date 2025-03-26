import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './src/screens/Home';
import AdolescenteIdentificacao from './src/screens/anamnese/adolescentes/AdolescenteIdentificacaoScreen';
import AdolescenteSintomas from './src/screens/anamnese/adolescentes/AdolescenteSintomasScreen';
import AdolescenteHistoricoScreen from './src/screens/anamnese/adolescentes/AdolescenteHistoricoScreen';
import Profissionais from './src/screens/anamnese/ProfissionaisResponsaveisScreen';
import LoginScreen from './src/screens/LoginScreen';
import CriancaIdentificacaoScreen from './src/screens/anamnese/criancas/CriancaIdentificacaoScreen';
import CriancaSintomasScreen from './src/screens/anamnese/criancas/CriancaSintomasScreen';
import CriancaHistoricoScreen from './src/screens/anamnese/criancas/CriancasHistoricoScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Identificação - Adolescente" component={AdolescenteIdentificacao} />
        <Stack.Screen name='Sintomas - Adolescente' component={AdolescenteSintomas}/>
        <Stack.Screen name='Histórico - Adolescente' component={AdolescenteHistoricoScreen}/>
        <Stack.Screen name='Identificação - Crianças' component={CriancaIdentificacaoScreen} />
        <Stack.Screen name='Sintomas - Crianças' component={CriancaSintomasScreen}/>
        <Stack.Screen name='Histórico - Crianças' component={CriancaHistoricoScreen}/>
        <Stack.Screen name='Profissionais responsáveis' component={Profissionais}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}