import React from "react";

import { View, StatusBar, Image, Text } from "react-native";

import styles from './styles';

export function MenuSuperior() {
  return(
    <View style={styles.container}> 
      <StatusBar 
        barStyle="light-content"
        backgroundColor="#00448B"
      />
      <View style={styles.contentContainer}>
        <View style={styles.contentMenu}>
          <Image 
            source={require('../../assets/logo-menu-superior.png')}
            style={styles.logoMenuSuperior} 
          />
          <Text style={styles.saldoMenuSuperior}>Saldo: R$500,00</Text>
        </View>
        <Image 
          source={require('../../assets/barra-menu-superior.png')}
          style={styles.backgroundImage}
        />
      </View>
    </View>
  )
}