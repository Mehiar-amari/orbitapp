import React, { useState , useEffect,  }from 'react';

import { Text, View, TextInput, StyleSheet, useWindowDimensions, SafeAreaView, TouchableOpacity, ScrollView ,Image,Dimensions} from 'react-native';
import { Shadow } from 'react-native-shadow-2';
import { FONTS, SIZES, COLORS } from '../../constants/theme'; // Assuming FONTS is correctly imported
import { Ionicons } from 'react-native-vector-icons'; // Import Ionicons from React Native Vector Icons
import { FontAwesome } from '@expo/vector-icons'; 
import { MaterialIcons } from '@expo/vector-icons'; // Import MaterialIcons from Expo Vector Icons
import { Octicons } from '@expo/vector-icons'; // Import MaterialIcons from Expo Vector Icons
import Colors from '../../constants/Colors';
import * as Progress from 'react-native-progress';
import { LineChart,BarChart,ProgressChart,ContributionGraph,StackedBarChart} from "react-native-chart-kit";
import { useNavigation } from '@react-navigation/native';







const NavPage = () => {
  const [jdata, setData] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('https://orbitsmart.energy/read/get_client_info');
      const jsonData = await response.json();
      setData(jsonData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }
  
// Use useNavigation hook to get the navigation object
const navigation = useNavigation();



  const screenWidth = Dimensions.get('window').width;
const chartWidth = screenWidth * 0.9; // Adjust the percentage as needed
// Calculate total value
const total = 100;

// Calculate values for each category based on percentages
const gas = total * 0.48;
const actEnrgExp = total * 0.09;
const actEnrgImp = total * 0.28;
const reactEnrgImp = total * 0.13;
// each value represents a goal ring in Progress chart
const data = {
  labels: ["Swim", "Bike", "Run"], // optional
  data: [0.4, 0.6, 0.8]
};
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
       <View style={{ paddingHorizontal: SIZES.padding }} >
        <View
          style={{
            backgroundColor: COLORS.white,
            borderTopLeftRadius: 15,
            borderTopRightRadius: 15,
            borderBottomRightRadius: 15,
            borderBottomLeftRadius: 15,
            marginTop: 20,
            
          }}
        >
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center', // Align items vertically
              paddingVertical: SIZES.padding * 2,
              paddingHorizontal: SIZES.padding * 3,
              borderBottomColor: COLORS.lightGray2,
              borderBottomWidth: 1,
              
            }}
          >
            <Text style={{ ...FONTS.h3 }}>       Welcome 🎉, Warda!</Text>
            
          </View>
          
          <TouchableOpacity
            style={{
              backgroundColor: Colors.darkblue,
              paddingVertical: 5,
              paddingHorizontal: 10,
              borderRadius: 2,
               marginHorizontal: 40,
               marginVertical: 20,
               borderTopLeftRadius: 15,
            borderTopRightRadius: 15,
            borderBottomRightRadius: 15,
            borderBottomLeftRadius: 15,
            
             
            }}
          >
            <Text style={{  ...FONTS.h4,color: 'white',  textAlign: 'center' }}>Add Usine</Text>
          </TouchableOpacity>
        </View>

        <View
          style={{
            backgroundColor: COLORS.white,
            borderTopLeftRadius: 15,
            borderTopRightRadius: 15,
            borderBottomRightRadius: 15,
            borderBottomLeftRadius: 15,
            marginTop: 15,
            
          }}
        >
          
            <View
            style={{
           flexDirection: 'row',
          justifyContent: 'space-between',
           alignItems: 'center', // Align items vertically
          paddingVertical: SIZES.padding * 2,
          paddingHorizontal: SIZES.padding * 3,
           borderBottomColor: COLORS.lightGray2,
          borderBottomWidth: 1,
           }}
>
         <View style={{ flexDirection: 'row', alignItems: 'center' }}>
             {/* Celebration Icon */}
             <View style={{ backgroundColor: 'rgba(128, 0, 128, 0.1)', borderRadius: 50, padding: 10 }}>
                <Octicons name="home" size={24} color="purple" />
             </View>
           {/* Text and Number */}
           <View>
             {jdata ? (
               <View>
                  <View style={{ flexDirection: 'column', alignItems: 'flex-start' }}>
                     <Text style={{ ...FONTS.body3,fontWeight: 'bold', marginBottom: -7,marginLeft: 23 }}>{jdata.usine.length}</Text>
                     <Text style={{ ...FONTS.body3, color: COLORS.darkgray, marginBottom: -2, marginTop: 8 ,marginLeft: 15}}>Usine</Text>
                  </View> 
               </View>
              ) : (
                 <Text>Loading...</Text>
                )}
            </View>
         
          </View>
          

            </View>
         

           <View
              style={{
             flexDirection: 'row',
             justifyContent: 'space-between',
             alignItems: 'center', // Align items vertically
              paddingVertical: SIZES.padding * 2,
              paddingHorizontal: SIZES.padding * 3,
              borderBottomColor: COLORS.lightGray2,
             borderBottomWidth: 1,
              }}
>
         <View style={{ flexDirection: 'row', alignItems: 'center' }}>
             {/* Celebration Icon */}
             <View style={{ backgroundColor: 'rgba(0, 0, 255, 0.1)', borderRadius: 50, padding: 10 }}>
                <Octicons name="device-mobile" size={24} color="blue" />
             </View>
           {/* Text and Number */}
           <View>
             {jdata ? (
                <View style={{ flexDirection: 'column', alignItems: 'flex-start' }}>
                <Text style={{ ...FONTS.body3,fontWeight: 'bold', marginBottom: -7,marginLeft: 27 }}>{jdata.user.device_reserved}</Text>
                <Text style={{ ...FONTS.body3, color: COLORS.darkgray, marginBottom: -2, marginTop: 8,marginLeft: 15 }}>Reserved Devices</Text>
             </View>
              ) : (
                 <Text>Loading...</Text>
                )}
         </View>
         
          </View>



         </View>


         <View
            style={{
           flexDirection: 'row',
          justifyContent: 'space-between',
           alignItems: 'center', // Align items vertically
          paddingVertical: SIZES.padding * 2,
          paddingHorizontal: SIZES.padding * 3,
           borderBottomColor: COLORS.lightGray2,
          borderBottomWidth: 1,
           }}
>
         <View style={{ flexDirection: 'row', alignItems: 'center' }}>
             {/* Celebration Icon */}
             {/* Celebration Icon */}
             <View style={{ backgroundColor: 'rgba(0, 255, 0, 0.1)', borderRadius: 50, padding: 10 }}>
                <Octicons name="device-mobile" size={24} color="green" />
             </View>
             
           {/* Text and Number */}
           <View>
            {jdata ? (
              <View style={{ flexDirection: 'column', alignItems: 'flex-start' }}>
                <Text style={{ ...FONTS.body3,fontWeight: 'bold', marginBottom: -7,marginLeft: 27 }}>{jdata.connectedDevices}</Text>
                <Text style={{ ...FONTS.body3, color: COLORS.darkgray, marginBottom: -2, marginTop: 8,marginLeft: 15 }}>Connected Devices</Text>
              </View>
            ) : (
               <Text>Loading...</Text>
              )}
    </View>
          
          </View>
         </View>

         <View
            style={{
           flexDirection: 'row',
          justifyContent: 'space-between',
           alignItems: 'center', // Align items vertically
          paddingVertical: SIZES.padding * 2,
          paddingHorizontal: SIZES.padding * 3,
           borderBottomColor: COLORS.lightGray2,
          borderBottomWidth: 1,
           }}
>
         <View style={{ flexDirection: 'row', alignItems: 'center' }}>
             {/* Celebration Icon */}
             <View style={{ backgroundColor: 'rgba(255, 0, 0, 0.1)', borderRadius: 50, padding: 10 }}>
                <Octicons name="device-mobile" size={24} color="red" />
             </View>
           {/* Text and Number */}
           <View>
            {jdata ? (
              <View style={{ flexDirection: 'column', alignItems: 'flex-start' }}>
              <Text style={{ ...FONTS.body3,fontWeight: 'bold', marginBottom: -7,marginLeft: 27 }}>{jdata.disconnectedDevices}</Text>
              <Text style={{ ...FONTS.body3, color: COLORS.darkgray, marginBottom: -2, marginTop: 8,marginLeft: 15 }}>Disconnected Devices</Text>
           </View>
            ) : (
               <Text>Loading...</Text>
              )}
    </View>
           
          
          </View>
            </View>
        </View>
        


        <View>
      {jdata ? (
        jdata.usine.map((usine, index) => (
          <View key={index}>
        <View
       
  style={{
    backgroundColor: COLORS.white,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    borderBottomRightRadius: 15,
    borderBottomLeftRadius: 15,
    marginTop: 15,
  }}
>
  <View
    style={{
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingVertical: SIZES.padding * 2,
      paddingHorizontal: SIZES.padding * 3,
      borderBottomColor: COLORS.lightGray2,
      borderBottomWidth: 1,
    }}
  >
    <View style={{ flexDirection: 'row', alignItems: 'center',flex: 1 }}>
      {/* Text */}
      {jdata ? (
      <Text style={{ ...FONTS.h4, color: "#676767",fontWeight: "bold",textAlign: 'center', marginBottom: -2,marginLeft:90}}> {usine.usine_name}</Text>
      ) : (
        <Text >Loading...</Text>
      )}
      {/* Setting Icon */}
      <View style={{ position: 'absolute',marginLeft: 270,marginTop: 2 }}>
    <TouchableOpacity onPress={() => console.log("Setting button pressed")}>
      <MaterialIcons name="settings" size={30} color="#898C95" />
    </TouchableOpacity>
  </View>
    </View>
  </View>
  <TouchableOpacity   onPress={() => navigation.navigate('PageH')}>
  <Image
    source={{ uri: `https://orbitsmart.energy${usine.usine_image}` }}

    style={{ width: '100%', height: 300, resizeMode: 'contain' }}
  />
 </TouchableOpacity>
  <View
    style={{
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingVertical: SIZES.padding * 2,
      paddingHorizontal: SIZES.padding * 3,
      borderBottomColor: COLORS.lightGray2,
      borderBottomWidth: 1,
    }}
  >
    {/* First Column */}
    <View>
      {/* First Row */}
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        {/* Setting Icon */}
        <MaterialIcons name="bolt" size={20} color="green" style={{ marginRight: 8 }} />
        {/* Energy Cost Text */}
        <View>
          <Text style={{ ...FONTS.body3, fontSize: 15, marginTop: 7 }}>Energy Cost/</Text>
          <Text style={{ ...FONTS.body3, fontSize: 12 }}>month</Text>
        </View>
      </View>
    </View>

    {/* Second Column */}
    <View>
      {/* First Row */}
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        {/* Setting Icon */}
        <MaterialIcons name="arrow-upward" size={20} color="green" style={{ marginRight: 8 }} />
        <Text>192035.00 kwh</Text>
      </View>

      {/* Second Row */}
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        {/* Setting Icon */}
        <MaterialIcons name="arrow-downward" size={20} color="red" style={{ marginRight: 8 }} />
        <Text>3612.00 kwh</Text>
      </View>
    </View>
  </View>


  <View
    style={{
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingVertical: SIZES.padding * 2,
      paddingHorizontal: SIZES.padding * 3,
      borderBottomColor: COLORS.lightGray2,
      borderBottomWidth: 1,
    }}
  >
    {/* First Column */}
    <View>
      {/* First Row */}
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        {/* Setting Icon */}
        <MaterialIcons name="bolt" size={20} color="blue" style={{ marginRight: 8 }} />
        {/* Energy Cost Text */}
        <View>
          <Text style={{ ...FONTS.body3, fontSize: 15, marginTop: 7 }}>Reactive Cost/</Text>
          <Text style={{ ...FONTS.body3, fontSize: 12 }}>month</Text>
        </View>
      </View>
    </View>

    {/* Second Column */}
    <View>
      {/* First Row */}
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        {/* Setting Icon */}
        <MaterialIcons name="arrow-downward" size={20} color="red" style={{ marginRight: 8 }} />
        <Text>597.00 kwh       </Text>
      </View>

      {/* Second Row */}
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        {/* Setting Icon */}
        
        <Text></Text>
      </View>
    </View>
  </View>




  <View
    style={{
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingVertical: SIZES.padding * 2,
      paddingHorizontal: SIZES.padding * 3,
      borderBottomColor: COLORS.lightGray2,
      borderBottomWidth: 1,
    }}
  >
    {/* First Column */}
    <View>
      {/* First Row */}
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        {/* Setting Icon */}
        <Ionicons name="flame" size={20} color="orange" style={{ marginRight: 8 }} />
        {/* Energy Cost Text */}
        <View>
          <Text style={{ ...FONTS.body3, fontSize: 15, marginTop: 7 }}>Gas/</Text>
          <Text style={{ ...FONTS.body3, fontSize: 12 }}>month</Text>
        </View>
      </View>
    </View>

    {/* Second Column */}
    <View>
      {/* First Row */}
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        {/* Setting Icon */}
        
        <Text>  155244.00 npm  </Text>
      </View>

     
    </View>
  </View>


 



        </View>



        </View>
        ))
      ) : (
        <Text>Loading...</Text>
      )}
    </View>
  





<View
  style={{
    backgroundColor: COLORS.white,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    borderBottomRightRadius: 15,
    borderBottomLeftRadius: 15,
    marginTop: 15,
    alignItems: 'center',
  }}
>
  <View
    style={{
      flexDirection: 'column',
      alignItems: 'center', // Align items horizontally
      paddingVertical: SIZES.padding * 2,
      paddingHorizontal: SIZES.padding * 3,
      borderBottomColor: COLORS.lightGray2,
      borderBottomWidth: 1,
    }}
  >
    <Text style={{ ...FONTS.h4, color: "black", marginBottom: 10 }}>Energy Cost</Text>
    <View style={{ flexDirection: 'row', alignItems: 'center',marginTop:15 }}>
      {/* Left Icon and Text */}
      <View style={{ flexDirection: 'column', alignItems: 'center', marginRight: 20 }}>
        <Ionicons name="bar-chart-outline" size={20} color="black" />
        <Text style={{ ...FONTS.body3 ,marginTop:5,textAlign: 'center' }}>Active {'\n'}Energy Imported</Text>
      </View>
      
      {/* Right Icon and Text */}
      <View style={{ flexDirection: 'column', alignItems: 'center' }}>
        <Ionicons name="bar-chart-outline" size={20} color="black" />
        <Text style={{ ...FONTS.body3,marginTop:5,textAlign: 'center'  }}>1047.48{'\n'}/50000.00 dt</Text>
      </View>
    </View>
    <Progress.Bar progress={1047.48/ 50000.00} width={200} color={'red'} style={{ marginTop:15 }}/>
  </View>






 <View
    style={{
      flexDirection: 'column',
      alignItems: 'center', // Align items horizontally
      paddingVertical: SIZES.padding * 2,
      paddingHorizontal: SIZES.padding * 3,
      borderBottomColor: COLORS.lightGray2,
      borderBottomWidth: 1,
    }}
  >
    
    <View style={{ flexDirection: 'row', alignItems: 'center',marginTop:15 }}>
      {/* Left Icon and Text */}
      <View style={{ flexDirection: 'column', alignItems: 'center', marginRight: 20 }}>
        <Ionicons name="bar-chart-outline" size={20} color="black" />
        <Text style={{ ...FONTS.body3 ,marginTop:5,textAlign: 'center' }}>Active {'\n'}Energy Exported</Text>
      </View>
      
      {/* Right Icon and Text */}
      <View style={{ flexDirection: 'column', alignItems: 'center' }}>
        <Ionicons name="bar-chart-outline" size={20} color="black" />
        <Text style={{ ...FONTS.body3,marginTop:5,textAlign: 'center'  }}>51333.41{'\n'}/50000.00 dt</Text>
      </View>
    </View>
     <Progress.Bar progress={51333.41 / 50000.00} width={200} color={'green'} style={{ marginTop:15 }}/>
  </View>





  <View
    style={{
      flexDirection: 'column',
      alignItems: 'center', // Align items horizontally
      paddingVertical: SIZES.padding * 2,
      paddingHorizontal: SIZES.padding * 3,
      borderBottomColor: COLORS.lightGray2,
      borderBottomWidth: 1,
    }}
  >
    
    <View style={{ flexDirection: 'row', alignItems: 'center',marginTop:15 }}>
      {/* Left Icon and Text */}
      <View style={{ flexDirection: 'column', alignItems: 'center', marginRight: 20 }}>
        <Ionicons name="bar-chart-outline" size={20} color="black" />
        <Text style={{ ...FONTS.body3 ,marginTop:5,textAlign: 'center' }}>Reactive {'\n'}Energy Imported</Text>
      </View>
      
      {/* Right Icon and Text */}
      <View style={{ flexDirection: 'column', alignItems: 'center' }}>
        <Ionicons name="bar-chart-outline" size={20} color="black" />
        <Text style={{ ...FONTS.body3,marginTop:5,textAlign: 'center'  }}>14.51{'\n'}/1000.00 dt</Text>
      </View>
    </View>
     <Progress.Bar progress={14.51 / 1000.00} width={200} color={'red'} style={{ marginTop:15 }}/>
  </View>




  <View
    style={{
      flexDirection: 'column',
      alignItems: 'center', // Align items horizontally
      paddingVertical: SIZES.padding * 2,
      paddingHorizontal: SIZES.padding * 3,
      borderBottomColor: COLORS.lightGray2,
      borderBottomWidth: 1,
    }}
  >
    
    <View style={{ flexDirection: 'row', alignItems: 'center',marginTop:15 }}>
      {/* Left Icon and Text */}
      <View style={{ flexDirection: 'column', alignItems: 'center', marginLeft:45}}>
        <Ionicons name="bar-chart-outline" size={20} color="black" />
        <Text style={{ ...FONTS.body3 ,marginTop:5,textAlign: 'center' }}>Gas</Text>
      </View>
      
      {/* Right Icon and Text */}
      <View style={{ flexDirection: 'column', alignItems: 'center' ,marginLeft:60}}>
        <Ionicons name="bar-chart-outline" size={20} color="black" />
        <Text style={{ ...FONTS.body3,marginTop:5,textAlign: 'center'  }}>29858.63{'\n'}/50000.00 dt</Text>
      </View>
    </View>
     <Progress.Bar progress={29858.63 / 50000.00} width={200} color={'orange'} style={{ marginTop:15 }}/>
  </View>
  <Text style={{ ...FONTS.body3, color: COLORS.darkgray, marginBottom: 10,alignItems:"center" }}>Total Cost: 4952.1 dt</Text>

  

  <LineChart
  data={{
    labels: ["Gas", "","ActEnrgExp","", "ActEnrgImp","", "ReactEnrgImp"],
    datasets: [
      {
        data: [gas, actEnrgExp,actEnrgImp, reactEnrgImp]
        
      }
    ]
  }}
  width={chartWidth} // from react-native
  height={200}
  yAxisLabel="%"
  yAxisSuffix=""
  yAxisInterval={1} // optional, defaults to 1
  chartConfig={{
    backgroundColor: "#007bff", // Bright blue background color
    backgroundGradientFrom: "#007bff", // Bright blue gradient start color
    backgroundGradientTo: "#0d47a1", // Dark blue gradient end color
    decimalPlaces: 0, // optional, defaults to 2dp
    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    style: {
      borderRadius: 8
    },
    propsForDots: {
      r: "6",
      strokeWidth: "2",
      stroke: "#ffa726"
    },
    
    
  }}
  bezier
  style={{
    marginVertical: 8,
    borderRadius: 16
  }}
/>




<ProgressChart
   data={{
    data: [gas / total, actEnrgExp / total, actEnrgImp / total, reactEnrgImp / total]
    
  }}
  width={chartWidth} // from react-native
  height={200}
  chartConfig={{
    backgroundColor: "#007bff", // Bright blue background color
    backgroundGradientFrom: "#007bff", // Bright blue gradient start color
    backgroundGradientTo: "#0d47a1", // Dark blue gradient end color
    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    style: {
      borderRadius: 16
    },
    
    
  }}
  style={{
    marginVertical: 8,
    borderRadius: 16
  }}
/>





</View>

        
        
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F3F3F4",
  },
  headerText: {
    ...FONTS.h3,
    ...FONTS.h4,
    ...FONTS.h1,
    ...FONTS.h2,
  },
});

export default NavPage;