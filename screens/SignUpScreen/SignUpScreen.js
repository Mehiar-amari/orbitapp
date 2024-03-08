import React, { useState } from 'react';
import { Text, View, TextInput, StyleSheet, useWindowDimensions, SafeAreaView, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from 'react-native-vector-icons';
import Colors from '../../constants/Colors';
import { useNavigation } from '@react-navigation/native';

const SignUpScreen = () => {
  const { height } = useWindowDimensions();
  const [isPasswordShown, setIsPasswordShown] = useState(false);
  const [isConfirmPasswordShown, setIsConfirmPasswordShown] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [confirmPasswordError, setConfirmPasswordError] = useState(false);

  // Use useNavigation hook to get the navigation object
  const navigation = useNavigation();

  const handleEmailChange = (text) => {
    setEmail(text);
    if (text.length > 30) {
      setEmailError(true);
    } else {
      setEmailError(false);
    }
  };

  const handlePasswordChange = (text) => {
    setPassword(text);
    if (text.length > 30) {
      setPasswordError(true);
    } else {
      setPasswordError(false);
    }
  };

  const handleConfirmPasswordChange = (text) => {
    setConfirmPassword(text);
    if (text.length > 30) {
      setConfirmPasswordError(true);
    } else {
      setConfirmPasswordError(false);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: Colors.white }}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }} keyboardShouldPersistTaps="handled">
        <View style={{ flex: 1, marginHorizontal: 40, justifyContent: 'center' }}>
          <View style={{ alignItems: "center" }}>
            <Text style={{
              fontSize: 22,
              fontWeight: 'bold',
              marginBottom: 80,
              color: Colors.darkblue
            }}> Sign Up Here </Text>
          </View>
          <View style={{ backgroundColor: 'rgba(128,128,128,0.2)', height: 1, marginBottom: 20 }} />

          <View style={{ marginBottom: 12 }}>
            <Text style={{
              fontSize: 16,
              fontWeight: '400',
              marginVertical: 10
            }}>Email address</Text>

            <View style={[styles.inputContainer, emailError && styles.inputContainerError]}>
              <TextInput
                placeholder='Enter your email address'
                placeholderTextColor={Colors.black}
                keyboardType='email-address'
                style={styles.input}
                value={email}
                onChangeText={handleEmailChange}
              />
            </View>
            {emailError && <Text style={styles.errorText}>Email must be under 30 characters</Text>}
          </View>

          <View style={{ marginBottom: 15 }}>
            <Text style={{
              fontSize: 16,
              fontWeight: '400',
              marginVertical: 10
            }}>Password</Text>

            <View style={[styles.inputContainer, passwordError && styles.inputContainerError]}>
              <TextInput
                placeholder='Enter your password'
                placeholderTextColor={Colors.black}
                secureTextEntry={!isPasswordShown}
                style={styles.input}
                value={password}
                onChangeText={handlePasswordChange}
              />

              <TouchableOpacity
                onPress={() => setIsPasswordShown(!isPasswordShown)}
                style={{
                  position: "absolute",
                  right: 12
                }}
              >
                {
                  isPasswordShown ? (
                    <Ionicons name="eye" size={24} color={Colors.black} />
                  ) : (
                    <Ionicons name="eye-off" size={24} color={Colors.black} />
                  )
                }
              </TouchableOpacity>
            </View>
            {passwordError && <Text style={styles.errorText}>Password must be under 30 characters</Text>}
          </View>

          <View style={{ marginBottom: 15 }}>
            <Text style={{
              fontSize: 16,
              fontWeight: '400',
              marginVertical: 10
            }}>Confirm Password</Text>

            <View style={[styles.inputContainer, confirmPasswordError && styles.inputContainerError]}>
              <TextInput
                placeholder='Confirm your password'
                placeholderTextColor={Colors.black}
                secureTextEntry={!isConfirmPasswordShown}
                style={styles.input}
                value={confirmPassword}
                onChangeText={handleConfirmPasswordChange}
              />

              <TouchableOpacity
                onPress={() => setIsConfirmPasswordShown(!isConfirmPasswordShown)}
                style={{
                  position: "absolute",
                  right: 12
                }}
              >
                {
                  isConfirmPasswordShown ? (
                    <Ionicons name="eye" size={24} color={Colors.black} />
                  ) : (
                    <Ionicons name="eye-off" size={24} color={Colors.black} />
                  )
                }
              </TouchableOpacity>
            </View>
            {confirmPasswordError && <Text style={styles.errorText}>Password must be under 30 characters</Text>}
          </View>

          <TouchableOpacity
            onPress={() => {
              // Perform login logic
            }}
            style={{
              backgroundColor: Colors.darkblue,
              paddingVertical: 10,
              paddingHorizontal: 20,
              borderRadius: 5,
              marginTop: 20 // Adjust as needed
            }}>
            <Text style={{ color: 'white', fontSize: 16, textAlign: 'center' }}>Register</Text>
          </TouchableOpacity>

          <View style={{ backgroundColor: 'rgba(128,128,128,0.2)', height: 1, marginTop: 30 }} />

          <View style={{ marginTop: 20, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{
              marginRight: 5,
              fontSize: 16,
              fontWeight: '400',
            }}>Already have an account?</Text>
            <TouchableOpacity onPress={() => navigation.navigate('login')}>

              <Text style={{
                color: Colors.darkblue,
                fontSize: 16,
                fontWeight: '400',
              }}>login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    width: "100%",
    height: 48,
    borderColor: Colors.black,
    borderWidth: 1,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    paddingLeft: 22,
    marginBottom: 10,
  },
  inputContainerError: {
    borderColor: 'red',
  },
  input: {
    width: "100%",
  },
  errorText: {
    color: 'red',
    marginTop: 5,
  },
});

export default SignUpScreen;
