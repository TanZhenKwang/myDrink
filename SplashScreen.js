import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function SplashScreen() {
  const navigation = useNavigation();

  const goToSecondPage = () => {
    navigation.navigate('Secondpage');
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={require('./assets/firstimage.png')} style={styles.image} />
      </View>
      <Text>When you want to drink water, it seems that you can drink the whole ocean.</Text>

      {/* Arrow at bottom right */}
      <TouchableOpacity style={styles.arrowContainer} onPress={goToSecondPage}>
        <Icon name="arrow-right" size={40} color="#000" />
      </TouchableOpacity>

      {/* StatusBar */}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ADD8E6',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 200,
    height: 200,
  },
  arrowContainer: {
    position: 'absolute',
    bottom: 16,
    right: 16,
  },
});
