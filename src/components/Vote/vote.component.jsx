import { DisplayVotes } from "./displayVotes.component";
import { VoteButton } from "./voteButton.component";
import { useUpdateVote } from "./useUpdateVote.hooks";
import { useDispatch, useSelector } from "react-redux";
import { getVotes } from "../../state/state.selectors";
import { addVotes, incrementVote } from "../../state/state.actions";

export const Vote = () => {
  const dispatch = useDispatch();
  const vote = useSelector(getVotes);
  console.warn("> vote", vote);

  const handleVote = (nbrVotes) => {
    console.warn("> handleVote", nbrVotes);
    if (nbrVotes) {
      dispatch(addVotes(nbrVotes));
      return;
    }
    
    dispatch(incrementVote());
  };

  useUpdateVote(vote);

  return (
    <>
      <VoteButton handleVote={handleVote} />
      <DisplayVotes />
    </>
  );
};
