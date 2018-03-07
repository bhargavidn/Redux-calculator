import React,{ Component } from 'react';
import { FETCH_INPUT,FETCH_RESULT,CLEAR_INPUT } from '../actions';

const initialState={value:0}

export default function(state=initialState,action){

  switch(action.type){
      case FETCH_INPUT:
        return  {
          ...state,
            value:state.value == 0 ? action.val: state.value + action.val
          }
      case FETCH_RESULT:
        return {
            ...state,
            value:eval(`${action.val}`)
          }
      case CLEAR_INPUT:
        return {
          ...state,
            value:0
          }
  }
  return state;
}
