import { StyleSheet, View, Text, Button } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Pagina1 from './Pagina1'
import Pagina2 from './Pagina2'

const Stack = createNativeStackNavigator();

export default function Home() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={({ navigation }) => <View>
                        <Text>Home</Text>
                        <Button title='1' onPress={() => navigation.navigate("Pagina1")} />
                        <Button title='2' onPress={() => navigation.navigate("Pagina2")} />
                    </View>} />
                <Stack.Screen name="Pagina1" component={Pagina1} />
                <Stack.Screen name="Pagina2" component={Pagina2} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}