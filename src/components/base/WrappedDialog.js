import React from 'react';
import Dialog from './Dialog';

/**
 * Specialization(특수화)
 */
class WrappedDialog extends React.PureComponent {
  render() {
    console.log('diaglog')
    return (
      <Dialog
      header={<h2>반가워요!</h2>}
      body={<p>리액트 부트캠프에 오신 것을 환영합니다.</p>}
      footer={<button className="button">확인</button>}
    />
    )
  }
}

export default WrappedDialog;