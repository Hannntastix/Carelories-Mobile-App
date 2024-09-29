import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import { Ionicons } from '@expo/vector-icons'
import { Colors } from '../../constants/Colors'

export default function TabLayout() {
  return (
    <Tabs screenOptions={{
      headerShown: false,
      tabBarActiveTintColor:Colors.ORANGE,
    }}>
      <Tabs.Screen name='home'
        options={{
          tabBarIcon: ({ color }) => <Ionicons name="home-outline" size={24} color={color} />,
          tabBarLabel:"Home"
        }}
      />
      <Tabs.Screen name='calories'
        options={{
          tabBarIcon: ({ color }) => <Ionicons name="pie-chart-outline" size={24} color={color} />,
          tabBarLabel:"Calories Data"
        }}
      />
      <Tabs.Screen name='profile'
        options={{
          tabBarIcon: ({ color }) => <Ionicons name="person-outline" size={24} color={color} />,
          tabBarLabel:"Profile"
        }}
      />
    </Tabs>
  )
}