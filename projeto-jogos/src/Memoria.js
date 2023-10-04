import { useEffect, useState } from "react";
import { View, StyleSheet, Text, Pressable, Button } from "react-native";

const emojis = ["😀", "😁", "😂", "🤣", "😃", "😄", "😅", "😆", "😉", "😊", "😋", "😎", "😍",
    "😘", "🥰", "😗", "😙", "😚", "🙂", "🤗", "🤩", "🤔", "🤨", "😐", "😑", "😀", "😁", "😂",
    "🤣", "😃", "😄", "😅", "😆", "😉", "😊", "😋", "😎", "😍", "😘", "🥰", "😗", "😙", "😚",
    "🙂", "🤗", "🤩", "🤔", "🤨", "😐", "😑"];

const game = [
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""]
];

game.forEach((row) => {
    for (let i = 0; i < 5; i++) {
        let index = Math.floor(Math.random() * emojis.length);
        row[i] = emojis[index];
        emojis.splice(index, 1);
    }
});

export default function Memoria({ changeScreen, jogador1, jogador2 }) {
    const [clicks, setClicks] = useState(0);
    const [indexes, setIndexes] = useState([]);
    const [jogador, setJogador] = useState(jogador1);
    const [pares, setPares] = useState([0, 0]);

    const [showedGame, setShowedGame] = useState([
        ["", "", "", "", ""],
        ["", "", "", "", ""],
        ["", "", "", "", ""],
        ["", "", "", "", ""],
        ["", "", "", "", ""],
        ["", "", "", "", ""],
        ["", "", "", "", ""],
        ["", "", "", "", ""],
        ["", "", "", "", ""],
        ["", "", "", "", ""]
    ]);

    useEffect(() => {
        checkWin()
    }, showedGame);

    const play = (row, col) => {
        let showedGameTmp = [[...showedGame[0]], [...showedGame[1]], [...showedGame[2]], [...showedGame[3]],
        [...showedGame[4]], [...showedGame[5]], [...showedGame[6]], [...showedGame[7]], [...showedGame[8]],
        [...showedGame[9]]];

        let amountClicks = clicks;
        let clickIndexes = [...indexes];
        let paresTmp = [...pares];
        
        if (amountClicks === 0) {
            
            setIndexes([row, col]);
            
            showedGameTmp[row][col] = game[row][col];
            
        } else if (amountClicks === 1) {
            
            setIndexes([...indexes, row, col]);
            
            showedGameTmp[row][col] = game[row][col];
            
        } else if (amountClicks == 2 && game[clickIndexes[0]][clickIndexes[1]] != game[clickIndexes[2]][clickIndexes[3]]) {
            

            showedGameTmp[clickIndexes[0]][clickIndexes[1]] = "";
            showedGameTmp[clickIndexes[2]][clickIndexes[3]] = "";
            
            setIndexes([]);
            amountClicks = -1;
            setJogador(jogador === jogador1 ? jogador2 : jogador1);
        } else {
            jogador === jogador1 ? ++paresTmp[0] : ++paresTmp[1];
            setIndexes([]);
            amountClicks = -1;
        }
        
        setPares([...paresTmp]);
        setShowedGame([...showedGameTmp])
        ++amountClicks;
        setClicks(amountClicks);

    }

    const handleClickPosition = (row, col) => {
        play(row, col);
    }

    const checkWin = () => {
        let temGanhador = true;
        showedGame.forEach((row) => {
            row.forEach((card) => {
                if (card == "") {
                    temGanhador = false;
                }
            });
        });
        temGanhador ? definirGanhador() : 0;
    }

    const definirGanhador = () => {
        if (pares[0] > pares[1]) {
            alert("O jogador " + jogador1 + " ganhou!")
        } else {
            alert("O jogador " + jogador2 + " ganhou!")
        }
        changeScreen("home");
    }

    return (
        <View style={styles.container}>
            <Button title="Voltar" onPress={ () => changeScreen("home")} />
            <Text>Jogo da Memória</Text>
            <Text>Vez do jogador: {jogador}</Text>
            <View>
                {
                    showedGame.map((row, indexRow) => {
                        return (
                            <View style={styles.row} key={indexRow}>
                                {row.map((column, indexColumn) => (
                                    <Pressable
                                        key={`${indexRow}, ${indexColumn}, ${column}`}
                                        onPress={() => handleClickPosition(indexRow, indexColumn)}
                                        disabled={(column != "")}
                                    >
                                        <View 
                                            style={(column != "" ? styles.cardGameDisabled : styles.cardGame)}
                                        >
                                            <Text style={styles.cardGameFont}>
                                                {column}
                                            </Text>
                                        </View>
                                    </Pressable>
                                ))}
                            </View>
                        )
                    })
                }
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        gap: 20,
        alignItems: "center",
        justifyContent: "center",
    },
    row: {
        display: "flex",
        flexDirection: "row"
    },
    cardGame: {
        width: 40,
        height: 40,
        margin: 2,
        borderRadius: 5,
        display: "flex",
        justifyContent: "center",
        backgroundColor: "grey",
        alignItems: "center",
    },
    cardGameDisabled: {
        width: 40,
        height: 40,
        margin: 2,
        borderRadius: 5,
        display: "flex",
        justifyContent: "center",
        backgroundColor: "lightgrey",
        alignItems: "center",
    },
    cardGameFont: {
        fontSize: 25,
        color: "#fff"
    }
});