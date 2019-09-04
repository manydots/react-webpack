import React, { Component } from 'react';
import classNames from 'classnames';
import { getPrefix } from '../_util/method';
import './style/index.scss';

export default class Button extends Component{

  render() {
  	console.log(this.props)
    const { type = 'info' } = this.props;
    const prefix = getPrefix('alert');
    const className = classNames(prefix, `${prefix}-${type}`);
    return <div className={className}>{this.props.children}</div>
  }
}
