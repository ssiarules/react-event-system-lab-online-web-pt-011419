// Code EyesOnMe Component Here
import React, {Component} from 'react';

class EyesOnMe extends Component {


focusFire = () => console.log('Good!')

  render(){
    return(
      <div>
        <button>
            onFocus={this.focusFire}
        </button>
      </div>

    )
  }
}
