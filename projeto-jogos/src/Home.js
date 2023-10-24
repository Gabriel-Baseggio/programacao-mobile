

export default function Home() {
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
      );
}