import React, {useState} from 'react';
import { Text, View, StyleSheet, TextInput } from 'react-native';
import Componente from './components/componente';

export default function App() {
  const [qtd, setQtd] = useState(0);
  return (
    <View style={styles.container}>
      <View style={styles.bloco}>
        <Text style={styles.textoBloco}> Quantidade de Pessoas: </Text>
        <TextInput 
          style={styles.input}
          value={qtd}
          onChangeText={(value)=>setQtd(value)}
        />
      </View>
      <Componente qtd={qtd}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  bloco:{
    width:'100%',
    marginBottom:20,
    backgroundColor:'#1F618D'
  },
  textoBloco:{
    marginLeft:'8%',
    fontSize:22
  },
  input:{
    borderWidth:1,
    width:'80%',
    marginLeft:'9%',
    borderRadius:10,
    fontSize:20
  }
  
});
