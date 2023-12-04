import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';

const placeholderImage = require('./assets/SnowBackground.jpg'); // Replace with your actual image path

const ThemeDetails = () => {
    const navigation = useNavigation();

    const goBackToNavigation = () => {
        navigation.navigate('Navigation');
    };

    const handlePurchase = () => {
        // Implement purchase logic
        console.log('Purchase button clicked!');
    };

    return (
        <View style={styles.container}>
            {/* Header with Navigation Links */}
            <View style={styles.header}>
                <TouchableOpacity onPress={goBackToNavigation}>
                    <Icon name="arrow-left" size={30} color="#000" />
                </TouchableOpacity>
                <Text style={styles.headerText}>Theme Details</Text>
                <Text style={styles.headerDetails}>Points: 1000</Text>
            </View>

            {/* Theme Details */}
            <View style={styles.themeDetailsContainer}>
                {/* Theme Image */}
                <Image source={placeholderImage} style={styles.themeImage} />

                {/* Theme Name, Description, and Price */}
                <View style={styles.themeInfo}>
                    <Text style={styles.themeName}>Sea</Text>
                    <Text style={styles.themeDescription}>Sea Background</Text>
                    <Text style={styles.themePrice}>1000</Text>
                </View>
            </View>

            {/* Purchase Button */}
            <View style={styles.purchaseButtonContainer}>
                <TouchableOpacity style={styles.purchaseButton} onPress={handlePurchase}>
                    <Text style={styles.purchaseButtonText}>Purchase</Text>
                </TouchableOpacity>
            </View>
        </View>
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
        textAlign: 'center',
    },
    themeDetailsContainer: {
        marginTop: 20,
    },
    themeImage: {
        width: '100%',
        height: 200, // Adjust the height as needed
        resizeMode: 'cover',
        borderRadius: 8,
        marginBottom: 16,
    },
    themeInfo: {
        alignItems: 'center', // Center the content
        marginBottom: 16,
    },
    themeName: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    themeDescription: {
        fontSize: 16,
        color: '#555',
        marginBottom: 8,
    },
    themePrice: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#007BFF',
    },
    purchaseButtonContainer: {
        flex: 1,
        justifyContent: 'flex-end', // Align at the bottom
    },
    purchaseButton: {
        backgroundColor: '#007BFF',
        borderRadius: 8,
        padding: 16,
        alignItems: 'center',
    },
    purchaseButtonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default ThemeDetails;