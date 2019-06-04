import React from 'react'
import { shallow } from 'enzyme'
import sinon from 'sinon'
import Button from './Button'

describe('Button component', () => {
  it('should call handleClick() when clicked', () => {
    const spy = sinon.spy(Button.prototype, 'handleClick');
    const wrapper = shallow(<Button/>);

    wrapper.find('div').simulate('click');
    expect(spy.calledOnce).toBe(true);
  })
})