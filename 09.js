// Let's play! You have to return which player won! In case of a draw return Draw!.

// Examples(Input1, Input2 --> Output):

// "scissors", "paper" --> "Player 1 won!"
// "scissors", "rock" --> "Player 2 won!"
// "paper", "paper" --> "Draw!"

const rps = (p1, p2) => {
    if (p1 === 'rock') {
    switch (p1 === 'rock') {
        case p2 ==='paper' :
            return 'Player 2 won!';
        case p2 ==='scissors' :
            return 'Player 1 won!';
        default:
            return 'Draw!';
    }
    } else if (p1 === 'scissors') {
    switch (p1 === 'scissors') {
        case p2 ==='paper' :
            return 'Player 1 won!';
        case p2 ==='rock' :
            return 'Player 2 won!';
        default:
            return 'Draw!';
    }
    } else {
        switch (p1 === 'paper') {
            case p2 ==='scissors' :
                return 'Player 2 won!';
            case p2 ==='rock' :
                return 'Player 1 won!';
            default:
                return 'Draw!';
        }
    }
};

console.log(rps('scissors','paper'))