import React, { Component } from 'react';
import _ from 'lodash';
import { View, Text, Picker, Button } from 'react-native';
import { connect } from 'react-redux';
import Communications from 'react-native-communications'
import EmployeeForm from './EmployeeForm';
import { employeeUpdate, employeeCreate, employeeSave, employeeDelete } from '../actions';
import { Card, CardItem, Input, Spinner, Confirm } from './common';

class EmployeeEdit extends Component {
  state = {
    visible: false,
  };

  componentWillMount() {
    _.each(this.props.employee, (value, prop) => {
      this.props.employeeUpdate({ prop, value});
    });
  }

  onButtonPress() {
    const { name, phone, shift, uid } = this.props;
    this.props.employeeSave({ name, phone, shift, uid: this.props.employee.uid });
  }

  onTextPress() {
    const { phone, shift } = this.props;
    Communications.text(phone, `You schedlue begins on ${shift}`);
  }

  onFirePress() {
    this.setState({
      visible: !this.state.visible
    });
  }

  onAccept() {
    this.props.employeeDelete({ uid: this.props.employee.uid });
  }

  onReject() {
    this.setState({
      visible: false,
    });
  }

  render() {
    return(
      <View>
        <Confirm visible={this.state.visible}
          onAccept={this.onAccept.bind(this)}
          onReject={this.onReject.bind(this)}
          >
          <Text>Do you want to fire user</Text>
        </Confirm>
        <EmployeeForm { ...this.props } />
        <Button title="Save changes" text="save changes" onPress={ this.onButtonPress.bind(this) } />
        <Button title="Text Schedule" text="Text Schedule" onPress={ this.onTextPress.bind(this) } />
        <Button title="Fire" text="Fire" onPress={ this.onFirePress.bind(this) } />
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  const { name, phone, shift, visible } = state.employeeForm;
  return { name, phone, shift, visible };
};

export default connect(mapStateToProps, {
  employeeUpdate,
  employeeCreate,
  employeeSave,
  employeeDelete,
})(EmployeeEdit);
