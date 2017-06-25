import React from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  spinnerStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    flexGrow: 1,
  },
});

const Spinner = ({ size }) => {
  const { spinnerStyle } = styles;
  return (
    <View style={spinnerStyle}>
      <ActivityIndicator size={size || 'large'} />
    </View>
  );
};

export { Spinner };
