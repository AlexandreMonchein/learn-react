const initialState = {
  vote: 0,
};

export function stateReducer(state = initialState, action) {
  console.warn(">>> stateReducer", action.type, action);
  switch (action.type) {
    case "INCREMENT_VOTE":
      return {
        ...state,
        vote: state.vote + 1,
      };

    case "ADD_VOTES":
      const { nbrVotes } = action;
      return {
        ...state,
        vote: state.vote + nbrVotes,
      };
    default:
      return state;
  }
}
