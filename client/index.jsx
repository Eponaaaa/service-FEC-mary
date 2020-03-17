import React from 'react';
import ReactDOM from 'react-dom';

class MoreFrom extends React.Component {
  constructor (props) {
    super(props);
  }

  render () {
    return (
      <div>Hello</div>
    )

  }
};

ReactDOM.render(
  <MoreFrom />,
  document.getElementById('app')
);