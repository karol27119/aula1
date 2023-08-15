import React, { useState, useEffect } from 'react';
import { useCallback } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import {Picker} from '@react-native-picker/picker;';
import styles from './globalStyles';
import { AntDesign } from '@expo/vector-icons';

export default function App() {
  const [moedaOrigem, setMoedaOrigem] = useState('BRL')
  const [moedaDestino, setMoedaDestino] = useState('USD')
  const [valorConvertido, setValorConvertido] = useState('')

  const buscarHandle = () => {
    let URL = 'https://economia.awesomeapi.com.br/last/USD-BRL'
    setValorConvertido(URL)
  }
  const limparResultado = () => {
    setValorConvertido('')
  }
  return (
    <View style={styles.container}>
      <Text>Karol</Text>
      <StatusBar style="auto" />
      <View style={styles.content}>
          <Text>Conversor de moedas</Text>
        <View>
          <Text>Moeda 1</Text>
        <View style={styles.viewInpu}>
        <Picker
          selectValue={moedaOrigem}
          onValueChange={(itemValue,itemIndex) => setMoedaOrigem(itemValue)}
      >
      <Picker.Item label="Real Brasileiro" value="BRL"/>
      <Picker.Item label=" Dolar Americano" value="USD" />
      <Picker.Item label="Ouro" value="XAU" />
      <Picker.Item label="Bitcoin" value="BTC" />
    </Picker>
    </View>
    </View>
    <View>
    <Text>Moeda 2</Text>
    <View style={styles.viewInpu}>
    <Picker
      selectedValue={moedaDestino}
      onValueChange={(itemValue, itemIndex) => setMoedaDestino(itemValue)}
      >
      <Picker.Item label="Real Brasileiro" value="BRL" />
      <Picker.Item label="Dolar Americano" value="USD" />
      <Picker.Item label="Ouro" value="XAU"/>
      <Picker.Item label="Bitcoin" value="BTC" />
      </Picker>
    </View>
    </View>
    <Pressable style={styles.botao}><Text>Buscar Valor</Text></Pressable>
    <Text>("Resultado" $(valorConvertido))</Text>
    <StatusBar styles="auto" />
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
