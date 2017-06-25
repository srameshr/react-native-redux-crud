import React, { Component } from 'react';
import { View, Text, Picker, Button } from 'react-native';
import { connect } from 'react-redux';
import { employeeUpdate } from '../actions';
import { Card, CardItem, Input } from './common';

class EmployeeForm extends Component {

  render() {
    return(
        <Card>
          <CardItem>
            <Input
              placeholder="Enter your name"
              autoCorrect={false}
              label="name"
              placeholder="Name here"
              value={this.props.name}
              onChangeText={text => this.props.employeeUpdate({ prop: 'name', value: text})}
            />
          </CardItem>
          <CardItem>
            <Input
              placeholder="Enter your phone"
              autoCorrect={false}
              label="phone"
              value={this.props.phone}
              onChangeText={text => this.props.employeeUpdate({ prop: 'phone', value: text})}
            />
          </CardItem>
          <CardItem>
            <Text>Shift</Text>
            <Picker
              selectedValue={this.props.shift}
              onValueChange={day => this.props.employeeUpdate({ prop: 'shift', value: day })}>
              <Picker.Item label="Monday" value="Monday"/>
              <Picker.Item label="Tuesday" value="Tuesday"/>
              <Picker.Item label="Wednesday" value="Wednesday"/>
            </Picker>
          </CardItem>
        </Card>
    );
  }
}

const mapStateToProps = (state) => {
  const { name, phone, shift } = state.employeeForm;
  return { name, phone, shift };
};

export default connect(mapStateToProps, { employeeUpdate })(EmployeeForm);
