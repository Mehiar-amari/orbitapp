import { DateTimePickerAndroid } from '@react-native-community/datetimepicker';
import React, { useState, useEffect } from 'react';
import { Text, View, ScrollView, Dimensions, TouchableWithoutFeedback,TouchableOpacity, TextInput,Platform,Button ,StyleSheet} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import { Badge, Modal } from 'react-native-paper';
import DateTimePicker from '@react-native-community/datetimepicker'
import { Calendar } from 'react-native-calendars';
import { Ionicons } from 'react-native-vector-icons'; // Import Ionicons from React Native Vector Icons
import { FontAwesome } from '@expo/vector-icons'; 
import { MaterialIcons } from '@expo/vector-icons'; // Import MaterialIcons from Expo Vector Icons
import { Octicons } from '@expo/vector-icons'; // Import MaterialIcons from Expo Vector Icons
import { w3cwebsocket as W3CWebSocket } from "websocket";
const super_user_id = '650aa3373def3736fdb3b666'







const Analytics = () => {

  const [jdata, setData] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [currentValue, setCurrentValue] = useState(null);
  const [items, setItems] = useState([]);



  const [isOpen2, setIsOpen2] = useState(false);
  const [currentValue2, setCurrentValue2] = useState(null);
  const [items2, setItems2] = useState([]);



  const [isOpen3, setIsOpen3] = useState(false);
  const [currentValue3, setCurrentValue3] = useState(null);
  const [items3, setItems3] = useState([]);


  useEffect(() => {
    const ws = new WebSocket(
      "wss://orbitsmart.energy/Mongo/get_analyse_devices_by_user_id"
    );

    ws.onopen = () => {
      console.log("WebSocket opened");
      ws.send(JSON.stringify({
        super_user_id: super_user_id // Assuming super_user_id is defined somewhere
      }));
    };

    ws.onmessage = async (e) => {
      const message = await JSON.parse(e.data);
      console.log("WebSocket message", message);
      setData(message); // Set the received data to state
    };

    ws.onclose = () => console.log("WebSocket closed");

    return () => {
      // Cleanup function
      ws.close();
    };
  }, []); // Empty dependency array to run the effect only once on mount




// this is the type device section it shows the elements in the list 
  useEffect(() => {
    if (jdata && jdata.data && jdata.data.devices) {
      const devices = jdata.data.devices;
      const deviceTypes = {};
      devices.forEach(device => {
        const type = device.device_type;
        deviceTypes[type] = (deviceTypes[type] || 0) + 1;
      });
      const dropdownItems = Object.keys(deviceTypes).map(type => ({
        label: type,
        value: type
      }));
      setItems(dropdownItems);
    }
  }, [jdata]);


// this is the usine section it shows the elements in the list 
useEffect(() => {
  if (jdata && jdata.data && jdata.data.usine) {
    const usines = jdata.data.usine;
    const dropdownItems = usines.map(usine => ({
      label: usine.usine_name,
      value: {
        usineName: usine.usine_name,
        usineId: usine._id
      }
    }));
    setItems2(dropdownItems);
  }
}, [jdata]);



// this is the station section it shows the elements in the list 
 useEffect(() => {
  if (jdata && jdata.data && jdata.data.station) {
    const stations = jdata.data.station;
    const dropdownItems = stations.map(station => ({
      label: station.station_name,
      value: {
        stationId: station._id,
        stationName: station.station_name,
        stationUsineId: station.usine_id
      }
    }));
    setItems3(dropdownItems);
  }
}, [jdata]);






  const [selectedItems, setSelectedItems] = useState([]);

  


 

  const [isOpen4, setIsOpen4] = useState(false);
  const [currentValue4, setCurrentValue4] = useState([]);

  const [isOpen5, setIsOpen5] = useState(false);
  const [currentValue5, setCurrentValue5] = useState([]);

  const [isOpen6, setIsOpen6] = useState(false);
  const [currentValue6, setCurrentValue6] = useState([]);

  const [isOpen7, setIsOpen7] = useState(false);
  const [currentValue7, setCurrentValue7] = useState([]);



 
  const [showModal, setShowModal] = useState(false)

  const screenWidth = Dimensions.get('window').width;
  const dropdownWidth = screenWidth - 40; // 20px padding on each side

 
  
  
  const handlePressOutside = () => {
    if (isOpen) {
      setIsOpen(false);
    }
    if (isOpen2) {
      setIsOpen2(false);
    }
    if (isOpen3) {
      setIsOpen3(false);
    }
    if (isOpen4) {
      setIsOpen4(false);
    }
    if (isOpen5) {
      setIsOpen5(false);
    }
    if (isOpen6) {
      setIsOpen6(false);
    }if (isOpen) {
      setIsOpen6(false);
    }
    if (isOpen7) {
      setIsOpen7(false);
    }
  };
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [show , setShow] = useState(false);
  const [text , setText] = useState('select date');


  const onChange = (event, selectedDate) => {
    
    const currentDate = selectedDate || date;
    setShow(false);
    setDate(currentDate);

    let tempDate = new Date(currentDate);
    let fDate = tempDate.getDate() + '/'+ (tempDate.getMonth()+1)+ '/'+ tempDate.getFullYear();
    setText(fDate)
   
    console.log();
  };
const showMode = (currentMode) =>{
  setShow(true);
  setMode(currentMode);
}





const [date2, setDate2] = useState(new Date());
  const [mode2, setMode2] = useState('date');
  const [show2 , setShow2] = useState(false);
  const [text2 , setText2] = useState('select date');


  const onChange2 = (event, selectedDate2) => {
    
    const currentDate2 = selectedDate2 || date;
    setShow2(false);
    setDate2(currentDate2);

    let tempDate2 = new Date(currentDate2);
    let fDate2 = tempDate2.getDate() + '/'+ (tempDate2.getMonth()+1)+ '/'+ tempDate2.getFullYear();
    setText2(fDate2)
   
    console.log();
  };
const showMode2 = (currentMode2) =>{
  setShow2(true);
  setMode2(currentMode2);
}
// this is the condition for station to only show elemnts in items only when usisne is selected

useEffect(() => {
  if (!currentValue2 || currentValue2.length === 0 ) {
    setItems3([]);
    return; 
  }

  if (jdata && jdata.data && jdata.data.station && jdata.data.usine ) {
    const stations = jdata.data.station;
    const stationNames = {};
  
    stations.forEach(station => {
      const stationName = station.station_name;
      stationNames[stationName] = (stationNames[stationName] || 0) + 1;
    });
  
    const dropdownItems = Object.keys(stationNames).map(stationName => ({
      label: stationName,
      value: stationName
    }));
    setItems3(dropdownItems);
  }
}, [jdata, currentValue2]);





  return (
    <TouchableWithoutFeedback onPress={handlePressOutside}>
      <ScrollView style={{ flex: 1, backgroundColor: "#FFFFFF" }} >
        <View style={{ marginTop: 20, paddingLeft: 20 }}>
          <Text style={{ fontSize: 24, fontWeight: "bold", color: "#888888" }}>Configuration</Text>
        </View>
        {jdata && (
        <View style={{ marginTop: 30, paddingLeft: 20 , zIndex: 100000}}>
          <Text style={{ fontSize: 14, color: '#333', marginBottom: 10 }}>Select Type device:</Text>
          <DropDownPicker
            items={items}
            open={isOpen}
            setOpen={() => setIsOpen(!isOpen)}
            value={currentValue}
            setValue={(val) => setCurrentValue(val)}
            maxHeight={300}
            placeholder='select an item'
            showTickIcon={true}
            dropDownDirection='bottom'
            multiple={true}
            
            autoScroll
            mode="BADGE"
            badgeColors={"#A446CB"}
            badgeDotColors={"white"}
            badgeTextStyle={{ color: 'white' }}
            containerStyle={{ width: dropdownWidth, zIndex: 2000 }} // Adjust height and width as needed
          />
        </View>
        )}

        <View style={{ marginTop: 30, paddingLeft: 20, zIndex: 10000 }}>
          <Text style={{ fontSize: 14, color: '#333', marginBottom: 10 }}>Select Usines:</Text>
          <DropDownPicker
            items={items2}
            open={isOpen2}
            setOpen={() => setIsOpen2(!isOpen2)}
            value={currentValue2}
            setValue={(val) => setCurrentValue2(val)}
            maxHeight={300}
            placeholder='select an item'
            showTickIcon={true}
            dropDownDirection='bottom'
            multiple={true}
            
            mode="BADGE"
            badgeColors={"#A446CB"}
            badgeDotColors={"white"}
            badgeTextStyle={{ color: 'white' }}
            containerStyle={{ width: dropdownWidth , zIndex: 1000}} // Adjust height and width as needed
          />
        </View>





        <View style={{ marginTop: 30, paddingLeft: 20, zIndex: 9000 }}>
          <Text style={{ fontSize: 14, color: '#333', marginBottom: 10 }}>Select Stations:</Text>
          <DropDownPicker
            items={items3}
            open={isOpen3}
            setOpen={() => setIsOpen3(!isOpen3)}
            value={currentValue3}
            setValue={(val) => setCurrentValue3(val)}
            maxHeight={300}
            placeholder='select an item'
            showTickIcon={true}
            dropDownDirection='bottom'
            multiple={true}
           
            mode="BADGE"
            badgeColors={"#A446CB"}
            badgeDotColors={"white"}
            badgeTextStyle={{ color: 'white' }}
            containerStyle={{ width: dropdownWidth, zIndex: 1000 }} // Adjust height and width as needed
          />
        </View>






        <View style={{ marginTop: 30, paddingLeft: 20 , zIndex: 8000}}>
          <Text style={{ fontSize: 14, color: '#333', marginBottom: 10 }}>Select Zones:</Text>
          <DropDownPicker
            items={items}
            open={isOpen4}
            setOpen={() => setIsOpen4(!isOpen4)}
            value={currentValue4}
            setValue={(val) => setCurrentValue4(val)}
            maxHeight={300}
            placeholder='select an item'
            showTickIcon={true}
            dropDownDirection='bottom'
            multiple={true}
            
            mode="BADGE"
            badgeColors={"#A446CB"}
            badgeDotColors={"white"}
            badgeTextStyle={{ color: 'white' }}
            containerStyle={{ width: dropdownWidth, zIndex: 1000 }} // Adjust height and width as needed
          />
        </View>





        <View style={{ marginTop: 30, paddingLeft: 20 , zIndex: 7000}}>
          <Text style={{ fontSize: 14, color: '#333', marginBottom: 10 }}>Select Devices:</Text>
          <DropDownPicker
            items={items}
            open={isOpen5}
            setOpen={() => setIsOpen5(!isOpen5)}
            value={currentValue5}
            setValue={(val) => setCurrentValue5(val)}
            maxHeight={300}
            placeholder='select an item'
            showTickIcon={true}
            dropDownDirection='bottom'
            multiple={true}
          
            mode="BADGE"
            badgeColors={"#A446CB"}
            badgeDotColors={"white"}
            badgeTextStyle={{ color: 'white' }}
            containerStyle={{ width: dropdownWidth , zIndex: 1000}} // Adjust height and width as needed
          />
        </View>

      

        <View style={{ marginTop: 30, paddingLeft: 20 , zIndex: 6000}}>
          <Text style={{ fontSize: 14, color: '#333', marginBottom: 10 }}>Select Sampling Period:</Text>
          <DropDownPicker
            items={items}
            open={isOpen6}
            setOpen={() => setIsOpen6(!isOpen6)}
            value={currentValue6}
            setValue={(val) => setCurrentValue6(val)}
            maxHeight={300}
            placeholder='select an item'
            showTickIcon={true}
            dropDownDirection='bottom'
            multiple={true}
            
            mode="BADGE"
            badgeColors={"#A446CB"}
            badgeDotColors={"white"}
            badgeTextStyle={{ color: 'white' }}
            containerStyle={{ width: dropdownWidth, zIndex: 1000 }} // Adjust height and width as needed
          />
        </View>

        <View style={{ marginTop: 30, paddingLeft: 20, zIndex: 5000 }}>
          <Text style={{ fontSize: 14, color: '#333', marginBottom: 10 }}>Select Time Post</Text>
          <DropDownPicker
            items={items}
            open={isOpen7}
            setOpen={() => setIsOpen7(!isOpen7)}
            value={currentValue7}
            setValue={(val) => setCurrentValue7(val)}
            maxHeight={300}
            placeholder='select an item'
            showTickIcon={true}
            dropDownDirection='bottom'
            multiple={true}
           
            mode="BADGE"
            badgeColors={"#A446CB"}
            badgeDotColors={"white"}
            badgeTextStyle={{ color: 'white' }}
            containerStyle={{ width: dropdownWidth, zIndex: 1000 }} // Adjust height and width as needed
          />
        </View>

      
        <View style={{ marginTop: 30, paddingLeft: 20 }}>
  <Text style={{ fontSize: 14, color: '#333', marginBottom: 10 }}>Select Date Debut</Text>
  <TouchableOpacity onPress={() => showMode('date')}>
    <View style={{ borderWidth: 1, borderRadius: 10, padding: 10 }}>
      <Text>{text}</Text>
    </View>
  </TouchableOpacity>
  {show && (
    <DateTimePicker
      value={date}
      mode={mode}
      is24Hour={true}
      display="default"
      onChange={onChange}
    />
  )}
</View>





<View style={{ marginTop: 30, paddingLeft: 20 }}>
  <Text style={{ fontSize: 14, color: '#333', marginBottom: 10 }}>Select Date fin</Text>
  <TouchableOpacity onPress={() => showMode2('date')}>
    <View style={{ borderWidth: 1, borderRadius: 10, padding: 10 }}>
      <Text>{text2}</Text>
    </View>
  </TouchableOpacity>
  {show2 && (
    <DateTimePicker
      value={date2}
      mode={mode2}
      is24Hour={true}
      display="default"
      onChange={onChange2}
    />
  )}
</View>



<TouchableOpacity style={styles.button}>
      <Ionicons name="send" size={24} color="white" />
      <Text style={styles.text}>Send</Text>
    </TouchableOpacity>



       <View  style={{ marginTop: 500, paddingLeft: 20 }}></View>




      </ScrollView>
    </TouchableWithoutFeedback>
  );
}


const styles = StyleSheet.create({
  button: {
    marginTop:20,
    padding:50,
    flexDirection: 'row',
    backgroundColor: '#007bff', // Blue background color
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  text: {
    color: 'white', // White text color
    marginLeft: 5,
    fontWeight: 'bold',
  },
});
export default Analytics;
