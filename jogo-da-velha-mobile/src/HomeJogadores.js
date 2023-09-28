import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function HomeJogadores({ changeScreen, mudarNomeJogadores, jogo }) {
  const [jogador1, setJogador1] = useState("");
  const [jogador2, setJogador2] = useState("");

  const handleClick = () => {
    if (mudarNomeJogadores) {
      mudarNomeJogadores(jogador1, jogador2)
      changeScreen(jogo)
    }
  }

  return (
    <View style={styles.container}>
      <TextInput placeholder='Jogador 1' value={jogador1} onChangeText={setJogador1} style={styles.input} />
      <Text>O nome do jogador 1 é: {jogador1}</Text>

      <TextInput placeholder='Jogador 2' value={jogador2} onChangeText={setJogador2} style={styles.input} />
      <Text>O nome do jogador 2 é: {jogador2}</Text>

      <Button title='Iniciar' onPress={handleClick} />
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        gap: 20,
        width: '100%',
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    input: {
        width: '80%',
        height: 40,
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 5,
        padding: 5,
        color: 'black',
    },
});