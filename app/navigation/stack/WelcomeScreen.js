
import { View, Text, StyleSheet, ImageBackground, Image, TouchableOpacity, Pressable } from 'react-native';



const WelcomeScreen = ({navigation}) => {
    return (

        <ImageBackground source={require('../../../assets/bg.png')} style={styles.bg} resizeMode="stretch" >
            <View style={styles.container}>
                <Image source={require('../../../assets/carrot.svg')} style={styles.image} />
                <Text style={styles.h2}> Welcome to our store </Text>
                <Text style={styles.h4}> Ger your groceries in as fast as one hour </Text>
                <Pressable style={styles.btn} onPress={() => {navigation.navigate("Login")}}>
                    <Text style={styles.btnText}> Get Started </Text>
                </Pressable>
            </View>
        </ImageBackground>

    );
}


export default WelcomeScreen;


const styles = StyleSheet.create({
    bg: {
        // flex: 1,
        // display: 'flex',
        // flexDirection: 'column',
        // justifyContent: 'center',
        width: '100%',
        height: '100%',
    },
    container: {
        // flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex',
        // width: '300px',
        // height: '100%'
        position: 'absolute',
        bottom: 0,
        alignSelf: 'center',
    },
    image: {
        width: 48.47,
        height: 56.36,
    },
    h2: {
        fontSize: 48,
        textAlign: 'center',
        color: "white",
    },
    h4: {
        fontSize: 16,
        textAlign: 'center',
        color: "rgba(252, 252, 252, 0.7)",
        marginTop: 19,
    },
    btn: {
        backgroundColor: 'rgba(83, 177, 117, 1)',
        padding: 10,
        borderRadius: 5,
        marginTop: 20,
        width: 353,
        height: 67,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 90.84,
        marginTop: 40.88,
        borderRadius: 19,
    },
    btnText: {
        // font-family: Gilroy;
        fontSize: 18,
        fontWeight: 600,
        color: 'rgba(255, 249, 255, 1)        ',
        
    }
})