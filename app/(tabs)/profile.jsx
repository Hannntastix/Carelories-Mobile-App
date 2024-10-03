import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  Alert,
  ScrollView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { launchImageLibrary } from 'react-native-image-picker';
import { Colors } from '../../constants/Colors';

// Fungsi untuk menghasilkan User ID acak
const generateUserId = () => {
  return 'User-' + Math.random().toString(36).substring(2, 10);
};

const ProfilePage = () => {
  const [userId, setUserId] = useState('');
  const [bio, setBio] = useState('Passionate about health and fitness.');
  const [isEditingBio, setIsEditingBio] = useState(false);
  const [bioInput, setBioInput] = useState(bio);
  const [profileImage, setProfileImage] = useState(null);

  useEffect(() => {
    const randomUserId = generateUserId();
    setUserId(randomUserId);
  }, []);

  const handleImagePicker = () => {
    launchImageLibrary(
      { mediaType: 'photo', quality: 1 },
      (response) => {
        if (response.didCancel) {
          Alert.alert('Cancelled', 'Image selection was cancelled.');
        } else if (response.error) {
          Alert.alert('Error', 'An error occurred while selecting the image.');
        } else if (response.assets) {
          setProfileImage(response.assets[0].uri);
        }
      }
    );
  };

  const handleEditBio = () => {
    setBioInput(bio); // Set the input value to the current bio
    setIsEditingBio(true);
  };

  const handleConfirmBio = () => {
    setBio(bioInput); // Update bio with the new input
    setIsEditingBio(false);
    Alert.alert('Success', 'Bio updated successfully!');
  };

  const handleSave = () => {
    Alert.alert('Success', 'Profile updated successfully!');
  };

  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>My Profile</Text>
      </View>

      {/* Profile Picture */}
      <View style={styles.profilePictureContainer}>
        <TouchableOpacity onPress={handleImagePicker}>
          <Image
            source={{
              uri: profileImage
                ? profileImage
                : 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png',
            }}
            style={styles.profilePicture}
          />
        </TouchableOpacity>
      </View>

      {/* User ID Section */}
      <View style={styles.userIdContainer}>
        <Text style={styles.userIdLabel}>User ID:</Text>
        <Text style={styles.userId}>{userId}</Text>
      </View>

      {/* Email Section */}
      <View style={styles.emailContainer}>
        <Text style={styles.emailLabel}>Email:</Text>
        <Text style={styles.email}>xxxxxxxxxxx@gmail.com</Text>
      </View>

      {/* Bio Section */}
      <View style={styles.bioContainer}>
        <Text style={styles.bioLabel}>Bio:</Text>
        {isEditingBio ? (
          <>
            <TextInput
              style={styles.bioInput}
              value={bioInput}
              onChangeText={setBioInput}
              multiline
              numberOfLines={4}
              placeholder="Enter your bio"
            />
            <TouchableOpacity
              style={styles.confirmButton}
              onPress={handleConfirmBio}
            >
              <Text style={styles.confirmButtonText}>Confirm</Text>
            </TouchableOpacity>
          </>
        ) : (
          <>
            <Text style={styles.bioText}>{bio}</Text>
            <TouchableOpacity style={styles.editButton} onPress={handleEditBio}>
              <Text style={styles.editButtonText}>Edit Bio</Text>
            </TouchableOpacity>
          </>
        )}
      </View>

      {/* Activity History Section */}
      <View style={styles.activityHistoryContainer}>
        <Text style={styles.activityHistoryLabel}>Activity History:</Text>
        <Text style={styles.activity}>• Completed 10 workouts this month</Text>
        <Text style={styles.activity}>• Logged 5 meals this week</Text>
      </View>

      {/* Save Button */}
      <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
        <Text style={styles.saveButtonText}>Save Profile</Text>
        <Ionicons name="checkmark" size={20} color="#fff" />
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  header: {
    width: '100%',
    alignItems: 'center',
    paddingVertical: 20,
    backgroundColor: "#f5f5f5",
    borderRadius: 10,
  },
  headerText: {
    fontSize: 24,
    color: Colors.ORANGE,
    fontFamily: 'outfit-medium',
  },
  profilePictureContainer: {
    marginTop: 0,
    marginBottom: 20,
    marginHorizontal:"auto",
  },
  profilePicture: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 3,
    borderColor: Colors.ORANGE,
  },
  userIdContainer: {
    width: '100%',
    padding: 10,
    marginVertical: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
    elevation: 3,
  },
  userIdLabel: {
    fontSize: 16,
    fontFamily: 'outfit',
    color: '#333',
  },
  userId: {
    fontSize: 18,
    fontFamily: 'outfit-medium',
    color: '#4CAF50',
  },
  emailContainer: {
    width: '100%',
    padding: 10,
    marginVertical: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
    elevation: 3,
  },
  emailLabel: {
    fontSize: 16,
    fontFamily: 'outfit',
    color: '#333',
  },
  email: {
    fontSize: 18,
    fontFamily: 'outfit-medium',
    color: '#4CAF50',
  },
  bioContainer: {
    width: '100%',
    padding: 10,
    marginVertical: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
    elevation: 3,
  },
  bioLabel: {
    fontSize: 16,
    fontFamily: 'outfit',
    color: '#333',
  },
  bioText: {
    fontSize: 16,
    fontFamily: 'outfit',
    color: '#555',
    marginVertical: 10,
  },
  bioInput: {
    height: 80,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    fontSize: 16,
    fontFamily: 'outfit',
    marginTop: 10,
  },
  editButton: {
    backgroundColor: '#4CAF50',
    borderRadius: 5,
    padding: 10,
    alignItems: 'center',
  },
  editButtonText: {
    color: '#fff',
    fontSize: 16,
    fontFamily: 'outfit-medium',
  },
  confirmButton: {
    backgroundColor: '#2196F3',
    borderRadius: 5,
    padding: 10,
    alignItems: 'center',
    marginTop: 10,
  },
  confirmButtonText: {
    color: '#fff',
    fontSize: 16,
    fontFamily: 'outfit-medium',
  },
  activityHistoryContainer: {
    width: '100%',
    padding: 10,
    marginVertical: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
    elevation: 3,
  },
  activityHistoryLabel: {
    fontSize: 16,
    fontFamily: 'outfit',
    color: '#333',
  },
  activity: {
    fontSize: 16,
    fontFamily: 'outfit',
    color: '#555',
    marginTop: 5,
  },
  saveButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: "auto",
    padding: 10,
    marginTop: 20,
    backgroundColor: '#2196F3',
    borderRadius: 20,
    width: '80%',
  },
  saveButtonText: {
    color: '#fff',
    fontSize: 16,
    fontFamily: 'outfit-medium',
    marginRight: 10,
  },
});

export default ProfilePage;
