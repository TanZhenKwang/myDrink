import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';

const RingtonePicker = () => {
    const navigation = useNavigation();
    const [selectedRingtone, setSelectedRingtone] = useState(null);

    const ringtoneOptions = [
        { id: '1', name: 'Ringtone Option 1' },
        { id: '2', name: 'Ringtone Option 2' },
        { id: '3', name: 'Ringtone Option 3' },
        // Add more ringtone options as needed
    ];

    const handleRingtoneSelection = (ringtone) => {
        setSelectedRingtone(ringtone);
        // You can implement logic to save the selected ringtone
        // For example, you might want to update a user's preferences on the server
    };

    const goBackToProfileScreen = () => {
        navigation.goBack(); // Navigate back to the previous screen
    };

    const renderItem = ({ item }) => (
        <TouchableOpacity
            style={[styles.ringtoneOption, selectedRingtone?.id === item.id && styles.selectedRingtone]}
            onPress={() => handleRingtoneSelection(item)}
        >
            <Text style={styles.ringtoneText}>{item.name}</Text>
            {selectedRingtone?.id === item.id && <Icon name="check" size={20} color="#007BFF" style={styles.icon} />}
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <TouchableOpacity onPress={goBackToProfileScreen}>
                    <Icon name="arrow-left" size={30} color="#000" />
                </TouchableOpacity>
                <Text style={styles.headerText}>Ringtone</Text>
                {/* Empty View to center the title */}
                <View />
            </View>

            {/* Ringtone options */}
            <FlatList
                data={ringtoneOptions}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                contentContainerStyle={styles.ringtoneList}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#fff',
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
    ringtoneList: {
        marginTop: 20,
    },
    ringtoneOption: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderColor: '#ccc',
        paddingVertical: 16,
    },
    selectedRingtone: {
        backgroundColor: '#e1e1e1',
    },
    ringtoneText: {
        fontSize: 18,
    },
    icon: {
        marginLeft: 10,
    },
});

export default RingtonePicker;
