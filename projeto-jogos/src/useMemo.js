import {useEffect, useMemo, useState} from 'react';
import { Button, StyleSheet, Text, View} from 'react-native';

export default function useMemo() {
    const [contador, setContador] = useState(0);
    const [contador2, setContador2] = useState(0);

    useEffect(() => {
        console.log("Alterou o valor de contador");
    }, [contador]);

    useEffect(() => {
        console.log("Alterou o valor de contador 2");
    }, [contador2]);

    const array = useMemo(() => {
      console.log("Passou pelo useMemo");
      const itens = [...Array(contador)];
      return (
        <View>
          {
            itens.map((item, i) => {
              console.log("Passou dentro do map, index: " + i);
              return (
                <View key={i}>
                  <Text>
                    Item {i + 1}
                  </Text>
                </View>
              )
            })
          }
        </View>
      )
    }, [contador])

    console.log("Passou antes do return");

    return (
        <View style={styles.container}>
            <Text>
                Contador: {contador}
            </Text>
            <Button title='Click' onPress={() => setContador(contador + 1)} />
            <Text>
                Contador 2: {contador2}
            </Text>
            <Button title='Click 2' onPress={() => setContador2(contador2 + 1)} />
            {array}
        </View>

    );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
