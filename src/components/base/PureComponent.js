import React from 'react'

/**
 * PureComponent: shouldComponentUpdate 메소드가 이미 적용된 버전의 클래스
 * shallow level로만 데이터비교하여  nested object등 변경 감지 못함
 * 퍼포먼스 적으로 모든 컴포넌트에 적용하면 오히려 앱이 더 느려짐
 */
class Input extends React.PureComponent {
  renderCount = 0;

  render() {
    const { type, placeholder, value, onChange } = this.props
    console.log(placeholder, 'Rendered', ++this.renderCount)

    return <input type={type} placeholder={placeholder} value={value} onChange={onChange} />
  }
}

export default Input
