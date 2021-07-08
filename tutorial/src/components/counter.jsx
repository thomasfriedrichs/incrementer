import React, { Component } from 'react';

class Counter extends Component {
  state = {
    count: 0
  };
  
  render() { 
    let classes = this.badgeClasses();
    return (
      <div>
        <span className = { classes }>{this.formatCount()}</span>
        <button className= { classes }>Increment</button>
      </div>
    );
  }



  badgeClasses() {
    let classes = 'badge m-2 badge-';
    classes += (this.state.count === 0) ? 'warning' : 'primary';
    return classes;
  }

  formatCount() {
    const {count} = this.state;
    return count === 0 ? 'Zero' : count; 
  }
}

export default Counter;