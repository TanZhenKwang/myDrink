import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';

Icon.loadFont();

const CreditCardScreen = () => {
    const navigation = useNavigation();
    const [cardNumber, setCardNumber] = useState('');
    const [cardName, setCardName] = useState('');
    const [expiryDate, setExpiryDate] = useState('');
    const [cvc, setCvc] = useState('');
    const [saveCard, setSaveCard] = useState(false);

    const goBackToProfileScreen = () => {
        navigation.navigate('Navigation');
    };

    const goToPayment = () => {
        navigation.navigate('SuccessfulPaymentScreen');
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={goBackToProfileScreen}>
                    <Icon name="arrow-left" size={30} color="#000" />
                </TouchableOpacity>
                <Text style={styles.headerText}>Credit Card Payment</Text>
                {/* Empty View to center the title */}
                <View />
            </View>

            <Image
                source={require('./assets/CreditCard.png')}
                style={[styles.cardImage, { alignSelf: 'center' }]}  // Adjusted style here
            />

            <View style={styles.footerContainer}>
                <View style={styles.footer}>
                    <View style={styles.inputContainer}>
                        <Text style={styles.label}>Card Number</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="1234 5678 9012 3456"
                            keyboardType="numeric"
                            value={cardNumber}
                            onChangeText={(text) => setCardNumber(text)}
                        />
                    </View>

                    <View style={styles.inputContainer}>
                        <Text style={styles.label}>Card Name</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="John Doe"
                            value={cardName}
                            onChangeText={(text) => setCardName(text)}
                        />
                    </View>

                    <View style={styles.rowInputContainer}>
                        <View style={styles.halfInputContainer}>
                            <Text style={styles.label}>Expiry Date</Text>
                            <TextInput
                                style={styles.input}
                                placeholder="MM/YY"
                                value={expiryDate}
                                onChangeText={(text) => setExpiryDate(text)}
                            />
                        </View>

                        <View style={styles.halfInputContainer}>
                            <Text style={styles.label}>CVC</Text>
                            <TextInput
                                style={styles.input}
                                placeholder="123"
                                keyboardType="numeric"
                                maxLength={3}
                                value={cvc}
                                onChangeText={(text) => setCvc(text)}
                            />
                        </View>
                    </View>

                    <View style={styles.checkboxContainer}>
                        <TouchableOpacity onPress={() => setSaveCard(!saveCard)}>
                            <Icon
                                name={saveCard ? 'check-square' : 'square-o'}
                                size={20}
                                color="#007BFF"
                            />
                        </TouchableOpacity>
                        <Text style={styles.checkboxLabel}>Save this card for future transactions</Text>
                    </View>

                    <View style={styles.thematicBreak} />

                    <View style={styles.totalContainer}>
                        <Text style={styles.totalLabel}>Total: $100.00</Text>
                        <TouchableOpacity style={styles.proceedButton} onPress={goToPayment}>
                            <Text style={styles.proceedButtonText}>Proceed to Pay</Text>
                        </TouchableOpacity>
                    </View>
                </View>
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
        textAlign: 'center', // Center the title
    },
    cardImage: {
        width: 1000,
        height: 500,
        marginTop: 10,
    },
    footerContainer: {
        marginTop: 16,
        backgroundColor: '#fff',
        padding: 16,
        borderRadius: 8,
        elevation: 4,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
    },
    footer: {},
    inputContainer: {
        marginBottom: 20,
    },
    rowInputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    halfInputContainer: {
        flex: 1,
        marginRight: 10,
    },
    label: {
        marginBottom: 5,
        color: '#333',
    },
    input: {
        height: 40,
        borderBottomWidth: 1,
        borderColor: '#ccc',
        marginBottom: 10,
        paddingLeft: 0,
    },
    checkboxContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    checkboxLabel: {
        marginLeft: 10,
        color: '#333',
    },
    thematicBreak: {
        borderBottomWidth: 1,
        borderColor: '#ccc',
        marginVertical: 10,
    },
    totalContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    totalLabel: {
        fontSize: 18,
        color: '#333',
    },
    proceedButton: {
        backgroundColor: '#007BFF',
        borderRadius: 8,
        padding: 10,
        alignItems: 'center',
    },
    proceedButtonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default CreditCardScreen;
