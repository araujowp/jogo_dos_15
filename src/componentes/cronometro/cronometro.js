import React, {useState, useEffect} from 'react';
import { View, Text } from "react-native";
import estilo from './estilo';

const Cronometro  = ({acao, setAcao}) =>{
    
    const [currentAcao, setCurrentAcao] = useState(acao);
    // let acao1 = acao;
    const [ tempo , settempo ] = useState(3);

    useEffect(() => {        
        const intervalo  = setInterval(() => {
            
           console.log(" acao da properts " , acao);
           console.log(" acao da currentAcao " , currentAcao);
            if (currentAcao == "iniciar"){
                console.log("iniciando " )
                settempo(0);
                // console.log("Tempo atualizado");
                setCurrentAcao("continuar");
            } else {
                console.log("else : " ,acao);
                settempo(tempo +1);
                setCurrentAcao("outra ");
                //console.log("incrementando " )
            }
            


        },1500);
        return () => clearInterval(intervalo);
    },[tempo])


    return(
        <View> 
            <Text style={estilo.tempo} >{tempo + " " + acao}</Text>
        </View>
    );
}

export default Cronometro ; 