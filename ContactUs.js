import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView } from 'react-native'; // Import ScrollView for better scrolling
import Icon from 'react-native-vector-icons/FontAwesome'; // Import the icon library you're using
import { useNavigation } from '@react-navigation/native';

const ContactUs = () => {
    const navigation = useNavigation();

    const handleSendMessage = () => {
        // Implement logic to send the message
        console.log('Message sent!');
        // Optionally, navigate to a confirmation screen or perform other actions
    };

    const goBackToProfileScreen = () => {
        navigation.goBack(); // Navigate back to the Profile screen
    };

    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={styles.header}>
                    <TouchableOpacity onPress={goBackToProfileScreen}>
                        <Icon name="arrow-left" size={30} color="#000" />
                    </TouchableOpacity>
                    <Text style={styles.headerText}>Contact Us</Text>
                    {/* Empty View to center the title */}
                    <View />
                </View>

                {/* Name and Email Row */}
                <View style={styles.inputRow}>
                    {/* Name Input */}
                    <TextInput
                        style={[styles.input, styles.inputRowItem]}
                        placeholder="Your Name"
                        // Add onChangeText and value props as needed
                    />

                    {/* Email Input */}
                    <TextInput
                        style={[styles.input, styles.inputRowItem]}
                        placeholder="Your Email"
                        keyboardType="email-address"
                        // Add onChangeText and value props as needed
                    />
                </View>

                {/* Message Input */}
                <TextInput
                    style={styles.messageInput}
                    placeholder="Your Message"
                    multiline
                    // Add onChangeText and value props as needed
                />
            </ScrollView>

            {/* Send Button */}
            <TouchableOpacity style={styles.sendButton} onPress={handleSendMessage}>
                <Text style={styles.sendButtonText}>Send Message</Text>
            </TouchableOpacity>
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
    inputRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 8, // Reduced the gap
    },
    inputRowItem: {
        flex: 1,
        marginRight: 8,
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 8, // Reduced the gap
        padding: 8,
    },
    messageInput: {
        height: 100,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 8, // Reduced the gap
        padding: 8,
        textAlignVertical: 'top', // Vertical alignment for multiline input
    },
    sendButton: {
        backgroundColor: '#007BFF',
        borderRadius: 8,
        paddingVertical: 12,
        paddingHorizontal: 24,
        width: '100%',
        alignSelf: 'flex-end', // Align to the bottom
    },
    sendButtonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});

export default ContactUs;
