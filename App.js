import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {
  const [player1, setPlayer1] = useState('');
  const [player2, setPlayer2] = useState('');

  const handleClick = (event) => {
    alert(player1 + "\n" + player2);
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <Text>Nome Player1: {player1}</Text>
      <TextInput
        style={styles.input}
        placeholder='Player 1'
        onChangeText={setPlayer1}
      />

      <Text>Nome Player2: {player2}</Text>
      <TextInput
        style={styles.input}
        placeholder='Player 2'
        onChangeText={setPlayer2}
      />

      <Button title='Meu botão' onPress={handleClick} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 20,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    width: '80%',
    height: 40,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 5,
    padding: 5,
    color: 'black',
  },
});

// function myState(_state) {
//   let state = _state;

//   function setState(value) {
//     state = value;
//   }

//   function getState() {
//     return state;
//   }

//   return [state, setState, getState];
// }

// const [nome, setNome, getNome] = myState("Gabriel");

// console.log(nome) // Gabriel

// setNome("Baseggio");
// console.log(getNome()); //Baseggio