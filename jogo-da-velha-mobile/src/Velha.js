import { useEffect, useState } from "react";
import { View, Text, Button, StyleSheet, TouchableOpacity } from "react-native";

const startValues = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""]
]

export default function Velha({ changeScreen, player1, player2 }) {
    const [states, setStates] = useState(startValues);
    const [player, setPlayer] = useState("X");

    useEffect(() => {
        checkWin();
    }, states);

    const goBack = () => {
        changeScreen("home")
    }

    const checkPlayerWin = () => {
        for (let row = 0; row < 3; row++) {
            if (states[row][0] === states[row][1]
                && states[row][1] === states[row][2]
                && states[row][2] != "") {
                return states[row][0]
            }
        }

        for (let col = 0; col < 3; col++) {
            if (states[0][col] === states[1][col]
                && states[1][col] === states[2][col]
                && states[2][col] != "") {
                return states[0][col]
            }
        }

        if (states[0][0] === states[1][1]
            && states[1][1] === states[2][2]
            && states[2][2] != "") {
            return states[0][0];
        }

        if (states[0][2] === states[1][1]
            && states[1][1] === states[2][0]
            && states[2][0] != "") {
            return states[0][2];
        }

        return "";
    };

    const endPlay = (message) => {
        alert(message);
        setStates(startValues);
        goBack();
    }

    const checkWin = () => {
        let winner = checkPlayerWin();
        if (winner != "") {
            endPlay(`O jogador ${winner} venceu!`);
        } else {
            let countStates = 0;

            states.forEach(row => {
                row.forEach(column => {
                    if (column === "X" || column === "O") countStates++;
                });
            });

            if (countStates === 9) {
                endPlay("Ninguém venceu!");
            }
        }
    }

    const handleClickPosition = (row, column) => {
        if (states[row][column] != "") {
            return;
        }

        const newState = [
            [...states[0]],
            [...states[1]],
            [...states[2]]
        ];
        newState[row][column] = player;
        setStates(newState);
        setPlayer(player === "X" ? "O" : "X");
    }

    const getPlayerName = () => player === "X" ? player1 : player2;

    return (
        <View style={styles.container}>
            <Text>
                É a vez do jogador: {getPlayerName()} - {player}
            </Text>

            <View>
                {
                    states.map((row, indexRow) => {
                        return (
                            <View style={styles.row} key={indexRow}>
                                {row.map((column, indexColumn) => (
                                    <TouchableOpacity
                                    key={`${indexRow}, ${indexColumn}, ${column}`}
                                    onPress={() => handleClickPosition(indexRow, indexColumn)}
                                    >
                                        <View style={styles.buttonGame}>
                                            <Text style={styles.buttonGameFont}>
                                                {column}
                                            </Text>
                                        </View>
                                    </TouchableOpacity>
                                ))}
                            </View>
                        )
                    })
                }
            </View>
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
    },
    row: {
        display: "flex",
        flexDirection: "row"
    },
    buttonGame: {
        backgroundColor: 'red',
        width: 80,
        height: 80,
        margin: 2,
        display: "flex",
        justifyContent: "center",
        backgroundColor: "lightgrey",
        alignItems: "center",
    },
    buttonGameFont: {
        fontSize: 50,
        color: "#fff"
    }
});