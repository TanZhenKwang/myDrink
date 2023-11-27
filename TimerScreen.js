import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Picker, Switch, TextInput } from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';

const TimerScreen = () => {
    const [isTimePickerVisible, setTimePickerVisible] = useState(false);
    const [selectedTime, setSelectedTime] = useState('');
    const [selectedHour, setSelectedHour] = useState('00');
    const [selectedMinute, setSelectedMinute] = useState('00');
    const [selectedHour2, setSelectedHour2] = useState('00');
    const [selectedMinute2, setSelectedMinute2] = useState('00');
    const [repeatOption, setRepeatOption] = useState('Never'); // Default option
    const [soundOption, setSoundOption] = useState('Radial (Default)'); // Default option
    const [isReminderEnabled, setReminderEnabled] = useState(false);
    const [isSnoozeEnabled, setSnoozeEnabled] = useState(false);
    const [labelText, setLabelText] = useState('');

    const navigation = useNavigation();

    const hours = Array.from({ length: 24 }, (_, index) => index.toString().padStart(2, '0'));
    const minutes = Array.from({ length: 59 }, (_, index) => index.toString().padStart(2, '0'));

    const showTimePicker = () => {
        setTimePickerVisible(true);
    };

    const hideTimePicker = () => {
        setTimePickerVisible(false);
    };

    const handleTimeConfirm = (time) => {
        setSelectedTime(time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
        hideTimePicker();
    };

    const handleCancel = () => {
        navigation.navigate('ReminderSettingScreen');
    };

    const handleSave = () => {
        navigation.navigate('ReminderSettingScreen');
    };

    const handleRepeatPress = () => {
        navigation.navigate('RepeatScreen'); // Navigate to another page for repeat options
    };

    const handleSoundPress = () => {
        navigation.navigate('RingtonePicker'); // Navigate to another page for sound options
    };

    return (
        <View style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <TouchableOpacity onPress={handleCancel} style={styles.headerButton}>
                    <Text style={styles.headerButtonText}>Cancel</Text>
                </TouchableOpacity>
                <Text style={styles.label}>Add Alarm</Text>
                <TouchableOpacity onPress={handleSave} style={styles.headerButton}>
                    <Text style={styles.headerButtonText}>Save</Text>
                </TouchableOpacity>
            </View>

            {/* Picker for selecting hours and minutes */}
            <View style={styles.pickerContainer}>
                <Picker
                    selectedValue={selectedHour}
                    onValueChange={(itemValue) => setSelectedHour(itemValue)}
                    style={styles.picker}
                    itemStyle={styles.pickerItem}
                >
                    {hours.slice(0, 24).map((hour) => (
                        <Picker.Item key={hour} label={hour} value={hour} />
                    ))}
                </Picker>
                <Text style={styles.pickerSeparator}>:</Text>

                <Picker
                    selectedValue={selectedMinute}
                    onValueChange={(itemValue) => setSelectedMinute(itemValue)}
                    style={styles.picker}
                    itemStyle={styles.pickerItem}
                >
                    {minutes.slice(0, 59).map((minute) => (
                        <Picker.Item key={minute} label={minute} value={minute} />
                    ))}
                </Picker>
            </View>

            <Text style={styles.centeredSeparator}>-</Text>

            <View style={styles.pickerContainer}>
                <Picker
                    selectedValue={selectedHour2}
                    onValueChange={(itemValue) => setSelectedHour2(itemValue)}
                    style={styles.picker}
                    itemStyle={styles.pickerItem}
                >
                    {hours.slice(0, 24).map((hour) => (
                        <Picker.Item key={hour} label={hour} value={hour} />
                    ))}
                </Picker>

                <Text style={styles.pickerSeparator}>:</Text>

                <Picker
                    selectedValue={selectedMinute2}
                    onValueChange={(itemValue) => setSelectedMinute2(itemValue)}
                    style={styles.picker}
                    itemStyle={styles.pickerItem}
                >
                    {minutes.slice(0, 59).map((minute) => (
                        <Picker.Item key={minute} label={minute} value={minute} />
                    ))}
                </Picker>
            </View>

            <View style={styles.additionalContainer}>
                {/* Repeat */}
                <TouchableOpacity onPress={handleRepeatPress} style={styles.repeatButton}>
                    <Text style={styles.label}>Repeat</Text>
                    <View style={styles.repeatRow}>
                        <Text style={styles.repeatOption}>{repeatOption}</Text>
                        <Icon name="chevron-right" size={10} color="#007AFF" style={styles.icon} />
                    </View>
                </TouchableOpacity>

                {/* Line break */}
                <View style={styles.lineBreak} />

                {/* Label */}
                <View style={styles.labelRow}>
                    <Text style={styles.label}>Label</Text>
                    {/* Inserted text at the right side */}
                    <TextInput
                        style={styles.input}
                        value={labelText}
                        onChangeText={(text) => setLabelText(text)}
                    />
                </View>

                {/* Line break */}
                <View style={styles.lineBreak} />

                {/* Sound */}
                <TouchableOpacity onPress={handleSoundPress} style={styles.soundRow}>
                    <Text style={styles.label}>Sound</Text>
                    <View style={styles.soundRow}>
                        <Text style={styles.repeatOption}>{soundOption}</Text>
                        <Icon name="chevron-right" size={10} color="#007AFF" style={styles.icon} />
                    </View>
                </TouchableOpacity>

                {/* Line break */}
                <View style={styles.lineBreak} />

                {/* Snooze */}
                <View style={styles.snoozeRow}>
                    <Text style={styles.label}>Snooze</Text>
                    <View style={styles.switchContainer}>
                        <Switch
                            trackColor={{ false: '#767577', true: '#81b0ff' }}
                            thumbColor={isSnoozeEnabled ? '#f5dd4b' : '#f4f3f4'}
                            ios_backgroundColor="#3e3e3e"
                            onValueChange={() => setSnoozeEnabled(!isSnoozeEnabled)}
                            value={isSnoozeEnabled}
                        />
                    </View>
                </View>
            </View>

            <DateTimePickerModal
                isVisible={isTimePickerVisible}
                mode="time"
                onConfirm={handleTimeConfirm}
                onCancel={hideTimePicker}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        justifyContent: 'flex-start',
        backgroundColor: '#f7f7f7', // Light gray background color
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 16,
    },
    headerButton: {
        backgroundColor: '#007AFF', // Blue color
        padding: 10,
        borderRadius: 8,
        alignItems: 'center',
    },
    headerButtonText: {
        color: '#fff',
        fontSize: 18,
    },
    pickerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff', // White background color
        borderRadius: 8,
        elevation: 4, // Material design-like shadow for Android
        marginBottom: 20,
        top: 25,
    },
    picker: {
        flex: 1,
        height: 50,
        marginLeft: 10,
        marginRight: 10,
        color: '#000', // Black color
    },
    pickerItem: {
        color: '#000', // Black color
    },
    pickerSeparator: {
        fontSize: 20,
        marginHorizontal: 10,
        color: '#000', // Black color
    },
    centeredSeparator: {
        fontSize: 24,
        color: '#000', // Black color
        textAlign: 'center',
        marginHorizontal: 'auto',
        marginTop: 25,
    },
    additionalContainer: {
        backgroundColor: '#e1e1e1',
        padding: 10,
        borderRadius: 10,
        marginBottom: 20,
        top: 35,
    },
    repeatButton: {
        marginTop: 16,
        flexDirection: 'row',
        alignItems: 'center',
    },
    repeatRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 'auto',
    },
    repeatOption: {
        marginRight: 10,
        color: '#000',
        fontSize: 18,
    },
    labelRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 2, // Adjusted margin for the Label row
    },
    label: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#000', // Black color
    },
    rightSideText: {
        fontSize: 16,
        color: '#000', // Black color
    },
    soundRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 2,
    },
    icon: {
        marginLeft: 'auto',
    },
    snoozeRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 2,
    },
    switchContainer: {
        marginLeft: 'auto',
    },
    footerSection: {
        marginTop: 16,
    },
    input: {
        flex: 1,
        height: 40,
        marginLeft: 10,
        marginRight: 10,
        color: '#000', // Black color
    },
    lineBreak: {
        height: 1,
        backgroundColor: 'black', // Light gray color
        marginVertical: 16,
    },
});

export default TimerScreen;
