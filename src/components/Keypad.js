// Code Keypad Component Here
import React, {Component} from 'react';

class Keypad extends Component {

keyStroke = () => console.log('Entering password...');


render(){
  return(
    <div>
      <input type="password"
      onKeyUp={this.keyStroke}/>
    </div>
  );
 }
}

export default Keypad
