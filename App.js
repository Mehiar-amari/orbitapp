import React from 'react';
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
import NotificationScreen from './screens/NotificationScreen'; // Import the new screen component
import registerNNPushToken from 'native-notify';
import analytics from './screens/analytics';


const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerContent({ navigation }) {
  const navigateToScreen = (screenName) => {
    navigation.navigate(screenName);
    navigation.closeDrawer();
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
  <TouchableOpacity style={styles.drawerItem} onPress={() => navigateToScreen('analytics')}>
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
</SafeAreaView>
  );
}

export default function App() {
  registerNNPushToken(20599, '3DV38foyaHwhwuG7e7vieM');
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
  return (
    <Stack.Navigator screenOptions={{headerTitle: '',}}>
      <Stack.Screen 
        name="SignIn" 
        component={SignInScreen} 
        options={{ headerShown: false }} 
      />
      <Stack.Screen 
        name="NavPage" 
        component={NavPage} 
        options={({ navigation }) => ({
          headerRight: () => (
            <View style={{ flexDirection: 'row', marginRight: 15 }}>
              <TouchableOpacity
                onPress={() => navigation.navigate('Notification')} // Navigate to the notification page
                style={{ marginRight: 15 }}
              >
                <Ionicons name="notifications" size={24} color="black"/>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigation.openDrawer()}
                style={{ marginRight: 5 }}
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
          headerRight: () => (
            <View style={{ flexDirection: 'row', marginRight: 15 }}>
              <TouchableOpacity
                onPress={() => navigation.navigate('Notification')} // Navigate to the notification page
                style={{ marginRight: 15 }}
              >
                <Ionicons name="notifications" size={24} color="black"/>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigation.openDrawer()}
                style={{ marginRight: 5 }}
              >
                <Ionicons name="menu" size={24} color="black" />
              </TouchableOpacity>
            </View>
          ),
        })}
      />
       <Stack.Screen 
        name="Notification" 
        component={NotificationScreen} // Add the NotificationScreen component here
        options={({ navigation }) => ({
          headerRight: () => (
            <View style={{ flexDirection: 'row', marginRight: 15 }}>
              <TouchableOpacity
                onPress={() => navigation.navigate('Notification')} // Navigate to the notification page
                style={{ marginRight: 15 }}
              >
                <Ionicons name="notifications" size={24} color="black"/>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigation.openDrawer()}
                style={{ marginRight: 5 }}
              >
                <Ionicons name="menu" size={24} color="black" />
              </TouchableOpacity>
            </View>
          ),
        })}
        
      />


<Stack.Screen 
        name="analytics" 
        component={analytics} // Add the NotificationScreen component here
        options={({ navigation }) => ({
          headerRight: () => (
            <View style={{ flexDirection: 'row', marginRight: 15 }}>
              <TouchableOpacity
                onPress={() => navigation.navigate('Notification')} // Navigate to the notification page
                style={{ marginRight: 15 }}
              >
                <Ionicons name="notifications" size={24} color="black"/>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigation.openDrawer()}
                style={{ marginRight: 5 }}
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
}

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
});
