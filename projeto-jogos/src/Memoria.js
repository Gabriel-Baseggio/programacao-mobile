import { View, StyleSheet, Text } from "react-native";

export default function Memoria({  }) {
    

    return (
        <View style={styles.container}>
            <Text>Memória</Text>
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
});