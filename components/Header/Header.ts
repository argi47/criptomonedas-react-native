import { StyleSheet, Platform } from 'react-native'

export const classes = StyleSheet.create({
  encabezado: {
    paddingTop: Platform.OS === 'ios' ? 50 : 10,
    fontFamily: 'Lato-Black',
    backgroundColor: '#5E49E2',
    paddingBottom: 10,
    textAlign: 'center',
    textTransform: 'uppercase',
    fontSize: 20,
    color: '#FFF',
    marginBottom: 30,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  }
})