import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Modal, ScrollView, SafeAreaView, StyleSheet } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { Colors } from '../../constants/Colors';

const calorieOptions = {
  daily: [1000, 1500, 2000, 2500],
  threeDay: [3000, 4500, 6000, 7500],
  sevenDay: [7000, 10500, 14000, 17500],
};

export default function StartNewTargetCard({ onSubmit }) {
    const [isModalVisible, setModalVisible] = useState(false);
    const [dailyTarget, setDailyTarget] = useState('');
    const [threeDayTarget, setThreeDayTarget] = useState('');
    const [sevenDayTarget, setSevenDayTarget] = useState('');

    const handleSubmit = () => {
        if (!dailyTarget || !threeDayTarget || !sevenDayTarget) {
            Alert.alert("Error", "All targets must be selected!");
            return;
        }
        onSubmit(dailyTarget, threeDayTarget, sevenDayTarget);
        setModalVisible(false);
    };

    const renderCalorieButtons = (options, setter) => (
        <View style={styles.buttonContainer}>
            {options.map((calories) => (
                <TouchableOpacity
                    key={calories}
                    style={styles.calorieButton}
                    onPress={() => setter(calories.toString())}
                >
                    <Text style={styles.calorieButtonText}>{calories}</Text>
                </TouchableOpacity>
            ))}
        </View>
    );

    return (
        <View style={styles.container}>
            <Entypo name="emoji-sad" size={28} color="black" />
            <Text style={styles.title}>No target has been set yet</Text>
            <Text style={styles.subtitle}>Let's start a healthy journey by setting the weekly calorie target!</Text>

            <TouchableOpacity style={styles.button} onPress={() => setModalVisible(true)}>
                <Text style={styles.buttonText}>Start A Journey</Text>
            </TouchableOpacity>

            <Modal
                visible={isModalVisible}
                transparent={true}
                animationType="slide"
                onRequestClose={() => setModalVisible(false)}
            >
                <SafeAreaView style={styles.modalContainer}>
                    <ScrollView contentContainerStyle={styles.modalContent}>
                        <View style={styles.modalHeader}>
                            <Text style={styles.modalTitle}>Set Your Calorie Targets</Text>
                            <TouchableOpacity onPress={() => setModalVisible(false)}>
                                <Entypo name="cross" size={24} color="black" />
                            </TouchableOpacity>
                        </View>

                        <Text style={styles.sectionTitle}>Daily Target (kcal)</Text>
                        {renderCalorieButtons(calorieOptions.daily, setDailyTarget)}
                        <Text style={styles.selectedTarget}>Selected: {dailyTarget} kcal</Text>

                        <Text style={styles.sectionTitle}>3-Day Target (kcal)</Text>
                        {renderCalorieButtons(calorieOptions.threeDay, setThreeDayTarget)}
                        <Text style={styles.selectedTarget}>Selected: {threeDayTarget} kcal</Text>

                        <Text style={styles.sectionTitle}>7-Day Target (kcal)</Text>
                        {renderCalorieButtons(calorieOptions.sevenDay, setSevenDayTarget)}
                        <Text style={styles.selectedTarget}>Selected: {sevenDayTarget} kcal</Text>

                        <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
                            <Text style={styles.submitButtonText}>Submit</Text>
                        </TouchableOpacity>
                    </ScrollView>
                </SafeAreaView>
            </Modal>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        marginTop: 50,
        alignItems: "center",
        marginHorizontal: 15,
        borderRadius: 15,
        backgroundColor: Colors.WHITE,
    },
    title: {
        fontSize: 25,
        fontFamily: "outfit-medium",
        marginVertical: 10,
    },
    subtitle: {
        fontSize: 18,
        fontFamily: "outfit",
        textAlign: "center",
        color: Colors.GRAY,
        marginBottom: 20,
    },
    button: {
        padding: 10,
        backgroundColor: Colors.GREEN,
        borderRadius: 15,
        paddingHorizontal: 30,
    },
    buttonText: {
        color: Colors.WHITE,
        fontFamily: "outfit-medium",
        fontSize: 17,
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)',
    },
    modalContent: {
        backgroundColor: Colors.WHITE,
        margin: 20,
        borderRadius: 20,
        padding: 35,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    modalHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 15,
    },
    modalTitle: {
        fontSize: 18,
        fontFamily: 'outfit-medium',
    },
    sectionTitle: {
        fontSize: 16,
        fontFamily: 'outfit-medium',
        marginTop: 15,
        marginBottom: 10,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
    },
    calorieButton: {
        backgroundColor: Colors.LIGHTGRAY,
        padding: 10,
        borderRadius: 10,
        marginBottom: 10,
        width: '48%',
        alignItems: 'center',
    },
    calorieButtonText: {
        fontFamily: 'outfit',
        fontSize: 16,
    },
    selectedTarget: {
        fontFamily: 'outfit',
        fontSize: 14,
        color: Colors.GRAY,
        marginTop: 5,
        marginBottom: 15,
    },
    submitButton: {
        padding: 10,
        backgroundColor: Colors.GREEN,
        borderRadius: 15,
        alignItems: 'center',
        marginTop: 20,
    },
    submitButtonText: {
        color: Colors.WHITE,
        fontFamily: 'outfit-medium',
        fontSize: 17,
    },
});