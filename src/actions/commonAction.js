import { createAction } from "redux-actions";
import axios from "libs/axios";

import * as commonActionType from "types/commonActionType";

const fetchCommon = () => {
  return dispatch => {
    axios
      .get("/api/common")
      .then(res => {
        dispatch(createAction(commonActionType.FETCH_COMMON_SUCCESS)(res.data));
      })
      .catch(() => {
        dispatch(createAction(commonActionType.FETCH_COMMON_FAIL)());
      });
  };
};

export { fetchCommon };
