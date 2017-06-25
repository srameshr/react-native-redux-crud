import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';
import { Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';
import CreateEmployee from './components/CreateEmployee';
import EmployeeEdit from './components/EmployeeEdit';

class  RouterComponent extends Component {

  constructor(props) {
    super(props)
  }

  loadCreateForm() {
    Actions.createEmployee();
  }

  render() {
    return (
      <Router sceneStyle={{ paddingTop: 65 }}>
        <Scene key="auth">
          <Scene key='login' component={LoginForm} title='Please login' />
        </Scene>
        <Scene key="main">
          <Scene key='employeeList' component={EmployeeList} title='Employees'
          rightTitle="Add" onRight={ this.loadCreateForm.bind(this) } />
          <Scene key="createEmployee" component={CreateEmployee} title="Create"/>
          <Scene key="editEmployee" component={EmployeeEdit} title="Edit"/>
        </Scene>
      </Router>
    );
  }
};

export default RouterComponent;
