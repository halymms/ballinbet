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
  backContainer: {
    width: "100%",
    justifyContent: 'flex-start',
    alignItems: 'flex-start'
  },
  logo: {
    marginTop: '9.445%'
  },
  text1: {
    fontFamily: "Roboto_400Regular",
    fontSize: 20,
    textAlign: 'center',
    paddingTop: '5.445%',
    paddingLeft: '12%',
    paddingRight: '12%'
  },
  text2: {
    fontFamily: "Roboto_700Bold",
    fontSize: 18,
    textAlign: 'center',
    paddingTop: '2.999%',
    paddingLeft: '6%',
    paddingRight: '6%',
    color: '#D51737'
  },
  input: {
    width: '87.5%',
    height: 47,
    fontSize: 20,
    backgroundColor: '#fafafa',
    borderBottomWidth: 5,
    borderColor: 'rgba(213, 112, 67, 0.3)',
    marginTop: '10.496%',
    padding: 10,
    color: '#000'
  },
  botao: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#D51737',
    height: 86,
    width: '80%',
    marginTop: '3.999%',
    borderRadius: 15
  },
  textoBotao: {
    fontFamily: "Roboto_400Regular",
    fontSize: 28,
    textAlign: 'center'
  }
})