import React from 'react';
import EventMitt from 'event-mitt';
import _ from 'lodash';
import MicroContext from './micro-context';

export default class extends React.Component {
  constructor(inProps) {
    super(inProps);
    this.state = this.constructor.initialState();
    this.update = this.update.bind(this);
    this.__global__ = {};
    Object.assign(this, EventMitt);
  }

  set memory(inValue) {
    this.update(inValue);
  }

  get memory() {
    const { memory } = this.state;
    return memory;
  }

  set global(inValue) {
    _.forIn(inValue, (value, key) => {
      _.set(this.__global__, key, value);
    });
  }

  get global() {
    return this.__global__;
  }

  update(inState) {
    const { memory } = this.state;
    _.forIn(inState, (value, key) => {
      _.set(memory, key, value);
    });
    this.setState({ memory });
  }

  getApp() {
    console.error('MUST BE IMPLEMENT!');
  }

  render() {
    const { memory } = this.state;
    return (
      <MicroContext.Provider
        value={{
          memory,
          app: this,
          update: this.update
        }}>
        {this.getApp()}
      </MicroContext.Provider>
    );
  }
}
