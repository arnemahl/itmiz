import React from 'react';
import * as S from './Landingpage.style.js';

import YourLists from './YourLists/YourLists';

import firebase from 'firebase/app';
import REQ from 'util/REQ';

export default class Landingpage extends React.Component {

  state = {
    authAsync: {
      req: REQ.INIT,
      user: void 0,
    },
  }

  componentDidMount() {
    this.unsubscribe = firebase.auth().onAuthStateChanged(user => {
      this.setState({
        authAsync: {
          req: REQ.SUCCESS,
          user,
        },
      });
    });
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  render() {
    const { req, user } = this.state.authAsync;

    // eslint-disable-next-line default-case
    switch (req) {
      case REQ.INIT:
      case REQ.PENDING:
        return (
          <S.Page>
            <S.LoadingMessage>
              Loading...
            </S.LoadingMessage>
          </S.Page>
        );
      case REQ.ERROR:
        return (
          <S.Page>
            <S.ErrorMessage>
              Loading...
            </S.ErrorMessage>
          </S.Page>
        );
      case REQ.SUCCESS:
        if (user) {
          return (
            <S.Page>
              <S.Message>
                Welcome!
              </S.Message>
              <YourLists />
            </S.Page>
          );
        } else {
          return (
            <S.Page>
              <S.Message>
                Itmiz lets you create shopping lists.
                <br />

                <S.Link to="/login">Log in</S.Link> or <S.Link to="/signup">sign up</S.Link> to get started.
              </S.Message>
            </S.Page>
          );
        }
    }
  }
}
