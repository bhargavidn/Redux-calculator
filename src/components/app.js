import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchVal,fetchResult,clearInput } from '../actions';

const btns=["7","8","9","/","4","5","6","*","1","2","3","+","-","0","C","="];

 class Calculator extends Component {
  clear(){
    console.log("in clear");
    this.props.clearInput();
  }
  result(){

    this.props.fetchResult(this.props.inpValue.value);
  }
  fetchInput(item){
    const btn=['/','+','*','-']
    const inpval=this.props.inpValue.value;
    if(!(inpval==0 && btn.includes(item)))
      this.props.fetchVal(item);
  }
  renderButtons(){
    return btns.map((item,key)=>{
        if(item=="C"){
          return(
             <button type="button" className="btn-default"
             key={key} onClick={this.clear.bind(this,item)}
             >{ item }</button>
         );
       }
         if(item=="="){
           return(
              <button type="button" className="btn-default"
              key={key} onClick={this.result.bind(this)}
              >{ item }</button>
          );
        }
        else{
             return(
                <button type="button" className="btn-default"
                key={key} onClick={this.fetchInput.bind(this,item)}
                >{ item }</button>
            );
       }

    });
  }

  render() {
    console.log(this.props.inpValue);
    const { value }=this.props.inpValue;
    console.log(value);
    return (
      <div className="container">
        <h2>A Simple Calculator</h2>
          <hr/>
            <div className="input-container">
                <input type="text" ref="input" value={value}/>
            </div>
            <div className="button-container">
                {this.renderButtons()}
            </div>

      </div>
    );
  }
}
function mapStateToProps(state){
  return {inpValue:state.value}
};
export default connect(mapStateToProps,{fetchVal,fetchResult,clearInput})(Calculator);
