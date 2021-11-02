import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, Alert, TextInput } from 'react-native';





export default function App() {


  const arvattava = Math.floor(Math.random() * 100) + 1

  const [text, setText] = useState()

  const buttonPressed= () =>{
    if (text<arvattava) {
      Alert.alert('Arvauksesi: '+ text + ' oli liian vähän');
    }
    else if (text > arvattava) {
      Alert.alert('Arvauksesi: '+ text + ' oli liian paljon');
    }

    else {
      Alert.alert('Arvauksesi: '+ text + ' oli OIKEIN!!');
    }
    }


  return (
    <View style={styles.container}>
      <Text>Arvaa numero väliltä 1-100</Text>

      <TextInput
        style={{width:200, borderColor:'gray', borderWidth:1}}
        onChangeText={text=> setText(text)}
        value={text}
        />

        <Button onPress={buttonPressed} title='arvaa'/> 

      <StatusBar style="auto" />
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
