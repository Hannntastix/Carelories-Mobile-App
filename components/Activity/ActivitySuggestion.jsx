import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

const ActivitySuggestion = () => {
  const activities = [
    { id: 1, title: 'Jogging', description: 'Go for a 30-minute run.' , logo: <FontAwesome6 name="person-running" size={24} color="black" />},
    { id: 2, title: 'Yoga', description: 'Try a 20-minute yoga session.', logo: <MaterialCommunityIcons name="yoga" size={24} color="black" /> },
    { id: 3, title: 'Strength Training', description: 'Do a full-body workout.', logo: <MaterialCommunityIcons name="weight-lifter" size={24} color="black" /> },
  ];

  return (
    <View style={{
      padding: 20,
      backgroundColor: '#fff',
      borderRadius: 15,
      marginBottom: 20,
      elevation: 5,
    }}>
      <Text style={{
        fontSize: 24,
        fontFamily: 'outfit-medium',
        marginBottom: 10,
      }}>Suggested Activities</Text>
      {activities.map(activity => (
        <View key={activity.id} style={{
          backgroundColor: '#f0f0f0',
          padding: 15,
          borderRadius: 10,
          marginVertical: 5,
        }}>
          <Text style={{
            fontSize: 18,
            fontFamily: 'outfit-medium',
          }}>{activity.title}</Text>
          <Text style={{
            color: '#666',
          }}>{activity.description}</Text>
          <Text style={{
            fontSize: 18,
            fontFamily: 'outfit-medium',
            marginTop:5,
          }}>{activity.logo}</Text>
        </View>
      ))}
    </View>
  );
};

export default ActivitySuggestion;
