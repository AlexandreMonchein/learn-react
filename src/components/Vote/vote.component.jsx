import { useState } from "react";
import { DisplayVotes } from "./displayVotes.component";
import { VoteButton } from "./voteButton.component";
import { handleVote } from "./vote";
import { useUpdateVote } from "./useUpdateVote.hooks";

export const Vote = () => {
  const [vote, setVote] = useState(0);

  useUpdateVote(vote);

  return (
    <>
      <VoteButton handleVote={() => handleVote(setVote)} />
      <DisplayVotes />
    </>
  );
};
