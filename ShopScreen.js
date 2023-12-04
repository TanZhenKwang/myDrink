import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
  Animated,
  PanResponder,
  TextInput,
} from 'react-native';
import { gestureHandlerRootHOC } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';

const placeholderImage = require('./assets/drinks-advertisement1.jpg');
const placeholderImage2 = require('./assets/Nike.png');
const placeholderImage3 = require('./assets/Health.png');
const placeholderImage4 = require('./assets/Nike.png');
const placeholderImage5 = require('./assets/Health.png');
const placeholderImage6 = require('./assets/Nike.png');
const placeholderImage7 = require('./assets/Health.png');
const placeholderImage8 = require('./assets/Health.png');
const placeholderImage9 = require('./assets/Health.png');


const ShopScreen = () => {
  const navigation = useNavigation();

  const mostSellerData = [
    { id: 1, category: 'Bottle', image: placeholderImage2 },
    { id: 2, category: 'Health', image: placeholderImage3 },
    { id: 3, category: 'Bottle', image: placeholderImage4 },
    { id: 4, category: 'Health', image: placeholderImage5 },
    { id: 5, category: 'Bottle', image: placeholderImage6 },
    { id: 6, category: 'Health', image: placeholderImage7 },
    { id: 7, category: 'Health', image: placeholderImage8 },
    { id: 8, category: 'Health', image: placeholderImage9 },
  ];

  const mostPopularData = [
    {
      id: 1,
      name: 'Fitting Bar',
      tags: ['Kiwi', 'Strawberry'],
      description: 'Make u more health',
      image: placeholderImage8,
    },
    {
      id: 2,
      name: 'Olive Oil',
      tags: ['Apple', 'Mint'],
      description: 'Cooking can add some oil make more delicious',
      image: placeholderImage5,
    },
    // Add more items as needed
  ];

  const [selectedCategory, setSelectedCategory] = useState('Bottle');
  const [selectedMostSellerIndex, setSelectedMostSellerIndex] = useState(0);
  const [searchText, setSearchText] = useState('');

  const pan = new Animated.Value(0);

  const panResponder = PanResponder.create({
    onMoveShouldSetPanResponder: (evt, gestureState) => Math.abs(gestureState.dx) > 5,
    onPanResponderMove: Animated.event([null, { dx: pan }], { useNativeDriver: false }),
    onPanResponderRelease: (evt, gestureState) => {
      if (gestureState.dx < -50) {
        handleMostSellerSwipe('left');
      }
      Animated.spring(pan, { toValue: 0, useNativeDriver: false }).start();
    },
  });

  const handleMostSellerSwipe = (direction) => {
    const categoryData = mostSellerData.filter((item) => item.category === selectedCategory);
    const newIndex =
      direction === 'left'
        ? (selectedMostSellerIndex + 1) % categoryData.length
        : (selectedMostSellerIndex - 1 + categoryData.length) % categoryData.length;
    setSelectedMostSellerIndex(newIndex);
  };

  const animatedStyles = {
    transform: [{ translateX: pan }],
  };

  const navigateToShopDetails = (productId, category) => {
    // Update the navigation logic based on your specific setup
    // For example, if you are using Stack Navigator:
    navigation.navigate('ShopDetailsScreen', { productId, category });
  };

  const renderMostSellerItems = () => {
    const categoryData = mostSellerData.filter((item) => item.category === selectedCategory);
    return categoryData.map((item, index) => (
      <TouchableOpacity
        key={item.id}
        style={[styles.productCard, index === selectedMostSellerIndex && styles.selectedCard]}
        onPress={() => navigateToShopDetails(item.id, item.category)}
      >
        <Image source={item.image} style={styles.productImage} />
      </TouchableOpacity>
    ));
  };

  return (
    <ScrollView style={styles.container}>
      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <Icon name="search" size={20} color="#888" style={styles.searchIcon} />
        <TextInput
          style={styles.searchBar}
          placeholder="Search products"
          value={searchText}
          onChangeText={(text) => setSearchText(text)}
        />
      </View>

      {/* Advertisement */}
      <Image source={placeholderImage} style={styles.advertisement} />

      {/* Most Seller Section */}
      <View style={styles.sectionContainer}>
        <View style={styles.categoryButtons}>
          <TouchableOpacity
            style={[styles.categoryButton, selectedCategory === 'Bottle' && styles.selectedCategory]}
            onPress={() => setSelectedCategory('Bottle')}
          >
            <Text style={styles.categoryButtonText}>Bottle</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.categoryButton, selectedCategory === 'Health' && styles.selectedCategory]}
            onPress={() => setSelectedCategory('Health')}
          >
            <Text style={styles.categoryButtonText}>Health</Text>
          </TouchableOpacity>
        </View>
        <Animated.ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          {...panResponder.panHandlers}
          style={animatedStyles}
        >
          {renderMostSellerItems()}
        </Animated.ScrollView>
      </View>

      {/* Most Popular Section */}
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Most Popular</Text>
        {mostPopularData.map((item) => (
          <TouchableOpacity key={item.id} style={styles.popularProductCard}>
            <View style={styles.popularContentContainer}>
              <Image source={item.image} style={styles.popularProductImage} />
              <View style={styles.popularTextContainer}>
                <Text style={styles.popularProductName}>{item.name}</Text>
                <View style={styles.popularTagsContainer}>
                  {item.tags.map((tag) => (
                    <Text key={tag} style={styles.popularTag}>
                      {tag}
                    </Text>
                  ))}
                </View>
                <Text style={styles.popularProductDescription}>{item.description}</Text>
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    paddingHorizontal: 8,
    borderRadius: 10,
    borderColor: 'gray',
    borderWidth: 1,
  },
  searchIcon: {
    marginRight: 8,
  },
  searchBar: {
    flex: 1,
    height: 40,
    fontSize: 16,
    color: '#888',
  },
  advertisement: {
    width: '100%',
    height: 250,
    resizeMode: 'cover',
    borderRadius: 8,
    marginBottom: 16,
  },
  sectionContainer: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  productCard: {
    width: 150,
    height: 150,
    marginRight: 16,
    borderRadius: 75,
    overflow: 'hidden',
    borderColor: '#ccc',
    borderWidth: 1,
  },
  selectedCard: {
    borderColor: '#ff4500',
  },
  productImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  popularProductCard: {
    marginBottom: 16,
    borderRadius: 8,
    borderColor: '#ccc',
    borderWidth: 1,
    overflow: 'hidden',
    flexDirection: 'row',
  },
  popularContentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  popularProductImage: {
    width: 80,
    height: 80,
    resizeMode: 'cover',
    borderRadius: 8,
    marginRight: 16,
  },
  popularTextContainer: {
    flex: 1,
  },
  popularProductName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 8,
    marginLeft: 8,
  },
  popularTagsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginLeft: 8,
    marginTop: 8,
  },
  popularTag: {
    marginRight: 8,
    backgroundColor: '#ddd',
    padding: 4,
    borderRadius: 4,
  },
  popularProductDescription: {
    fontSize: 14,
    color: '#555',
    marginLeft: 8,
    marginTop: 8,
    marginBottom: 16,
  },
  categoryButtons: {
    flexDirection: 'row',
    marginBottom: 12,
  },
  categoryButton: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
    marginRight: 12,
    borderWidth: 0,
    borderColor: '#ccc',
  },
  selectedCategory: {
    backgroundColor: '#ff4500',
    borderColor: '#ff4500',
  },
  categoryButtonText: {
    color: '#333',
    fontWeight: 'bold',
  },
});

export default gestureHandlerRootHOC(ShopScreen);
