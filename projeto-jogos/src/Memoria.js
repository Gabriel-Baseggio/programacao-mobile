import { useEffect, useState } from "react";
import { View, StyleSheet, Text, Pressable, Button } from "react-native";

export default function Memoria({ changeScreen, jogador1, jogador2 }) {
    const [clicks, setClicks] = useState(0);
    const [indexes, setIndexes] = useState([]);
    const [jogador, setJogador] = useState(jogador1);
    const [pares, setPares] = useState([0, 0]);

    const generateGame = () => {
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

        return game;
    }

    const [game, setGame] = useState([...generateGame()]);

    const [showedGame, setShowedGame] = useState([
        [{val: "", player:""}, {val: "", player:""}, {val: "", player:""}, {val: "", player:""}, {val: "", player:""}],
        [{val: "", player:""}, {val: "", player:""}, {val: "", player:""}, {val: "", player:""}, {val: "", player:""}],
        [{val: "", player:""}, {val: "", player:""}, {val: "", player:""}, {val: "", player:""}, {val: "", player:""}],
        [{val: "", player:""}, {val: "", player:""}, {val: "", player:""}, {val: "", player:""}, {val: "", player:""}],
        [{val: "", player:""}, {val: "", player:""}, {val: "", player:""}, {val: "", player:""}, {val: "", player:""}],
        [{val: "", player:""}, {val: "", player:""}, {val: "", player:""}, {val: "", player:""}, {val: "", player:""}],
        [{val: "", player:""}, {val: "", player:""}, {val: "", player:""}, {val: "", player:""}, {val: "", player:""}],
        [{val: "", player:""}, {val: "", player:""}, {val: "", player:""}, {val: "", player:""}, {val: "", player:""}],
        [{val: "", player:""}, {val: "", player:""}, {val: "", player:""}, {val: "", player:""}, {val: "", player:""}],
        [{val: "", player:""}, {val: "", player:""}, {val: "", player:""}, {val: "", player:""}, {val: "", player:""}]
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
        let gameTmp = [...game];

        if (amountClicks === 0) {

            setIndexes([row, col]);

            showedGameTmp[row][col].val = gameTmp[row][col];
            
        } else if (amountClicks === 1 && gameTmp[clickIndexes[0]][clickIndexes[1]] == gameTmp[row][col]) {
            
            showedGameTmp[row][col].val = gameTmp[row][col];

            showedGameTmp[clickIndexes[0]][clickIndexes[1]].player = jogador;
            showedGameTmp[row][col].player = jogador;
            
            jogador === jogador1 ? ++paresTmp[0] : ++paresTmp[1];
            setIndexes([]);
            amountClicks = -1;
        } else {
            setTimeout(() => {
                showedGameTmp[clickIndexes[0]][clickIndexes[1]].val = "";
                showedGameTmp[row][col].val = "";
                setShowedGame([...showedGameTmp])
            }, 500);
            
            showedGameTmp[row][col].val = gameTmp[row][col];
            setIndexes([]);
            amountClicks = -1;
            setJogador(jogador === jogador1 ? jogador2 : jogador1);
        }
        
        setPares([...paresTmp]);
        setShowedGame([...showedGameTmp])
        ++amountClicks;
        setClicks(amountClicks);

    }

    const checkWin = () => {
        let temGanhador = true;
        showedGame.forEach((row) => {
            row.forEach((card) => {
                if (card.val == "") {
                    temGanhador = false;
                }
            });
        });
        temGanhador ? setTimeout(() => {definirGanhador()}, 10) : 0;
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
            <Button title="Voltar" onPress={() => changeScreen("home")} />
            <Text>Jogo da Memória</Text>
            <Text style={jogador == jogador1 ? styles.jogador1 : styles.jogador2}>Vez do jogador: {jogador}</Text>
            <Text style={styles.jogador1}>{jogador1}: {pares[0]}</Text>
            <Text style={styles.jogador2}>{jogador2}: {pares[1]}</Text>
            <View>
                {
                    showedGame.map((row, indexRow) => {
                        return (
                            <View style={styles.row} key={indexRow}>
                                {row.map((column, indexColumn) => (
                                    <Pressable
                                        key={`${indexRow}, ${indexColumn}, ${column}`}
                                        onPress={() => play(indexRow, indexColumn)}
                                        disabled={(column.val != "")}
                                    >
                                        <View
                                            style={(column.val != "" ? (column.player != "" ? (column.player == jogador1 ? styles.cardGameJog1 : styles.cardGameJog2) : styles.cardGameDisabled) : styles.cardGame)}
                                            
                                        >
                                            <Text style={styles.cardGameFont}>
                                                {column.val}
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
        gap: 5,
        alignItems: "center",
        justifyContent: "center",
    },
    row: {
        display: "flex",
        flexDirection: "row",
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
    cardGameJog1: {
        width: 40,
        height: 40,
        margin: 2,
        borderRadius: 5,
        display: "flex",
        justifyContent: "center",
        backgroundColor: "red",
        alignItems: "center",
    },
    cardGameJog2: {
        width: 40,
        height: 40,
        margin: 2,
        borderRadius: 5,
        display: "flex",
        justifyContent: "center",
        backgroundColor: "blue",
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
        color: "#fff",
    },
    jogador1: {
        color: "red",
    },
    jogador2: {
        color: "blue",
    }
});