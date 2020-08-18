
import React, { Fragment, useState, useEffect } from 'react';
import {  StyleSheet,
  Text,
  TouchableOpacity, View, Dimensions, FlatList
} from 'react-native';
import { Peca } from './src/componentes/peca';
import { Cronometro } from './src/componentes/cronometro';

const numeros = [
  {id: 0 , valor: 1 },{id: 1 , valor: 1 },{id: 2 , valor: 1 },{id: 3 , valor: 1 }, 
  {id: 4 , valor: 4 },{id: 5 , valor: 1 },{id: 6 , valor: 1 },{id: 7 , valor: 1 },
  {id: 8 , valor: 1 },{id: 9 , valor: 1 },{id: 10, valor: 1 },{id: 11, valor: 1 },
  {id: 12, valor: 1 },{id: 13, valor: 1 },{id: 14, valor: 1 },{id: 15, valor: 1 }
];

const App = () => {
  const [acao , setacao ] = useState("iniciar");
  
  const clickPeca =() =>{
    setacao("iniciar");
    console.log(" ------------ -- Iniciar -- ------------ " + acao);
  }

  const clickParar =() =>{
    console.log(" ------------ -- Parar -- ------------ " + acao);
    setacao("parar");
  }

  return (
    <Fragment>
      <Cronometro acao={acao} setAcao={setacao}/>
      <View style={{alignContent: 'center'}}  >

{/*
        <View style={styles.container}>
          <FlatList
            numColumns = {4}
            key={15}
            data={numeros}
            renderItem={({item}) => 
              <TouchableOpacity style={styles.peca}
                                onPress={clickPeca} >
                <Peca valor={item.id} /> 
              </TouchableOpacity> 
            }
          />
        </View>*/}

            <TouchableOpacity onPress={() => clickPeca()}  >
              <Text style={styles.reiniciar}>Reiniciar </Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => clickParar()}  >
              <Text style={styles.reiniciar}>Parar </Text>
            </TouchableOpacity>

      </View>
    </Fragment>
  );
};

const styles = StyleSheet.create({
  container:{
    backgroundColor: '#B0C4DE', //cinza claro '#DCDCDC', azul claro #B0E0E6 
    width: Dimensions.get("window").width * 0.95,
    height:  Dimensions.get("window").width * 0.95,
    alignContent: 'center',
    justifyContent: 'center', 
    flexDirection: 'row', 
    flexWrap: 'wrap', 
    marginLeft : 10, 
    borderRadius: 10, 
    alignItems: 'center'
  },
  titulo: {
    marginTop: 8,
    fontSize: 30,
    fontWeight: '600',
    color: 'green',
    textAlign: "center"
  },
  reiniciar: {
    marginTop: 38,
    fontSize: 22,
    fontWeight: '600',
    color: 'white',
    textAlign: 'center',
    backgroundColor: '#1c78de',
    width: (Dimensions.get("window").width / 2), 
    height : 35,
    borderRadius: 10, 
    marginLeft: 90 
  }
});

export default App;
