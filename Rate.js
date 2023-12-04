import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';

const productImage = require('./assets/Nike.png'); // Replace with your product image

const Rate = () => {
    const navigation = useNavigation();

    const goBackToNavigation = () => {
        navigation.navigate('Navigation');
    };

    const [starCount, setStarCount] = useState(0);

    const onStarRatingPress = (rating) => {
        setStarCount(rating);
    };

    const handleConfirm = () => {
        // Handle logic for confirming the rating (e.g., send to the server)
        console.log('Rating confirmed:', starCount);
        // Navigate to WaitingReceiveScreen.js
        navigation.navigate('WaitingReceiveScreen');
    };

    return (
        <View style={styles.container}>
            {/* Header with Back Button and Title */}
            <View style={styles.header}>
                <TouchableOpacity onPress={goBackToNavigation}>
                    <Icon name="arrow-left" size={30} color="#000" />
                </TouchableOpacity>
                {/* Centered title */}
                <Text style={styles.headerText}>Rate</Text>
                {/* Empty view for centering title */}
                <View />
            </View>

            {/* Image and Name */}
            <View style={styles.centeredContent}>
                {/* Product Image */}
                <Image source={productImage} style={styles.productImage} />

                {/* Product Name */}
                <Text style={styles.productName}>Thermos</Text>
            </View>

            {/* Star Rating */}
            <View style={styles.starContainer}>
                {[1, 2, 3, 4, 5].map((index) => (
                    <TouchableOpacity
                        key={index}
                        onPress={() => onStarRatingPress(index)}
                        activeOpacity={0.7}
                    >
                        <Text
                            style={[
                                styles.starIcon,
                                index <= starCount ? styles.yellowStar : styles.greyStar,
                            ]}
                        >
                            ★
                        </Text>
                    </TouchableOpacity>
                ))}
            </View>

            {/* Confirm Button */}
            <TouchableOpacity style={styles.confirmButton} onPress={handleConfirm}>
                <Text style={styles.confirmButtonText}>Confirm</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
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
    centeredContent: {
        alignItems: 'center',
    },
    productImage: {
        width: 120,
        height: 120,
        resizeMode: 'cover',
        borderRadius: 8,
    },
    productName: {
        fontSize: 18,
        fontWeight: 'bold',
        marginVertical: 10,
    },
    starContainer: {
        flexDirection: 'row',
        marginVertical: 10,
        justifyContent: 'center', // Center the stars horizontally
    },
    starIcon: {
        fontSize: 24,
        marginHorizontal: 5,
    },
    greyStar: {
        color: 'grey',
    },
    yellowStar: {
        color: 'yellow',
    },
    confirmButton: {
        backgroundColor: '#007BFF',
        borderRadius: 8,
        paddingVertical: 12,
        paddingHorizontal: 24,
        width: '100%', // Set width to 100%
    },
    confirmButtonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center', // Center the text within the button
    },
});

export default Rate;
