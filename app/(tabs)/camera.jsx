import React, { useState, useRef } from 'react';
import { CameraView, CameraType, useCameraPermissions } from 'expo-camera';
import { Button, StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { Colors } from '../../constants/Colors';
import * as FileSystem from 'expo-file-system';
import { useNavigation } from '@react-navigation/native';

const API_KEY = 'Vh6kUHax.AhfMWCq9CBJd6f7UNVG6BLmdR8yK5paN';
const API_URL = 'https://vision.foodvisor.io/api/1.0/en/analysis/';

const NUTRITIONIX_APP_ID = 'b174b922';
const NUTRITIONIX_API_KEY = '5f2e48837174b3cb21c56475914a0b6f';

export default function CameraComponent() {
    const [facing, setFacing] = useState('back');
    const [permission, requestPermission] = useCameraPermissions();
    const [analyzedFood, setAnalyzedFood] = useState(null);
    const [isAnalyzing, setIsAnalyzing] = useState(false);
    const cameraRef = useRef(null);
    const navigation = useNavigation();

    if (!permission) {
        return <View />;
    }

    if (!permission.granted) {
        return (
            <View style={styles.container}>
                <Text style={styles.message}>We need your permission to show the camera</Text>
                <Button onPress={requestPermission} title="grant permission" />
            </View>
        );
    }

    function toggleCameraFacing() {
        setFacing(current => (current === 'back' ? 'front' : 'back'));
    }

    const takePicture = async () => {
        if (cameraRef.current) {
            setIsAnalyzing(true);
            const photo = await cameraRef.current.takePictureAsync();
            analyzeFood(photo.uri);
        }
    };

    const fetchCaloriesFromNutritionix = async (foodName) => {
        try {
            const response = await fetch('https://trackapi.nutritionix.com/v2/natural/nutrients', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'x-app-id': NUTRITIONIX_APP_ID,
                    'x-app-key': NUTRITIONIX_API_KEY,
                },
                body: JSON.stringify({
                    query: foodName,
                }),
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();
            if (data.foods && data.foods.length > 0) {
                return data.foods[0].nf_calories;
            } else {
                return 'Unknown';
            }
        } catch (error) {
            console.error('Error fetching calories from Nutritionix:', error);
            return 'UnknowN';
        }
    };

    const analyzeFood = async (imageUri) => {
        try {
            const formData = new FormData();
            formData.append('image', {
                uri: imageUri,
                type: 'image/jpeg',
                name: 'food.jpg',
            });

            const response = await fetch(API_URL, {
                method: 'POST',
                headers: {
                    'Authorization': `Api-Key ${API_KEY}`,
                    'Content-Type': 'multipart/form-data',
                },
                body: formData,
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();
            console.log('Foodvisor API Response:', JSON.stringify(data, null, 2));

            if (data.items && data.items.length > 0 && data.items[0].food && data.items[0].food.length > 0) {
                const foodInfo = data.items[0].food[0].food_info;
                const foodName = foodInfo.display_name;

                const calories = await fetchCaloriesFromNutritionix(foodName);

                setAnalyzedFood({
                    name: foodName,
                    calories: calories,
                });
            } else {
                console.log('No food detected in the image');
                setAnalyzedFood(null);
            }
        } catch (error) {
            console.error('Error analyzing food:', error);
            setAnalyzedFood(null);
        } finally {
            setIsAnalyzing(false);
        }
    };

    const handleConfirm = () => {
        if (analyzedFood) {
            navigation.navigate('calories', { scannedFood: analyzedFood });
            setAnalyzedFood(null);
        }
    };

    return (
        <View style={styles.container}>
            <CameraView
                style={styles.camera}
                type={facing}
                ref={cameraRef}
            >
                <Text style={styles.headerText}>Scan Your Food</Text>
                <View style={styles.buttonContainer}>
                    {/* <TouchableOpacity style={styles.button} onPress={toggleCameraFacing}>
                        <MaterialCommunityIcons name="camera-flip-outline" size={50} color="white" />
                    </TouchableOpacity> */}
                    <TouchableOpacity style={styles.button} onPress={takePicture} disabled={isAnalyzing}>
                        <MaterialCommunityIcons name="camera" size={50} color={isAnalyzing ? "gray" : "white"} />
                    </TouchableOpacity>
                </View>
            </CameraView>
            {isAnalyzing && (
                <View style={styles.analyzingOverlay}>
                    <Text style={styles.analyzingText}>Analyzing food...</Text>
                </View>
            )}
            {analyzedFood && (
                <View style={styles.resultContainer}>
                    <Text style={styles.resultText}>Food: {analyzedFood.name}</Text>
                    <Text style={styles.resultText}>
                        Calories: {analyzedFood.calories === 'Unknown' ? 'Unknown' : `${analyzedFood.calories} kcal`}
                    </Text>
                    {/* Tombol Confirm */}
                    <TouchableOpacity style={{
                        padding: 10,
                        backgroundColor: Colors.GREEN,
                        borderRadius: 10,
                        width: "30%",
                    }} onPress={handleConfirm}>
                        <Text style={{
                            textAlign: "center",
                            fontFamily: "outfit",
                            fontSize: 20,
                        }}>Confirm</Text>
                    </TouchableOpacity>
                </View>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    message: {
        textAlign: 'center',
        paddingBottom: 10,
    },
    camera: {
        flex: 1,
    },
    buttonContainer: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: 'transparent',
        margin: 64,
    },
    button: {
        flex: 0,
        padding:10,
        marginHorizontal:"auto",
        alignSelf: 'flex-end',
        alignItems: 'center',
        marginBottom: 87,
        borderWidth:1,
        borderColor:"white",
        borderRadius:100,
    },
    headerText: {
        backgroundColor: 'transparent',
        fontFamily: "outfit-bold",
        textAlign: "center",
        fontSize: 35,
        color: Colors.ORANGE,
        marginTop: 40,
        marginHorizontal: "auto",
    },
    analyzingOverlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    analyzingText: {
        color: 'white',
        fontSize: 20,
    },
    resultContainer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        padding: 20,
    },
    resultText: {
        fontSize: 18,
        marginBottom: 10,
    },
});