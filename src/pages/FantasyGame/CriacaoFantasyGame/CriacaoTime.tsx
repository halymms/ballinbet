import React from "react";
import { SafeAreaView, View, Text, TextInput, TouchableOpacity, StatusBar } from "react-native";
import { HeaderBackButton } from "@react-navigation/stack";
import styles from './styles'

import Logo from '../../../assets/svg/logo.svg';
import BallLogo from '../../../assets/svg/ball-black.svg'
import { useNavigation } from "@react-navigation/native";

export function CriacaoTime() {
  const navigation = useNavigation();

  function handleSubmit() {
    navigation.navigate('CriarBrasao')
  } 

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar 
        barStyle="light-content"
        backgroundColor="#00448B"
      />
      <View style={styles.content}>
        <View style={styles.backContainer}>
          <HeaderBackButton/>
        </View>
        <Logo style={styles.logo}/>
        <Text style= {styles.text1}>
          Chegou a hora de você criar seu time e dunkar no {"\n"}Fantasy Game!
        </Text>
        <Text style={styles.text2}>
          Para começar vamos montar seu time!
        </Text>
        <TextInput style={styles.input} placeholder="Digite sua senha"/>
        <TouchableOpacity style={styles.botao} onPress={handleSubmit}>
          <BallLogo />
          <Text style={styles.textoBotao}>Começar</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}