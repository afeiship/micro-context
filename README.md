# micro-context
> Micro context for react project.

## usage
```js
// app.js
import React from 'react';
import Button from '@/components/button';
import Card from '@/components/card';
import { MicroApp } from 'micro-context';

export default class extends MicroApp {
  static initialState() {
    return {
      memory: {
        home: {
          rand: 'randstr'
        }
      }
    };
  }

  getApp() {
    return (
      <div className="hello">
        <h1>Hello world!</h1>
        <p>It works!</p>
        <Button />
        <Card />
      </div>
    );
  }
}


// card.js
import React from 'react';
import { connect } from 'micro-context';

@connect
export default class extends React.Component {
  componentDidMount() {
    const { app } = this.props;
    this.btnRes = app.on('button:click', ({ value }) => {
      console.log('card received!', value);
    });
  }

  componentWillUnmount() {
    this.btnRes.destroy();
  }

  render() {
    const { memory } = this.props;
    return <div>Card Component {memory.home.rand}</div>;
  }
}

// card.js
import React from 'react';
import { connect } from 'micro-context';

@connect
export default class extends React.Component {
  componentDidMount() {
    const { app } = this.props;
    this.btnRes = app.on('button:click', ({ value }) => {
      console.log('card received!', value);
    });
  }

  componentWillUnmount() {
    this.btnRes.destroy();
  }

  render() {
    const { memory } = this.props;
    return <div>Card Component {memory.home.rand}</div>;
  }
}
```
