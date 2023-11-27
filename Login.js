import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, ImageBackground, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';

const Login = () => {
    const navigation = useNavigation();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        if (username.trim() === '' || password.trim() === '') {
            Alert.alert('Error', 'Username and password are required');
        } else {
            Alert.alert('Success', 'Login successful!');
            navigation.navigate('EditProfile');
        }
    };

    return (
        <ImageBackground source={require('./assets/SnowBackground.jpg')} style={styles.backgroundImage}>
            <View style={styles.container}>
                {/* Image */}
                <Image source={require('./assets/Login.png')} style={styles.image} />

                {/* Username Input */}
                <TextInput
                    style={styles.input}
                    placeholder="Username"
                    value={username}
                    onChangeText={(text) => setUsername(text)}
                />

                {/* Password Input */}
                <TextInput
                    style={styles.input}
                    placeholder="Password"
                    value={password}
                    onChangeText={(text) => setPassword(text)}
                    secureTextEntry={true}
                />

                {/* Login Button */}
                <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
                    <Text style={styles.loginButtonText}>Login</Text>
                </TouchableOpacity>

                {/* Thematic Break */}
                <View style={styles.thematicBreak} />

                {/* Social Login Icons */}
                <View style={styles.socialLoginContainer}>
                    {/* Google Login */}
                    <TouchableOpacity style={styles.googleLoginButton}>
                        <FontAwesome name="google" size={30} color="green" />
                    </TouchableOpacity>

                    {/* Facebook Login */}
                    <TouchableOpacity style={styles.facebookLoginButton}>
                        <FontAwesome name="facebook" size={30} color="#1877f2" />
                    </TouchableOpacity>

                    {/* Apple Login */}
                    <TouchableOpacity style={styles.appleLoginButton}>
                        <MaterialCommunityIcons name="apple" size={30} color="black" />
                    </TouchableOpacity>
                </View>
            </View>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 16,
    },
    image: {
        width: 150,
        height: 150,
        alignSelf: 'center',
        marginBottom: 16,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
        textAlign: 'center',
        color: 'black',
    },
    input: {
        height: 40,
        borderWidth: 1,
        borderColor: 'black',
        marginBottom: 16,
        paddingHorizontal: 10,
        color: 'black',
    },
    loginButton: {
        backgroundColor: 'transparent',
        borderRadius: 8,
        padding: 16,
        alignItems: 'center',
    },
    loginButtonText: {
        color: 'black',
        fontSize: 18,
        fontWeight: 'bold',
    },
    thematicBreak: {
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        marginVertical: 16,
    },
    socialLoginContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },
    socialLoginButton: {
        backgroundColor: '#007BFF',
        borderRadius: 50,
        padding: 16,
        alignItems: 'center',
    },
    facebookLoginButton: {
        backgroundColor: 'transparent',
        borderRadius: 50,
        padding: 16,
        alignItems: 'center',
    },
    googleLoginButton: {
        backgroundColor: 'transparent',
        borderRadius: 50,
        padding: 16,
        alignItems: 'center',
    },
    appleLoginButton: {
        backgroundColor: 'transparent',
        borderRadius: 50,
        padding: 16,
        alignItems: 'center',
    },
});

export default Login;
