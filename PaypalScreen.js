import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, CheckBox } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation, CommonActions } from '@react-navigation/native';

const PaypalScreen = () => {
    const navigation = useNavigation();
    const [isChecked, setChecked] = useState(false);

    const handleCheckBox = () => {
        setChecked(!isChecked);
    };

    const handlePayment = () => {
        // Replace this with your actual payment logic
        console.log('Processing payment...');
        // After successful payment, navigate to the success screen
        goToPayment();
    };

    const goBackToProfileScreen = () => {
        navigation.dispatch(CommonActions.goBack()); // Go back to the previous screen
    };

    const goToPayment = () => {
        navigation.navigate('SuccessfulPaymentScreen');
    };

    return (
        <View style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <TouchableOpacity onPress={goBackToProfileScreen}>
                    <Icon name="arrow-left" size={30} color="#000" />
                </TouchableOpacity>
                <Text style={styles.centerText}>Paypal</Text>
                {/* Empty View to center the title */}
                <View />
            </View>

            {/* Product Details */}
            <View style={styles.productContainer}>
                {/* Green checkmark */}
                <View style={styles.checkmarkContainer}>
                    {isChecked && <Icon name="check" size={30} color="green" />}
                </View>

                {/* Price */}
                <Text style={styles.priceText}>$10</Text>

                {/* Checkbox */}
                <View style={styles.checkboxContainer}>
                    <CheckBox value={isChecked} onValueChange={handleCheckBox} />
                    <Text style={styles.rowText}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget felis vitae mauris.
                    </Text>
                </View>
            </View>

            {/* Buy Button */}
            <TouchableOpacity style={styles.paymentButton} onPress={handlePayment}>
                <Text style={styles.paymentButtonText}>Make Payment</Text>
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
        alignItems: 'center', // Align items vertically in the center
        marginBottom: 16,
    },
    centerText: {
        fontSize: 24,
        fontWeight: 'bold',
        marginLeft: 20,
    },
    productContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    checkmarkContainer: {
        alignItems: 'center',
        marginTop: -50,
    },
    checkboxContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 20, // Adjust as needed
    },
    priceText: {
        fontSize: 24,
        marginTop: 20, // Adjust as needed
    },
    rowText: {
        marginLeft: 10,
        flex: 1,
    },
    paymentButton: {
        backgroundColor: 'blue',
        padding: 16,
        borderRadius: 8,
        alignItems: 'center',
        marginTop: 20, // Adjust as needed
    },
    paymentButtonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default PaypalScreen;
