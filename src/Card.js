import React from 'react';
import ReactDOM from 'react-dom';

export const Card = (props) => {
    return (
        <div>
            <img src="http://placehold.it/75" />
            <div>
                <div>Name here ...</div>
                <div>Company name here ... </div>
            </div>
        </div>
    );
};

ReactDOM.render(<Card />, document.getElementById('root'))