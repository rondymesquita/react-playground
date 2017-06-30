import React from 'react';

import 'semantic-ui-css/semantic.min.css';
import {Button} from 'semantic-ui-react';

class Menu extends React.Component {
  constructor() {
    super();
    this.state = {
      page: "No Page Yet"
    }
    Menu.context = this;
    // this.onClickListener = this.onClickListener.bind(this)
  }
  onClickListener() {
    Menu.context.setState({page: this.children})
  }

  render() {
    return (
      <div>
        <p>{this.state.page}</p>
        <Button onClick={this.onClickListener}>Home</Button>
        <Button onClick={this.onClickListener}>About</Button>
        <Button onClick={this.onClickListener}>Contact</Button>
      </div>
    );
  }
}

Menu.context = null;

export {Menu};
