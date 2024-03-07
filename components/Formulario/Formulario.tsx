import React, { useState, useEffect } from 'react'
import {
  Text,
  View,
  Pressable,
  Alert
} from 'react-native'
import { classes } from './Formulario'
import { Picker } from '@react-native-picker/picker'
import axios from 'axios'

const Formulario = (props: any) => {
  const { moneda, setMoneda, criptomoneda, setCriptomoneda, setConsultarAPI } = props

  const [criptomonedas, setCriptomonedas] = useState<any>([])

  const cotizarPrecio = () => {
    if (moneda.trim() === '' || criptomoneda.trim() === '') {
      mostrarAlerta()
      return
    }

    setConsultarAPI(true)
  }

  const mostrarAlerta = () => {
    Alert.alert(
      'Error',
      'Ambos campos son obligatorios',
      [
        { text: 'OK' }
      ]
    )
  }

  useEffect(() => {
    const consultarAPI = async () => {
      const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD'
      const resultado = await axios.get(url)
      setCriptomonedas(resultado.data.Data)
    }

    consultarAPI()
  }, [])

  return (
    <View>
      <Text style={classes.label}>Moneda</Text>

      <Picker
        selectedValue={moneda}
        onValueChange={(item: string) => setMoneda(item)}
        itemStyle={{ height: 120 }}
      >
        <Picker.Item label='-- Seleccione --' value='' />
        <Picker.Item label='Dólar de Estados Unidos' value='USD' />
        <Picker.Item label='Peso Mexicano' value='MXN' />
        <Picker.Item label='Euro' value='EUR' />
        <Picker.Item label='Libra Esterlina' value='GBP' />
      </Picker>

      <Text style={classes.label}>Criptomoneda</Text>

      <Picker
        selectedValue={criptomoneda}
        onValueChange={(item: string) => setCriptomoneda(item)}
        itemStyle={{ height: 120 }}
      >
        <Picker.Item label='-- Seleccione --' value='' />
        {criptomonedas.map((cripto: any) => (
          <Picker.Item key={cripto.CoinInfo.Id} label={cripto.CoinInfo.FullName} value={cripto.CoinInfo.Name} />
        ))}
      </Picker>

      <Pressable
        style={classes.btnCotizar}
        onPress={() => cotizarPrecio()}
      >
        <Text style={classes.textoCotizar}>Cotizar</Text>
      </Pressable>
    </View>
  )
}

export default Formulario
