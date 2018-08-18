import React from 'react';
import * as S from './Items.style.js';

export default class Items extends React.Component {

  render() {
    const { items = [] } = this.props.list;

    return (
      <div>
        <h3>Items</h3>
        {items.map(item =>
          <div>item.title</div>
        )}
        {items.length === 0 &&
          <div>
            This list has no items yet
          </div>
        }
        <S.Button>Add new item</S.Button>
      </div>
    );
  }
}
