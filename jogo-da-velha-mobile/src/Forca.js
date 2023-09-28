import { useEffect, useState } from "react";
import { View, StyleSheet, Text, TextInput, Button } from "react-native";

export default function Forca({ changeScreen, palavraForca, setPalavraForca }) {

    const valorInicial = palavraForca.split("").map((letra) => {
        return letra === " " ? " " : "_ ";
    });
    const [palavraMostra, setPalavraMostra] = useState(valorInicial);
    const [palavraAdivinha, setPalavraAdivinha] = useState("");
    const [letrasUsadas, setLetrasUsadas] = useState([]);
    // const [imgForca, setImgForca] = useState("");

    const goBack = () => {
        setPalavraForca("");
        changeScreen("home");
    }

    useEffect(() => {
        if (palavraMostra.join("").toUpperCase() === palavraForca.toUpperCase()) {
            alert(`Parabéns, você acertou!\nA palavra era: ${palavraForca}`);
            goBack();
        }
    }, palavraMostra);

    const checarLetra = (letra) => {
        if (palavraAdivinha.length > 1) {
            if (palavraAdivinha.toUpperCase() === palavraForca.toUpperCase()) {
                alert(`Parabéns, você acertou!\nA palavra era: ${palavraForca}`);
                goBack();
            }
        } else if (palavraAdivinha.length == palavraForca.length) {
            // Lógica para tirar a vida do boneco com a IMG
        } else {
            const letrasUsadasTmp = [...letrasUsadas];
            letrasUsadasTmp.push(`${palavraAdivinha.toUpperCase().charAt(0)} `)
            setLetrasUsadas(letrasUsadasTmp);

            let palavraTmp = palavraForca.toUpperCase().split("").map((letra, index) => {
                return letra === palavraAdivinha.toUpperCase().charAt(0);
            });

            const palavraMostraTmp = [...palavraMostra];
            let contTem = 0;

            palavraTmp.map((letra, index) => {
                if (letra) {
                    palavraMostraTmp[index] = palavraAdivinha.toUpperCase().charAt(0);
                    contTem++;
                }
            });

            if (contTem === 0) {
                // Lógica para tirar a vida do boneco com a IMG
            }

            setPalavraMostra(palavraMostraTmp);
        }
    }

    return (
        <View style={styles.container}>
            {/* <Image
                style={styles.imgForca}
                source={{
                  uri: {imgForca},
                }}
            /> */}

            <Text>{palavraMostra}</Text>

            <Text>{letrasUsadas}</Text>

            <TextInput placeholder='Letra ou palavra para adivinhar' value={palavraAdivinha} onChangeText={setPalavraAdivinha} style={styles.input} />
            <Button title="Adivinhar" onPress={checarLetra} />


            <Button title="Voltar" onPress={goBack} />
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