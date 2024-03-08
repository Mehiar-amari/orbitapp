import React, { useState } from 'react';
import { Text, View, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import { Ionicons, MaterialIcons } from 'react-native-vector-icons';
import { FONTS, COLORS } from '../../constants/theme';
import { FontAwesome, Octicons } from '@expo/vector-icons';

const PageH = () => {
  const [selectedMonth1, setSelectedMonth1] = useState('');
  const [selectedMonth2, setSelectedMonth2] = useState('');
  const months = [
    'January', 'February', 'March', 'April',
    'May', 'June', 'July', 'August',
    'September', 'October', 'November', 'December'
  ];

  const [openPicker, setOpenPicker] = useState(null);

  const handleMonthClick1 = (month) => {
    setSelectedMonth1(month);
    setOpenPicker(null);
  };

  const handleMonthClick2 = (month) => {
    setSelectedMonth2(month);
    setOpenPicker(null);
  };

  const renderMonthOptions = () => {
    return months.map((month, index) => (
      <TouchableOpacity key={index} onPress={() => handleMonthClick1(month)}>
        <Text style={styles.monthOption}>{month}</Text>
      </TouchableOpacity>
    ));
  };

  const renderMonthOptions2 = () => {
    return months.map((month, index) => (
      <TouchableOpacity key={index} onPress={() => handleMonthClick2(month)}>
        <Text style={styles.monthOption}>{month}</Text>
      </TouchableOpacity>
    ));
  };

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1, backgroundColor: COLORS.white }}>
      <View style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'center', marginTop: 20 }}>
        <View style={{ width: '90%', height: 300, backgroundColor: COLORS.white, borderRadius: 1, marginTop: 1, shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.25, shadowRadius: 3.84, elevation: 5 }}>
          <View style={{ flex: 2 / 5, justifyContent: 'center', alignItems: 'center', borderBottomWidth: 1, borderBottomColor: COLORS.lightGray2, overflow: 'hidden', width: '100%', height: '100%' }}>
            <Image
              source={require('../../assets/image1.png')}
              style={{ width: '100%', height: 'auto', aspectRatio: 12 / 8, resizeMode: 'contain' }}
            />
            <View style={{ position: 'absolute', bottom: 0, width: '100%', backgroundColor: 'rgba(0, 0, 0, 0.5)', padding: 10 }}>
              <View style={{ flexDirection: 'row', alignItems: 'flex-start' }}>
                <View style={{ flexDirection: 'column', alignItems: 'flex-start' }}>
                  <Text style={{ color: 'white', textAlign: 'left' }}>Your Text Here</Text>
                </View>
                <View style={{ flexDirection: 'column', alignItems: 'flex-end', marginLeft: 'auto' }}>
                  <Ionicons name="desktop-outline" size={24} color="white" />
                </View>
              </View>
            </View>
          </View>
          <View style={{ flex: 3 / 5, paddingHorizontal: 20 }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 40 }}>
              <View>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <MaterialIcons name="bolt" size={15} color="orange" style={{ marginRight: 8 }} />
                  <View>
                    <Text style={{ ...FONTS.body4, fontSize: 13 }}>energy</Text>
                  </View>
                </View>
              </View>
              <View style={{ marginLeft: 30 }}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <TouchableOpacity onPress={() => setOpenPicker(1)}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                      <Text style={{ ...FONTS.body4, fontSize: 13, marginRight: 5 }}>{selectedMonth1 || 'Select:Month'}</Text>
                      <Text>▼</Text>
                    </View>
                  </TouchableOpacity>
                  {openPicker === 1 && (
                    <View style={styles.monthOptionsContainer}>
                      {renderMonthOptions()}
                    </View>
                  )}
                </View>
              </View>
              <View style={{ marginLeft: 'auto' }}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <Text style={{ ...FONTS.body4, fontSize: 13 }}>159.327 mwh</Text>
                </View>
              </View>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 40 }}>
              <View>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <MaterialIcons name="bolt" size={15} color="orange" style={{ marginRight: 8 }} />
                  <View>
                    <Text style={{ ...FONTS.body4, fontSize: 13 }}>gas</Text>
                  </View>
                </View>
              </View>
              <View style={{ marginLeft: 30 }}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <TouchableOpacity onPress={() => setOpenPicker(2)}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                      <Text style={{ ...FONTS.body4, fontSize: 13, marginRight: 5 }}> {selectedMonth2 || 'Select:Month'}</Text>
                      <Text>▼</Text>
                    </View>
                  </TouchableOpacity>
                  {openPicker === 2 && (
                    <View style={styles.monthOptionsContainer}>
                      {renderMonthOptions2()}
                    </View>
                  )}
                </View>
              </View>
              <View style={{ marginLeft: 'auto' }}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <Text style={{ ...FONTS.body4, fontSize: 13 }}>159.327 mwh</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  monthOptionsContainer: {
    position: 'absolute',
    top: '100%', // Place it below the parent element
    right: 0,
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: COLORS.lightGray3,
    zIndex: 3, // Ensure it's on top
  },
  monthOption: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    fontSize: 16,
  },
});

export default PageH;
