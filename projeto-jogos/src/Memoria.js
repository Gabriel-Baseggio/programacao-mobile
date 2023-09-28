import { useEffect, useState } from "react";
import { View, StyleSheet, Text, Pressable } from "react-native";

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

console.log(game)

export default function Memoria({ }) {
    const [clicks, setClicks] = useState([0, "", ""]);
    const [indexes1, setIndexes1] = useState([]);

    useEffect(() => {
        console.log(clicks);
        console.log(showedGame);
    }, clicks);

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

    const play = (row, col) => {
        let showedGameTmp = [[...showedGame[0]], [...showedGame[1]], [...showedGame[2]], [...showedGame[3]],
        [...showedGame[4]], [...showedGame[5]], [...showedGame[6]], [...showedGame[7]], [...showedGame[8]],
        [...showedGame[9]]];
        let arrTmp1 = [...clicks];
        // Falta a lógica para sumir os não iguais
        if (arrTmp1[0] <= 1) {

            if (arrTmp1[0] === 1) {
                arrTmp1[1] = game[row][col];
                let arrIndexes = [row, col];
                setIndexes1([...arrIndexes])
                showedGameTmp[row][col] = game[row][col];
            } else if (arrTmp1[0] === 2 && arrTmp1[1] === game[row][col]) {
                arrTmp1[2] = game[row][col];
                showedGameTmp[row][col] = game[row][col];
            } else if (arrTmp1 === 2 && arrTmp1[1] != game[row][col]) {
                showedGameTmp[row][col] = "";
                let indexes = indexes1;
                showedGameTmp[indexes[0]][indexes[1]] = "";
            }
            
            setShowedGame(showedGameTmp)
            ++arrTmp1[0];
            setClicks([...arrTmp1]);
        } else {
            console.log("Apagou?    ");
            setShowedGame(showedGameTmp);
            let arr = [0, "", ""];
            setClicks([...arr]);
        }
    }


    const handleClickPosition = (row, col) => {
        play(row, col);
    }

    return (
        <View style={styles.container}>
            <Text>Jogo da Memória</Text>
            <View>
                {
                    showedGame.map((row, indexRow) => {
                        return (
                            <View style={styles.row} key={indexRow}>
                                {row.map((column, indexColumn) => (
                                    <Pressable
                                        key={`${indexRow}, ${indexColumn}, ${column}`}
                                        onPress={() => handleClickPosition(indexRow, indexColumn)}
                                    >
                                        <View style={styles.cardGame}>
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
        backgroundColor: 'red',
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