import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image, Modal, TextInput, ToastAndroid, Alert } from 'react-native';
import { Entypo, Feather, Ionicons } from '@expo/vector-icons';
import { Colors } from '../../constants/Colors';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import StartNewTargetCard from '../../components/MyTarget/StartNewTargetCard';

const HomeScreen = () => {
  const [userTargets, setUserTargets] = useState([]); // Array untuk menyimpan banyak target
  const [dailyTarget, setDailyTarget] = useState(''); // Target untuk 1 hari
  const [threeDayTarget, setThreeDayTarget] = useState(''); // Target untuk 3 hari
  const [sevenDayTarget, setSevenDayTarget] = useState(''); // Target untuk 7 hari
  const [isModalVisible, setModalVisible] = useState(false); // State untuk modal tambah target

  // Function untuk menangkap data target dan menambahkan ke userTargets
  const handleSetTarget = (daily, threeDay, sevenDay) => {
    const newTarget = { daily, threeDay, sevenDay }; // Membuat objek target baru

    if (!dailyTarget || !threeDayTarget || !sevenDayTarget) {
      Alert.alert("Error", "All fields must be filled!");
      return;
    };
    setUserTargets([...userTargets, newTarget]); // Menambahkan target baru ke array
    setModalVisible(false); // Tutup modal setelah submit

  };

  const handleRemoveTarget = (indexToRemove) => {
    setUserTargets(userTargets.filter((_, index) => index !== indexToRemove)); // Menghapus target sesuai dengan indeks
  };

  const closeModal = () => {
    setModalVisible(false);
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
            <TouchableOpacity style={styles.calorieCard}>
              <FontAwesome5 name="baby" size={24} color="black" />
              <Text style={styles.ageGroup}>Children</Text>
              <Text style={styles.calorieAmount}>1,200-2,000</Text>
              <Text style={styles.calorieUnit}>calories</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.calorieCard}>
              <Ionicons name="body-outline" size={24} color="#2196F3" />
              <Text style={styles.ageGroup}>Teens</Text>
              <Text style={styles.calorieAmount}>1,800-2,600</Text>
              <Text style={styles.calorieUnit}>calories</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.calorieCard}>
              <Ionicons name="person-outline" size={24} color="#FF9800" />
              <Text style={styles.ageGroup}>Adults</Text>
              <Text style={styles.calorieAmount}>2,000-2,500</Text>
              <Text style={styles.calorieUnit}>calories</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {/* Jika userTargets masih kosong, tampilkan StartNewTargetCard */}
      {userTargets.length === 0 && (
        <StartNewTargetCard
          onSubmit={(daily, threeDay, sevenDay) => handleSetTarget(daily, threeDay, sevenDay)}
        />
      )}

      {/* Jika sudah ada target, render setiap target dari userTargets */}
      {userTargets.length > 0 && userTargets.map((target, index) => (
        <View key={index} style={styles.section}>
          <View style={styles.nutritionGrid}>
            <Text style={styles.sectionTitle}>Calories Target {index + 1}</Text> {/* Menampilkan urutan target */}
            <TouchableOpacity onPress={() => handleRemoveTarget(index)}><Feather name="trash-2" size={24} color="black" /></TouchableOpacity>
          </View>
          <View style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            backgroundColor: Colors.LIGHTGRAY,
            borderRadius: 10,
            padding: 10,
            width: "100%",
          }}>
            <TouchableOpacity style={{ width: '15%', backgroundColor: "#4CAF50", borderRadius: 15, height: "40%", marginVertical: "auto", marginLeft: 8, }}>
              <Text style={{
                color: '#fff',
                fontSize: 15,
                marginHorizontal: "auto",
                marginVertical: "auto",
                fontFamily: "outfit",
              }}>USE</Text>
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

      {/* Tampilkan tombol untuk menambah target baru jika sudah ada target pertama */}
      {userTargets.length > 0 && (
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
          onPress={() => setModalVisible(true)}>
          <Ionicons name="add" size={24} color="black" />
          <Text>Add New Target</Text>
        </TouchableOpacity>
      )}

      {/* Modal untuk input target baru */}
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
                borderBottomWidth: 0.5,
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
              onPress={() => handleSetTarget(dailyTarget, threeDayTarget, sevenDayTarget)}
            >
              <Text style={{ color: Colors.WHITE, fontFamily: 'outfit-medium', fontSize: 17 }}>Submit</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {/* Tombol Scan Makanan */}
      <TouchableOpacity style={styles.scanButton}>
        <Ionicons name="camera-outline" size={24} color="#fff" />
        <Text style={styles.scanButtonText}>Scan Food</Text>
      </TouchableOpacity>
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
    margin: 15,
    padding: 20,
    borderRadius: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
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
});

export default HomeScreen;