import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import { Colors } from '@/constants/Colors'
import { useRouter } from 'expo-router'

export default function Login() {

    const router = useRouter();

    return (
        <ScrollView style={styles.mainContainer}>
            <Image source={require('./../assets/images/login.jpeg')}
                style={{
                    width: '100%',
                    height: 520,
                }}
            />
            <View style={styles.container}>
                <Text style={{
                    color: Colors.ORANGE,
                    fontSize: 30,
                    fontFamily: 'outfit-bold',
                    textAlign: 'center',
                    marginTop:10,
                }}>Welcome to Carelories</Text>

                <Text style={{
                    fontFamily: 'outfit-bold',
                    fontSize: 20,
                    textAlign: 'center',
                    color: Colors.RED,
                    marginTop: 20,
                }}>Know What You Eat, Transform How You Live.</Text>
                <Text style={{
                    fontFamily: 'outfit',
                    fontSize: 17,
                    textAlign: 'center',
                    color: Colors.GRAY,
                }}>Discover the calories value of your meals in seconds! With Carelories, you can scan any food item and get instant insights on calories. Take control of your diet and achieve your fitness goals effortlessly!</Text>

                <TouchableOpacity style={styles.button}
                onPress={() => router.push('auth/sign-in')}
                >
                    <Text style={{
                        color: Colors.WHITE,
                        textAlign: 'center',
                        fontFamily: "outfit",
                        fontSize: 17,
                    }}>Get Started</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>

    )
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: Colors.WHITE,
      },
    container: {
        backgroundColor: Colors.WHITE,
        marginTop: -20,
        height: 'auto',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        padding: 25,
        shadowColor: Colors.GRAY,
        shadowOffset: {
            width: 0,
            height: -5,
        },
        shadowOpacity: 0.5,
        shadowRadius: 4,
        elevation: 5,
    },
    button: {
        padding: 15,
        backgroundColor: Colors.ORANGE,
        borderRadius: 99,
        marginVertical: '10%',
        marginHorizontal: '20%',
    }
})