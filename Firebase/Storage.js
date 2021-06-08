// eslint-disable-next-line import/no-cycle
import { renderPost, cleanPost, cleanChat } from '../components/Utils.js';

function uploadImage(file) {
  const name = file.name || '';
  const ref = firebase.storage().ref(`/userProfileImgs/${name}`);
  const uploadTask = ref.put(file);
  return uploadTask
    .then((snapshot) => snapshot.ref.getDownloadURL())
    .catch((error) => error.message);
}

const db = firebase.firestore();
export function savePost(file, description, idUser, name) {
  uploadImage(file).then((url) => {
    db.collection('usersPost').doc().set({
      image: url,
      description,
      date: firebase.firestore.FieldValue.serverTimestamp(),
      name,
      idUser,
      likesCount: 0,
    });
  });
}

export function getPost() {
  db.collection('usersPost').orderBy('date', 'desc').onSnapshot((query) => {
    const changePost = query.docs;
    const timeline = [];
    cleanPost();
    changePost.forEach((post) => {
      timeline.push(post.data());
      renderPost({ id: post.id, ...post.data() });
    });
  });
}

export function deleteObjPost(idPost) {
  db.collection('usersPost').doc(idPost).delete().then(() => {})
    .catch((error) => error);
}

export function updateObjPost(idPost, newText) {
  const updatePost = db.collection('usersPost').doc(idPost);
  return updatePost.update({
    description: newText,
  })
    .then(() => {})
    .catch((error) => error);
}

export const sendMessages = () => {
  const auth = firebase.auth();
  const user = auth.currentUser;
  const form = document.querySelector('#formSend');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const send = document.querySelector('#inputMessage').value;
    db.collection('chat').add({
      message: send,
      uid: user.uid,
      date: firebase.firestore.FieldValue.serverTimestamp(),
      name: user.displayName,
    })
      .then(() => {}).catch((error) => error);
    cleanChat();
  });
  db.collection('chat').orderBy('date').onSnapshot((query) => {
    const content = document.querySelector('#protectedContent');
    content.innerHTML = '';
    query.forEach((doc) => {
      if (doc.data().uid === user.uid) {
        content.innerHTML += `
            <div class="containerMessageUser">
                <span class="userMessage" id="userMessage">
                <div class="nameChat">${doc.data().name}</div>
                    ${doc.data().message}
                </span>
            </div>
            `;
      } else {
        content.innerHTML += `
            <div class="containerMessage">
                <span class="destinataryMessage" id="destinataryMessage">
                <div class="nameChat">${doc.data().name}</div>
                    ${doc.data().message}
                </span>
            </div>
            `;
      }
    });
    content.scrollTop = content.scrollHeight;
  });
};

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    sendMessages(user);
  } else {
    // No user is signed in.
  }
});

export function likeObjPost(idPost, incrementer) {
  const postLikeUsers = db.collection('usersPost').doc(idPost);
  return postLikeUsers.update({
    likesCount: incrementer,
  })
    .then(() => {}).catch((error) => error);
}
