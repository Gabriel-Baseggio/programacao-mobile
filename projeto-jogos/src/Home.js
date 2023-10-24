import { StyleSheet, View, Button } from 'react-native';

export default function Home({ changeScreen, nextScreen }) {
    return (
        <View style={styles.container}>
            <Button title="Jogo da Velha" color="#082D0F" onPress={() => {nextScreen("velha"); changeScreen("homeJogadores")}} />
            <Button title="Jogo da Forca" color="#082D0F" onPress={() => {changeScreen("homeForca")}} />
            <Button title="Jogo da Memória" color="#082D0F" onPress={() => {nextScreen("memoria"); changeScreen("homeJogadores")}} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        gap: 20,
        backgroundColor: '#DEE5E5',
        alignItems: 'center',
        justifyContent: 'center',
        width: "100%",
    },
});
