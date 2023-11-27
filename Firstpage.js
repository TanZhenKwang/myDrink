import React, { useState } from 'react';
import { View, Text, Image, TextInput, Button, StyleSheet, ScrollView, TouchableOpacity, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Import the hook

export default function FirstPage() {
  const [inputHeight, setInputHeight] = useState('');
  const [inputWeight, setInputWeight] = useState('');
  const [selectedImage, setSelectedImage] = useState(null);

  const navigation = useNavigation(); // Get the navigation object

  const handleImagePress = (image) => {
    setSelectedImage(image);
  };

  const handleButtonClick = () => {
    // Handle the button click event here
    alert(`Selected Image: ${selectedImage}, Height: ${inputHeight} cm, Weight: ${inputWeight} kg`);
    navigation.navigate('Navigation'); // Use the correct screen name
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.imageContainer}>
        <TouchableOpacity onPress={() => handleImagePress('Boy')}>
          <Image source={require('./assets/boy.png')} style={styles.image} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleImagePress('Girl')}>
          <Image source={require('./assets/girl.png')} style={styles.image} />
        </TouchableOpacity>
      </View>
      {selectedImage && (
        <Text>Selected Image: {selectedImage}</Text>
      )}
      <View style={styles.inputContainer}>
        <View style={styles.horizontalContainer}>
          <Text style={styles.label}>Height:</Text>
          <TextInput
            style={styles.input}
            onChangeText={(text) => setInputHeight(text)}
            keyboardType="numeric"
            placeholderTextColor="black"
          />
          <Text style={styles.label}> cm</Text>
        </View>
      </View>
      <View style={styles.inputContainer}>
        <View style={styles.horizontalContainer}>
          <Text style={styles.label}>Weight:</Text>
          <TextInput
            style={styles.input}
            onChangeText={(text) => setInputWeight(text)}
            keyboardType="numeric"
            placeholderTextColor="black"
          />
          <Text style={styles.label}> kg</Text>
        </View>
      </View>
      <Pressable style={styles.btn} onPress={handleButtonClick}>
        <Text style={styles.btnText}>Submit</Text>
      </Pressable>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ADD8E6', // Set background color to #ADD8E6
  },
  imageContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
  },
  image: {
    width: 150,
    height: 150,
    margin: 10,
  },
  inputContainer: {
    marginVertical: 10,
  },
  horizontalContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    marginRight: 10,
  },
  input: {
    flex: 1,
    height: 40,
    borderWidth: 0,
    paddingLeft: 1,
  },
});
