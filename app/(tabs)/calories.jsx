import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import React, { useEffect } from 'react'
import { Colors } from '../../constants/Colors';
import { useTarget } from '../TargetContext';
import StartNewTargetCard from '../../components/MyTarget/StartNewTargetCard';
import { useState } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';

export default function Calories() {
  const { getActiveTarget } = useTarget();
  const activeTarget = getActiveTarget() || {};
  const [scannedFoods, setScannedFoods] = useState([]);
  const navigation = useNavigation();
  const route = useRoute();

  useEffect(() => {
    if (route.params?.scannedFood) {
      const newFood = {
        ...route.params.scannedFood,
        time: new Date().toLocaleString(),
      };
      setScannedFoods(prevFoods => [...prevFoods, newFood]);
    }
  }, [route.params?.scannedFood]);

  const totalCalories = scannedFoods.reduce((sum, food) => sum + (parseInt(food.calories) || 0), 0);
  const progress = activeTarget.daily ? (totalCalories / activeTarget.daily) * 100 : 0;
  const progress2 = activeTarget.threeDay ? (totalCalories / activeTarget.threeDay) * 100 : 0;
  const progress3 = activeTarget.sevenDay ? (totalCalories / activeTarget.sevenDay) * 100 : 0;

  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Carelories</Text>
        <TouchableOpacity>
          <Image source={require('./../../assets/images/login.jpeg')}
            style={{
              width: 50,
              height: 30,
            }}
          />
        </TouchableOpacity>
      </View>

      {/* Ringkasan Kalori */}
      <View style={styles.caloriesSummary}>
        <Text style={styles.summaryTitle}>Today's Calories</Text>
        {activeTarget.daily ? (
          <Text style={styles.summaryNumber}>{totalCalories} kcal / {activeTarget.daily}</Text>
        ) : (
          <Text style={styles.summaryNumber}>-</Text>
        )}
        <View style={styles.progressBar}>
          <View style={[styles.progress, { width: `${Math.min(progress, 100)}%` }]} />
        </View>
        <Text style={styles.summaryTitle}>Progress : {progress.toFixed(1)}%</Text>
      </View>

      {/* Makanan Hari Ini */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Today's Meals</Text>
        {scannedFoods.map((food, index) => (
          <TouchableOpacity key={index} style={styles.mealItem}>
            <View style={styles.mealImagePlaceholder} />
            <View>
              <Text style={styles.mealName}>{food.name}</Text>
              <Text style={styles.mealTime}>{food.time}</Text>
              <Text style={styles.mealCalories}>{food.calories} cal</Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>

      {/* Calories Recap */}
      <View style={styles.section}>
        <View style={{
          padding: 10,
          borderRadius: 10,
          alignItems: 'center',
          marginTop: 5,
        }}>
          < Text style={{
            fontSize: 23,
            marginBottom: 10,
            fontFamily: "outfit-bold",
            color: Colors.ORANGE,
            alignItems: 'center'
          }} >Calories Recap</Text>
        </View>
        < View style={{
          backgroundColor: Colors.ORANGE,
          margin: 15,
          padding: 20,
          borderRadius: 10,
          alignItems: 'center',
          marginTop: 10
        }} >
          {/* Grafik atau ilustrasi ringkasan kalori bisa ditempatkan di sini */}
          < Text style={styles.summaryTitle} >Calories for last 3 Days</Text>
          {activeTarget.daily ? (
            <Text style={styles.summaryNumber}>{totalCalories} kcal / {activeTarget.threeDay}</Text>
          ) : (
            <Text style={styles.summaryNumber}>-</Text>
          )}
          <View style={styles.progressBar}>
            <View style={[styles.progress, { width: `${Math.min(progress2, 100)}%` }]} />
          </View>
          <Text style={styles.summaryTitle}>Progress : {progress2.toFixed(1)}%</Text>
        </View >
        < View style={{
          backgroundColor: Colors.ORANGE,
          margin: 15,
          padding: 20,
          borderRadius: 10,
          alignItems: 'center',
          marginTop: 10
        }} >
          {/* Grafik atau ilustrasi ringkasan kalori bisa ditempatkan di sini */}
          < Text style={styles.summaryTitle} >Calories for last 7 Days</Text>
          {activeTarget.daily ? (
            <Text style={styles.summaryNumber}>{totalCalories} kcal / {activeTarget.sevenDay}</Text>
          ) : (
            <Text style={styles.summaryNumber}>-</Text>
          )}
          <View style={styles.progressBar}>
            <View style={[styles.progress, { width: `${Math.min(progress3, 100)}%` }]} />
          </View>
          <Text style={styles.summaryTitle}>Progress : {progress3.toFixed(1)}%</Text>
        </View >
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    backgroundColor: Colors.WHITE,
    borderBottomColor: Colors.GRAY,
    borderBottomWidth: 1,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: Colors.ORANGE,
    fontFamily: "outfit",
  },
  container: {
    flex: 1,
    backgroundColor: Colors.LIGHTGRAY,
  },
  caloriesSummary: {
    backgroundColor: Colors.ORANGE,
    margin: 15,
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 10
  },
  summaryTitle: {
    fontSize: 18,
    marginBottom: 10,
    fontFamily: "outfit",
    color: Colors.WHITE,
  },
  summaryNumber: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
    fontFamily: "outfit",
    color: Colors.WHITE,
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
    backgroundColor: Colors.WHITE,
    margin: 15,
    padding: 20,
    borderRadius: 15,
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
    backgroundColor: Colors.ORANGE,
    borderRadius: 25,
    marginRight: 15,
  },
  mealName: {
    fontFamily: "outfit",
    fontSize: 16,
  },
  mealTime: {
    fontFamily: "outfit",
    fontSize: 10,
    color: Colors.GRAY,
    marginTop: 5,
    marginBottom: 5,
  },
  mealCalories: {
    color: '#666',
  },
})