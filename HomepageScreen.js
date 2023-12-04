import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const HomepageScreen = () => {
  const navigation = useNavigation();

  const navigateToReminderSetting = () => {
    navigation.navigate('ReminderSettingScreen');
  };

  return (
    <View style={styles.container}>
      {/* Use image2 as the background */}
      <Image source={require('./assets/Homr.png')} style={styles.backgroundImage} />
      <View style={styles.overlay}>
        <View style={styles.imageContainer}>
          <View style={styles.imageWrapper}>
            <Image source={require('./assets/Bubble.png')} style={styles.image1} />
            <Text style={styles.imageText}>0%</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

HomepageScreen.navigationOptions = {
  headerRight: () => (
    <TouchableOpacity onPress={navigateToReminderSetting} style={styles.headerRight}>
      <FontAwesome name="bell" size={24} color="#fff" />
    </TouchableOpacity>
  ),
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
  },
  backgroundImage: {
    ...StyleSheet.absoluteFillObject,
    width: '100%',
    resizeMode: 'cover',
    top: -120,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
  },
  imageContainer: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  imageWrapper: {
    flex: 1,
    width: '100%',
    height: '100%',
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image1: {
    width: 200,
    height: 200,
    resizeMode: 'cover',
    borderRadius: 8,
    top: -220,
  },
  imageText: {
    top: -340,
    left: 1,
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black', // Text color on top of the background image
  },
  button: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#007BFF',
    padding: 16,
    borderRadius: 50,
    bottom: 50, // Adjust the bottom position as needed
    alignSelf: 'center',
  },
  headerRight: {
    marginRight: 16,
  },
});

export default HomepageScreen;
