import React, { Component } from 'react';
import MicroContext from './micro-context';

export default (WrapComponent) => {
  class ContextProps extends Component {
    render() {
      const { forwardedRef, ...otherProps } = this.props;
      return (
        <MicroContext.Consumer>
          {(globalContext) => {
            return <WrapComponent ref={forwardedRef} {...globalContext} {...otherProps} />;
          }}
        </MicroContext.Consumer>
      );
    }
  }
  const forwardRef = (props, ref) => {
    return <ContextProps {...props} forwardedRef={ref} />;
  };

  forwardRef.displayName = Component.displayName || Component.name;
  return React.forwardRef(forwardRef);
};
