import React, { Component } from 'react';
import { triangleType } from './lib/triangle-type';


class App extends Component {

  constructor () {
     super();
     this.state = { a: 0, b: 0, c: 0, Cx: 0, Cy: 0 };
  }

  getC({a,b,c}) {
    const Cx = (Math.pow(a, 2) - Math.pow(b, 2) - Math.pow(c, 2)) / (- 2 * c);
    const Cy = Math.sqrt(Math.pow(b, 2) - Math.pow(Cx, 2));
    console.log(Cx, Cy)
  }

  change (side, raw) {
    const value = raw === '' ? 0 : parseFloat(raw);

    if (!isNaN(value)) {
      this.setState({ ...this.state, [side]: value});
    }
  }

  componentDidUpdate() {
    this.getC(this.state);
  }

  render() {
    const { a, b, c } = this.state;
    return (
      <div className="App">
        <label>
          a
          <input type="text" 
                 value={ this.state[ 'a' ] } 
                 onInput={ event => this.change('a', event.target.value) }
          />
        </label>
        <label>
          b
          <input type="text" 
                 value={ this.state[ 'b' ] } 
                 onInput={ event => this.change('b', event.target.value) }
          />
        </label>
        <label>
          c
          <input type="text" 
                 value={ this.state[ 'c' ] } 
                 onInput={ event => this.change('c', event.target.value) }
          />
        </label>
        <div>
          { JSON.stringify(this.state) }
        </div>
        <div>
          { triangleType(a, b, c) }
        </div>
      </div>
    );
  }
}

export default App;
