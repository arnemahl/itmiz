import React from 'react';

import firebase from 'firebase/app';
import firebaseui from 'firebaseui';

const config = {
  signInOptions: [
    firebase.auth.EmailAuthProvider.PROVIDER_ID,
  ],
  signInSuccessUrl: '/',
  tosUrl: '/tos',
  privacyPolicyUrl: '/privacy-policy',
};

const authUI = new firebaseui.auth.AuthUI(firebase.auth());

export default class Auth extends React.Component {

  componentDidMount() {
    authUI.start('#firebaseui-auth-container', config);
  }

  componentWillUnmount() {
    authUI.reset();
  }

  render() {
    return <div id="firebaseui-auth-container" />;
  }
}
