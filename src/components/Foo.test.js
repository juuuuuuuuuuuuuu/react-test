import React from 'react';
import { shallow, mount } from 'enzyme';
import Foo from './Foo';
import sinon from 'sinon';

describe('Foo', () => {
  //프로토타입을 통해 메소드에 접근 가능
  // 이 방법은 메소드가 this키워드로 컴폰넌트의 state, props에 접근할 때 의도한 대로 동작하지 않아 권하지 않음
  // 이러한 문제점 해결하기 위해 enzyme는 react 컴포넌트 인스턴스로 접근하는 api 제공
  const testFunc = Foo.prototype.test;
  it('should return foo', () => {
    expect(testFunc()).toBe('foo');
  });


//enzyme instance메소드 활용
// describe('Foo2', () => {
//   const instance = shallow(<Foo/>).instance();
//   it('should return foo', () => {
//     expect(instance.test()).toBe('foo');
//   })
// })


//라이프사이클 테스트
//didmount에서 props ccallback한번호출하는 함수
//마운트후 해당 함수 호출되었는지 테스트
describe('Foo3', () => {
  describe('#componentDidMount' , () => {
    it('should be return foo', () => {
      const cb = sinon.spy();
      mount(<Foo callback={cb} />);
      expect(cb.calledOnce).toBe(true);
    })
  })
})


// shallow, mount 비슷
// mount가 좀더 실제와 유사한 수준의 동작을 한다. 모든 라이프사이클 훅 호출
// shallow componentdidmount, componentdidupdte제외한 라이프사이클 훅호출 



//sinon은 테스트의 어려운 부분 단순하게 만듬
//3가지 유형
 ///1) spy: 행동에 영향을 미치치 않고 함수 호출에 대한 정보 제공
///2) stub: spy와 같지만 기능을 완전히 대체, 
///3) mock: spy와 stub결합하여 전체 개체를 더 쉽게 대체

///4)fake timers:  타이머(settimeout)
///5) fake xmlhttprequest, server  ajax요청 응답 위조하는데 사용할 수 있는 서버 



});

