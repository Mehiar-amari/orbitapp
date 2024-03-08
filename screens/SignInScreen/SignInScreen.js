import React, { useState } from 'react';
import { Text, View, TextInput, StyleSheet, useWindowDimensions, SafeAreaView, TouchableOpacity, ScrollView ,Image} from 'react-native';
import { Ionicons } from 'react-native-vector-icons';
import Colors from '../../constants/Colors';
import { useNavigation } from '@react-navigation/native';

const SignInScreen = () => {
  const { height } = useWindowDimensions();
  const [isPasswordShown, setIsPasswordShown] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

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

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: Colors.white }}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }} keyboardShouldPersistTaps="handled">
        <View style={{ flex: 1, marginHorizontal: 40, justifyContent: 'center' }}>
          <View>
          <Image
            source={require('../../assets/picture2.png')}
           style={{ width: 150, height: 150, resizeMode: 'contain' }}
          />
          </View>


          <View >
            <Text style={{
              fontSize: 24,
              fontWeight: 'bold',
              color: Colors.black,
            }}> Welcome! 👋 </Text>
          </View>
          <View style={{height:10}}/>

          <View >
            <Text style={{
              fontSize: 19,
              color: Colors.black,
            }}> Please sign in to your account! </Text>
          </View>
          <View style={{height:20}}/>

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

          <TouchableOpacity
            onPress={() => navigation.navigate('NavPage')}
            style={{
              backgroundColor: Colors.darkblue,
              paddingVertical: 10,
              paddingHorizontal: 20,
              borderRadius: 5,
              marginTop: 20 // Adjust as needed
            }}>
            <Text style={{ color: 'white', fontSize: 16, textAlign: 'center' }}>Login</Text>
          </TouchableOpacity>


          
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

export default SignInScreen;

