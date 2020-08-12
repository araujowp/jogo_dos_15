import {StyleSheet, Dimensions} from 'react-native';

const estilo  = StyleSheet.create({
    texto:{
        fontSize: 30,
    }, 
    peca:{
        width: (Dimensions.get("window").width * 0.95)/4.6,
        height: (Dimensions.get("window").width * 0.95)/4.6, 
        margin: 5,
        borderRadius: 10, 
        backgroundColor: 'white'//,//'#9913ff',   // ''#ecaf4f', 
        ,alignItems: 'center'
        ,justifyContent: 'center'//,
        ,borderWidth: 0.5
    }
})

export default estilo;