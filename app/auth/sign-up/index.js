import { View, Text, TextInput, StyleSheet, ToastAndroid, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation, useRouter } from 'expo-router'
import { Colors } from '../../../constants/Colors';
import { TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from './../../../configs/FirebaseConfig';

export default function SignUp() {

    const navigation = useNavigation();

    const router = useRouter();

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [fullName, setFullName] = useState();

    const handleGoBack = () => {
        if (router.canGoBack()) {
            router.replace('auth/sign-in');
        } else {
            router.back();
        }
    }

    useEffect(() => {
        navigation.setOptions({
            headerShown: false,
        })
    }, [])

    const onCreateAccount = () => {
        if (!email || !password || !fullName) {
            Alert.alert("Error", "Please Complete All The Details");
            return;
        }

        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed up 
                const user = userCredential.user;
                router.replace('/home')
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorMessage, errorCode);
                // ..
            });
    }

    return (
        <View
            style={{
                padding: 25,
                paddingTop: 40,
                backgroundColor: Colors.WHITE,
                height: "100%",
            }}
        >
            <TouchableOpacity onPress={handleGoBack}>
                <Ionicons name="arrow-back" size={24} color="black" />
            </TouchableOpacity>
            <Text style={{
                fontFamily: "outfit-bold",
                fontSize: 30,
                marginTop: 30,
                color:Colors.ORANGE,
                textAlign:"center",
            }}>Create New Account</Text>

            {/* User FullName */}
            <View
                style={{
                    marginTop: 50
                }}
            >
                <Text
                    style={{
                        fontFamily: "outfit"
                    }}
                >Fullname</Text>
                <TextInput
                    onChangeText={(value) => setFullName(value)}
                    style={styles.input} placeholder='Enter Fullname' />
            </View>

            {/* Email */}
            <View
                style={{
                    marginTop: 20
                }}
            >
                <Text
                    style={{
                        fontFamily: "outfit"
                    }}
                >Email</Text>
                <TextInput
                    onChangeText={(value) => setEmail(value)}
                    style={styles.input} placeholder='Enter Email' />
            </View>

            {/* Password */}
            <View
                style={{
                    marginTop: 20
                }}
            >
                <Text
                    style={{
                        fontFamily: "outfit"
                    }}
                >Password</Text>
                <TextInput
                    onChangeText={(value) => setPassword(value)}
                    secureTextEntry={true}
                    style={styles.input}
                    placeholder='Enter Password' />
            </View>

            {/* Create Account Button */}
            <TouchableOpacity
                onPress={onCreateAccount}
                style={{
                    padding: 15,
                    backgroundColor:Colors.ORANGE,
                    borderRadius: 15,
                    marginTop: 50,
                }}
            >
                <Text style={{
                    color: Colors.WHITE,
                    textAlign: "center",
                }}>Create Account</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        padding: 15,
        borderWidth: 1,
        borderRadius: 15,
        borderColor: Colors.GRAY,
        fontFamily: "outfit",
    }
})