import React from 'react';
import { View, Image, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';

const SecondPage = () => {
  const navigation = useNavigation();

  const goToThirdPage = () => {
    navigation.navigate('Firstpage');
  };

  return (
    <View style={styles.container}>
      {/* Full-page image */}
      <Image source={require('./assets/Wallpaper1.png')} style={styles.fullPageImage} />

      {/* Arrow at bottom right */}
      <TouchableOpacity style={styles.arrowContainer} onPress={goToThirdPage}>
        <Icon name="arrow-right" size={30} color="black" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  fullPageImage: {
    flex: 1,
    resizeMode: 'cover', // You can adjust the resizeMode based on your preference
  },
  arrowContainer: {
    position: 'absolute',
    bottom: 16,
    right: 16,
  },
});

export default SecondPage;
