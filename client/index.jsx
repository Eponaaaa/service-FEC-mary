import React from 'react';
import ReactDOM from 'react-dom';

class MoreFrom extends React.Component {
  constructor (props) {
    super(props);
  }

  render () {
    return (
      <div>This is the MoreFrom Component</div>
    );
  }
}

ReactDOM.render(
  <MoreFrom />,
  document.getElementById('app')
);