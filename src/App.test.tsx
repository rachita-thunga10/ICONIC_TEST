import React from 'react';
import { render, screen,fireEvent } from '@testing-library/react';
import App from './App';
import Maincontent from './components/maincontent';
import loginReducer from './reducers/loginReducer';

it('should return the initial state', () => {
  expect(loginReducer(undefined, {})).toEqual(
    {
      cat:[],
      page:0,
      firstpage_link: "",
      lastpage_link:"",
      selfpage_link:"",
      nextpage_link:"",
    }
  )
})

it('should not call updatestatecomponents if page is 0', () => {
  const updatestatecomponents = jest.fn()
  expect(updatestatecomponents).toHaveBeenCalledTimes(0)
})
