import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { List, IconButton } from 'react-native-paper';
import { MaterialCommunityIcons } from 'react-native-vector-icons';

const NotificationScreen = () => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    const fetchData = () => {
      fetch('https://orbitsmart.energy/notification/settings/active/6506dfa5aa3237acf9bd8c7e')
        .then(response => response.json())
        .then(data => {
          // Map the fetched data to update the status based on the level property
          const updatedNotifications = data.map(notification => ({
            ...notification,
            status: getStatus(notification.notification.level)
          }));
          setNotifications(updatedNotifications);
        })
        .catch(error => console.error('Error fetching data:', error));
    };

    // Fetch data initially
    fetchData();

    // Set interval to fetch data every 30 seconds
    const intervalId = setInterval(fetchData, 30000);

    // Cleanup function to clear interval
    return () => clearInterval(intervalId);
  }, []);

  const getStatus = level => {
    switch (level) {
      case 'crit':
        return 'Alarm';
      case 'warn':
        return 'Pre-Alarm';
      default:
        return 'Normal';
    }
  };

  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
        {notifications.map(notification => (
          <AccordionItem key={notification.notification.device_id} notification={notification} />
        ))}
      </View>
    </ScrollView>
  );
};

const AccordionItem = ({ notification }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <List.Accordion
      title={<TitleComponent zone={notification.zone.zone_name} status={notification.status} />}
      expanded={expanded}
      onPress={toggleExpand}
      style={styles.card}
    >
      <View style={styles.expandedContent}>
        <List.Item
          title={`Device: ${notification.device.device_name}`}
          left={() => <MaterialCommunityIcons name="devices" size={24} />}
          style={styles.item}
        />
        <List.Item
          title={`Name: ${notification.notification.name}`}
          left={() => <MaterialCommunityIcons name="devices" size={24} />}
          style={styles.item}
        />
        <List.Item
          title={`Parameter: ${notification.notification.parameter}`}
          left={() => <List.Icon icon="tune" />}
          style={styles.item}
        />
      </View>
    </List.Accordion>
  );
};

const TitleComponent = ({ zone, status }) => (
  <View style={styles.titleContainer}>
    <IconButton icon="bell" color="#000" onPress={() => console.log('Bell icon pressed')} />
    <View style={{ flexDirection: 'column', marginLeft: 10 }}>
      <Text style={[styles.zoneText]}>Zone: {zone}</Text>
      <Text style={[styles.statusText, { color: getStatusColor(status) }]}>Status: {status}</Text>
    </View>
  </View>
);

const getStatusColor = status => {
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

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
  },
  container: {
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
