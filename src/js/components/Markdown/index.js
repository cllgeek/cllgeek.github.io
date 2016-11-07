import React from 'react'

var DisplayContainer = React.createClass({
    updateValue:function(modifiedValue){
        this.setState({
            value: modifiedValue
        })
    },
    getInitialState:function(){
        return{
            value:'Heading\n=======\n\nSub-heading\n-----------\n \n### Another deeper heading\n \nParagraphs are separated\nby a blank line.\n\nLeave 2 spaces at the end of a line to do a  \nline break\n\nText attributes *italic*, **bold**, \n`monospace`, ~~strikethrough~~ .\n\nShopping list:\n\n  * apples\n  * oranges\n  * pears\n\nNumbered list:\n\n  1. apples\n  2. oranges\n  3. pears\n\nThe rain---not the reign---in\nSpain.\n\n *[Herman Fassett](http://freecodecamp.com/hermanfassett)*'
        }
    },
    rawMarkup: function(value) {
      var rawMarkup = marked(value, {sanitize: true});
      return { __html: rawMarkup };
    },
    render:function(){
      return (
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <RawInput value={this.state.value} updateValue={this.updateValue}/>
            </div>
            <div className="col-md-6">
              <span dangerouslySetInnerHTML={this.rawMarkup(this.state.value)} />
            </div>
          </div>
        </div>
        );
    }
});

var RawInput = React.createClass({
    update:function(){
        var modifiedValue=this.inputValue.value;
        this.props.updateValue(modifiedValue);
    },
    render:function(){
        return (<textarea rows="22" type="text" ref={input=>{this.inputValue=input}} value={this.props.value} onChange={this.update} className="form-control" />)
    }
});

export default DisplayContainer