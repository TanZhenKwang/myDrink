import React, { useState } from 'react';
import { View, Text, StyleSheet, Switch, TouchableOpacity, TextInput, Alert } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useNavigation, CommonActions } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';

const SettingScreen = () => {
    const navigation = useNavigation();
    const [isReminderEnabled, setIsReminderEnabled] = useState(false);
    const [isFeatureEnabled, setIsFeatureEnabled] = useState(false);
    const [unit, setUnit] = useState('kg');
    const [intakeGoal, setIntakeGoal] = useState('');
    const [language, setLanguage] = useState('');

    const toggleReminderSwitch = () => {
        setIsReminderEnabled((previousState) => !previousState);
    };

    const toggleFeatureSwitch = () => {
        setIsFeatureEnabled((previousState) => !previousState);
    };

    const saveChanges = () => {
        // Implement logic to save changes
        console.log('Changes saved!');
    };

    const setReminder = () => {
        Alert.alert('Reminder Set', 'You will be reminded!');
    };

    const goBackToProfileScreen = () => {
        navigation.navigate('Navigation');
    };

    return (
        <View style={styles.container}>
            {/* Header with Navigation Links */}
            <View style={styles.header}>
                <TouchableOpacity onPress={goBackToProfileScreen}>
                    <Icon name="arrow-left" size={30} color="#000" />
                </TouchableOpacity>
                <Text style={styles.headerText}>Settings</Text>
                {/* Empty View to center the title */}
                <View />
            </View>

            {/* Reminder Section */}
            <View style={styles.settingItem}>
                <Text style={styles.settingLabel}>Set Reminder</Text>
                <Switch
                    trackColor={{ false: '#767577', true: '#81b0ff' }}
                    thumbColor={isReminderEnabled ? '#f5dd4b' : '#f4f3f4'}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={toggleReminderSwitch}
                    value={isReminderEnabled}
                />
            </View>

            {/* General Section */}
            <View style={styles.settingItem}>
                <Text style={styles.settingLabel}>Enable Feature</Text>
                <Switch
                    trackColor={{ false: '#767577', true: '#81b0ff' }}
                    thumbColor={isFeatureEnabled ? '#f5dd4b' : '#f4f3f4'}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={toggleFeatureSwitch}
                    value={isFeatureEnabled}
                />
            </View>

            <View style={styles.thematicBreak}>
                <Text style={styles.thematicBreakText}>General</Text>
            </View>

            {/* Intake Goal Section */}
            <View style={styles.settingItem}>
                <Text style={styles.settingLabel}>Intake Goal</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Enter Intake Goal"
                    keyboardType="numeric"
                    value={intakeGoal}
                    onChangeText={(text) => setIntakeGoal(text)}
                />
            </View>

            {/* Unit Section */}
            <View style={styles.settingItem}>
                <Text style={styles.settingLabel}>Unit</Text>
                <Picker
                    selectedValue={unit}
                    style={styles.picker}
                    onValueChange={(itemValue) => setUnit(itemValue)}
                >
                    <Picker.Item label="kg" value="kg" />
                    <Picker.Item label="ml" value="ml" />
                </Picker>
            </View>

            {/* Language Section */}
            <View style={styles.settingItem}>
                <Text style={styles.settingLabel}>Language</Text>
                <Picker
                    selectedValue={language}
                    style={styles.picker}
                    onValueChange={(itemValue, itemIndex) => setLanguage(itemValue)}
                >
                    <Picker.Item label="English" value="english" />
                    <Picker.Item label="Spanish" value="spanish" />
                    {/* Add more language options as needed */}
                </Picker>
            </View>


            {/* Save Changes Button */}
            <TouchableOpacity style={styles.saveButton} onPress={saveChanges}>
                <Text style={styles.saveButtonText}>Save Changes</Text>
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
        alignItems: 'center', // Center items along the cross-axis (vertical)
        justifyContent: 'space-between',
        marginTop: 5,
    },
    headerText: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center', // Center the title
    },
    reminderButton: {
        backgroundColor: '#007BFF',
        borderRadius: 8,
        padding: 16,
        alignItems: 'center',
        marginBottom: 20,
    },
    reminderButtonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
    settingItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
    },
    settingLabel: {
        fontSize: 18,
        color: '#333',
    },
    thematicBreak: {
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
        marginBottom: 20,
    },
    thematicBreakText: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    picker: {
        height: 40,
        width: 150,
        marginTop: 10,  // Add margin or adjust as needed
        backgroundColor: '#fafafa',
        borderWidth: 0,
    },
    input: {
        height: 40,
        borderBottomWidth: 1,
        borderColor: '#ccc',
        marginBottom: 10,
        paddingLeft: 0,
    },
    saveButton: {
        backgroundColor: '#007BFF',
        borderRadius: 8,
        padding: 16,
        alignItems: 'center',
        top: 450,
    },
    saveButtonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default SettingScreen;
