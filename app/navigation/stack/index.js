import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { View, Text, StyleSheet } from 'react-native';

import WelcomeScreen from './WelcomeScreen';
import LoginScreen from './LoginScreen';

const Stack = createNativeStackNavigator();


const StackNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={
                {
                    headerShown: false
                }

            }>
                <Stack.Screen name="Home" component={WelcomeScreen} />
                <Stack.Screen name="Login" component={LoginScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}


export default StackNavigator;

const styles = StyleSheet.create({

})