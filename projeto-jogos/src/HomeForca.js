import { View, StyleSheet, Text, TextInput, Button } from "react-native";

export default function HomeForca({ changeScreen, palavraForca, setPalavraForca }) {

    const handleClick = () => {
        if (changeScreen && setPalavraForca) {
            changeScreen("forca")
        }
      }

    return (
        <View style={styles.container}>
            <TextInput placeholder='Palavra para a forca' value={palavraForca} onChangeText={setPalavraForca} style={styles.input} />
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