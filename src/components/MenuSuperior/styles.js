import { Roboto_100Thin_Italic } from '@expo-google-fonts/roboto';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    width: '100%',
    height: 64,
    backgroundColor: '#00448B'
  },
  containerFG: {
    width: '100%',
    height: 87,
    backgroundColor: '#00448B'
  },
  contentContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between"
  },
  contentMenu: {
    flexDirection: "row",
    justifyContent: 'space-around',
    alignItems: 'flex-end',
    alignContent: "flex-end"
  },
  contentMenuLogin: {
    flexDirection: "row",
    justifyContent: 'center',
    alignItems: 'center'
  },
  logoMenuSuperior: {
    width: 155,
    alignItems: 'center',
    justifyContent: 'center'
  },
  titleSaldoFG: {
    fontSize: 14,
    color: '#fff',
    fontFamily: 'Roboto_400Regular',
    textAlign: 'right'
  },
  saldoMenuSuperior: {
    fontSize: 22,
    fontFamily: 'Ruda_400Regular',
    color: "#fff"
  },
  saldoMenuSuperiorFG: {
    fontSize: 22,
    fontFamily: 'Ruda_400Regular',
    color: "#fff",
    textAlign: 'right'
  },
  nomeEquipeFG: {
    fontSize: 18,
    color: '#fff',
    fontFamily: 'Roboto_400Regular'
  },
  backgroundImage: {
    height: 8,
    alignItems: 'flex-end',
    width: '100%'
  }
})