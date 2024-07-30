import React from 'react';
import UserData from './component/UserData';

class App extends React.Component {
  constructor() {
    super();
  }

  handleSubmit = event => {
    event.preventDefault();
    let inputs = event.target.getElementsByTagName('input')
    for (const item of inputs) {
      console.log(item.value)
    }
  }

  render() {
    return (

        <div className="box"  style={{backgroundColor: "lightblue"}}>
          <UserData handleSubmit={this.handleSubmit} />
        </div>
    )
  }
}

export default App;