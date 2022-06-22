import * as React from 'react';
import { View, StyleSheet} from 'react-native';
import Constants from 'expo-constants';

// or any pure javascript modules available in npm
import { Text, TextInput, Button } from 'react-native-paper';

export default class App extends React.Component {
  state = {
    peso: 0,
    altura: 0,
    imc: 0,
    legenda: 'Indeterminado',
    cor: '#BBDEFB'
  };
  
  calcularIMC = () => {
    const resultado = this.state.peso / (this.state.altura * this.state.altura);
    this.setState({
      imc: Math.round(resultado)
    });

    if(resultado < 18.5){
      this.setState({
        legenda: 'Magreza - Grau 0',
        cor: '#FF5252'
      });
    } else if(resultado >= 18.5 && resultado < 25){
      this.setState({
        legenda: 'Normal - Grau 0',
        cor: '#4CAF50'
      });
    } else if(resultado >= 25 && resultado < 30){
      this.setState({
        legenda: 'Sobrepeso - Grau I',
        cor: '#FFC107'
      });
    } else if(resultado >= 30 && resultado < 40){
      this.setState({
        legenda: 'Obesidade - Grau II',
        cor: '#FF9800'
      });
    } else if(resultado >= 40){
      this.setState({
        legenda: 'Obesidade - Grau III',
        cor: '#F44336'
      });
    }
  }

  render() {
    const imc = 25;
    const legenda = 'Normal'
    const txt_botao = 'Calcular'

    return (
      <View style={styles.container}>
          <Text style={styles.legenda}>Seu IMC</Text>
        <View style={[styles.painel, {backgroundColor: this.state.cor}]}>
          <Text style={styles.resultado}>{this.state.imc}</Text>
          <Text style={styles.diagnostico}>{this.state.legenda}</Text>
        </View>
        <View style={styles.container}>
          <TextInput
            label='Peso'
            mode='outlined'
            style={styles.peso_altura}
            onChangeText={valor => {
              this.setState({peso: valor.replace(',', '.')});
            }}
          />
        </View>
        <View style={styles.container}>
          <TextInput 
            label='Altura'
            mode='outlined'
            style={styles.peso_altura}
            onChangeText={valor => {
              this.setState({altura: valor.replace(',', '.')});
            }}
          />
        </View>
        <View style={styles.container}>
          <Button style={styles.botao} mode="contained" onPress={this.calcularIMC}>
            {txt_botao}
          </Button>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 12,
    backgroundColor: '#f3e5f5'
  },
  painel: {
    width: 180,
    margin: 20,
    padding: 10,
    alignSelf: 'center',
    borderRadius: 8
  },
  legenda: {
    textAlign: 'center',
    fontWeight: 'bold'
  },
  resultado: {
    textAlign: 'center',
    fontSize: 25,
    fontWeight: 'bold'
  },
  diagnostico: {
    textAlign: 'center',
    fontSize: 16,
  },
  peso_altura: {
    width: 220,
    alignSelf: 'center',
    textAlign: 'center'
  },
  botao: {
    padding: 10,
    width: 140,
    alignSelf: 'center',
    borderRadius: 8
  }
});
