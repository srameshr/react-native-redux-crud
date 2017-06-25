import React, { Component } from 'react';
import { Text, View } from 'react-native';

const styles = {
  headerViewStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    backgroundColor: '#663399',
    paddingTop: 15,
  },
};

class Header extends Component {
  render() {
    const { headerViewStyle } = styles;
    return (
      <View style={headerViewStyle}>
        <Text style={this.props.style}>
          {this.props.title}
        </Text>
      </View>
    );
  }
}

export { Header };
