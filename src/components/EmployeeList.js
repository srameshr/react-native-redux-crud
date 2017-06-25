import React, { Component } from 'react';
import { View, Text, ListView } from 'react-native';
import _ from 'lodash';
import { connect } from 'react-redux';
import { employeesFetch } from '../actions';
import ListItem from './common/ListItem';

class EmployeeList extends Component {
  componentWillMount() {
    this.props.employeesFetch();
    this.createDataSource(this.props);
  }

  componentWillReceiveProps(nextProps) {
    this.createDataSource(nextProps);
  }

  createDataSource({ employees }) {
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.dataSource = ds.cloneWithRows(this.props.employees);
  }

  render() {
    console.log(this.props.employees);
    return(
      <ListView
        enableEmptySections
        dataSource={this.dataSource}
        renderRow={this.renderRow} />
    );
  }

  renderRow(employee) {
    return (
      <ListItem employee={employee} />
    );
  }

}

const mapStateToProps = (state) => {
  const employees = _.map(state.employeeData, (val, uid) => {
    return {
      ...val,
      uid
    }
  });
  return { employees };
};

export default connect(mapStateToProps, { employeesFetch })(EmployeeList);
