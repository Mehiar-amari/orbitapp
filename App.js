import React, { useState,useRef ,useCallback, useMemo} from 'react';
import { StyleSheet, Text, SafeAreaView, TouchableOpacity, View ,Image} from 'react-native';
import SignInScreen from './screens/SignInScreen/SignInScreen';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import NavPage from './screens/NavPage/NavPage';
import PageH from './screens/HomePages/PageH';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons'; 
import { MaterialIcons } from '@expo/vector-icons'; // Import MaterialIcons from Expo Vector Icons
import { Octicons } from '@expo/vector-icons'; // Import MaterialIcons from Expo Vector Icons
import { FontAwesome5 } from '@expo/vector-icons'; // Import MaterialIcons from Expo Vector Icons
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';
import Modalize from 'react-native-modalize';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const openBottomSheet = (bottomSheetRef) => {
  bottomSheetRef.current?.open();
};


const BottomSheetContent = () => {
  
  return (
    // Content of your bottom sheet
    // Add your content here
    <View>
       <BottomSheet
        ref={bottomSheetRef}
        snapPoints={['25%', '50%', '75%']}
        index={0}
        backgroundStyle={styles.bottomSheetBackground}
        handleIndicatorStyle={styles.bottomSheetHandleIndicator}
      >
        <View style={styles.content}>
          <Text>This is the bottom sheet content.</Text>
        </View>
      </BottomSheet>
    </View>
  );
};



function DrawerContent({ navigation }) {
  const navigateToScreen = (screenName) => {
    navigation.navigate(screenName);
    navigation.closeDrawer();
  };



  const sheetRef = useRef<BottomSheet>(null);
  const [IsOpen, setIsOpen] = useState(true);
  const snapPoints = ['40%', '60%', '90%'];

  const bottomSheetRef = useRef(null);

  const openBottomSheet = () => {
    bottomSheetRef.current.expand();
  };

  const closeBottomSheet = () => {
    bottomSheetRef.current.collapse();
  };


  return (
    <SafeAreaView style={styles.drawerContainer}>
  {/* Empty space */}
  <Image source={require('./assets/orbit.png')} style={styles.image} />
  <View style={styles.emptySpace} />
  <TouchableOpacity style={styles.drawerItem} onPress={() => navigateToScreen('NavPage')}>
  <MaterialIcons name="settings" size={20} color="white" style={styles.icon} />
    <Text style={styles.text}>Configuration</Text>
  </TouchableOpacity>
  <TouchableOpacity style={styles.drawerItem} onPress={() => navigateToScreen('PageH')}>
  <Ionicons name="mail" size={20} color="white" style={styles.icon} />
    <Text style={styles.text}>Mailing</Text>
  </TouchableOpacity>
  <TouchableOpacity style={styles.drawerItem} onPress={() => navigateToScreen('PageH')}>
  <Ionicons name="stats-chart" size={20} color="white" style={styles.icon} />
    <Text style={styles.text}>Analytics</Text>
  </TouchableOpacity>

  <TouchableOpacity style={styles.drawerItem} onPress={() => navigateToScreen('PageH')}>
  <FontAwesome5  name="file-invoice-dollar" size={20} color="white" style={styles.icon} />
    <Text style={styles.text}>Bill simulation</Text>
  </TouchableOpacity>

  <TouchableOpacity style={styles.drawerItem} onPress={() => navigateToScreen('PageH')}>
  <Ionicons name="document-text-sharp" size={20} color="white" style={styles.icon} />
    <Text style={styles.text}>Reports</Text>
  </TouchableOpacity>
  <View style={styles.bottomContainer}>
    <TouchableOpacity style={styles.signOutButton} onPress={() => navigateToScreen('SignIn')}>
      <Ionicons name="log-out-outline" size={20} color="white" style={styles.icon} />
      <Text style={styles.text}>Sign Out</Text>
    </TouchableOpacity>
  </View>

  <BottomSheet
        ref={bottomSheetRef}
        snapPoints={['25%', '50%', '75%']}
        index={0}
        backgroundStyle={styles.bottomSheetBackground}
        handleIndicatorStyle={styles.bottomSheetHandleIndicator}
      >
        <View style={styles.content}>
          <Text>This is the bottom sheet content.</Text>
        </View>
      </BottomSheet>
</SafeAreaView>
  );
}

export default function App() {
  
  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />} >
        <Drawer.Screen 
          name="MainStack" 
          component={MainStackNavigator} 
          options={{ headerShown: false }} 
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const MainStackNavigator = () => {
  const sheetRef = useRef<BottomSheet>(null);
  const [IsOpen, setIsOpen] = useState(true);
  const snapPoints = ['40%', '60%', '90%'];

  const bottomSheetRef = useRef(null);

  const openBottomSheet = () => {
    bottomSheetRef.current.expand();
  };

  const closeBottomSheet = () => {
    bottomSheetRef.current.collapse();
  };

  return (
    <Stack.Navigator screenOptions={{ headerTitle: '' }}>
      <Stack.Screen
        name="SignIn"
        component={SignInScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="NavPage"
        component={NavPage}
        options={({ navigation }) => ({
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => {
                navigation.goBack();
              }}
              style={{ marginLeft: 15 }}
            >
              <Ionicons name="arrow-back" size={24} color="black" />
            </TouchableOpacity>
          ),
          headerRight: () => (
            <View style={{ flexDirection: 'row', marginRight: 15 }}>
              <TouchableOpacity
                onPress={() => {
                  // Handle notification icon press
                }}
                style={{ marginRight: 10 }}
              >
                <Ionicons name="notifications" size={24} color="black" />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigation.openDrawer()}
              >
                <Ionicons name="menu" size={24} color="black" />
              </TouchableOpacity>
            </View>
          ),
        })}
      />
      <Stack.Screen
        name="PageH"
        component={PageH}
        options={({ navigation }) => ({
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => {
                navigation.goBack();
              }}
              style={{ marginLeft: 15 }}
            >
              <Ionicons name="arrow-back" size={24} color="black" />
            </TouchableOpacity>
          ),
          headerRight: () => (
            <View style={{ flexDirection: 'row', marginRight: 15 }}>
              <TouchableOpacity
                onPress={() => {
                  
                }}
                style={{ marginRight: 10 }}
              >
                <Ionicons name="notifications" size={24} color="black" />
              </TouchableOpacity>
             
              <TouchableOpacity
                onPress={() => navigation.openDrawer()}
              >
                <Ionicons name="menu" size={24} color="black" />
              </TouchableOpacity>
            </View>
          ),
        })}
      />
      {/* Add other screens here */}
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  drawerContainer: {
    flex: 1,
    borderRadius: 40, // Adjust the border radius as needed
 
  
  },
  drawerItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    backgroundColor:"#3B51F4",
    borderRadius: 40,
    marginHorizontal: 10, // margin horizontal for better spacing
    marginTop: 10, // margin bottom for better spacing between items
    shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.25, shadowRadius: 3.84, elevation: 5 ,
    flexDirection: 'row', // align icon and text horizontally
    alignItems: 'center', // center vertically
  },
  signOutButton: {
    padding: 10,
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    backgroundColor:"#3B51F4",
    borderRadius: 40,
    marginHorizontal: 10, // margin horizontal for better spacing
    marginBottom: 10, // margin bottom for better spacing between items
    flexDirection: 'row', // align icon and text horizontally
    alignItems: 'center', // center vertically
    shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.25, shadowRadius: 3.84, elevation: 5 ,
  },
  bottomContainer: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  emptySpace: {
    height: 0, // Adjust the height as needed
  },
   icon: {
    marginRight: 10, // add some space between icon and text
  },
  buttonText: {
    fontSize: 16, // adjust font size as needed
    color: 'white',
  },
  text: {
    color: 'white', // change text color to white
  },
  image: {
    width: '100%',
    height: 100, // Adjust the height as needed
    marginBottom: 10, // Adjust the margin bottom as needed
    borderBottomWidth: 1,
  },
  bottomSheetBackground: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    flex: 5, // Ensure the background covers the entire screen
    borderTopLeftRadius: 20, // Adjust border radius if needed
    borderTopRightRadius: 20, // Adjust border radius if needed
  },
  bottomSheetHandleIndicator: {
    backgroundColor: '#fff',
    width: 40, // Adjust width if needed
    height: 5, // Adjust height if needed
    borderRadius: 2.5, // Optional: Add border radius if needed
    alignSelf: 'center', // Center the handle indicator horizontally
    marginTop: 10, // Optional: Adjust margin top if needed
  },
  content: {
    padding: 30,
    backgroundColor: '#fff',
    flex: 5, // Ensure the content fills the entire bottom sheet
    // You can add more styles as needed
  },
});
