import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Colors } from '../../constants/Colors';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

const HomeScreen = () => {
  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Carelories</Text>
        <Image source={require('./../../assets/images/login.jpeg')}
          style={{
            width: 50,
            height: 30,
          }}
        />
        {/* Foto profil pengguna bisa ditempatkan di sini */}
      </View>

      {/* Greeting and Ideal Calorie Section */}
      <View style={styles.greetingSection}>
        <Text style={styles.greetingText}>
          Hello, <Text style={styles.userName}>Raihan</Text>!
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

      {/* Statistik Nutrisi */}
      <View style={styles.section}>
        <View style={styles.nutritionGrid}>
          <Text style={styles.sectionTitle}>Calories Target</Text>
          <TouchableOpacity>
            <Ionicons name="add" size={24} color="black" />
          </TouchableOpacity>
        </View>
        {/* Grafik atau ikon untuk setiap nutrisi bisa ditambahkan di sini */}
        <View style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          backgroundColor: Colors.LIGHTGRAY,
          borderRadius: 10,
        }}>
          <Text style={styles.nutritionLabel}>IN USE</Text>
          <View style={styles.nutritionItem}>
            <Text style={styles.nutritionValue}>2,000 g</Text>
            <Text style={styles.nutritionLabel}>1 Day</Text>
          </View>
          <View style={styles.nutritionItem}>
            <Text style={styles.nutritionValue}>6,000 g</Text>
            <Text style={styles.nutritionLabel}>3 Days</Text>
          </View>
          <View style={styles.nutritionItem}>
            <Text style={styles.nutritionValue}>14,000 g</Text>
            <Text style={styles.nutritionLabel}>7 Days</Text>
          </View>
        </View>

        <View style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          backgroundColor: Colors.LIGHTGRAY,
          borderRadius: 10,
          marginVertical: 15,
          marginTop: 40,
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
            <Text style={styles.nutritionValue}>1,500 g</Text>
            <Text style={styles.nutritionLabel}>1 Day</Text>
          </View>
          <View style={styles.nutritionItem}>
            <Text style={styles.nutritionValue}>4,500 g</Text>
            <Text style={styles.nutritionLabel}>3 Days</Text>
          </View>
          <View style={styles.nutritionItem}>
            <Text style={styles.nutritionValue}>10,500 g</Text>
            <Text style={styles.nutritionLabel}>7 Days</Text>
          </View>
        </View>

        <View style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          backgroundColor: Colors.LIGHTGRAY,
          borderRadius: 10,
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
            <Text style={styles.nutritionValue}>1,000 g</Text>
            <Text style={styles.nutritionLabel}>1 Day</Text>
          </View>
          <View style={styles.nutritionItem}>
            <Text style={styles.nutritionValue}>3,000 g</Text>
            <Text style={styles.nutritionLabel}>3 Days</Text>
          </View>
          <View style={styles.nutritionItem}>
            <Text style={styles.nutritionValue}>7,000 g</Text>
            <Text style={styles.nutritionLabel}>7 Days</Text>
          </View>
        </View>
      </View>
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
    fontSize: 18,
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