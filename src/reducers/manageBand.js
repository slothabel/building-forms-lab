export default function manageBand(state = {
  bands: [],
}, action) {
  switch (action.type) {
    case "ADD_BAND":
      console.log({ bands: [{...state.bands, name: action.payload.name}] });
      return { bands: [{...state.bands, name: action.payload.name}] }
    default:
      return state;
  }
};
