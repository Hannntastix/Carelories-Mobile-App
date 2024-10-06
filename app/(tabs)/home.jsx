import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image, Modal, Alert, Button } from 'react-native';
import { Entypo, Feather, Ionicons } from '@expo/vector-icons';
import { Colors } from '../../constants/Colors';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import StartNewTargetCard from '../../components/MyTarget/StartNewTargetCard';
import { useTarget } from '../TargetContext';
import WeatherWidget from '../../components/Widget/WeatherWidget';
import ActivitySuggestion from '../../components/Activity/ActivitySuggestion';


const calorieOptions = {
  daily: [1000, 1500, 2000, 2500],
  threeDay: [3000, 4500, 6000, 7500],
  sevenDay: [7000, 10500, 14000, 17500],
};

const HomeScreen = () => {
  const { userTarget, updateTargets } = useTarget();
  const [userTargets, setUserTargets] = useState([]);
  const [dailyTarget, setDailyTarget] = useState('');
  const [threeDayTarget, setThreeDayTarget] = useState('');
  const [sevenDayTarget, setSevenDayTarget] = useState('');
  const [isModalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    setUserTargets(userTarget);
  }, [userTarget]);

  const handleSetTarget = (daily, threeDay, sevenDay) => {
    if (!daily || !threeDay || !sevenDay) {
      Alert.alert("Error", "All targets must be selected!");
      return;
    }
    const newTarget = { daily, threeDay, sevenDay, status: 'USE' };
    const updatedTargets = [...userTargets, newTarget];
    setUserTargets(updatedTargets);
    updateTargets(updatedTargets);
    setModalVisible(false);
    setDailyTarget('');
    setThreeDayTarget('');
    setSevenDayTarget('');
  };

  const handleRemoveTarget = (indexToRemove) => {
    const updatedTargets = userTargets.filter((_, index) => index !== indexToRemove);
    setUserTargets(updatedTargets);
    updateTargets(updatedTargets);
  };

  const handleStatusChange = (index) => {
    const updatedTargets = userTargets.map((target, i) => {
      if (i === index && target.status === 'USE') {
        return { ...target, status: 'IN USE' };
      } else if (target.status === 'IN USE') {
        return { ...target, status: 'USE' };
      }
      return target;
    });
    setUserTargets(updatedTargets);
    updateTargets(updatedTargets);
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
  const renderAddButton = () => {
    if (userTargets.length >= 3) {
      return (
        <Text
        style={{
          fontFamily:"outfit-bold",
          textAlign:"center",
          fontSize:15,
          marginTop:40,
        }}
        >(The maximum amount of the target has been reached)</Text>
      )
    }

    return (
      <TouchableOpacity
        style={{
          backgroundColor: Colors.ORANGE,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          margin: 15,
          padding: 5,
          borderRadius: 10,
        }}
        onPress={() => setModalVisible(true)}
      >
        <Ionicons name="add" size={24} color="black" />
        <Text style={{
          fontFamily: 'outfit',
        }}>Add New Target</Text>
      </TouchableOpacity>
    );
  };

  const renderSection = () => {
    if (userTargets.length === 1) {
      return (
        <ScrollView style={{
          flex: 1,
          backgroundColor: '#f5f5f5',
          overflow: 'scroll',
          marginBottom: 40,
        }} >
          {userTargets.map((target, index) => (
            <View key={index} style={styles.section}>
              <View style={styles.nutritionGrid}>
                <Text style={styles.sectionTitle}>Calories Target {index + 1}</Text>
                <TouchableOpacity onPress={() => handleRemoveTarget(index)}>
                  <Feather name="trash-2" size={24} color="black" />
                </TouchableOpacity>
              </View>
              <View style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                backgroundColor: Colors.LIGHTGRAY,
                borderRadius: 10,
                padding: 5,
                width: "100%",
              }}>
                <TouchableOpacity
                  style={{
                    width: '15%',
                    backgroundColor: target.status === 'IN USE' ? "#4CAF50" : "#FFA500",
                    borderRadius: 15,
                    height: "40%",
                    marginVertical: "0",
                    marginLeft: 8,
                    opacity: target.status === 'IN USE' ? 0.6 : 1,
                  }}
                  onPress={() => target.status === 'USE' && handleStatusChange(index)}
                  disabled={target.status === 'IN USE'}
                >
                  <Text style={{
                    color: '#fff',
                    fontSize: 15,
                    marginHorizontal: "auto",
                    marginVertical: "auto",
                    fontFamily: "outfit",
                  }}>{target.status}</Text>
                </TouchableOpacity>

                <View style={styles.nutritionItem}>
                  <Text style={styles.nutritionValue}>{target.daily} kcal</Text>
                  <Text style={styles.nutritionLabel}>1 Day</Text>
                </View>
                <View style={styles.nutritionItem}>
                  <Text style={styles.nutritionValue}>{target.threeDay} kcal</Text>
                  <Text style={styles.nutritionLabel}>3 Days</Text>
                </View>
                <View style={styles.nutritionItem}>
                  <Text style={styles.nutritionValue}>{target.sevenDay} kcal</Text>
                  <Text style={styles.nutritionLabel}>7 Days</Text>
                </View>
              </View>
            </View>
          ))}
          {renderAddButton()}
        </ScrollView>
      )
    } else if (userTargets.length === 2) {
      return (
        <ScrollView style={{
          flex: 1,
          backgroundColor: '#f5f5f5',
          overflow: 'scroll',
          marginBottom: 40,
          height: 550,
        }} >
          {userTargets.map((target, index) => (
            <View key={index} style={styles.section}>
              <View style={styles.nutritionGrid}>
                <Text style={styles.sectionTitle}>Calories Target {index + 1}</Text>
                <TouchableOpacity onPress={() => handleRemoveTarget(index)}>
                  <Feather name="trash-2" size={24} color="black" />
                </TouchableOpacity>
              </View>
              <View style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                backgroundColor: Colors.LIGHTGRAY,
                borderRadius: 10,
                padding: 5,
                width: "100%",
              }}>
                <TouchableOpacity
                  style={{
                    width: '15%',
                    backgroundColor: target.status === 'IN USE' ? "#4CAF50" : "#FFA500",
                    borderRadius: 15,
                    height: "40%",
                    marginVertical: "0",
                    marginLeft: 8,
                    opacity: target.status === 'IN USE' ? 0.6 : 1,
                  }}
                  onPress={() => target.status === 'USE' && handleStatusChange(index)}
                  disabled={target.status === 'IN USE'}
                >
                  <Text style={{
                    color: '#fff',
                    fontSize: 15,
                    marginHorizontal: "auto",
                    marginVertical: "auto",
                    fontFamily: "outfit",
                  }}>{target.status}</Text>
                </TouchableOpacity>

                <View style={styles.nutritionItem}>
                  <Text style={styles.nutritionValue}>{target.daily} kcal</Text>
                  <Text style={styles.nutritionLabel}>1 Day</Text>
                </View>
                <View style={styles.nutritionItem}>
                  <Text style={styles.nutritionValue}>{target.threeDay} kcal</Text>
                  <Text style={styles.nutritionLabel}>3 Days</Text>
                </View>
                <View style={styles.nutritionItem}>
                  <Text style={styles.nutritionValue}>{target.sevenDay} kcal</Text>
                  <Text style={styles.nutritionLabel}>7 Days</Text>
                </View>
              </View>
            </View>
          ))}
          {renderAddButton()}
        </ScrollView>
      )
    } else if (userTargets.length > 2) {
      return (
        <ScrollView style={{
          flex: 1,
          backgroundColor: '#f5f5f5',
          overflow: 'scroll',
          marginBottom: 40,
          height: 1000,
        }} >
          {userTargets.map((target, index) => (
            <View key={index} style={styles.section}>
              <View style={styles.nutritionGrid}>
                <Text style={styles.sectionTitle}>Calories Target {index + 1}</Text>
                <TouchableOpacity onPress={() => handleRemoveTarget(index)}>
                  <Feather name="trash-2" size={24} color="black" />
                </TouchableOpacity>
              </View>
              <View style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                backgroundColor: Colors.LIGHTGRAY,
                borderRadius: 10,
                padding: 5,
                width: "100%",
              }}>
                <TouchableOpacity
                  style={{
                    width: '15%',
                    backgroundColor: target.status === 'IN USE' ? "#4CAF50" : "#FFA500",
                    borderRadius: 15,
                    height: "40%",
                    marginVertical: "0",
                    marginLeft: 8,
                    opacity: target.status === 'IN USE' ? 0.6 : 1,
                  }}
                  onPress={() => target.status === 'USE' && handleStatusChange(index)}
                  disabled={target.status === 'IN USE'}
                >
                  <Text style={{
                    color: '#fff',
                    fontSize: 15,
                    marginHorizontal: "auto",
                    marginVertical: "auto",
                    fontFamily: "outfit",
                  }}>{target.status}</Text>
                </TouchableOpacity>

                <View style={styles.nutritionItem}>
                  <Text style={styles.nutritionValue}>{target.daily} kcal</Text>
                  <Text style={styles.nutritionLabel}>1 Day</Text>
                </View>
                <View style={styles.nutritionItem}>
                  <Text style={styles.nutritionValue}>{target.threeDay} kcal</Text>
                  <Text style={styles.nutritionLabel}>3 Days</Text>
                </View>
                <View style={styles.nutritionItem}>
                  <Text style={styles.nutritionValue}>{target.sevenDay} kcal</Text>
                  <Text style={styles.nutritionLabel}>7 Days</Text>
                </View>
              </View>
            </View>
          ))}
          {renderAddButton()}
        </ScrollView>
      )
    }
  }

  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Carelories</Text>
        <Image
          source={require('./../../assets/images/login.jpeg')}
          style={{ width: 50, height: 30 }}
        />
      </View>

      {/* Greeting and Ideal Calorie Section */}
      <View style={styles.greetingSection}>
        <Text style={styles.greetingText}>
          Hello, <Text style={styles.userName}>Carelorians</Text>!
        </Text>
        <Text style={styles.greetingSubtext}>
          Ready to track your calories journey?
        </Text>

        <View style={styles.idealCalorieContainer}>
          <Text style={styles.idealCalorieTitle}>Ideal Daily Calorie Intake</Text>
          <View style={styles.calorieCardContainer}>
            <View style={styles.calorieCard}>
              <FontAwesome5 name="baby" size={24} color="black" />
              <Text style={styles.ageGroup}>Children</Text>
              <Text style={styles.calorieAmount}>1,200 - 2,000</Text>
              <Text style={styles.calorieUnit}>calories</Text>
            </View>
            <View style={styles.calorieCard}>
              <Ionicons name="body-outline" size={24} color="#2196F3" />
              <Text style={styles.ageGroup}>Teens</Text>
              <Text style={styles.calorieAmount}>1,800 - 2,600</Text>
              <Text style={styles.calorieUnit}>calories</Text>
            </View>
            <View style={styles.calorieCard}>
              <Ionicons name="person-outline" size={24} color="#FF9800" />
              <Text style={styles.ageGroup}>Adults</Text>
              <Text style={styles.calorieAmount}>2,000 - 2,500</Text>
              <Text style={styles.calorieUnit}>calories</Text>
            </View>
          </View>
        </View>
      </View>

      <WeatherWidget city="Jakarta" />

      <ActivitySuggestion />

      {/* Jika userTargets masih kosong, tampilkan StartNewTargetCard */}
      {userTargets.length === 0 ? (
        <StartNewTargetCard onSubmit={handleSetTarget} />
      ) : (
        renderSection()
      )}

      {/* Modal untuk input target baru */}
      <Modal
        visible={isModalVisible}
        transparent={true}
        animationType="slide"
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
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

            <TouchableOpacity
              style={styles.submitButton}
              onPress={() => handleSetTarget(dailyTarget, threeDayTarget, sevenDayTarget)}
            >
              <Text style={styles.submitButtonText}>Submit</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

    </ScrollView>
  );
};

const styles = StyleSheet.create({
  greetingSection: {
    backgroundColor: '#fff',
    margin: 15,
    padding: 20,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  greetingText: {
    fontSize: 24,
    fontWeight: '300',
    marginBottom: 5,
    fontFamily: "outfit",
  },
  userName: {
    fontWeight: 'bold',
    color: '#4CAF50',
    fontFamily: "outfit",
  },
  greetingSubtext: {
    fontSize: 16,
    color: '#666',
    marginBottom: 20,
    fontFamily: "outfit",
  },
  idealCalorieContainer: {
    marginTop: 10,
  },
  idealCalorieTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
    textAlign: 'center',
    fontFamily: "outfit",
  },
  calorieCardContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  calorieCard: {
    backgroundColor: '#f5f5f5',
    borderRadius: 10,
    padding: 15,
    alignItems: 'center',
    width: '30%',
  },
  ageGroup: {
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 5,
    fontFamily: "outfit",
  },
  calorieAmount: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 5,
    fontFamily: "outfit",
  },
  calorieUnit: {
    fontSize: 12,
    color: '#666',
    fontFamily: "outfit",
  },
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    height: "20%",
    overflow: 'scroll',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    backgroundColor: Colors.WHITE,
    borderBottomWidth: 1,
    borderBottomColor: Colors.GRAY,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: Colors.ORANGE,
    fontFamily: "outfit",
  },
  caloriesSummary: {
    backgroundColor: '#fff',
    margin: 15,
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  summaryTitle: {
    fontSize: 18,
    marginBottom: 10,
  },
  summaryNumber: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  progressBar: {
    width: '100%',
    height: 10,
    backgroundColor: '#e0e0e0',
    borderRadius: 5,
  },
  progress: {
    height: '100%',
    backgroundColor: '#4CAF50',
    borderRadius: 5,
  },
  section: {
    backgroundColor: '#fff',
    margin: 5,
    padding: 20,
    borderRadius: 10,
    maxHeight: "100%"
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 0,
    fontFamily: "outfit",
  },
  mealItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  mealImagePlaceholder: {
    width: 50,
    height: 50,
    backgroundColor: '#e0e0e0',
    borderRadius: 25,
    marginRight: 15,
  },
  mealName: {
    fontSize: 16,
  },
  mealCalories: {
    color: '#666',
  },
  scanButton: {
    backgroundColor: '#4CAF50',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 15,
    padding: 15,
    borderRadius: 10,
  },
  scanButtonText: {
    color: '#fff',
    fontSize: 18,
    marginLeft: 10,
    fontFamily: "outfit",
  },
  nutritionGrid: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  nutritionItem: {
    alignItems: 'center',
  },
  nutritionValue: {
    fontSize: 15,
    fontWeight: 'bold',
    fontFamily: "outfit",
    padding: 7,
  },
  nutritionLabel: {
    color: '#666',
    fontFamily: "outfit",
    padding: 7,
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

export default HomeScreen;