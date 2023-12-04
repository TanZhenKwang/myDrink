import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';

const ShopDetailsScreen = ({ route }) => {
    const { productId } = route.params;
    const navigation = useNavigation();

    // Fetch product details based on productId (you can replace this with your own logic)
    const productDetails = {
        id: productId,
        name: 'Nike',
        description: 'Nike glass can fill hot water',
        price: '$30.00',
        mainImage: require('./assets/Nike.png'),
    };

    const handleGoBack = () => {
        // Go back to the previous screen
        navigation.goBack();
    };

    const handleShare = () => {
        // Implement the share functionality
        console.log('Share icon pressed');
    };

    const handleBuy = () => {
        // Implement the buy functionality
        console.log('Buy button pressed');
    };

    return (
        <View style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                {/* Arrow Left */}
                <TouchableOpacity onPress={handleGoBack}>
                    <Icon name="arrow-left" size={30} color="#000" />
                </TouchableOpacity>

                <Text style={styles.centerText}>Shop Details</Text>

                {/* Share Icon */}
                <TouchableOpacity onPress={handleShare}>
                    <Icon name="share" size={30} color="#000" style={styles.shareIcon} />
                </TouchableOpacity>
            </View>

            {/* Product Details */}
            <Image source={productDetails.mainImage} style={styles.productImage} />

            <View style={styles.productContainer}>
                <Text style={styles.productName}>{productDetails.name}</Text>
                <Text style={styles.productDescription}>{productDetails.description}</Text>
                <Text style={styles.productPrice}>{productDetails.price}</Text>
            </View>

            {/* Buy Button */}
            <TouchableOpacity style={styles.buyButton} onPress={handleBuy}>
                <Text style={styles.buyButtonText}>Buy</Text>
            </TouchableOpacity>
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
        justifyContent: 'space-between',
        marginBottom: 16,
    },
    centerText: {
        fontSize: 24,
        fontWeight: 'bold',
        marginLeft: 20, // Adjust the margin based on your design
    },
    shareIcon: {
        marginLeft: 20, // Adjust the margin based on your design
    },
    productImage: {
        width: 100,
        height: 200,
        resizeMode: 'cover',
        borderRadius: 8,
        marginBottom: 16,
        alignSelf: 'center', // Center the image horizontally
    },
    productContainer: {
        flex: 1,
        alignItems: 'center',
    },
    productName: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    productDescription: {
        fontSize: 16,
        color: '#555',
        marginBottom: 16,
    },
    productPrice: {
        fontSize: 20,
        color: 'green',
        fontWeight: 'bold',
    },
    buyButton: {
        backgroundColor: 'blue',
        padding: 16,
        borderRadius: 8,
        alignItems: 'center',
        marginTop: 16,
    },
    buyButtonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default ShopDetailsScreen;
