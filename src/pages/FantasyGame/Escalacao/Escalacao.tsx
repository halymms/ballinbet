import React from "react";
import { SafeAreaView, View, TouchableOpacity, Text } from "react-native";

import Quadra from '../../../assets/svg/quadraEscalacao.svg'
import Banco from '../../../assets/svg/banco.svg'
import { MenuSuperiorFG } from "../../../components/MenuSuperior/MenuSuperiorFG";

import styles from "./styles"; 

export function Escalacao () {

  return(
    <SafeAreaView style={styles.container}>
      <MenuSuperiorFG/>
      <View style={styles.container}>
        <View style={styles.escalacaoContainer}>
          <TouchableOpacity>
            <Quadra/>
          </TouchableOpacity>
          <View style={styles.informacoesPatrimonio}>
            <View style={styles.totalPatrimonio}>
              <Text style={styles.titleTotal}>Patrimônio{"\n"} Total:</Text>
              <Text style={styles.total}>B$100</Text>
            </View>
            <View style={styles.precoTime}>
              <Text style={styles.titlePreco}>Preço do{"\n"} Time:</Text>
              <Text style={styles.valorTime}>B$89</Text>
            </View>
          </View>
        </View>
        <Banco/>
      </View>
    </SafeAreaView>
  )
}