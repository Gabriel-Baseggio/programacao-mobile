import { View, StyleSheet, Text, TextInput, Button } from "react-native";

export default function HomeForca({ changeScreen, palavraForca, setPalavraForca }) {

    const handleClick = () => {
        if (changeScreen && setPalavraForca) {
            let palavraForcaTmp = palavraForca;
            if (palavraForcaTmp.match('[A-Za-z\s]+')) {
                changeScreen("forca")
            } else {
                alert("Deve conter pelo menos uma letra e apenas letras e espaços!")
            }
        }
      }

    return (
        <View style={styles.container}>
            <TextInput placeholder='Palavra para a forca' onChangeText={setPalavraForca} style={styles.input} />
            <Text>A palavra para a forca será: {palavraForca}</Text>

            <Button title='Iniciar' onPress={handleClick} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        gap: 20,
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
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