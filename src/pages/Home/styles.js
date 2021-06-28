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
    width: '100%',
    alignItems: 'center'
  },
  live: {
    width: '92%',
    height: 230,
    marginTop: 16,
    borderRadius: 15,
    marginBottom: 31
  },
  cards: {
    width: '92%',
    height: 304,
    alignItems: 'center',
    justifyContent: 'flex-start',
    borderRadius: 21,
    backgroundColor: '#F0EDED'
  },
  imgCard: {
    borderRadius: 21,
    width: '100%',
    marginBottom: 13
  },
  txtCard: {
    textAlign: 'center',
    fontFamily: 'Roboto_700Bold',
    fontSize: 18,
    color: '#00448B'
  }
})