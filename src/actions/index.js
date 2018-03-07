import React, { Component } from 'react';

export const FETCH_RESULT='fetch_result';
export const FETCH_INPUT="fetch_input";
export const CLEAR_INPUT="clear_input";

export function fetchResult(val){
  return{
    type:FETCH_RESULT,
    val

  }
}

export function fetchVal(val){
  return{
    type:FETCH_INPUT,
    val
  }
}
export function clearInput(){
  return{
    type:CLEAR_INPUT
  }
}
