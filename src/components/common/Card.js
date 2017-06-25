import React from 'react';
import { View, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  containerStyle: {
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#ccc',
    margin: 2,
    padding: 2,
    shadowColor: '#ccc',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
  },
});

const Card = (props) => {
  const { containerStyle } = styles;
  return (
    <View style={containerStyle}>
      { props.children }
    </View>
  );
};

export { Card };
