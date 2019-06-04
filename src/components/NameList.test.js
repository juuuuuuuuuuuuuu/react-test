import React from 'react';
import renderer from 'react-test-renderer';
import NameList from './NameList';

describe('NameList', () => {
  //초기 렌더링 
  let component = null;

  it('renders correctly', () => {
    component = renderer.create(<NameList names={["이주영", "이주영1"]}/>);
  })

  it('matches snapshot', () => {
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  })
})