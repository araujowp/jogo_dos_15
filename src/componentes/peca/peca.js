import React, {Fragment} from 'react';
import {Text, Image, View} from "react-native";
import estilo from './estilo'; 

const Peca = ({valor}) => {
     return(
         <View style={estilo.peca} >
             <Text style={estilo.texto} >{valor}</Text>
         </View>
     );
 }

 export default Peca;