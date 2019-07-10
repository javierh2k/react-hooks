import { action, thunk, computed } from 'easy-peasy';
import { client } from '../../../hooks';
import {
  CREATE_EMPLOYEE,
  UPDATE_EMPLOYEE,
} from '../../../services/employee/mutations';
import { saveModel } from './base';

export default {
  // actions
  saved: action((state, payload) => {
    state.employee = payload;
  }),

  // thunks
  save: thunk(async (actions, payload) => {
    const model = await saveModel(
      client,
      payload,
      CREATE_EMPLOYEE,
      UPDATE_EMPLOYEE
    );
    actions.saved(model);
  }),
};
