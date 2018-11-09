import React, { Component, Fragment } from 'react';
import NavBar from './components/NavBar';
import Counters from './components/Counters';
import './App.css';

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 }
    ]
  }

  handleIncrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter)
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({
      counters
    });
  }

  handleDecrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter)
    counters[index] = { ...counter };
    counters[index].value--;
    if(counter.value > 0) {
      this.setState({
        counters
      });
    }
  }

  handleDelete = counterId => {
    const counters = this.state.counters.filter(counter => counter.id !== counterId);
    this.setState({
      counters
    });
  }

  handleReset = () => {
    const counters = this.state.counters.map(counter => {
      counter.value = 0;
      return counter;
    });
    this.setState({
      counters
    });
  }

  render() {
    const { counters } = this.state;
    return (
      <Fragment>
        <NavBar totalCounters={counters.filter(counter => counter.value > 0).length} />
        <main className="container">
          <Counters
            counters={counters}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
            onDelete={this.handleDelete}
            onReset={this.handleReset}
          />
        </main>
      </Fragment>
    );
  }
}

export default App;

