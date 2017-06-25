import React from 'react';
import { TextInput, View, StyleSheet, Text } from 'react-native';

const styles = StyleSheet.create({
  inputAndLabelWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  labelStyles: {
    marginLeft: 5,
    marginRight: 5,
    height: 30,
    padding: 5,
  },
  textInput: {
    height: 30,
    flexGrow: 1,
    width: null,
    alignItems: 'center',
    alignSelf: 'center',
    padding: 5,
  },
});

const Input = ({ label, value, onChangeText, autoCorrect, placeholder, secureTextEntry }) => {
  const { textInput, inputAndLabelWrapper } = styles;
  return (
    <View style={inputAndLabelWrapper}>
      <Text>{ label }</Text>
      <TextInput
        secureTextEntry={secureTextEntry}
        placeholder={placeholder}
        autoCorrect={autoCorrect}
        style={textInput}
        onChangeText={onChangeText}
        value={value}
      />
    </View>
  );
};

export { Input };
