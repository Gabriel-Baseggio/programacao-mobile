import { useEffect, useState } from "react";
import { View, StyleSheet, Text, TextInput, Button, Image } from "react-native";

const imgsForca = [require("../assets/imgForca0.png"), require("../assets/imgForca1.png"), require("../assets/imgForca2.png"), require("../assets/imgForca3.png"), require("../assets/imgForca4.png"), require("../assets/imgForca5.png")];

export default function Forca({ changeScreen, palavraForca, setPalavraForca, dicaForca, setDicaForca }) {

    const valorInicial = palavraForca.split("").map((letra) => {
        return (letra === " " || letra === "-") ? (letra === " " ? " " : "-") : " _ ";
    });
    const [palavraMostra, setPalavraMostra] = useState(valorInicial);
    const [palavraAdivinha, setPalavraAdivinha] = useState("");
    const [letrasUsadas, setLetrasUsadas] = useState([]);

    const [vidas, setVidas] = useState(0);
    const [imgForca, setImgForca] = useState(imgsForca[vidas]);

    const goBack = () => {
        setPalavraForca("");
        setDicaForca("");
        changeScreen("home");
    }

    useEffect(() => {
        if (palavraMostra.join("").toUpperCase() === palavraForca.toUpperCase()) {
            setTimeout(() => {
                alert(`Parabéns, você acertou!\nA palavra era: ${palavraMostra.join("").toUpperCase()}`);
                goBack();
            }, 10);
        }
        let vidasTmp = vidas;
        if (vidasTmp == 6) {
            setTimeout(() => {
                alert("Morreu bobão!")
                changeScreen("home")
            }, 10);
        } else {
            setImgForca(imgsForca[vidas]);
        }
    }, [palavraMostra, vidas]);

    const checarLetra = () => {
        let vidastmp = vidas;
        if (palavraAdivinha.length >= 1) {
            if (palavraAdivinha.length < palavraForca.length && palavraAdivinha.charAt(0).match(/^([\s-]+)$/g) != null) {
                alert("Deve conter pelo menos uma letra e apenas letras sem acento!");
                setPalavraAdivinha("");
                return;
            }
            console.log("XD?");
            if (palavraAdivinha.toUpperCase() === palavraForca.toUpperCase()) {
                alert(`Parabéns, você acertou!\nA palavra era: ${palavraForca}`);
                goBack();
            } else if (palavraAdivinha.length == palavraForca.length) {
                if (palavraAdivinha.match(/^([A-zç\s-]+)$/g)) {
                    setVidas(++vidastmp);
                } else {
                    alert("Deve conter apenas letras sem acento, espaços ou hífens!");
                }
            } else {
                const letrasUsadasTmp = [...letrasUsadas];
                if (!(letrasUsadasTmp.includes(`${palavraAdivinha.toUpperCase().charAt(0)} `))) {
                    letrasUsadasTmp.push(`${palavraAdivinha.toUpperCase().charAt(0)} `);
                    setLetrasUsadas(letrasUsadasTmp);
                    let palavraTmp = palavraForca.toUpperCase().split("")

                    palavraTmp = palavraTmp.map((letra) => {
                        return letra != " " || letra != "-" ? letra : "";
                    });

                    palavraTmp = palavraTmp.map((letra) => {
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
                        setVidas(++vidastmp);
                    }

                    setPalavraMostra(palavraMostraTmp);
                } else {
                    alert("Letra já usada, tente outra letra")
                }

            }
        } else {
            alert("Deve conter pelo menos uma letra, apenas letras sem acento, espaços ou hífens!");
        }
        setPalavraAdivinha("");
    }

    return (
        <View style={styles.container}>
            <Image
                style={styles.imgForca}
                source={imgForca}
            />

            <Text>{palavraMostra}</Text>

            <Text>{letrasUsadas}</Text>

            {(dicaForca != "") && <Text>Dica: {dicaForca}</Text>}

            <TextInput placeholder='Letra ou palavra para adivinhar' value={palavraAdivinha} onChangeText={setPalavraAdivinha} style={styles.input} id="abcde" />
            <Button title="Adivinhar" color="#082D0F" onPress={checarLetra} />

            <Button title="Voltar" color="#082D0F" onPress={goBack} />
        </View>
    );
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
    imgForca: {
        width: '50%',
        height: '50%',
    },
});