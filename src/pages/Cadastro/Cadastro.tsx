import React from "react";
import { SafeAreaView, View, Text, TextInput, TouchableOpacity } from "react-native";

import styles from "./styles";
import { MenuSuperiorLogin } from "../../components/MenuSuperior/MenuSuperiorLogin";

export function Cadastro() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
      <MenuSuperiorLogin/>
        <Text style={styles.titleCadastro}>Cadastro</Text>
        <View style={styles.inputDuploRow}>
          <TextInput placeholder="Nome" style={styles.inputDuplo}/>
          <TextInput placeholder="Sobrenome" style={styles.inputDuplo}/>
        </View>
        <TextInput placeholder="E-mail" style={styles.input}/>
        <TextInput placeholder="CPF" style={styles.input}/>
        <TextInput placeholder="Data de Nascimento" style={styles.input}/>
        <TextInput placeholder="Endereço" style={styles.input}/>
        <TextInput placeholder="Número" style={styles.input}/>
        <TouchableOpacity style={styles.botao}>
          <Text style={styles.textoBotao}>Entrar</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}