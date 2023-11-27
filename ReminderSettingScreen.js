import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';

const ReminderSettingScreen = () => {
    const [reminderTime, setReminderTime] = useState('');
    const [isDatePickerVisible, setDatePickerVisible] = useState(false);
    const navigation = useNavigation();

    const hideDatePicker = () => {
        setDatePickerVisible(false);
    };

    const handleConfirm = (date) => {
        // Handle the selected time
        setReminderTime(date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
        hideDatePicker();
    };

    const saveReminder = () => {
        // Implement logic to save the reminder (e.g., store in state, database, etc.)
        console.log('Reminder Time:', reminderTime);
        // Add logic to save the reminder time as needed
    };

    const goBackToProfileScreen = () => {
        navigation.navigate('Navigation');
    };

    const goToTimerScreen = () => {
        navigation.navigate('TimerScreen');
    };

    return (
        <View style={styles.container}>
            {/* Header with Navigation Links */}
            <View style={styles.header}>
                <TouchableOpacity onPress={goBackToProfileScreen}>
                    <Icon name="arrow-left" size={30} color="#000" />
                </TouchableOpacity>
                <Text style={styles.headerText}>Reminder</Text>
                <TouchableOpacity onPress={goToTimerScreen}>
                    <Icon name="plus" size={30} color="#007BFF" />
                </TouchableOpacity>
            </View>

            <View style={styles.reminderContainer}>
                <View style={styles.reminderRow}>
                    <Text style={styles.reminderTime}>{`09:00 - 21:00 ${reminderTime}`}</Text>
                    <TouchableOpacity onPress={goToTimerScreen} style={styles.editIcon}>
                        <Icon name="edit" size={20} color="#007BFF" />
                    </TouchableOpacity>
                </View>
                <View style={styles.intervalRow}>
                    <Text style={styles.intervalText}>Every 60 minutes</Text>
                </View>
            </View>

            <DateTimePickerModal
                isVisible={isDatePickerVisible}
                mode="time"
                onConfirm={handleConfirm}
                onCancel={hideDatePicker}
            />

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
    reminderContainer: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        padding: 16,
        marginTop: 20,
    },
    editIcon: {
        marginLeft: 'auto', // This will push the edit icon to the right side of the row
    },
    reminderRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 16,
    },
    reminderTime: {
        fontSize: 16,
    },
    intervalRow: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    intervalText: {
        fontSize: 14,
        color: '#555',
    },
    saveButton: {
        position: 'absolute',
        bottom: 16,
        left: 16,
        right: 16,
        backgroundColor: '#007BFF',
        padding: 10,
        borderRadius: 8,
        alignItems: 'center',
    },
    saveButtonText: {
        color: '#fff',
        fontSize: 18,
    },
});

export default ReminderSettingScreen;
