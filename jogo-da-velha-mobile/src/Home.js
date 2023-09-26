import { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function Home(props) {
    const [player1, setPlayer1] = useState('');
    const [player2, setPlayer2] = useState('');

    const handleClick = (event) => {
        alert(`${player1} x ${player2}`);
        props.mudarNomeJogadores(player1, player2);
        props.changeScreen("jogo");
    }

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder='Player 1'
                onChangeText={setPlayer1}
            />
            <Text>O nome do jogador 1 é: {player1}</Text>

            <TextInput
                style={styles.input}
                placeholder='Player 2'
                onChangeText={setPlayer2}
            />
            <Text>O nome do jogador 2 é: {player2}</Text>

            
            
            <Button title='Click' onPress={handleClick} />
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