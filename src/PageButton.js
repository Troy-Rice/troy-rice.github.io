import React from 'react';
import ReactDOM from 'react-dom';
import './PageButton.css'

class PageButton extends React.Component {
    constructor() {
        super();
        this.state = {
            state_test: 'testing',
            state_debug: 'debugging',
            state_run: 'running',
        };
    }
    render() {
        return (
            <div class="buttonContainer" style={{backgroundImage: "url(" + this.props.image + ")"}}>
                <h2 class="buttonText">{this.props.text}</h2>
            </div>
        );
    }
}

export default PageButton;