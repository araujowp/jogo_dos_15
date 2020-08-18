import React, {useState, useEffect} from 'react';
import { View, Text } from "react-native";
import estilo from './estilo';

const Cronometro  = ({acao, setAcao}) =>{
    
    let incremento = 1
    const [decimos, setdecimos] = useState(0); 
    const [ tempo , settempo ] = useState(3);

    useEffect(() => {        
        const intervalo  = setInterval(() => {
            settempo(tempo + 1);
        },2000);

        if (acao == "iniciar"){
            incremento = 1
            settempo(0);
            setdecimos(0);
            console.log("decimos",decimos, "tempo:", tempo)
            clearInterval(intervalo);
            setAcao("continuar");
        } else 
        if (acao == "parar"){
            incremento = 0
            console.log("else : " ,acao);
        }
        setdecimos(decimos +  incremento)
        
        console.log(" incremento: " , incremento, " decimos: ", decimos, " acao: " , acao, " tempo:" , tempo);
        
        return () => clearInterval(intervalo);
    },[tempo])


    return(
        <View> 
            <Text style={estilo.tempo} >{decimos + " " + acao}</Text>
        </View>
    );
}

export default Cronometro ; 