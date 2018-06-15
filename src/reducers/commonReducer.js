import _ from 'lodash';

import * as commonActionType from 'types/commonActionType';

const common = (state = {}, action) => {
  switch (action.type) {
    case commonActionType.FETCH_COMMON_SUCCESS:
      return _.assign({}, state, action.payload);

    case commonActionType.FETCH_COMMON_FAIL:
      return _.assign({}, state);

    default:
      return state
  }
}

export { common };