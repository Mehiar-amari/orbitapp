import React, { useState } from 'react';
import { Text, View, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import { Ionicons, MaterialIcons } from 'react-native-vector-icons';
import { FONTS, COLORS } from '../../constants/theme';
import { FontAwesome, Octicons } from '@expo/vector-icons';

const PageH = () => {
  
  const currentMonth = new Date().toLocaleString('default', { month: 'long' });
  

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1, backgroundColor: COLORS.white }}>
      <View style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'center', marginTop: 20 }}>
        <View style={{ width: '90%', height: 300, backgroundColor: COLORS.white, borderRadius: 10, marginTop: 1, shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.25, shadowRadius: 3.84, elevation: 5 ,zIndex:2}}>
          <View style={{ flex: 1 / 2, justifyContent: 'center', alignItems: 'center',borderRadius: 10, borderBottomWidth: 1, borderBottomColor: COLORS.lightGray2, overflow: 'hidden', width: '100%', height: '100%' }}>
            <Image
              source={require('../../assets/warda2.jpg')}
              style={{ width: '100%', height: 'auto', aspectRatio: 12 / 8, resizeMode: 'cover' }}
            />
            <View style={{ position: 'absolute', bottom: 0, width: '100%', backgroundColor: 'rgba(0, 0, 0, 0.5)', padding: 10 }}>
              <View style={{ flexDirection: 'row', alignItems: 'flex-start' }}>
                <View style={{ flexDirection: 'column', alignItems: 'flex-start' }}>
                  <Text style={{ color: 'white', textAlign: 'left' }}>Pates Warda Trigeneration</Text>
                </View>
                <View style={{ flexDirection: 'column', alignItems: 'flex-end', marginLeft: 'auto' }}>
                  <Ionicons name="desktop-outline" size={24} color="white" />
                </View>
              </View>
            </View>
          </View>
          <View style={{ flex: 1 / 2, paddingHorizontal: 20 }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 40 }}>
              <View>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <MaterialIcons name="bolt" size={15} color="orange" style={{ marginRight: 8 }} />
                  <View>
                    <Text style={{ ...FONTS.body4, fontSize: 13 }}>Energy</Text>
                  </View>
                </View>
              </View>
              <View style={{ marginLeft: 30 }}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <TouchableOpacity >
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                      <Text style={{ ...FONTS.body4, fontSize: 13, marginRight: 5 }}>{currentMonth}</Text>
                      <Text>▼</Text>
                    </View>
                  </TouchableOpacity>
                  <View style={{zIndex: 1,position:'relative'}}>
                

                  </View>
                  
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
                  <Ionicons name="flame" size={15} color="orange" style={{ marginRight: 8 }} />
                  <View>
                    <Text style={{ ...FONTS.body4, fontSize: 13 }}>Gas</Text>
                  </View>
                </View>
              </View>
              <View style={{ marginLeft: 30 }}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <TouchableOpacity >
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                      <Text style={{ ...FONTS.body4, fontSize: 13, marginRight: 5 }}>{currentMonth}</Text>
                      <Text>▼</Text>
                    </View>
                  </TouchableOpacity>
              
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
        <View style={{height: 20}}/>
        <View style={{ width: '90%', height: 300, backgroundColor: COLORS.white, borderRadius: 10, marginTop: 1, shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.25, shadowRadius: 3.84, elevation: 5 ,zIndex:1}}>
          <View style={{ flex: 1 / 2, justifyContent: 'center', alignItems: 'center',borderRadius: 10, borderBottomWidth: 1, borderBottomColor: COLORS.lightGray2, overflow: 'hidden', width: '100%', height: '100%' }}>
            <Image
              source={require('../../assets/warda2.jpg')}
              style={{ width: '100%', height: 'auto', aspectRatio: 12 / 8, resizeMode: 'cover' }}
            />
            <View style={{ position: 'absolute', bottom: 0, width: '100%', backgroundColor: 'rgba(0, 0, 0, 0.5)', padding: 10 }}>
              <View style={{ flexDirection: 'row', alignItems: 'flex-start' }}>
                <View style={{ flexDirection: 'column', alignItems: 'flex-start' }}>
                  <Text style={{ color: 'white', textAlign: 'left' }}>Pates Warda Trigeneration</Text>
                </View>
                <View style={{ flexDirection: 'column', alignItems: 'flex-end', marginLeft: 'auto' }}>
                  <Ionicons name="desktop-outline" size={24} color="white" />
                </View>
              </View>
            </View>
          </View>
          <View style={{ flex: 1 / 2, paddingHorizontal: 20 }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 40 }}>
              <View>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <MaterialIcons name="bolt" size={15} color="orange" style={{ marginRight: 8 }} />
                  <View>
                    <Text style={{ ...FONTS.body4, fontSize: 13 }}>Energy</Text>
                  </View>
                </View>
              </View>

              <View style={{ marginLeft: 30 }}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <TouchableOpacity >
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                      <Text style={{ ...FONTS.body4, fontSize: 13, marginRight: 5 }}>{currentMonth}</Text>
                      <Text>▼</Text>
                    </View>
                  </TouchableOpacity>
                
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
                  <Ionicons name="flame" size={15} color="orange" style={{ marginRight: 8 }} />
                  <View>
                    <Text style={{ ...FONTS.body4, fontSize: 13 }}>Gas</Text>
                  </View>
                </View>
              </View>
              <View style={{ marginLeft: 30 }}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <TouchableOpacity >
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                      <Text style={{ ...FONTS.body4, fontSize: 13, marginRight: 5 }}> {currentMonth}</Text>
                      <Text>▼</Text>
                    </View>
                  </TouchableOpacity>
                
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
        <View style={{height: 20}}/>
        <View style={{ width: '90%', height: 300, backgroundColor: COLORS.white, borderRadius: 10, marginTop: 1, shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.25, shadowRadius: 3.84, elevation: 5 ,zIndex:0}}>
          <View style={{ flex: 1 / 2, justifyContent: 'center', alignItems: 'center',borderRadius: 10, borderBottomWidth: 1, borderBottomColor: COLORS.lightGray2, overflow: 'hidden', width: '100%', height: '100%' }}>
            <Image
              source={require('../../assets/warda2.jpg')}
              style={{ width: '100%', height: 'auto', aspectRatio: 12 / 8, resizeMode: 'cover' }}
            />
            <View style={{ position: 'absolute', bottom: 0, width: '100%', backgroundColor: 'rgba(0, 0, 0, 0.5)', padding: 10 }}>
              <View style={{ flexDirection: 'row', alignItems: 'flex-start' }}>
                <View style={{ flexDirection: 'column', alignItems: 'flex-start' }}>
                  <Text style={{ color: 'white', textAlign: 'left' }}>Pates Warda Trigeneration</Text>
                </View>
                <View style={{ flexDirection: 'column', alignItems: 'flex-end', marginLeft: 'auto' }}>
                  <Ionicons name="desktop-outline" size={24} color="white" />
                </View>
              </View>
            </View>
          </View>
          <View style={{ flex: 1 / 2, paddingHorizontal: 20 }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 40 }}>
              <View>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <MaterialIcons name="bolt" size={15} color="orange" style={{ marginRight: 8 }} />
                  <View>
                    <Text style={{ ...FONTS.body4, fontSize: 13 }}>Energy</Text>
                  </View>
                </View>
              </View>

              <View style={{ marginLeft: 30 }}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <TouchableOpacity >
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                      <Text style={{ ...FONTS.body4, fontSize: 13, marginRight: 5 }}>{currentMonth}</Text>
                      <Text>▼</Text>
                    </View>
                  </TouchableOpacity>
                  
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
                  <Ionicons name="flame" size={15} color="orange" style={{ marginRight: 8 }} />
                  <View>
                    <Text style={{ ...FONTS.body4, fontSize: 13 }}>Gas</Text>
                  </View>
                </View>
              </View>
              <View style={{ marginLeft: 30 }}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <TouchableOpacity >
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                      <Text style={{ ...FONTS.body4, fontSize: 13, marginRight: 5 }}> {currentMonth}</Text>
                      <Text>▼</Text>
                    </View>
                  </TouchableOpacity>
                 
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
        <View style={{height: 400}}/>

        
        
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
