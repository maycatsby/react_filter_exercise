import * as types from "../types/people";

export const query = payload => ({
  type: types.QUERY,
  payload: payload
});
