import {
  AuthMethods,
  defaultFirebase,
  FIREBASE_PROVIDERS,
  firebaseAuthConfig
} from 'angularfire2';


export const FIREBASE_APP_PROVIDERS: any[] = [
  FIREBASE_PROVIDERS,
  defaultFirebase({
    apiKey: 'AIzaSyCcbUBWKGpjVt6-8Rh5M9RNs2vzy33uhG8',
    authDomain: 'my-realtor.firebaseapp.com',
    databaseURL: 'https://my-realtor.firebaseio.com',
    storageBucket: 'my-realtor.appspot.com'
  }),
  firebaseAuthConfig({
    method: AuthMethods.Popup,
    remember: 'default'
  })
];
