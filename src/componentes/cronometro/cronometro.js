import React, {useState, useEffect} from 'react';
import { View, Text } from "react-native";
import estilo from './estilo';

const Cronometro  = ({acao}) =>{
    
    const [ tempo , settempo ] = useState(0);

    useEffect(() => {        
        const intervalo  = setInterval(() => {
            
            //if (acao = 'iniciar')
            //    settempo(tempo = 0);

            settempo(tempo +1);
        },100);
        return () => clearInterval(intervalo);
    },[tempo])


    return(
        <View> 
            <Text style={estilo.tempo} >{tempo + " " + acao}</Text>
        </View>
    );
}

export default Cronometro ; 