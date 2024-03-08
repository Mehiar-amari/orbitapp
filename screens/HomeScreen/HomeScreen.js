import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView, TouchableOpacity, Image } from 'react-native';
import Colors from '../../constants/Colors';

import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: Colors.white }}>
       <View style={{ backgroundColor: 'rgba(128,128,128,0.2)', height: 1, marginBottom: 80 }} />
      <ScrollView contentContainerStyle={{ flexGrow: 1 }} keyboardShouldPersistTaps="handled">
        <View style={{ flex: 1, marginHorizontal: 40 }}>
          <View style={{ alignItems: "center" }}>
            <Text style={styles.title}>HomeScreen Here</Text>
            <View style={{ backgroundColor: 'rgba(128,128,128,0.2)', height: 4, marginBottom: 20 }} />
            
            <TouchableOpacity style={styles.imageContainer } onPress={() => navigation.navigate('page1')}>
              <Image source={require('../../assets/image.png')} style={styles.image} resizeMode="cover" />
              <Text style={styles.text}>Item 1</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.imageContainer}  onPress={() => navigation.navigate('page1')}>
              <Image source={require('../../assets/image.png')} style={styles.image} resizeMode="cover" />
              <Text style={styles.text}>Item 2</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.imageContainer}  onPress={() => navigation.navigate('page1')}>
              <Image source={require('../../assets/image.png')} style={styles.image} resizeMode="cover" />
              <Text style={styles.text}>Item 3</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.imageContainer}  onPress={() => navigation.navigate('page1')}>
              <Image source={require('../../assets/image.png')} style={styles.image} resizeMode="cover" />
              <Text style={styles.text}>Item 4</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.imageContainer}  onPress={() => navigation.navigate('page1')}>
              <Image source={require('../../assets/image.png')} style={styles.image} resizeMode="cover" />
              <Text style={styles.text}>Item 5</Text>
            </TouchableOpacity>
          </View>
         
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginVertical: 20,
    color: Colors.darkblue,
    textAlign: 'center',
  },
  imageContainer: {
    width: '100%',
    alignItems: 'center',
    marginBottom: 40,
   
  },
  image: {
    width: '100%',
    height: 100,
    borderRadius: 20,
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
    color: Colors.darkblue,
    textAlign: 'center',
  },
});

export default HomeScreen;

