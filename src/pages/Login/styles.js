import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  content: {
    flex: 1,
    width: '100%'
  },
  form: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  logoLogin: {
    width: 70
  },
  textLogin: {
    fontFamily: 'Roboto_700Bold',
    fontSize: 28,
    marginTop: 5,
    textAlign: 'center',
    color: '#00448B'
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
  esqueciSenha: {
    marginTop: 10,
    width: '100%',
    textAlign: 'right',
    paddingRight: 20,
    fontSize: 15,
    fontFamily: 'Roboto_700Bold',
    color: '#00448B'
  },
  botao: {
    width: '90.4%',
    height: 51,
    backgroundColor: '#D51737',
    marginTop: 34,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center'
  },
  botao2: {
    width: '90.4%',
    height: 51,
    backgroundColor: '#D51737',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textoBotao: {
    fontFamily: 'Ruda_500Medium',
    fontSize: 20,
    color: '#fff'
  },
  ou: {
    paddingTop: 10,
    paddingBottom: 10,
    fontSize: 20,
    fontFamily: 'Roboto_500Medium',
    color: '#000'
  },
  midiasSociais: {
    flexDirection: 'row',
    width: '90.4%',
    justifyContent: 'space-between',
    marginTop: 13
  },
  facebook: {
    flexDirection: 'row',
    width: '45.5%',
    height: 51,
    backgroundColor: '#3B5998',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15
  },
  facebookImg: {
    width: 15,
    marginRight: 12
  },
  google: {
    flexDirection: 'row',
    width: '45.5%',
    height: 51,
    backgroundColor: '#CD181D',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15
  },
  googleImg: {
    width: 24,
    marginRight: 12
  }
})