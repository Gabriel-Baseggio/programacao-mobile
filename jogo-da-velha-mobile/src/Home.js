import { StyleSheet, View, Button } from 'react-native';

export default function Home({ changeScreen, nextScreen }) {
    return (
        <View style={styles.container}>
            <Button title="Jogo da Velha" color="red" onPress={() => {nextScreen("velha"); changeScreen("homeJogadores")}} />
            <Button title="Jogo da Forca" color="green" onPress={() => {changeScreen("homeForca")}} />
            <Button title="Jogo da Memória" color="blue" onPress={() => {nextScreen("memoria"); changeScreen("homeJogadores")}} />
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