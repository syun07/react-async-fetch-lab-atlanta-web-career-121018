import React, { Component } from 'react';

class App extends Component {
    state = {
        people: []
    }

    componentDidMount() {
        fetch('http://api.open-notify.org/astros.json')
        .then(res => res.json())
        .then(data => this.setState({
            people: data
        }))
    }
    render() {
        return (
            <div>
                hi
            </div>
        )
    }
}

export default App;