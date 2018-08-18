import React from 'react';
import * as S from './YourLists.style.js';

import firebase from 'firebase/app';

export default class YourLists extends React.Component {

  state = {
    listMap: {}
  }

  componentDidMount() {
    firebase.database()
      .ref('lists')
      .on('child_added', this.addList);
  }
  componentWillUnmount() {
    firebase.database()
      .ref('lists')
      .off('child_added', this.addList);
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
    const lists = Object.values(this.state.listMap);

    return (
      <div>
        <h1>Your lists</h1>
        <div>
          {lists.map(list =>
            <S.Link key={list.id} to={`/lists/${list.id}`}>
              {list.title}
            </S.Link>
          )}
          {lists.length === 0 &&
            <div>
              You don't seem to have any lists yet
            </div>
          }
          <S.Button>
            Create new list
          </S.Button>
        </div>
      </div>
    );
  }
}
