import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Button, Image } from 'react-native';
import Slider from '@react-native-community/slider';

// Replace these image sources with your actual image paths or URIs
const waterImageSource = require('./assets/Water.png');
const teaImageSource = require('./assets/Tea.png');
const coffeeImageSource = require('./assets/Coffee.png');
const juiceImageSource = require('./assets/Juice.png');
const milkImageSource = require('./assets/milk.png');
const cokeImageSource = require('./assets/coke.png');
const chocalateImageSource = require('./assets/chocalate.png');
const othersImageSource = require('./assets/others.png');

const drinks = [
  { name: 'Water', image: waterImageSource },
  { name: 'Tea', image: teaImageSource },
  { name: 'Coffee', image: coffeeImageSource },
  { name: 'Juice', image: juiceImageSource },
  { name: 'Milk', image: milkImageSource },
  { name: 'Coke', image: cokeImageSource },
  { name: 'Chocalate', image: chocalateImageSource },
  { name: 'Others', image: othersImageSource },
];

const drinksPerRow = 4;
const drinkButtonSize = 100;

const DrinkScreen = () => {
  const [selectedDrink, setSelectedDrink] = useState(null);
  const [mlValue, setMlValue] = useState(150);
  const [minMl, maxMl] = [100, 2000];

  const handleDrinkPress = (drink) => {
    setSelectedDrink(drink);
  };

  const handleAddPress = () => {
    if (selectedDrink) {
      console.log(`Added ${mlValue} ml of ${selectedDrink.name}`);
      setSelectedDrink(null);
      setMlValue(150);
    } else {
      alert('Please select a drink.');
    }
  };

  const renderRow = (rowDrinks) => (
    <View style={styles.drinkRow}>
      {rowDrinks.map((drink, index) => (
        <TouchableOpacity
          key={drink.name}
          style={[
            styles.drinkButton,
            selectedDrink === drink && styles.selectedDrink,
            index !== 0 && { marginLeft: 5 },
          ]}
          onPress={() => handleDrinkPress(drink)}>
          {drink.image ? (
            <Image source={drink.image} style={styles.drinkImage} />
          ) : (
            <Text style={styles.drinkButtonText}>{drink.name}</Text>
          )}
          <Text style={styles.drinkName}>{drink.name}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Choose a Drink</Text>

      {renderRow(drinks.slice(0, drinksPerRow))}
      {renderRow(drinks.slice(drinksPerRow))}

      {selectedDrink && (
        <View style={styles.mlContainer}>
          <Text style={styles.mlLabel}>Select Quantity (ml):</Text>
          <Slider
            style={styles.slider}
            minimumValue={minMl}
            maximumValue={maxMl}
            step={10}
            value={mlValue}
            onValueChange={(value) => setMlValue(value)}
          />
          <Text style={styles.mlValue}>{mlValue} ml</Text>
        </View>
      )}

      <View style={styles.bottomActions}>
        <Button title="Add" onPress={handleAddPress} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    alignItems: 'center',
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  drinkRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 32,
  },
  drinkButton: {
    alignItems: 'center',
    width: drinkButtonSize,
    height: drinkButtonSize,
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: '#ccc',
    marginTop: 8,
  },
  selectedDrink: {
    backgroundColor: '#add8e6',
  },
  drinkImage: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
  },
  drinkButtonText: {
    textAlign: 'center',
  },
  drinkName: {
    marginTop: 8,
  },
  mlContainer: {
    marginBottom: 16,
    alignItems: 'center',
  },
  mlLabel: {
    fontSize: 16,
    marginBottom: 8,
  },
  slider: {
    width: 300,
    height: 40,
  },
  mlValue: {
    fontSize: 18,
    marginTop: 8,
  },
  bottomActions: {
    position: 'absolute',
    bottom: 16,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});

export default DrinkScreen;
