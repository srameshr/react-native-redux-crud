import React, { Component } from 'react';
import { Text, View, TouchableWithoutFeedback } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Card } from './index';

class ListItem extends Component {
  onRowPress() {
    Actions.editEmployee({
      employee: this.props.employee
    });
  }

  render() {
    const { name } = this.props.employee;
    return (
      <TouchableWithoutFeedback onPress={ this.onRowPress.bind(this) }>
        <View>
          <Card>
            <Text>{ name }</Text>
          </Card>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

export default ListItem;
