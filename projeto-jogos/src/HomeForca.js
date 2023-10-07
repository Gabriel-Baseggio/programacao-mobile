import { View, StyleSheet, Text, TextInput, Button } from "react-native";

export default function HomeForca({ changeScreen, palavraForca, setPalavraForca, dicaForca, setDicaForca }) {

    const handleClick = () => {
        if (changeScreen && setPalavraForca) {
            let palavraForcaTmp = palavraForca;
            if (palavraForcaTmp.match('[A-zç\s-]+')) {
                changeScreen("forca")
            } else {
                alert("Deve conter pelo menos uma letra, apenas letras sem acento ou espaços!")
            }
        }
      }

    return (
        <View style={styles.container}>
            <Text>A palavra para a forca será: {palavraForca}</Text>
            <TextInput placeholder='Palavra para a forca' onChangeText={setPalavraForca} style={styles.input} />
            
            <Text>A dica será: {dicaForca}</Text>
            <TextInput placeholder='Dica para a forca' onChangeText={setDicaForca} style={styles.input} />

            <Button title='Iniciar' color="#082D0F" onPress={handleClick} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        gap: 10,
        backgroundColor: '#DEE5E5',
        alignItems: 'center',
        justifyContent: 'center',
        width: "100%",
    },
    input: {
        width: '80%',
        height: 40,
        backgroundColor: '#5E807F',
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 5,
        padding: 5,
        color: 'white',
    },
});