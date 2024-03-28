import React from 'react';
import { View, Text } from 'react-native';
import BottomSheet from '@gorhom/bottom-sheet'; // Import BottomSheet from the appropriate library

const MyBottomSheet = ({ isOpen, toggleBottomSheet }) => {
  const snapPoints = ['40%', '60%', '90%'];

  return (
    <BottomSheet
      snapPoints={snapPoints}
      index={isOpen ? 0 : -1}
      backgroundStyle={styles.bottomSheetBackground}
      handleIndicatorStyle={styles.bottomSheetHandleIndicator}
    >
      <View style={styles.content}>
        <Text>This is the bottom sheet content.</Text>
      </View>
    </BottomSheet>
  );
};

export default MyBottomSheet;
