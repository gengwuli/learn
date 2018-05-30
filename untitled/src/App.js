import React, { Component } from 'react';
import './App.css';
import Toggle from "./Toggle";
import AceEd from './AceEd'
import Test from './Test'
import MyNav from './MyNav'
import Header from './Header'
import Search from './Search'

class Clock extends Component {
    constructor(props) {
        super(props)
        this.state = {date: new Date() }
    }

    componentDidMount() {
        this.timerId = setInterval(() => this.tick(), 1000)
    }

    componentWillUnmount() {
        clearInterval(this.timerId)
    }

    tick() {
        this.setState({
            date: new Date()
        })
    }

    render() {
        return (
            <div>
                <h1>Hello world!</h1>
                <h2>It is {this.state.date.toLocaleString()}.</h2>
            </div>
        )
    }


}

class App extends Component {
  render() {
    return (
      <div className="App">
          <Header/>
          <MyNav/>
          <Toggle/>
          <Clock />
          <Test />
      </div>
    );
  }

    clickme() {
      alert('hallo')
    }
}

export default App;
