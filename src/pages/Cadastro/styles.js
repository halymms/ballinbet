import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  content: {
    flex: 1,
    width: '100%',
    alignItems: 'center'
  },
  titleCadastro: {
    fontSize: 28,
    fontFamily: 'Ruda_400Regular',
    textAlign: 'left',
    width: '100%',
    paddingLeft: '5.333%',
    paddingTop: '3.898%',
    paddingBottom: '3.148%'
  },
  inputDuploRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  inputDuplo: {
    width: '45%',
    height: 47,
    fontSize: 20,
    backgroundColor: '#fafafa',
    borderBottomWidth: 5,
    borderColor: 'rgba(0, 68, 139, 0.3)',
    marginRight: 4,
    marginTop: 11,
    padding: 10,
    color: '#000'
  },
  input: {
    width: '90.4%',
    height: 47,
    fontSize: 20,
    backgroundColor: '#fafafa',
    borderBottomWidth: 5,
    borderColor: 'rgba(0, 68, 139, 0.3)',
    marginTop: 11,
    padding: 10,
    color: '#000'
  },
  botao: {
    width: '75.2%',
    height: 51,
    backgroundColor: '#D51737',
    marginTop: 34,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textoBotao: {
    fontFamily: 'Ruda_500Medium',
    fontSize: 20,
    color: '#fff'
  }
})