import { useEffect } from "react";

export const useUpdateVote = (vote) => {
  useEffect(() => {
      document.getElementById("vote").innerHTML = `Il y a ${vote} vote(s)`;
  }, [vote]);
};
