import { useState } from 'react';
import { StyleSheet, View, Text, Button } from "react-native";

export default function Jogo(props) {

    const handleClick = (event) => {
        props.changeScreen("home");
    }

    const [b1, setB1] = useState(" ");
    const handleClickB1 = (event) => {
        setB1("X");
    }
 

    return (
        <View style={styles.container}>
            <Text>
                Jogo da Velha
            </Text>
            <Button title='Voltar' onPress={handleClick} />
            <Text>
                Jogador: {jogadorAtual}
            </Text>

            <Button title={b1} onPress={handleClickB1} />
            <Button title={b1} onPress={handleClickB1} />
            <Button title={b1} onPress={handleClickB1} />
            <Button title={b1} onPress={handleClickB1} />
            <Button title={b1} onPress={handleClickB1} />
            <Button title={b1} onPress={handleClickB1} />
            <Button title={b1} onPress={handleClickB1} />
            <Button title={b1} onPress={handleClickB1} />
            <Button title={b1} onPress={handleClickB1} />
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
});