import React from 'react';
import Items from './Items';

import firebase from 'firebase/app';

export default class ListPage extends React.Component {

  state = {
    listMap: {}
  }

  componentDidMount() {
    firebase.database()
      .ref('lists')
      .child(this.props.match.params.listId)
      .on('value', this.addList);
  }
  componentWillUnmount() {
    firebase.database()
      .ref('lists')
      .child(this.props.match.params.listId)
      .off('value', this.addList);
  }
  addList = snap => {
    // if (!snap.val().members[currentUser.uid]) {
    //   return;
    // }

    this.setState(state => ({
      listMap: {
        ...state.listMap,
        [snap.key]: {
          id: snap.key,
          ...snap.val(),
        },
      },
    }));
  }

  render() {
    const list = this.state.listMap[this.props.match.params.listId];

    if (!list) {
      return (
        <div>
          No list...
        </div>
      );
    }

    return (
      <div>
        <h1>{list.title}</h1>
        <Items list={list} />
      </div>
    );
  }
}
