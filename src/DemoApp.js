import React from 'react';
import ReactDOM from 'react-dom';

class DemoButton extends React.Component {
    state = {counter: 0};
    handleClick = () => {
       this.props.onClickFunction(this.props.incrementValue);
        }
    
    render () {
        return (
         <button onClick={this.handleClick}> 
             + {this.props.incrementValue}
         </button>
        );
    }
}

const Result = (props) => {
    return (
        <div>{props.counter}</div>
    );
};

export default class DemoApp extends React.Component {
    state = {counter: 0};

    incrementCounter = (incrementValue) => {
    this.setState((prevState) => ({
    counter: prevState.counter + incrementValue}))    
    }

    render()
    {
        return (
            <div>
                <DemoButton incrementValue = {1} onClickFunction={this.incrementCounter}/>
                <DemoButton incrementValue = {5} onClickFunction={this.incrementCounter}/>
                <DemoButton incrementValue = {10} onClickFunction={this.incrementCounter}/>
                <DemoButton incrementValue = {100} onClickFunction={this.incrementCounter}/>
                <Result counter={this.state.counter}/>
                </div>
        )
    }
}

ReactDOM.render(<DemoApp />, document.getElementById('root'));