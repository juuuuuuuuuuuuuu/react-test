import React from 'react';
import ReactDOM from 'react-dom';

/**
 * createPortal: 논리적으로 하위컴포넌트여야하는데 시각적으로 상위 컴포넌트 덮어야할 때 사용
 */
class Dialog extends React.Component {
  render() {
    console.log('diaglog')
    const { header, body, footer } = this.props;
    return ReactDOM.createPortal(
      <div className="dialog">
        {header}
        <hr/>
        {body}
        <hr/>
        {footer}
      </div>,
      document.getElementById('dialog')
    )
  }
}

export default Dialog;