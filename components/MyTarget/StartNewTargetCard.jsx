import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Modal, TextInput, ToastAndroid } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { Colors } from '../../constants/Colors';
import { Alert } from 'react-native';

export default function StartNewTargetCard({ onSubmit }) {
    const [isModalVisible, setModalVisible] = useState(false); // state untuk modal
    const [dailyTarget, setDailyTarget] = useState(''); // state untuk target 1 hari
    const [threeDayTarget, setThreeDayTarget] = useState(''); // state untuk target 3 hari
    const [sevenDayTarget, setSevenDayTarget] = useState(''); // state untuk target 7 hari

    // Function untuk handle submit, kirim data ke parent
    const handleSubmit = () => {
        // Validasi input
        if (!dailyTarget || !threeDayTarget || !sevenDayTarget) {
            // Tampilkan pesan peringatan
            Alert.alert("Error", "All fields must be filled!");
            return; // Menghentikan eksekusi jika ada input yang kosong
        }

        // Jika semua input sudah terisi, lanjutkan dengan onSubmit
        onSubmit(dailyTarget, threeDayTarget, sevenDayTarget);

        // Menutup modal setelah berhasil submit
        setModalVisible(false);
    };

    const closeModal = () => {
        setModalVisible(false);
    }

    return (
        <View
            style={{
                padding: 20,
                marginTop: 50,
                display: 'flex',
                alignItems: "center",
                marginHorizontal: 15,
                borderRadius: 15,
                gap: 25,
                backgroundColor: Colors.WHITE,
            }}
        >
            <Entypo name="emoji-sad" size={28} color="black" />
            <Text
                style={{
                    fontSize: 25,
                    fontFamily: "outfit-medium",
                }}
            >No target has been set yet</Text>
            <Text
                style={{
                    fontSize: 18,
                    fontFamily: "outfit",
                    textAlign: "center",
                    color: Colors.GRAY,
                }}
            >Let's start a healthy journey by setting the weekly calorie target!</Text>

            <TouchableOpacity
                style={{
                    padding: 10,
                    backgroundColor: Colors.GREEN,
                    borderRadius: 15,
                    paddingHorizontal: 30,
                }}
                onPress={() => setModalVisible(true)} // buka modal saat tombol ditekan
            >
                <Text
                    style={{
                        color: Colors.WHITE,
                        fontFamily: "outfit-medium",
                        fontSize: 17,
                    }}
                >Start A Journey</Text>
            </TouchableOpacity>

            {/* Modal untuk input target */}
            <Modal
                visible={isModalVisible}
                transparent={true}
                animationType="fade"
                onRequestClose={() => setModalVisible(false)}
            >
                <View
                    style={{
                        flex: 1,
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: 'rgba(0,0,0,0.5)',
                    }}
                >
                    <View
                        style={{
                            width: 300,
                            padding: 20,
                            backgroundColor: 'white',
                            borderRadius: 10,
                        }}
                    >
                        <View style={{
                            flexDirection: 'row',
                        }}>
                            <Text style={{ fontSize: 18, fontFamily: 'outfit-medium', marginBottom: 15, marginRight: 50, }}>Set Your Calorie Targets</Text>
                            <TouchableOpacity
                                onPress={() => closeModal()}
                            ><Entypo name="cross" size={24} color="black" /></TouchableOpacity>
                        </View>

                        <TextInput
                            placeholder="Daily Target (kcal)"
                            keyboardType="numeric"
                            value={dailyTarget}
                            onChangeText={setDailyTarget}
                            style={{
                                borderBottomWidth: 1,
                                marginBottom: 20,
                                padding: 5,
                                fontSize: 16,
                            }}
                        />

                        <TextInput
                            placeholder="3-Day Target (kcal)"
                            keyboardType="numeric"
                            value={threeDayTarget}
                            onChangeText={setThreeDayTarget}
                            style={{
                                borderBottomWidth: 1,
                                marginBottom: 20,
                                padding: 5,
                                fontSize: 16,
                            }}
                        />

                        <TextInput
                            placeholder="7-Day Target (kcal)"
                            keyboardType="numeric"
                            value={sevenDayTarget}
                            onChangeText={setSevenDayTarget}
                            style={{
                                borderBottomWidth: 1,
                                marginBottom: 20,
                                padding: 5,
                                fontSize: 16,
                            }}
                        />

                        <TouchableOpacity
                            style={{
                                padding: 10,
                                backgroundColor: Colors.GREEN,
                                borderRadius: 15,
                                alignItems: 'center',
                            }}
                            onPress={handleSubmit} // submit target
                        >
                            <Text style={{ color: Colors.WHITE, fontFamily: 'outfit-medium', fontSize: 17 }}>Submit</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </View>
    );
}
