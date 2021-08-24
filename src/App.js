import './App.css';
import React, { Component } from 'react';
import CountText from './components/CountText';

// function App() {
//   return (
//     <div style={{ padding: '4rem' }}>
//       <h1>Counter App</h1>
//       <h2>0</h2>
//       <button>+</button>
//       <button>-</button>
//       <button>Reset</button>
//     </div>
//   );
// }

// class A {
//   // property
//   name = 'John';
//   birthYear = 2000;

//   // method
//   sayHi() {
//     alert('Hello. My name is ' + this.name + '. I am ' + this.calcAge() + ' years old.');
//   }

//   calcAge() {
//     return 2021 - this.birthYear;
//   }
// }

// const objA = new A();
// const anotherA = new A();
// const anotherA1 = new A();
// const anotherA2 = new A();
// const anotherA3 = new A();
// const anotherA4 = new A();

// objA.sayHi()

class App extends Component {
  // constructor(props) {
  //   super(props);
  //   // #1 Declare state
  //   this.state = {
  //     count: 0,
  //     error: ''
  //   };
  // }

  // #2 Declare state
  state = {
    count: 0,
    error: ''
  };

  handleClickIncrement = () => {
    // increse count by 1
    this.setState({ count: this.state.count + 1 }); // new state : { count: 1, error: '' }
  };

  // handleClickIncrement() {

  // }

  handleClickDecrement = () => {
    if (this.state.count > 0) {
      this.setState({ count: this.state.count - 1 });
    }
  };

  handleClickReset = () => {
    this.setState({ count: 0 });
  };

  render() {
    const {
      state: { count }
    } = this; // { state: , handleClickIncrement: , handleClickDecrement: , handleClickReset:  }

    return (
      <div style={{ padding: '4rem' }}>
        <h1>Counter App</h1>
        <CountText count={this.state.count} />
        {/* <h2>{this.state.count}</h2> */}
        <button onClick={this.handleClickIncrement}>+</button>
        <button onClick={this.handleClickDecrement}>-</button>
        <button onClick={this.handleClickReset}>Reset</button>
      </div>
    );
  }
}

const app = new App();
app.render();

export default App;
