import { useState } from 'react';
import { StyleSheet, View, Text, Button } from "react-native";

export default function Jogo(props) {

    const handleClick = (event) => {
        props.changeScreen("home");
    }

    const [jogadorAtual, setJogadorAtual] = useState("X");

    const [b1, setB1] = useState(" ");
    const handleClickB1 = (event) => {
        play(1);
    }

    const [b2, setB2] = useState(" ");
    const handleClickB2 = (event) => {
        play(2);
    }

    const [b3, setB3] = useState(" ");
    const handleClickB3 = (event) => {
        play(3);
    }

    const [b4, setB4] = useState(" ");
    const handleClickB4 = (event) => {
        play(4);
    }

    const [b5, setB5] = useState(" ");
    const handleClickB5 = (event) => {
        play(5);
    }

    const [b6, setB6] = useState(" ");
    const handleClickB6 = (event) => {
        play(6);
    }

    const [b7, setB7] = useState(" ");
    const handleClickB7 = (event) => {
        play(7);
    }

    const [b8, setB8] = useState(" ");
    const handleClickB8 = (event) => {
        play(8);
    }

    const [b9, setB9] = useState(" ");
    const handleClickB9 = (event) => {
        play(9);
    }

    let game = [
        [b1, b2, b3],
        [b4, b5, b6],
        [b7, b8, b9]
    ]

    const checkWinner = () => {

        if (game[0][0] != " " && game[0][0] == game[0][1]  && game[0][1] == game[0][2]) {
            return jogadorAtual
        } else if (game[0][0] != " " && game[0][0] == game[1][1]  && game[1][1] == game[2][2]) {
            return jogadorAtual
        } else if (game[0][0] != " " && game[0][0] == game[1][0]  && game[1][0] == game[2][0]) {
            return jogadorAtual
        } else if (game[0][1] != " " && game[0][1] == game[1][1]  && game[1][1] == game[2][1]) {
            return jogadorAtual
        } else if (game[0][2] != " " && game[0][2] == game[1][2]  && game[1][2] == game[2][2]) {
            return jogadorAtual
        } else if (game[0][2] != " " && game[0][2] == game[1][1]  && game[1][1] == game[2][0]) {
            return jogadorAtual
        } else if (game[1][0] != " " && game[1][0] == game[1][1]  && game[1][1] == game[1][2]) {
            return jogadorAtual
        }  else if (game[2][0] != " " && game[2][0] == game[2][1]  && game[2][1] == game[2][2]) {
            return jogadorAtual
        } else {
            // fzr velha
        }
    }

    const play = (square) => {
        const playGame = (row, col, setSquare) => {     
            if (game[row][col] === " ") {
                game[row][col] = jogadorAtual;
                setSquare(jogadorAtual);
                if (checkWinner() != null) {
                    alert("Ganhador: " + checkWinner());
                }
                setJogadorAtual((jogadorAtual === "X" ? "O" : "X"));
            }
        }

        switch (square) {
            case 1:
                playGame(0, 0, setB1);
                break;
            case 2:
                playGame(0, 1, setB2);
                break;
            case 3:
                playGame(0, 2, setB3);
                break;
            case 4:
                playGame(1, 0, setB4);
                break;
            case 5:
                playGame(1, 1, setB5);
                break;
            case 6:
                playGame(1, 2, setB6);
                break;
            case 7:
                playGame(2, 0, setB7);
                break;
            case 8:
                playGame(2, 1, setB8);
                break;
            case 9:
                playGame(2, 2, setB9);
                break;
        }
    }

    return (
        <View style={styles.container}>
            <Text>
                Jogo da Velha
            </Text>
            <Button title='Voltar' onPress={handleClick} />
            <Text>
                Jogador: {jogadorAtual}
            </Text>

            <View style={styles.row}>
                <Button title={b1} style={styles.button} onPress={handleClickB1} />
                <Button title={b2} style={styles.button} onPress={handleClickB2} />
                <Button title={b3} style={styles.button} onPress={handleClickB3} />
            </View>
            <View style={styles.row}>
                <Button title={b4} style={styles.button} onPress={handleClickB4} />
                <Button title={b5} style={styles.button} onPress={handleClickB5} />
                <Button title={b6} style={styles.button} onPress={handleClickB6} />
            </View>
            <View style={styles.row}>
                <Button title={b7} style={styles.button} onPress={handleClickB7} />
                <Button title={b8} style={styles.button} onPress={handleClickB8} />
                <Button title={b9} style={styles.button} onPress={handleClickB9} />
            </View>
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
    row: {
        flex: 1,
        flexDirection: "row",
    },
    button: {
        width: 100,
        backgroundColor: "red",
    },
});