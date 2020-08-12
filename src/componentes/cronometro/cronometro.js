import React, {useState, useEffect} from 'react';
import { View, Text } from "react-native";

const Cronometro  = () =>{
    
    const [ tempo , settempo ] = useState(0);

    useEffect(() => {        
        const intervalo  = setInterval(() => {
            settempo(tempo +1);
            console.log("ola " + tempo)
        },100);
        return () => clearInterval(intervalo);
    },[tempo])


    return(
        <View> 
            <Text>{tempo}</Text>
        </View>
    );
}

export default Cronometro ; 