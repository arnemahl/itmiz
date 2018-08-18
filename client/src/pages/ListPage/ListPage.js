import React from 'react';

export default class ListPage extends React.Component {

  render() {
    return (
      <div>
        List Page {this.props.match.params.listId}
      </div>
    );
  }
}
