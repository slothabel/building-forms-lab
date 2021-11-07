export default function manageBand(state = {
  bands: [],
}, action) {
  switch (action.type) {
    case "ADD_BAND":
      // console.log({ bands: [{...state.bands, name: action.payload.name}] });
      //correspondingly concatenate a new band into the bands array each time the action is dispatched
      //Each band in the array should be an object with a name key.
      return { bands: [{...state.bands, name: action.payload.name}] }
    default:
      return state;
  }
};
