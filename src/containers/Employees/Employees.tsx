import React from 'react';
import { fetchEmployees } from './actions/';
import { connect } from 'react-redux';
import { Employees } from './models/';

interface iProps {
  fetchEmployees: any,
  employees: Employees[]
};

class HomePage extends React.Component<iProps, {}> {

  _renderEmployees = () => {

    const { employees = [] } = this.props;

    const employeesRow = employees.map((employee, index) => (
      index < 15) && (
      <tr key={`employee-${employee.id}`}>
        <th>{employee.employee_name}</th>
        <th>{employee.employee_salary}</th>
        <th>{employee.employee_age}</th>
      </tr>
    ));

    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Salary</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          {employeesRow}
        </tbody>
      </table>
    );
  }

  render() {

    const { fetchEmployees } = this.props;

    return (
      <div>
        Home Page

        {this._renderEmployees()}

        <button onClick={fetchEmployees}>
          Click Me!
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state: any) => {
  const { employees } = state;

  // console.log('state', state);

  return { employees };
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    fetchEmployees: () => {
      // console.log('dispatch', dispatch);
      dispatch(fetchEmployees())
    },
  }
};



export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
