import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // Import Icon
import { useNavigation } from '@react-navigation/native';

const EditProfile = () => {
    const navigation = useNavigation();

    // State to manage user input for editing profile
    const [editedName, setEditedName] = useState('');
    const [editedEmail, setEditedEmail] = useState('');
    const [editedPassword, setEditedPassword] = useState('');
    const [editedHeight, setEditedHeight] = useState('');
    const [editedWeight, setEditedWeight] = useState('');
    const [editedGender, setEditedGender] = useState('');

    const goBackToProfileScreen = () => {
        navigation.goBack(); // Navigate back to the Profile screen
    };

    const handleSaveChanges = () => {
        navigation.navigate('Navigation');
    };

    return (
        <View style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <TouchableOpacity onPress={goBackToProfileScreen}>
                    <Icon name="arrow-left" size={30} color="#000" />
                </TouchableOpacity>
                <Text style={styles.headerText}>Edit Profile</Text>
                {/* Empty View to center the title */}
                <View />
            </View>

            {/* Line Break */}
            <View style={styles.lineBreak} />

            {/* Editable fields */}
            <TextInput
                style={styles.input}
                placeholder="Name"
                value={editedName}
                onChangeText={(text) => setEditedName(text)}
            />

            <TextInput
                style={styles.input}
                placeholder="Email"
                value={editedEmail}
                onChangeText={(text) => setEditedEmail(text)}
            />

            <TextInput
                style={styles.input}
                placeholder="Password"
                secureTextEntry
                value={editedPassword}
                onChangeText={(text) => setEditedPassword(text)}
            />

            {/* Thematic Break */}
            <View style={styles.thematicBreak} />

            {/* Additional fields */}
            <Text style={styles.label}>Height (cm)</Text>
            <TextInput
                style={styles.input}
                placeholder="Height"
                keyboardType="numeric"
                value={editedHeight}
                onChangeText={(text) => setEditedHeight(text)}
            />

            <Text style={styles.label}>Weight (kg)</Text>
            <TextInput
                style={styles.input}
                placeholder="Weight"
                keyboardType="numeric"
                value={editedWeight}
                onChangeText={(text) => setEditedWeight(text)}
            />

            <Text style={styles.label}>Gender</Text>
            <TextInput
                style={styles.input}
                placeholder="Gender"
                value={editedGender}
                onChangeText={(text) => setEditedGender(text)}
            />

            {/* Save Changes Button */}
            <TouchableOpacity style={styles.saveButton} onPress={handleSaveChanges}>
                <Text style={styles.saveButtonText}>Save Changes</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 20,
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
    lineBreak: {
        height: 25, // Adjust the height as needed
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 20,
        paddingLeft: 10,
    },
    label: {
        fontSize: 16,
        marginBottom: 4,
    },
    saveButton: {
        backgroundColor: '#4CAF50',
        padding: 15,
        alignItems: 'center',
        borderRadius: 8,
    },
    saveButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    thematicBreak: {
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        marginVertical: 16,
    },
});

export default EditProfile;
