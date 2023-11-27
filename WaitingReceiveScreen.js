import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';

const productImage = require('./assets/boy.png'); // Replace with your product image

Icon.loadFont();

const WaitingReceiveScreen = () => {
    const navigation = useNavigation();
    const [selectedLink, setSelectedLink] = useState('WaitingReceiveScreen');
    const [quantity, setQuantity] = useState(1);

    const navigateWithLeftSwipe = (screenName) => {
        setSelectedLink(screenName);
        navigation.navigate(screenName, {
            gestureDirection: 'horizontal-inverted',
        });
    };

    const goBackToProfileScreen = () => {
        navigation.navigate('Navigation');
    };

    const navigateToRate = () => {
        navigation.navigate('Rate'); // Navigate to the Rate screen using the Stack Navigator
    };

    return (
        <View style={styles.container}>
            {/* Header with Navigation Links */}
            <View style={styles.header}>
                <TouchableOpacity onPress={goBackToProfileScreen}>
                    <Icon name="arrow-left" size={30} color="#000" />
                </TouchableOpacity>
                <Text style={styles.headerText}> Waiting Receive</Text>
                {/* Empty View to center the title */}
                <View />
            </View>

            {/* Navigation Links */}
            <View style={styles.navigationLinks}>
                <TouchableOpacity
                    onPress={() => navigateWithLeftSwipe('TopayScreen')}
                    style={[
                        styles.navigationLink,
                        selectedLink === 'TopayScreen' && styles.selectedLink,
                    ]}
                >
                    <Text style={styles.navigationLinkText}>To Pay</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => navigateWithLeftSwipe('WaitingSendScreen')}
                    style={[
                        styles.navigationLink,
                        selectedLink === 'WaitingSendScreen' && styles.selectedLink,
                    ]}
                >
                    <Text style={styles.navigationLinkText}>Waiting Send</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => navigateWithLeftSwipe('WaitingReceiveScreen')}
                    style={[
                        styles.navigationLink,
                        selectedLink === 'WaitingReceiveScreen' && styles.selectedLink,
                    ]}
                >
                    <Text style={styles.navigationLinkText}>Waiting Receive</Text>
                </TouchableOpacity>
            </View>

            {/* Bordered Container */}
            <View style={styles.borderedContainer}>
                <View style={styles.productDetails}>
                    <Text style={styles.productSending}>Receive</Text>
                </View>
                {/* Thematic Break */}
                <View style={styles.thematicBreak} />
                {/* Product Information Container */}
                <View style={styles.productContainer}>
                    <View style={styles.productImageContainer}>
                        <Image source={productImage} style={styles.productImage} />
                    </View>

                    {/* Product Details */}
                    <View style={styles.productDetails}>
                        <Text style={styles.productName}>Product Name</Text>
                        <Text style={styles.productQuantity}>x{quantity}</Text>
                        <Text style={styles.productPrice}>$20.00</Text>
                    </View>
                </View>

                {/* Thematic Break */}
                <View style={styles.thematicBreak} />

                {/* Order Total */}
                <View style={styles.orderTotalContainer}>
                    <Text style={styles.orderTotalLabel}>{quantity} products</Text>
                    <Text style={styles.orderTotalPrice}>Order Total: $20.00</Text>
                </View>

                {/* Thematic Break */}
                <View style={styles.thematicBreak} />

                {/* Delivery Status Icons */}
                <View style={styles.deliveryStatusContainer}>
                    <Icon name="truck" size={20} color="#000" />
                    <Text style={styles.deliveryStatusText}>Parcel sending</Text>
                </View>

                {/* Thematic Break */}
                <View style={styles.thematicBreak} />

                {/* Rate Button */}
                <TouchableOpacity style={styles.rateButton} onPress={navigateToRate}>
                    <Icon name="star" size={20} color="#FFD700" />
                    <Text style={styles.rateButtonText}>Rate</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        justifyContent: 'space-between',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        margin: 10,
    },
    headerText: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center', // Center the title
    },
    navigationLinks: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        flex: 1,
        marginBottom: 390,
    },
    selectedLink: {
        borderBottomColor: 'blue',
        borderBottomWidth: 2,
    },
    navigationLinkText: {
        fontSize: 16,
        color: '#000',
    },
    productContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    productImageContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 16,
    },
    productImage: {
        width: 80,
        height: 80,
        resizeMode: 'cover',
        borderRadius: 8,
    },
    productDetails: {
        marginLeft: 16,
    },
    productName: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    productPrice: {
        fontSize: 16,
        color: '#888',
    },
    productQuantity: {
        fontSize: 16,
        color: '#555',
    },
    productSending: {
        fontSize: 16,
        color: '#555',
        textAlign: 'right',
    },
    thematicBreak: {
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        marginVertical: 16,
    },
    orderTotalContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    orderTotalLabel: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    orderTotalPrice: {
        fontSize: 18,
        color: '#888',
    },
    deliveryStatusContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    deliveryStatusText: {
        marginLeft: 8,
        fontSize: 16,
        color: '#555',
    },
    rateButton: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#007BFF',
        borderRadius: 8,
        padding: 16,
        justifyContent: 'center',
    },
    rateButtonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 8,
    },
    borderedContainer: {
        borderWidth: 2,
        borderColor: '#000',
        borderRadius: 8,
        padding: 16,
        bottom: 380,
    },
});

export default WaitingReceiveScreen;
