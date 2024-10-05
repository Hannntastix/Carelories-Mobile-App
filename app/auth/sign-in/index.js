import { View, Text, TextInput, StyleSheet, ToastAndroid, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useRouter } from 'expo-router'
import { Colors } from "../../../constants/Colors"
import { TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../../configs/FirebaseConfig'

export default function SignIn() {
    const router = useRouter();

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleGoBack = () => {
        router.back();
    }

    const onSignIn = () => {
        if (!email || !password) {
            Alert.alert("Error", "Please Fill The Form First");
            return;
        }

        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                router.replace('/home') // Assuming your home route is named '(tabs)'
            })
            .catch((error) => {
            });
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={handleGoBack}>
                <Ionicons name="arrow-back" size={24} color="black" />
            </TouchableOpacity>
            <Text style={styles.title}>Let's Sign You In</Text>
            <Text style={styles.subtitle}>Welcome Back</Text>
            <Text style={styles.subtitle}>You've been missed</Text>

            {/* Email */}
            <View style={styles.inputContainer}>
                <Text style={styles.label}>Email</Text>
                <TextInput
                    onChangeText={setEmail}
                    style={styles.input}
                    placeholder='Enter Email'
                    keyboardType="email-address"
                    autoCapitalize="none"
                />
            </View>

            {/* Password */}
            <View style={styles.inputContainer}>
                <Text style={styles.label}>Password</Text>
                <TextInput
                    onChangeText={setPassword}
                    secureTextEntry={true}
                    style={styles.input}
                    placeholder='Enter Password'
                />
            </View>

            {/* Sign In Button */}
            <TouchableOpacity
                onPress={onSignIn}
                style={styles.signInButton}
            >
                <Text style={styles.buttonText}>Sign In</Text>
            </TouchableOpacity>

            {/* Create Account Button */}
            <TouchableOpacity
                onPress={() => router.push('/auth/sign-up')}
                style={styles.createAccountButton}
            >
                <Text style={styles.createAccountButtonText}>Create Account</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 25,
        backgroundColor: Colors.WHITE,
        height: "100%",
        paddingTop: 40,
    },
    title: {
        fontFamily: "outfit-bold",
        fontSize: 30,
        marginTop: 30,
        color: Colors.ORANGE,
    },
    subtitle: {
        fontFamily: "outfit-bold",
        fontSize: 30,
        color: Colors.DARKORANGE,
        marginTop: 10,
    },
    inputContainer: {
        marginTop: 20
    },
    label: {
        fontFamily: "outfit"
    },
    input: {
        padding: 15,
        borderWidth: 1,
        borderRadius: 15,
        borderColor: Colors.GRAY,
        fontFamily: "outfit",
    },
    signInButton: {
        padding: 15,
        backgroundColor: Colors.ORANGE,
        borderRadius: 15,
        marginTop: 50,
    },
    buttonText: {
        color: Colors.WHITE,
        textAlign: "center"
    },
    createAccountButton: {
        padding: 15,
        backgroundColor: Colors.WHITE,
        borderRadius: 15,
        marginTop: 20,
        borderWidth: 1,
    },
    createAccountButtonText: {
        color: Colors.PRIMARY,
        textAlign: "center"
    }
})