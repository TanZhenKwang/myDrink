import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity, TextInput, Animated, PanResponder } from 'react-native';
import { gestureHandlerRootHOC } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';

const placeholderImage1 = require('./assets/SnowBackground.jpg');
const placeholderImage2 = require('./assets/SnowBackground.jpg');
const placeholderImage3 = require('./assets/SnowBackground.jpg');
const placeholderImage4 = require('./assets/Theme2.jpeg');
const placeholderImage5 = require('./assets/Theme2.jpeg');
const placeholderImage6 = require('./assets/Theme2.jpeg');
const placeholderImage7 = require('./assets/fish1.png');
const placeholderImage8 = require('./assets/fish1.png');

const ThemeCard = ({ item, selected, onPress }) => (
    <TouchableOpacity
        style={[styles.productCard, selected && styles.selectedCard]}
        onPress={onPress}
    >
        <Image source={item.image} style={styles.productImage} />
        <Text style={styles.productName}>{item.name}</Text>
        <Text style={styles.productPrice}>{item.price}</Text>
    </TouchableOpacity>
);

const ThemedScrollView = ({ data, selected, onSwipe, onCardPress }) => {
    const pan = new Animated.Value(0);

    const panResponder = PanResponder.create({
        onMoveShouldSetPanResponder: (evt, gestureState) => Math.abs(gestureState.dx) > 5,
        onPanResponderMove: Animated.event([null, { dx: pan }], { useNativeDriver: false }),
        onPanResponderRelease: (evt, gestureState) => {
            if (gestureState.dx < -50) {
                onSwipe('left');
            }
            Animated.spring(pan, { toValue: 0, useNativeDriver: false }).start();
        },
    });

    const animatedStyles = {
        transform: [{ translateX: pan }],
    };

    return (
        <Animated.ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            {...panResponder.panHandlers}
            style={animatedStyles}
        >
            {data.map((item, index) => (
                <ThemeCard
                    key={item.id}
                    item={item}
                    selected={index === selected}
                    onPress={() => onCardPress(item.name)}
                />
            ))}
        </Animated.ScrollView>
    );
};

const ThemeScreen = () => {
    const navigation = useNavigation();

    const mostSellerData = [
        { id: 1, name: 'Sea', price: '1000', image: placeholderImage1 },
        { id: 2, name: 'Beach', price: '2000', image: placeholderImage2 },
        { id: 3, name: 'Snow Background', price: '1250', image: placeholderImage3 },
        { id: 4, name: 'Red Fish', price: '20', image: placeholderImage7 },
        { id: 5, name: 'Blue Fish', price: '10', image: placeholderImage8 },
        // Add more items as needed
    ];

    const hadThemeData = [
        { id: 1, name: 'Sea', price: 'Use', image: placeholderImage1 },
        { id: 2, name: 'Beach', price: 'Used', image: placeholderImage2 },
        { id: 3, name: 'Snow Background', price: 'Use', image: placeholderImage4 },
        // Add more items as needed
    ];

    const mostPopularData = [
        { id: 1, name: 'Theme 2', tags: ['Beach', 'Wood'], description: 'Statistcs Background', image: placeholderImage5 },
        { id: 2, name: 'Theme 3', tags: ['Beach', 'Sand'], description: 'Statistcs Background', image: placeholderImage6 },
        // Add more items as needed
    ];

    const [selectedMostSellerIndex, setSelectedMostSellerIndex] = useState(0);
    const [selectedHadThemeIndex, setSelectedHadThemeIndex] = useState(0);

    const handleHadThemeSwipe = (direction) => {
        const newIndex =
            direction === 'left'
                ? (selectedHadThemeIndex + 1) % hadThemeData.length
                : (selectedHadThemeIndex - 1 + hadThemeData.length) % hadThemeData.length;
        setSelectedHadThemeIndex(newIndex);
    };

    const handleMostSellerSwipe = (direction) => {
        const newIndex =
            direction === 'left'
                ? (selectedMostSellerIndex + 1) % mostSellerData.length
                : (selectedMostSellerIndex - 1 + mostSellerData.length) % mostSellerData.length;
        setSelectedMostSellerIndex(newIndex);
    };

    const goBackToProfileScreen = () => {
        navigation.navigate('Navigation');
    };

    const handleCardPress = (itemName) => {
        // Navigate to ThemeDetails screen with the selected item's name
        navigation.navigate('ThemeDetails', { itemName });
    };

    return (
        <ScrollView style={styles.container}>
            {/* Header with Navigation Links */}
            <View style={styles.header}>
                <TouchableOpacity onPress={goBackToProfileScreen}>
                    <Icon name="arrow-left" size={30} color="#000" />
                </TouchableOpacity>
                <Text style={styles.headerText}>Theme</Text>
                {/* Empty View to center the title */}
                <View />
            </View>

            {/* Search Bar */}
            <View style={styles.searchBarContainer}>
                {/* Add your search bar component here */}
                {/* For example, you can use TextInput and customize its styles */}
                <TextInput
                    style={styles.searchInput}
                    placeholder="Search Themes"
                    placeholderTextColor="#777"
                />
            </View>

            {/* Most Seller Section */}
            <View style={styles.sectionContainer}>
                <Text style={styles.sectionTitle}>Most Seller</Text>
                <ThemedScrollView
                    data={mostSellerData}
                    selected={selectedMostSellerIndex}
                    onSwipe={handleMostSellerSwipe}
                    onCardPress={handleCardPress}
                />
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

            {/* Theme had buy Section */}
            <View style={styles.sectionContainer}>
                <Text style={styles.sectionTitle}>Theme had buy</Text>
                <ThemedScrollView
                    data={hadThemeData}
                    selected={selectedHadThemeIndex}
                    onSwipe={handleHadThemeSwipe}
                    onCardPress={handleCardPress}
                />
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 5,
    },
    headerText: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center', // Center the title
    },
    sectionContainer: {
        marginBottom: 24,
    },
    sectionTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 16,
    },
    searchBarContainer: {
        marginVertical: 16,
        paddingHorizontal: 16,
    },
    searchInput: {
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 8,
        paddingLeft: 16,
        color: '#333',
    },
    productCard: {
        width: 150,
        marginRight: 16,
        borderRadius: 8,
        overflow: 'hidden',
        borderColor: '#ccc',
        borderWidth: 1,
    },
    selectedCard: {
        borderColor: '#ff4500',
    },
    productImage: {
        width: '100%',
        height: 100,
        resizeMode: 'cover',
    },
    productName: {
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 8,
    },
    productPrice: {
        fontSize: 14,
        color: '#888',
        marginTop: 4,
        marginBottom: 8,
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
});

export default gestureHandlerRootHOC(ThemeScreen);
