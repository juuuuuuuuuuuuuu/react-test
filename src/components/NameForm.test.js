import React from 'react';
import { shallow } from 'enzyme';
import NameForm from './NameForm';

describe('NameForm', () => {
  let component = null;

  //테스트용  oninsert함수, change값 바꿔줌
  let changed = null;
  const onInsert = (name) => {
    changed = name;
  }

  it('renders correctly', () => {
    component = shallow(<NameForm onInsert={onInsert} />);
  });

  it('matches snapshot', () => {
    expect(component).toMatchSnapshot();
  });

  describe('insert new test', () => {
    it('has a form', () => {
      expect(component.find('form').exists()).toBe(true);
    })
    it('has an input', () => {
      expect(component.find('input').exists()).toBe(true);
    })
    
    it('simulates input change', () => {
      const mockedEvent = {
        target: {
          value: 'heello'
        }
      };
      //이벤트 시뮬레이트, 두번째 파라미터 이벤트 객체
      component.find('input').simulate('change', mockedEvent);
      expect(component.state().name).toBe('heello');
    });
    it('simulates form submit', () => {
      const mockedEvent = {
        preventDefault: () => null // onsubmit에서 preventdefault호출하게 되므로 가짜 함수 추가
      };
      component.find('form').simulate('submit', mockedEvent);
      expect(component.state().name).toBe('');
      expect(changed).toBe('heello')
    })
  })


});