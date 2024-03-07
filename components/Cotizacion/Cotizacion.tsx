import React from 'react'
import {
  View,
  Text
} from 'react-native'
import { classes } from './Cotizacion'

const Cotizacion = (props: any) => {
  const { resultado } = props

  return (
    <View style={classes.resultado}>
      <Text style={[classes.texto, classes.precio]}>
        <Text style={classes.span}>{resultado.PRICE}</Text>
      </Text>

      <Text style={classes.texto}>Precio más alto del día: {' '}
        <Text style={classes.span}>{resultado.HIGHDAY}</Text>
      </Text>

      <Text style={classes.texto}>Precio más bajo del día: {' '}
        <Text style={classes.span}>{resultado.LOWDAY}</Text>
      </Text>

      <Text style={classes.texto}>Variación últimas 24 horas: {' '}
        <Text style={classes.span}>{resultado.CHANGEPCT24HOUR} %</Text>
      </Text>

      <Text style={classes.texto}>Última Actualización: {' '}
        <Text style={classes.span}>{resultado.LASTUPDATE}</Text>
      </Text>
    </View>
  )
}

export default Cotizacion
