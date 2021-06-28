import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import AuthRoutes from "./tab.routes";
import { Home } from "../pages/Home/Home";
import { Login } from "../pages/Login/Login";
import { Cadastro } from "../pages/Cadastro/Cadastro";
import { CriacaoTime } from "../pages/FantasyGame/CriacaoFantasyGame/CriacaoTime";
import { CriarBrasao } from "../pages/FantasyGame/CriarBrasao/CriarBrasao";
import { ConfirmarTime } from "../pages/FantasyGame/ConfirmarTime/ConfirmarTime";
import { Escalacao } from "../pages/FantasyGame/Escalacao/Escalacao";

const stackRoutes = createStackNavigator();

const AppRoutes: React.FC = () => (
  <stackRoutes.Navigator
    headerMode="none"
    screenOptions={{
      cardStyle: {
        backgroundColor: '#FFFFFF'
      },
    }}
  >
    <stackRoutes.Screen 
      name="Tab"
      component={AuthRoutes}
    />

    <stackRoutes.Screen 
      name="Home"
      component={Home}
    />

    <stackRoutes.Screen 
      name="EscolhaNome"
      component={CriacaoTime}
    />

    <stackRoutes.Screen 
      name="CriarBrasao"
      component={CriarBrasao}
    />

    <stackRoutes.Screen 
      name="ConfirmarTime"
      component={ConfirmarTime}
    />

    <stackRoutes.Screen 
      name="Escalacao"
      component={Escalacao}
    />

    <stackRoutes.Screen 
      name="Login"
      component={Login}
    />

    <stackRoutes.Screen 
      name="Cadastro"
      component={Cadastro}
    />
  </stackRoutes.Navigator>
)

export default AppRoutes;