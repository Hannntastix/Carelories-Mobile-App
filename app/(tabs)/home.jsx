import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Colors } from '../../constants/Colors';

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

      {/* Tombol Scan Makanan */}
      <TouchableOpacity style={styles.scanButton}>
        <Ionicons name="camera-outline" size={24} color="#fff" />
        <Text style={styles.scanButtonText}>Scan Food</Text>
      </TouchableOpacity>

      {/* Statistik Nutrisi */}
      <View style={styles.section}>
        <View style={styles.nutritionGrid}>
          <Text style={styles.sectionTitle}>Calories Target</Text>
          <TouchableOpacity>
            <Ionicons name="add" size={24} color="black" />
          </TouchableOpacity>
        </View>
        {/* Grafik atau ikon untuk setiap nutrisi bisa ditambahkan di sini */}
        <View style={styles.nutritionGrid}>
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
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
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
  },
  nutritionLabel: {
    color: '#666',
    fontFamily: "outfit",
  },
});

export default HomeScreen;