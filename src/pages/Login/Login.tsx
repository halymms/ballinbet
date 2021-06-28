import React from "react";
import { SafeAreaView, View, Image, Text, TextInput, Linking, TouchableOpacity} from "react-native";

import { MenuSuperiorLogin } from "../../components/MenuSuperior/MenuSuperiorLogin";
import styles from "./styles";

export function Login() {
  return(
    <SafeAreaView style={styles.container}>
    <View style={styles.content}>
      <MenuSuperiorLogin/>
      <View style={styles.form}>
        <Image style={styles.logoLogin} source={require('../../assets/login-logo.png')}/>
        <Text style={styles.textLogin}>Por favor, faça seu login para iniciar!</Text>
        <TextInput style={styles.input} placeholder="Digite seu e-mail"/>
        <TextInput style={styles.input} placeholder="Digite sua senha"/>
        <Text style={styles.esqueciSenha} onPress={() => Linking.openURL('#')}>
          Esqueci minha senha
        </Text>
        <TouchableOpacity style={styles.botao}>
          <Text style={styles.textoBotao}>Entrar</Text>
        </TouchableOpacity>
        <Text style={styles.ou}>OU</Text>
        <TouchableOpacity style={styles.botao2}>
          <Text style={styles.textoBotao}>Cadastre-se agora</Text>
        </TouchableOpacity>
        <View style={styles.midiasSociais}>
        <TouchableOpacity style={styles.facebook}>
          <Image source={require('../../assets/facebook.png')} style={styles.facebookImg}/>
          <Text style={styles.textoBotao}>Facebook</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.google}>
          <Image source={require('../../assets/google.png')} style={styles.googleImg}/>
          <Text style={styles.textoBotao}>Google</Text>
        </TouchableOpacity>
        </View>
      </View>
    </View>
  </SafeAreaView>
  )
}