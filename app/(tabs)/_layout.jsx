import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import { Ionicons } from '@expo/vector-icons'
import { Colors } from '../../constants/Colors'
import FontAwesome from '@expo/vector-icons/FontAwesome';

export default function TabLayout() {
  return (
    <Tabs screenOptions={{
      headerShown: false,
      tabBarActiveTintColor: Colors.ORANGE,
    }}>
      <Tabs.Screen name='home'
        options={{
          headerShown: true,
          tabBarIcon: ({ color }) => <Ionicons name="home-outline" size={24} color={color} />,
          tabBarLabel: "Home"
        }}
      />
      <Tabs.Screen name='camera'
        options={{
          headerShown: true,
          tabBarIcon: ({ color }) => <FontAwesome name="camera" size={24} color={color} />,
          tabBarLabel: "Camera"
        }}
      />
      <Tabs.Screen name='calories'
        options={{
          headerShown: true,
          tabBarIcon: ({ color }) => <Ionicons name="pie-chart-outline" size={24} color={color} />,
          tabBarLabel: "Calorie Data"
        }}
      />
      <Tabs.Screen name='profile'
        options={{
          headerShown: true,
          tabBarIcon: ({ color }) => <Ionicons name="person-outline" size={24} color={color} />,
          tabBarLabel: "Profile"
        }}
      />
    </Tabs>
  )
}