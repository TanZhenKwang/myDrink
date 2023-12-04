import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground, Image, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';

const ProfileScreen = () => {
    const navigation = useNavigation();

    const user = {
        name: 'John Doe',
        email: 'john@example.com',
        profileImage: require('./assets/girl.png'),
        oneDaysDrink: 3,
        averageDrink: 250,
        timesDrank: 50,
    };

    const handleLogout = () => {
        navigation.navigate('Login');
    };

    const handleProfilePress = () => {
        navigation.navigate('Login');
    };

    return (
        <ImageBackground source={require('./assets/SnowBackground.jpg')} style={styles.backgroundImage}>
            <ScrollView style={styles.container}>
                {/* Header */}
                <TouchableOpacity style={styles.header} onPress={handleProfilePress}>
                    <Image source={user.profileImage} style={styles.profileImage} />
                    <Text style={styles.headerText}>{user.name}</Text>
                    <Text style={styles.info}>Tap to login</Text>
                </TouchableOpacity>

                {/* User Information Container */}
                <View style={styles.userInfoContainer}>
                    {/* User Information */}
                    <View style={styles.horizontalInfo}>
                        <View style={styles.horizontalInfoItem}>
                            <Text style={styles.horizontalInfoText}>{user.oneDaysDrink}</Text>
                            <Text style={styles.horizontalLabel}>Day's Drink</Text>
                        </View>

                        <View style={styles.horizontalInfoItem}>
                            <Text style={styles.horizontalInfoText}>{user.averageDrink}</Text>
                            <Text style={styles.horizontalLabel}>Average Drink</Text>
                        </View>

                        <View style={styles.horizontalInfoItem}>
                            <Text style={styles.horizontalInfoText}>{user.timesDrank}</Text>
                            <Text style={styles.horizontalLabel}>Times Drink</Text>
                        </View>
                    </View>
                </View>

                {/* Payment Container */}
                <View style={styles.additionalContainer}>
                    {/* Payment */}
                    <View style={styles.horizontalInfo}>
                        <TouchableOpacity
                            onPress={() => navigation.navigate('TopayScreen')}
                            style={styles.centeredVertical}>
                            <Icon name="shopping-cart" size={50} color="#000" />
                            <Text style={styles.horizontalLabel}>To Pay</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            onPress={() => navigation.navigate('WaitingSendScreen')}
                            style={styles.centeredVertical}>
                            <Icon name="cubes" size={50} color="#000" />
                            <Text style={styles.horizontalLabel}>Waiting Send</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            onPress={() => navigation.navigate('WaitingReceiveScreen')}
                            style={styles.centeredVertical}>
                            <Icon name="truck" size={50} color="#000" />
                            <Text style={styles.horizontalLabel}>Waiting Receive</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                {/* Additional buttons */}
                <View style={styles.additionalContainer}>
                    <View style={styles.verticalButtons}>
                        <TouchableOpacity
                            onPress={() => navigation.navigate('SettingScreen')}
                            style={styles.verticalButton}>
                            <Text style={styles.buttonTextLeft}>Settings</Text>
                        </TouchableOpacity>

                        {/* Thematic Break */}
                        <View style={styles.thematicBreak} />

                        <TouchableOpacity
                            onPress={() => navigation.navigate('ReminderSettingScreen')}
                            style={styles.verticalButton}>
                            <Text style={styles.buttonTextLeft}>Reminder Settings</Text>
                        </TouchableOpacity>

                        {/* Thematic Break */}
                        <View style={styles.thematicBreak} />

                        <TouchableOpacity
                            onPress={() => navigation.navigate('ThemeScreen')}
                            style={styles.verticalButton}>
                            <Text style={styles.buttonTextLeft}>Theme</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                {/* About Us */}
                <View style={styles.additionalContainer}>
                    <View style={styles.aboutUsContainer}>
                        <Image source={require('./assets/boy.png')} style={styles.aboutUsImage} />

                        <View style={styles.aboutUsTextContainer}>
                            <Text style={styles.aboutUsTitle}>About Us</Text>
                            <Text style={styles.aboutUsDescription}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget felis vitae mauris.
                            </Text>
                        </View>
                    </View>
                </View>

                {/* Log-out Button */}
                <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
                    <Text style={styles.logoutButtonText}>Log Out</Text>
                </TouchableOpacity>
            </ScrollView>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
      },
    header: {
        alignItems: 'center',
        marginBottom: 20,
    },
    profileImage: {
        width: 100,
        height: 100,
        borderRadius: 50, // Make it a circle
        marginBottom: 10,
    },
    headerText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'black',
    },
    userInfoContainer: {
        backgroundColor: '#e1e1e1',
        padding: 10, // Adjust the padding to make it smaller
        borderRadius: 10,
        marginBottom: 20,
    },
    additionalContainer: {
        backgroundColor: 'white',
        padding: 15,
        borderRadius: 10,
        marginBottom: 20,
    },
    thematicBreak: {
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
        marginBottom: 20,
    },
    horizontalInfo: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 5,
    },
    horizontalInfoItem: {
        alignItems: 'center',
    },
    horizontalInfoText: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    horizontalLabel: {
        fontSize: 16,
        color: 'gray',
        marginTop: 5,
    },
    centeredVertical: {
        alignItems: 'center',
    },
    verticalButtons: {
        flexDirection: 'column',
        alignItems: 'flex-start',
    },
    aboutUsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    aboutUsImage: {
        width: 80,
        height: 80,
        borderRadius: 40,
        marginRight: 20,
    },
    aboutUsTextContainer: {
        flex: 1,
    },
    aboutUsTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 8,
        color: '#000',
    },
    aboutUsDescription: {
        fontSize: 16,
        color: 'gray',
    },
    logoutButton: {
        backgroundColor: '#ff6347',
        padding: 15,
        alignItems: 'center',
        borderRadius: 8,
    },
    logoutButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    buttonTextLeft: {
        color: 'black',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'left',
    },
});

export default ProfileScreen;