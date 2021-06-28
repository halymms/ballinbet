import React from "react";

import { View, StatusBar, Image } from "react-native";

import styles from './styles';

export function MenuSuperiorLogin() {
  return(
    <View style={styles.container}> 
      <StatusBar 
        barStyle="light-content"
        backgroundColor="#00448B"
      />
      <View style={styles.contentContainer}>
        <View style={styles.contentMenuLogin}>
          <Image 
            source={require('../../assets/logo-2.png')}
          />
        </View>
        <Image 
          source={require('../../assets/barra-menu-superior.png')}
          style={styles.backgroundImage}
        />
      </View>
    </View>
  )
}