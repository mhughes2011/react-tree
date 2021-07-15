const Header = (props) => {

    return (
        <header>
        <h1>{props.title}</h1>
            <span className="stats">Players: {props.totalPlayers}</span>
        </header>
    );
}

class Counter extends React.Component {

    constructor() {
        super()
        this.state = {
            score: 0
        };
    }

    incrementScore() {
        //this.state.score += 1;
        //Never change the state like the above!
        this.setState(prevState => {
            return {
                score: prevState.score + 1
            }
        });
    }

    //This is one way to bind the method to the instance of Counter.  Using an arrow function at the method declaration.
    decrementScore = () => {
        //prevState is used because setState can be asynchronous.  To ensure you're always updating based off the previous state use the following. This ensures the change will always update the front end correctly.
        this.setState( prevState => {
            return {
                score: prevState.score - 1
            }
        });
    }

    render() {
        return (
            <div className='counter'>
                {/* No need to include the arrow function in this onClick handler because it's bound by the method being an arrow function up top */}
                <button className='counter-action decrement' onClick={this.decrementScore}> - </button>
                <span className='counter-score'>{this.state.score}</span>
                <button className='counter-action increment' onClick={() => this.incrementScore()}> + </button>
                {/* Or you could make the onClick function call an arrow function to bind the method to the instance and get access to the state.  Or this could be rewritten like this onClick={this.incrementScore.bind(this)} */}
            </div>
        );
    }
}

const Player = (props) => {
    return (
        <div className='player'>
            <span className='player-name'>
                {props.name}
            </span>

            <Counter />
        </div>
    );
}

class App extends React.Component {
    constructor() {
        super()
        this.state= {
            players:  [
                {
                    name: "Guil",
                    id: 1
                },
                {
                    name: "Treasure",
                    id: 2
                },
                {
                    name: "Ashley",
                    id: 3
                },
                {
                    name: "James",
                    id: 4
                }
            ]
        }
    }
    
    render() {
        return (
            <div className='scoreboard'>
                <Header 
                    title='Scoreboard'
                    totalPlayers={this.state.players.length}
                />

                {/* Players List */}
                {this.state.players.map( player => 
                    <Player 
                        name= {player.name}
                        key= {player.id.toString()}
                    />
                )}
            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);