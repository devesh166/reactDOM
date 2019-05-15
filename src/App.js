import React, { Component } from 'react'
import ReactDOM from 'react-dom';
export default class App extends Component {
  constructor() {
    super();


    this.textInput = React.createRef();

  }
  onClickHandler = (str) => {
    console.log(str)
    this.textInput.current.focus();
    this.textInput.current.value = str;

  }

  render() {
    return (
      React.createElement('div', {},
        React.createElement('h1', {}, 'My favorite ice cream flavors'),
      
        React.createElement('ul', {},
          [
            React.createElement('li', { onClick: () => { this.onClickHandler('Chocolate') } }, 'Chocolate'),
            React.createElement('li', { onClick: () => { this.onClickHandler('Vanilla') } }, 'Vanilla'),
            React.createElement('li', { onClick: () => { this.onClickHandler('Banana') } }, 'Banana')
          ]
        ),
        React.createElement('input', { ref: this.textInput })

      )

    )
  }
}

ReactDOM.render(
  React.createElement(App, null),
  document.getElementById('root')
)
