import Types from '../actions/types';
import { Employees } from '../models/';

const initialState: Employees[] = [];

const reducer = (state = initialState, action: any): Employees[] => {
  switch (action.type) {
    case Types.SUCCESS_EMPLOYEES:
      return [...action.payload.employees];
    default:
      return state;
  }
};

export default reducer;
