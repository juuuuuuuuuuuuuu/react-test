import React from 'react';
import { shallow, mount } from 'enzyme';
import Spinbox from './Spinbox';

describe('spinbox', () => {
  it('스핀박스 생성', () => {
    const spinbox = mount(<Spinbox/>);
    expect(spinbox).toBeDefined();
  });
  it('스핀박스 생성하면 기본값은 200', () => {
    const spinbox = mount(<Spinbox/>);
    const input = spinbox.find('input').getDOMNode();
    const actualValue = Number(input.value);
    expect(actualValue).toEqual(200);
  });

  it('입력폼에 999 입력할 수 있다', () => {
    //given
    const spinbox = mount(<Spinbox/>);

    //when
    const mockedEvent = {
      target: {
        value: 999
      }
    };

    spinbox.find('input').simulate('change', mockedEvent);
    
    //then

    expect(spinbox.state().value).toEqual(999);
  });
})