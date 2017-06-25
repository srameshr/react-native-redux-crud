import React from 'react';
import { Text, TouchableOpacity, StyleSheet, View } from 'react-native';

const styles = StyleSheet.create({
  buttonStyle: {
    flex: 1,
    width: null,
    height: 300,
    borderColor: 'green',
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 2,
    margin: 2,

  },
});

const Button = (props) => {
  const { buttonStyle } = styles;
  return (
    <View style={buttonStyle}>
      <TouchableOpacity onPress={props.onPress}>
        <Text>{props.text}</Text>
      </TouchableOpacity>
    </View>
  );
};

export { Button };
