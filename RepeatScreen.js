// RepeatScreen.js
import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation, CommonActions } from '@react-navigation/native';

const RepeatScreen = () => {
    const navigation = useNavigation();
    const [selectedDays, setSelectedDays] = useState([]);

    const toggleDay = (day) => {
        const isSelected = selectedDays.includes(day);
        if (isSelected) {
            setSelectedDays(selectedDays.filter((selectedDay) => selectedDay !== day));
        } else {
            setSelectedDays([...selectedDays, day]);
        }
    };

    const goBackToTimerScreen = () => {
        navigation.navigate('TimerScreen');
    };

    return (
        <View style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <TouchableOpacity onPress={goBackToTimerScreen}>
                    <Icon name="arrow-left" size={30} color="#000" />
                </TouchableOpacity>
                <Text style={styles.headerText}>Repeat</Text>
                {/* Empty View to center the title */}
                <View />
            </View>

            {/* Day containers */}
            <View style={styles.additionalContainer}>
                <TouchableOpacity onPress={() => toggleDay('Monday')} style={styles.dayContainer}>
                    <Text style={styles.dayText}>Every 10 minutues</Text>
                    {selectedDays.includes('Monday') && (
                        <Icon name="check" size={20} color="#007BFF" style={styles.icon} />
                    )}
                </TouchableOpacity>

                <TouchableOpacity onPress={() => toggleDay('Tuesday')} style={styles.dayContainer}>
                    <Text style={styles.dayText}>Every 20 minutes</Text>
                    {selectedDays.includes('Tuesday') && (
                        <Icon name="check" size={20} color="#007BFF" style={styles.icon} />
                    )}
                </TouchableOpacity>

                <TouchableOpacity onPress={() => toggleDay('Wednesday')} style={styles.dayContainer}>
                    <Text style={styles.dayText}>Every 30 minutues</Text>
                    {selectedDays.includes('Wednesday') && (
                        <Icon name="check" size={20} color="#007BFF" style={styles.icon} />
                    )}
                </TouchableOpacity>

                <TouchableOpacity onPress={() => toggleDay('Thursday')} style={styles.dayContainer}>
                    <Text style={styles.dayText}>Every 40 minutues</Text>
                    {selectedDays.includes('Thursday') && (
                        <Icon name="check" size={20} color="#007BFF" style={styles.icon} />
                    )}
                </TouchableOpacity>

                <TouchableOpacity onPress={() => toggleDay('Friday')} style={styles.dayContainer}>
                    <Text style={styles.dayText}>Every 50 minutues</Text>
                    {selectedDays.includes('Friday') && (
                        <Icon name="check" size={20} color="#007BFF" style={styles.icon} />
                    )}
                </TouchableOpacity>

                <TouchableOpacity onPress={() => toggleDay('Saturday')} style={styles.dayContainer}>
                    <Text style={styles.dayText}>Every 60 minutues</Text>
                    {selectedDays.includes('Saturday') && (
                        <Icon name="check" size={20} color="#007BFF" style={styles.icon} />
                    )}
                </TouchableOpacity>

                <TouchableOpacity onPress={() => toggleDay('Sunday')} style={styles.dayContainer}>
                    <Text style={styles.dayText}>Never</Text>
                    {selectedDays.includes('Sunday') && (
                        <Icon name="check" size={20} color="#007BFF" style={styles.icon} />
                    )}
                </TouchableOpacity>
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
    additionalContainer: {
        backgroundColor: '#e1e1e1',
        padding: 15,
        borderRadius: 2,
        marginBottom: 10,
        top: 25,
    },
    dayContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderColor: '#ccc',
        paddingVertical: 16,
    },
    dayText: {
        fontSize: 18,
    },
    icon: {
        marginLeft: 10,
    },
});

export default RepeatScreen;