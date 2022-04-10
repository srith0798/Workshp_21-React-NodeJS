import * as actions from "./actionType";

export default function onLogger(data) {
  return {
    type: actions.ON_LOG,
    payload: {
      data,
    },
  };
}
