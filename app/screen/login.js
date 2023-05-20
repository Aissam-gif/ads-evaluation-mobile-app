import { useState } from 'react';
import {View, Text, SafeAreaView, TextInput, Button, TouchableOpacity} from 'react-native'
import { Stack, useRouter } from 'expo-router';

import AsyncStorage from '@react-native-async-storage/async-storage';



import {COLORS, FONT, icons, images, SIZES} from '../../constants';


const styles = {
    container: {
    flex: 1,
    backgroundColor: '#4FD3DA',
    alignItems: 'center',
    justifyContent: 'center',
    },
    title:{
    fontWeight: "bold",
    fontSize:50,
    color:"#fb5b5a",
    marginBottom: 40,
    },
    inputView:{
    width:"80%",
    backgroundColor:"#3AB4BA",
    borderRadius:25,
    height:50,
    marginBottom:20,
    justifyContent:"center",
    padding:20
    },
    inputText:{
    height:50,
    color:"white"
    },
    forgotAndSignUpText:{
    color:"white",
    fontSize:11
    },
    loginBtn:{
    width:"80%",
    backgroundColor:"#fb5b5a",
    borderRadius:25,
    height:50,
    alignItems:"center",
    justifyContent:"center",
    marginTop:40,
    marginBottom:10
    },
    };



const Login = () => {
    const router = useRouter();

    const onPressLogin = async () => {
        console.log('press')
        await AsyncStorage.setItem('userToken', "validUserToken").then(
            window.location.reload(false)
        )
    };

const onPressSignUp = () => {
        // Do something about signup operation
        };

    return (
        <View style={styles.container}>
<View style={styles.inputView}>
<TextInput
style={styles.inputText}
placeholder="Email"
placeholderTextColor="#003f5c"
/>
</View>
<View style={styles.inputView}>
<TextInput
style={styles.inputText}
secureTextEntry
placeholder="Password"
placeholderTextColor="#003f5c"/>
</View>
<TouchableOpacity
onPress = {onPressLogin}
style={styles.loginBtn}>
<Text style={styles.loginText}>LOGIN </Text>
</TouchableOpacity>
<TouchableOpacity
onPress = {onPressSignUp} style={styles.loginBtn}>
<Text style={styles.loginText}>Signup</Text>
</TouchableOpacity>
        </View>

    )
}

export default Login;