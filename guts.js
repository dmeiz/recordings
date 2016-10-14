const initialState = {
  recordings: []
}

export function recordingApp(state = initialState, action) {
  console.log(`Got action ${action.type}`);
  switch (action.type) {
    case "CREATE_RECORDING":
      let newState = Object.assign({}, state);
      newState.recordings.push(
        {
          name: action.name,
          audioUrl: action.audioUrl
        }
      );
      return newState;

    default:
      return state;
  }
}


