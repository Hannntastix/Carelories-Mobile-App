import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import React from 'react'
import { Colors } from '../../constants/Colors';

export default function Calories() {
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
        {/* Foto profil pengguna bisa ditempatkan di sini */}
      </View>
      <TouchableOpacity style={{
        padding: 10,
        marginTop: 8,
        width: '80%',
        alignItems: 'center',
        backgroundColor: Colors.LIGHTGRAY,
        borderColor: Colors.GRAY,
        borderWidth: 1,
        borderRadius: 30,
        marginHorizontal: 'auto',
        color: Colors.ORANGE,
      }}>
        Choose Your Calories Target To Be Displayed
        <Ionicons name="arrow-down" size={20} color={Colors.ORANGE} />
      </TouchableOpacity>
      {/* Ringkasan Kalori */}
      < View style={styles.caloriesSummary} >
        {/* Grafik atau ilustrasi ringkasan kalori bisa ditempatkan di sini */}
        < Text style={styles.summaryTitle} > Today's Calories</Text>
        < Text style={styles.summaryNumber} > 1,200 / 2,000</Text >
        <View style={styles.progressBar}>
          <View style={[styles.progress, { width: '60%' }]} />
        </View>
        < Text style={styles.summaryTitle} >Progress : 60%</Text>
      </View >

      {/* Makanan Hari Ini */}
      < View style={styles.section} >
        <Text style={styles.sectionTitle}>Today's Meals</Text>
        {/* Daftar makanan dengan foto makanan di samping setiap item */}
        <TouchableOpacity style={styles.mealItem}>
          <View style={styles.mealImagePlaceholder} />
          <View>
            <Text style={styles.mealName}>Nasi Uduk</Text>
            <Text style={styles.mealTime}>08:53 29/09/2024</Text>
            <Text style={styles.mealCalories}>220 cal</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.mealItem}>
          <View style={styles.mealImagePlaceholder} />
          <View>
            <Text style={styles.mealName}>Nasi Padang</Text>
            <Text style={styles.mealTime}>13:34 29/09/2024</Text>
            <Text style={styles.mealCalories}>550 cal</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.mealItem}>
          <View style={styles.mealImagePlaceholder} />
          <View>
            <Text style={styles.mealName}>Cream Soup</Text>
            <Text style={styles.mealCalories}>430 cal</Text>
          </View>
        </TouchableOpacity>
        {/* Tambahkan item makanan lainnya di sini */}
      </View >
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
          < Text style={styles.summaryNumber} > 4,800 / 6,000</Text >
          <View style={styles.progressBar}>
            <View style={[styles.progress, { width: '80%' }]} />
          </View>
          < Text style={styles.summaryTitle} >Progress : 80%</Text>
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
          < Text style={styles.summaryNumber} > 4,800 / 14,000</Text >
          <View style={styles.progressBar}>
            <View style={[styles.progress, { width: '34%' }]} />
          </View>
          < Text style={styles.summaryTitle} >Progress : 34,28%</Text>
        </View >
      </View>
    </ScrollView>
  )
}
const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    backgroundColor: Colors.WHITE,
    borderBottomColor: Colors.GRAY,
    borderBottomWidth:1,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: Colors.ORANGE,
  },
  container: {
    flex: 1,
    backgroundColor: Colors.WHITE,
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
    backgroundColor: Colors.LIGHTGRAY,
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