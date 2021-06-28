import React from "react";
import { View, StatusBar, Image, Text } from "react-native";

import LogoBAPP from '../../assets/svg/logoFGHeader.svg'

import styles from './styles';

export function MenuSuperiorFG() {
  return(
    <View style={styles.containerFG}> 
      <StatusBar 
        barStyle="light-content"
        backgroundColor="#00448B"
      />
      <View style={styles.contentContainer}>
        <View style={styles.contentMenu}>
          <View>
            <LogoBAPP />
            <Text style={styles.nomeEquipeFG}>Time: SUNS DA MASSA</Text>
          </View>
          <View>
            <Text style={styles.titleSaldoFG}>Patrimônio {"\n"}
            Disponível</Text>
            <Text style={styles.saldoMenuSuperiorFG}>B$11</Text>
          </View>
        </View>
        <Image 
          source={require('../../assets/barra-menu-superior.png')}
          style={styles.backgroundImage}
        />
      </View>
    </View>
  )
}