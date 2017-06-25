import React, { Component } from 'react';
import { View, Text, Picker, Button } from 'react-native';
import { connect } from 'react-redux';
import EmployeeForm from './EmployeeForm';
import { employeeUpdate, employeeCreate } from '../actions';
import { Card, CardItem, Input, Spinner } from './common';

class CreateEmployee extends Component {
  onButtonPress() {
    const { name, phone, shift } = this.props;
    this.props.employeeCreate({ name, phone, shift: shift || 'Monday' });
  }
  render() {
    return(
      <View>
        <EmployeeForm {...this.props} />
        <Button title="Login" text="login" onPress={ this.onButtonPress.bind(this) } />
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  const { name, phone, shift } = state.employeeForm;
  return { name, phone, shift };
};

export default connect(mapStateToProps, { employeeUpdate, employeeCreate })(CreateEmployee);
