import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import { ScreenLogin } from '../screens/TelaInicial';
import { LoginAluno } from '../screens/LoginAluno'; // Certifique-se de usar o nome de arquivo correto e caminho
import { LoginResponsavel } from '../screens/LoginResponsavel';
import { LoginAdministrador } from '../screens/LoginAdministrador';
import { HomeAluno } from '../screens/HomeAluno';
import { RelatorioAluno } from '../screens/RelatorioAluno';
import { Notifica } from '../screens/Notifica';
import { DadosAluno } from '../screens/DadosAluno';
import { HomeResponsavel} from '../screens/HomeResponsavel';
import { HomeAdministrador} from '../screens/HomeAdministrador';
import { DadosResponsavel} from '../screens/DadosResponsavel';
import { ChatAluno} from '../screens/ChatAluno';
import { ChatResponsavel} from '../screens/ChatResponsavel';
import { PresenteProfessor} from '../screens/PresenteProfessor';
import { ScreenEscolha } from '../screens/ScreenEscolha';
import { CadastraEntrada } from '../screens/CadastraEntrada';
import { RegistraAluno } from '../screens/RegistraAluno';
import { CadastraSaida } from '../screens/CadastraSaida';


const Stack = createNativeStackNavigator();

export function StackRoutes() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="ScreenLogin"
                component={ScreenLogin}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="LoginAluno"
                component={LoginAluno}
                options={{ headerShown: false }}
            />
             <Stack.Screen
                name="LoginResponsavel"
                component={LoginResponsavel}
                options={{ headerShown: false }}
            />
             <Stack.Screen
                name="LoginAdministrador"
                component={LoginAdministrador}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="HomeAluno"
                component={HomeAluno}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="RelatorioAluno"
                component={RelatorioAluno}
                options={{ headerShown: true, title: false }}
            />
            <Stack.Screen
                name="Notifica"
                component={Notifica}
                options={{ headerShown: true, title: false }}
            />
            <Stack.Screen
                name="DadosAluno"
                component={DadosAluno}
                options={{ headerShown: true, title: false }}
            />
            <Stack.Screen
                name="HomeResponsavel"
                component={HomeResponsavel}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="HomeAdministrador"
                component={HomeAdministrador}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="DadosResponsavel"
                component={DadosResponsavel}
                options={{ headerShown: true, title: false }}
            />
            <Stack.Screen
                name="ChatAluno"
                component={ChatAluno}
                options={{ headerShown: true, title: false}}
            />
            <Stack.Screen
                name="ChatResponsavel"
                component={ChatResponsavel}
                options={{ headerShown: true, title: false }}
            />
            <Stack.Screen
                name="PresenteProfessor"
                component={PresenteProfessor}
                options={{ headerShown: true, title: false }}
            />
            <Stack.Screen
                name="ScreenEscolha"
                component={ScreenEscolha}
                options={{ headerShown: true, title: false }}
            />
            <Stack.Screen
                name="CadastraEntrada"
                component={CadastraEntrada}
                options={{ headerShown: true, title: false }}
            />
            <Stack.Screen
                name="RegistraAluno"
                component={RegistraAluno}
                options={{ headerShown: true, title: false }}
            />
            <Stack.Screen
                name="CadastraSaida"
                component={CadastraSaida}
                options={{ headerShown: true, title: false }}
            />
        </Stack.Navigator>
    );
}
