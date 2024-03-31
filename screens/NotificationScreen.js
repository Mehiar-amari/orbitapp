import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { List, IconButton } from 'react-native-paper';

const NotificationScreen = () => {
  const notifications = [
    { id: 1, zone: 'TGBT1', device: 'D1', parameter: 'Power Factor', status: 'Pre-Alarm' },
    { id: 2, zone: 'TGBT2', device: 'D2', parameter: 'Voltage', status: 'Alarm' },
    { id: 3, zone: 'TGBT3', device: 'D3', parameter: 'Current', status: 'Normal' },
    { id: 4, zone: 'TGBT4', device: 'D4', parameter: 'Temperature', status: 'Pre-Alarm' },
    { id: 5, zone: 'TGBT5', device: 'D5', parameter: 'Humidity', status: 'Normal' },
  ];

  const [expandedIds, setExpandedIds] = useState([]);

  const toggleExpand = (id) => {
    setExpandedIds(prevIds => {
      if (prevIds.includes(id)) {
        return prevIds.filter(prevId => prevId !== id);
      } else {
        return [...prevIds, id];
      }
    });
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'Pre-Alarm':
        return '#FFA500'; // Orange
      case 'Alarm':
        return '#FF0000'; // Red
      case 'Normal':
        return '#00FF00'; // Green
      default:
        return '#000000'; // Black
    }
  };

  const TitleComponent = ({ zone, status }) => (
    <View style={styles.titleContainer}>
        <IconButton
          icon="bell"
          color="#000" // Adjust color as needed
          onPress={() => console.log("Bell icon pressed")} // Add your functionality here
        />
     <View style={{ flexDirection: 'column', marginLeft: 10 }}>
        <Text style={[styles.zoneText]}>Zone: {zone}</Text>
        <Text style={[styles.statusText, { color: getStatusColor(status) }]}>Status: {status}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}> {/* Wrap your content in a View */}
        {notifications.map(notification => (
          <List.Accordion
            key={notification.id}
            title={<TitleComponent zone={notification.zone} status={notification.status} />}
            expanded={expandedIds.includes(notification.id)}
            onPress={() => toggleExpand(notification.id)}
            style={styles.card}
          >
            <View style={styles.expandedContent}>
              <List.Item
                title={`Device: ${notification.device}`}
                left={() => <List.Icon icon="device" />}
                style={styles.item}
              />
              <List.Item
                title={`Parameter: ${notification.parameter}`}
                left={() => <List.Icon icon="tune" />}
                style={styles.item}
              />
            </View>
          </List.Accordion>
        ))}
      </View>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    flexGrow: 1,
    },
  container: {
     flex: 1,
     backgroundColor: '#F5F5F5',
    },
  card: {
    margin: 10,
    borderRadius: 10,
    elevation: 3,
    borderWidth: 2,
    borderColor: '#ddd',
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
  textContainer: {
    flexDirection: 'row',
    alignItems: 'center', // Center align icon vertically
  },
  zoneText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  statusText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginRight: 10, // Add some space between status text and icon
  },
  expandedContent: {
    backgroundColor: 'white',
    padding: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    margin: 10,
    borderRadius: 10,
    elevation: 3,
    borderWidth: 2,
    borderColor: '#ddd',
  },
  item: {
    paddingVertical: 5,
  },
});

export default NotificationScreen;
