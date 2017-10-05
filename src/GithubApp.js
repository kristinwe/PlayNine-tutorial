import React from 'react';
import ReactDOM from 'react-dom';

const Card = (props) => {
    return (
        <div>
            <img width="75" src={props.avatar_url} />
            <div>
                <div>{props.name}</div>
                <div>{props.company}</div>
            </div>
        </div>
    );
};

const CardList = (props) => {
    return (
        <div>
          {props.cards.map(card => <Card {...card} />)}
        </div>
    );
}

class Form extends React.Component {
    render () {
        return (
            <form>
                <input type="text" placeholder="Github username" />
                <button type="submit">Add card </button>
            </form>
        );
    }
}


export default class GithubApp extends React.Component {
    state = {
        cards: 
        [ 
            {name: "Chris Wanstrath",
            avatar_url: "https://avatars0.githubusercontent.com/u/2?v=4",
            company: "Github" },
            {name: "Evan Phoenix",
            avatar_url: "https://avatars0.githubusercontent.com/u/7?v=4",
            company: "hashicorp" },
        ]
    };

    render() {
        return (
            <div>
                <CardList cards={this.state.cards}/>
            </div>
        );
    }
}

ReactDOM.render(<GithubApp />, document.getElementById('root'));