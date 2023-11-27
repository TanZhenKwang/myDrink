import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation

const SuccessfulPaymentScreen = () => {
    const navigation = useNavigation(); // Get the navigation object
    const handleContinueShopping = () => {
        // Navigate to the screen you want when the user continues shopping
        navigation.navigate('Navigation'); // Replace 'Home' with your actual home screen name
    };

    return (
        <View style={styles.container}>
            <Image source={require('./assets/paymentsuccess.png')} style={styles.successImage} />
            <Text style={styles.successText}>Payment Successful!</Text>

            <TouchableOpacity style={styles.continueButton} onPress={handleContinueShopping}>
                <Text style={styles.continueButtonText}>Continue Shopping</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    successImage: {
        width: 150,
        height: 150,
        resizeMode: 'contain',
        marginBottom: 20,
    },
    successText: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    continueButton: {
        backgroundColor: '#007BFF',
        borderRadius: 8,
        padding: 16,
        alignItems: 'center',
    },
    continueButtonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default SuccessfulPaymentScreen;
