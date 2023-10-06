import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import Home from './src/Home';
import HomeJogadores from './src/HomeJogadores';
import Velha from './src/Velha';
import HomeForca from './src/HomeForca';
import Forca from './src/Forca';
import Memoria from './src/Memoria';

export default function App() {
    const [screen, setScreen] = useState("home");
    const [nextScreen, setNextScreen] = useState("");
    const [jogador1, setJogador1] = useState("");
    const [jogador2, setJogador2] = useState("");
    const [palavraForca, setPalavraForca] = useState("");
    const [dicaForca, setDicaForca] = useState("");

    const checkScreen = (screenName) => screenName === screen;

    const setJogadores = (nome1, nome2) => {
        setJogador1(nome1);
        setJogador2(nome2);
    }

    const changeScreen = (newScreen) => setScreen(newScreen); 

    return (
        <View style={styles.container}>
            <StatusBar style="auto" />

            {checkScreen("home") && (
                <Home
                    changeScreen={changeScreen}
                    nextScreen={setNextScreen}
                />
            )}

            {checkScreen("homeJogadores") && (
                <HomeJogadores
                    changeScreen={changeScreen}
                    mudarNomeJogadores={setJogadores}
                    jogo={nextScreen}
                />
            )}

            {checkScreen("velha") && (
                <Velha
                    changeScreen={changeScreen}
                    player1={jogador1}
                    player2={jogador2}
                />
            )}

            {checkScreen("homeForca") && (
                <HomeForca
                    changeScreen={changeScreen}
                    palavraForca={palavraForca}
                    setPalavraForca={setPalavraForca}
                    dicaForca={dicaForca}
                    setDicaForca={setDicaForca}
                />
            )}

            {checkScreen("forca") && (
                <Forca
                    changeScreen={changeScreen}
                    palavraForca={palavraForca}
                    setPalavraForca={setPalavraForca}
                    dicaForca={dicaForca}
                    setDicaForca={setDicaForca}
                />
            )}

            {checkScreen("memoria") && (
                <Memoria
                    changeScreen={changeScreen}
                    jogador1={jogador1}
                    jogador2={jogador2}
                />
            )}

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        width: "100%",
    },
});