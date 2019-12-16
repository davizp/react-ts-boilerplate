import Types from './types';
import { Employees } from '../models';

/* ACTION CREATORS */
export function fetchEmployees() {
  return {
    type: Types.FETCH_EMPLOYEES,
  };
}

export function successEmployees(employees: Employees[]) {
  return {
    type: Types.SUCCESS_EMPLOYEES,
    payload: {
      employees,
    },
  };
}
