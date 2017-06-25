import React from 'react';
import { View, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  itemStyle: {
    borderBottomColor: '#ddd',
    borderBottomWidth: 2,
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    position: 'relative',
  },
});

const CardItem = (props) => {
  const itemStyle = { styles };
  return (
    <View stlye={[ itemStyle, props.style ]}>
      {props.children}
    </View>
  );
};

export { CardItem };
