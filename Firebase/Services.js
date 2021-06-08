export const singUp = (email, password, errorInput, name) => {
  const db = firebase.firestore();
  const auth = firebase.auth();
  return auth
    .createUserWithEmailAndPassword(email, password)
    .then((cred) => {
      window.location.hash = '#/home';
      const profile = firebase.auth().currentUser;
      profile.updateProfile({
        displayName: name,
      });

      return db.collection('users').doc(cred.user.uid).set({
        email: cred.user.email,
        uid: cred.user.uid,

      });
    })
    .catch((error) => {
      const errorCode = error.code;
      const input = errorInput;
      if (errorCode === 'auth/weak-password') {
        input.textContent = 'The password is too weak';
      }
    });
};

export const authGoogle = () => {
  const auth = firebase.auth();
  const googleProvider = new firebase.auth.GoogleAuthProvider();
  return auth
    .signInWithPopup(googleProvider)
    .then((result) => {
      window.location = '#/home';
      return result;
    })
    .catch((error) => error);
};

export const authFacebook = () => {
  const auth = firebase.auth();
  const providerFb = new firebase.auth.FacebookAuthProvider();
  auth
    .signInWithPopup(providerFb)
    .then(() => {
      window.location = '#/home';
    })
    .catch((error) => error);
};

// Login
export const login = (email, password, errorInput) => {
  const auth = firebase.auth();
  return auth
    .signInWithEmailAndPassword(email, password)
    .then((user) => {
      window.location = '#/home';
      return user.email;
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      const input = errorInput;
      if (errorCode === 'auth/user-not-found') {
        input.textContent = 'The given email not corresponding';
      } else if (errorCode === 'auth/wrong-password') {
        input.textContent = 'The password is invalid';
      } else {
        input.textContent = errorMessage;
      }
      return error;
    });
};

// sign out button
export const signOut = () => {
  const auth = firebase.auth();
  auth
    .signOut()
    .then(() => {
      window.location = '#/';
      // Sign-out successful.
    })
    .catch((error) => error);
};

// Recover password
export const recover = (recoveryEmail) => {
  const auth = firebase.auth();
  auth
    .sendPasswordResetEmail(recoveryEmail)
    .then(() => {})
    .catch((error) => error);
};

// Users data

/* export function userName() {

    const user = firebase.auth().currentUser;
    console.log(user)
    if (user) {
        user.displayName,
            user.email,
            user.uid
    } else {
        console.log("null")
    }
} */
