import React, { useState, useEffect } from 'react'
import {
  Image,
  View,
  ScrollView,
  ActivityIndicator
} from 'react-native'
import axios from 'axios'
import { classes } from './AppClasses'
import Header from './components/Header/Header.tsx'
import Formulario from './components/Formulario/Formulario.tsx'
import Cotizacion from './components/Cotizacion/Cotizacion.tsx'


const App = () => {
  const [moneda, setMoneda] = useState('')
  const [criptomoneda, setCriptomoneda] = useState('')
  const [consultarAPI, setConsultarAPI] = useState(false)
  const [resultado, setResultado] = useState({})
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const cotizarCriptomoneda = async () => {
      if (consultarAPI) {
        const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}`
        const resultado = await axios.get(url)

        setIsLoading(true)

        // Ocultar el spinner y mostrar el resultado tras 3 segundos
        setTimeout(() => {
          setResultado(resultado.data.DISPLAY[criptomoneda][moneda])
          setConsultarAPI(false)
          setIsLoading(false)
        }, 3000)
      }
    }

    cotizarCriptomoneda()
  }, [consultarAPI])

  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
    >
      <Header />

      <Image
        style={classes.imagen}
        source={require('./assets/img/cryptomonedas.png')}
      />

      <View style={classes.contenido}>
        <Formulario
          moneda={moneda}
          setMoneda={setMoneda}
          criptomoneda={criptomoneda}
          setCriptomoneda={setCriptomoneda}
          setConsultarAPI={setConsultarAPI}
        />
      </View>

      <View style={classes.cotizacionCont}>
        {isLoading ?
          <ActivityIndicator
            size='large'
            color='#5E49E2'
          />
          :
          (Object.keys(resultado).length !== 0) &&
          <Cotizacion
            resultado={resultado}
          />
        }
      </View>

    </ScrollView>
  )
}

export default App
