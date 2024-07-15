
import { View, Text, StyleSheet, ImageBackground, Image, TouchableOpacity, Pressable } from 'react-native';



const LoginScreen = () => {

    return (
        <View style={styles.container}>
            <Image source={require("../../../assets/loginImg.png")} style={styles.img}></Image>
            <View style={styles.login}>
                <Text style={styles.login_text}>
                    Get your groceries nectar
                </Text>
                <View style={styles.phone}>
                    <View style={styles.flag}>
                        <Image source={require("../../../assets/flag.png")}></Image>
                    </View>
                    <Text style={styles.phone_text}>
                        +880
                    </Text>
                </View>
                <View style={styles.social_text}>
                    Or connect with social media
                </View>
                <Pressable style={styles.btn_gg} onPress={() => {navigation.navigate("Login")}}>
                    <Image source={require("../../../assets/gg.svg")}></Image>
                    {/* <Text style={styles.btnText}> Continue with Google </Text> */}
                </Pressable>
                <Pressable style={styles.btn_fb} onPress={() => {navigation.navigate("Login")}}>
                    <Image source={require("../../../assets/fb.svg")}></Image>
                    {/* <Text style={styles.btnText}> Continue with Facebook </Text> */}
                </Pressable>
            </View>
        </View>
    );
}


export default LoginScreen;


const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        display: 'flex',
        height: '100%',
    },

    img: {
        alignSelf: 'flex-end',
    },
    login: {
        padding: 24.53
    },
    login_text: {
        fontSize: 26,
        fontWeight: 'bold',
        color: 'black',
        marginTop: 24.53,
        fontWeight: 600,
        width: 222
    },
    phone: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 24.53,
        borderBottomWidth: 1,
        borderBottomColor: 'rgba(226, 226, 226, 1)',
        paddingBottom: 10
    },
    flag: {
        marginRight: 10
    },
    phone_text: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'black',
        fontWeight: 600,
    },
    social_text: {
        fontSize: 16,
        // fontWeight: 'bold',
        color: 'black',
        marginTop: 24.53,
        fontWeight: 600,
        textAlign: 'center'
    },
    btn_gg: {
        backgroundColor: 'rgba(83, 131, 236, 1)        ',
        padding: 10,
        borderRadius: 5,
        marginTop: 20,
        width: 353,
        height: 67,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 19,
        alignSelf: 'center',
    },
    btn_fb: {
        backgroundColor: 'rgba(74, 102, 172, 1)',
        padding: 10,
        borderRadius: 5,
        marginTop: 20,
        width: 353,
        height: 67,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 19,
        alignSelf: 'center',
    },
    btnText: {
        // font-family: Gilroy;
        fontSize: 18,
        fontWeight: 600,
        color: 'rgba(255, 249, 255, 1)        ',
        
    }
})