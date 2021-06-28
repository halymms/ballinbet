import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home } from "../pages/Home/Home";
import { Login } from "../pages/Login/Login";
import { Cadastro } from "../pages/Cadastro/Cadastro";
import { CriacaoTime } from "../pages/FantasyGame/CriacaoFantasyGame/CriacaoTime";

const AppTab = createBottomTabNavigator();

const AuthRoutes = () => {
  return(
    <AppTab.Navigator
      tabBarOptions={{
        activeTintColor: "#D51737",
        inactiveTintColor: "#FFFFFF",
        labelPosition: 'beside-icon',
        style: {
          backgroundColor: '#00448B',
          height: 58
        }
      }}
    >
      <AppTab.Screen 
        name="Home"
        component={Home}
      />

      <AppTab.Screen 
        name="Login"
        component={Login}
      />

      <AppTab.Screen 
        name="Cadastre-se"
        component={Cadastro}
      />

      <AppTab.Screen 
        name="Fantasy Game"
        component={CriacaoTime}
      />
    </AppTab.Navigator>
  )
}

export default AuthRoutes;