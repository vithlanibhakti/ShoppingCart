import React, { Component } from "react";
import NavBar from "./components/navbar";
import Counters from "./components/counters";

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 0,name :'clothes' },
      { id: 2, value: 0,name :'toys' },
      { id: 3, value: 0,name :'gifts' },
      {id :4,value :0,name :'flowers'  }]
  };

  handleIncrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    //counters[index] = { ...counters[index] };
    counters[index].value++;
    this.setState({ counters });
  };

  handleDecrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    //counters[index] = { ...counters[index] };
    counters[index].value--;
    this.setState({ counters });
  };

  handleReset = () => {
    const counters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };

  // handleDelete = counterId => {
  //   const counters = this.state.counters.filter(c => c.id !== counterId);
  //   this.setState({ counters });
  // };

  handleRestart = () => {
    window.location.reload();
  };

  render() {
    debugger;
    return (
      <div>
        
        <NavBar
          totalCounters={this.state.counters.filter(c => c.value > 0).length}
        />
        <main className="container">
          <Counters
            counters={this.state.counters}
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
            //onDelete={this.handleDelete}
            onRestart={this.handleRestart}
          />
        </main>
      </div>
    );
  }
}

export default App;
