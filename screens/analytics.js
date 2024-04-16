import { DateTimePickerAndroid } from '@react-native-community/datetimepicker';
import React, { useState } from 'react';
import { Text, View, ScrollView, Dimensions, TouchableWithoutFeedback,TouchableOpacity, TextInput } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import { Badge, Modal } from 'react-native-paper';
import { DateTimePicker } from '@react-native-community/datetimepicker';
import { Calendar } from 'react-native-calendars';

const Analytics = () => {
  const [selectedItems, setSelectedItems] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [currentValue, setCurrentValue] = useState([]);

  const [isOpen2, setIsOpen2] = useState(false);
  const [currentValue2, setCurrentValue2] = useState([]);

  const [isOpen3, setIsOpen3] = useState(false);
  const [currentValue3, setCurrentValue3] = useState([]);

  const [isOpen4, setIsOpen4] = useState(false);
  const [currentValue4, setCurrentValue4] = useState([]);

  const [isOpen5, setIsOpen5] = useState(false);
  const [currentValue5, setCurrentValue5] = useState([]);

  const [isOpen6, setIsOpen6] = useState(false);
  const [currentValue6, setCurrentValue6] = useState([]);

  const [isOpen7, setIsOpen7] = useState(false);
  const [currentValue7, setCurrentValue7] = useState([]);


  const items2 = [];
 
  const [showModal, setShowModal] = useState(false)

  const screenWidth = Dimensions.get('window').width;
  const dropdownWidth = screenWidth - 40; // 20px padding on each side
  const items = [
    { label: 'Option 1', value: 'option1' },
    { label: 'Option 2', value: 'option2' },
    { label: 'Option 3', value: 'option3' },
    { label: 'Option 4', value: 'option4' },
    { label: 'Option 5', value: 'option5' },
    { label: 'Option 6', value: 'option6' },
  ];



  const [selectedDate, setSelectedDate] = useState(null); // State to store the selected date
  const handleDateSelect = (date) => {
    setSelectedDate(date);
    setShowModal(false);
  };
  
  
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

 

  return (
    <TouchableWithoutFeedback onPress={handlePressOutside}>
      <ScrollView style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
        <View style={{ marginTop: 20, paddingLeft: 20 }}>
          <Text style={{ fontSize: 24, fontWeight: "bold", color: "#888888" }}>Configuration</Text>
        </View>
        <View style={{ marginTop: 30, paddingLeft: 20 , zIndex: 100000}}>
          <Text style={{ fontSize: 14, color: '#333', marginBottom: 10 }}>Select Type device:</Text>
          <DropDownPicker
            items={items}
            open={isOpen}
            setOpen={() => setIsOpen(!isOpen)}
            value={currentValue}
            setValue={(val) => setCurrentValue(val)}
            maxHeight={200}
            placeholder='select an item'
            showTickIcon={true}
            dropDownDirection='bottom'
            multiple={true}
            min={1}
            mode="BADGE"
            badgeColors={"#A446CB"}
            badgeDotColors={"white"}
            badgeTextStyle={{ color: 'white' }}
            containerStyle={{ width: dropdownWidth, zIndex: 2000 }} // Adjust height and width as needed
          />
        </View>


        <View style={{ marginTop: 30, paddingLeft: 20, zIndex: 10000 }}>
          <Text style={{ fontSize: 14, color: '#333', marginBottom: 10 }}>Select Usines:</Text>
          <DropDownPicker
            items={items}
            open={isOpen2}
            setOpen={() => setIsOpen2(!isOpen2)}
            value={currentValue2}
            setValue={(val) => setCurrentValue2(val)}
            maxHeight={200}
            placeholder='select an item'
            showTickIcon={true}
            dropDownDirection='bottom'
            multiple={true}
            min={1}
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
            items={items}
            open={isOpen3}
            setOpen={() => setIsOpen3(!isOpen3)}
            value={currentValue3}
            setValue={(val) => setCurrentValue3(val)}
            maxHeight={200}
            placeholder='select an item'
            showTickIcon={true}
            dropDownDirection='bottom'
            multiple={true}
            min={1}
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
            maxHeight={200}
            placeholder='select an item'
            showTickIcon={true}
            dropDownDirection='bottom'
            multiple={true}
            min={1}
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
            maxHeight={200}
            placeholder='select an item'
            showTickIcon={true}
            dropDownDirection='bottom'
            multiple={true}
            min={1}
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
            maxHeight={200}
            placeholder='select an item'
            showTickIcon={true}
            dropDownDirection='bottom'
            multiple={true}
            min={1}
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
            maxHeight={200}
            placeholder='select an item'
            showTickIcon={true}
            dropDownDirection='bottom'
            multiple={true}
            min={1}
            mode="BADGE"
            badgeColors={"#A446CB"}
            badgeDotColors={"white"}
            badgeTextStyle={{ color: 'white' }}
            containerStyle={{ width: dropdownWidth, zIndex: 1000 }} // Adjust height and width as needed
          />
        </View>

      
  <View style={{ marginTop: 30, paddingLeft: 20 }}>
      <Text style={{ fontSize: 14, color: '#333', marginBottom: 10 }}>Select Date Debut</Text>
      <TouchableOpacity onPress={() => setShowModal(true)}>
        <View style={{ borderWidth: 1, borderRadius: 10, padding: 10 }}>
          <Text>{selectedDate ? selectedDate.toDateString() : "Select date"}</Text>
        </View>
      </TouchableOpacity>
      <Modal visible={showModal} animationType="fade" transparent={true} statusBarTranslucent={true}>
        <TouchableWithoutFeedback onPress={() => setShowModal(false)}>
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white' , marginTop: 120}}>
            <View style={{ backgroundColor: 'white', borderRadius: 10, padding: 20, width: screenWidth - 40, marginTop: 150 }}>
              <TouchableOpacity onPress={() => setShowModal(false)} style={{ position: 'absolute', top: 10, right: 10, zIndex: 100001 }}>
                <Text style={{ fontSize: 18, color: 'black' }}>Close</Text>
              </TouchableOpacity>
              <Calendar onDateSelect={handleDateSelect} />
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </View>

       <View  style={{ marginTop: 500, paddingLeft: 20 }}></View>

     
      </ScrollView>
    </TouchableWithoutFeedback>
  );
}

export default Analytics;
