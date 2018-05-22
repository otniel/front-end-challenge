import React from 'react'
import expect from 'expect'
import { mount } from 'enzyme'
import App from '../components/App';
import moment from 'moment';

describe('App', () => {
  let wrapper;

  beforeEach(() => {         
    wrapper = mount(<App />);
  });

  // Helper Functions
  let see = (text, selector) => {
    let wrap = selector ? wrapper.find(selector) : wrapper;
    expect(wrap.html()).toContain(text);
  };

  let type = (selector, text) => {
    const input = wrapper.find(selector)
    input.instance().value = text;
    input.simulate('change');
  }

  let click = selector => {
    wrapper.find(selector).simulate("click");
  }
});
