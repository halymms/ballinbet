import React from "react";

import { View, SafeAreaView, Image, TouchableOpacity, Text } from "react-native";

import { MenuSuperior } from "../../components/MenuSuperior/MenuSuperior";
import styles from "./styles";


export function Home() {
  return(
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <MenuSuperior/>
        <Image source={require('../../assets/home/live.png')} style={styles.live}/>
        <TouchableOpacity style={styles.cards}>
          <Image source={require('../../assets/home/news-1.png')} style={styles.imgCard}/>
          <Text style={styles.txtCard}>Após eliminar Blazers, Nuggets se prepara para o confronto contra o Suns</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}