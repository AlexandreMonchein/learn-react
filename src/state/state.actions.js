export const INCREMENT_VOTE = "INCREMENT_VOTE";
export const ADD_VOTES = "ADD_VOTES";

export function incrementVote() {
  console.warn("> INCREMENT_VOTE");
  return {
    type: INCREMENT_VOTE,
  };
}

export function addVotes(nbrVotes) {
  return {
    type: ADD_VOTES,
    nbrVotes,
  };
}
