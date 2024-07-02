export const VoteButton = ({handleVote}) => {
    return <><button onClick={() => handleVote()}>Voter</button> <button onClick={() => handleVote(10)}>Voter 15 fois</button> </>
}