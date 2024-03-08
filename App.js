import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, SafeAreaView } from 'react-native';
import SignInScreen from './screens/SignInScreen/SignInScreen';
//import CustomInput from './components/custominput/CustomInput';
import SignUpScreen from './screens/SignUpScreen/SignUpScreen';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from './screens/HomeScreen/HomeScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import NavPage from './screens/NavPage/NavPage';
import PageH from './screens/HomePages/PageH';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerContent({ navigation }) {
  const navigateToScreen = (screenName) => {
    navigation.navigate(screenName);
    navigation.closeDrawer();
  };

  return (
    <SafeAreaView style={styles.drawerContainer}>
      <TouchableOpacity style={styles.drawerItem} onPress={() => navigateToScreen('NavPage')}>
        <Text>NavPage</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.drawerItem} onPress={() => navigateToScreen('PageH')}>
        <Text>PageH</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <SafeAreaView style={styles.root}>
        <Stack.Navigator screenOptions={{headerTitle: ''}}>
          <Stack.Screen name="SignIn" component={SignInScreen} options={{ headerShown: false }} />
          <Stack.Screen name="NavPage" component={NavPage} />
          <Stack.Screen name="PageH" component={PageH} />
          {/* Add other screens here */}
        </Stack.Navigator>
      </SafeAreaView>
    </NavigationContainer>
  );

}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor:'#f9fbfc',
  },
});
