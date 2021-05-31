import { renderPost, cleanPost, cleanChat } from "../components/Utils.js"


firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      sendMessages(user)
    } else {
      // No user is signed in.
    }
});

const db = firebase.firestore();
export function savePost(file, description, idUser, name) {
    uploadImage(file).then((url) => {
        db.collection("usersPost").doc().set({
            image: url,
            description,
            date: firebase.firestore.FieldValue.serverTimestamp(),
            name,
            idUser,
        });
    });
}

export function getPost() {
    db.collection("usersPost").orderBy('date', 'asc').onSnapshot(query => {
        let changePost = query.docs;
        const timeline = [];
        cleanPost()
        changePost.forEach(post => {
            console.log(post)
            timeline.push(post.data())
                //console.log({ id: post.doc.id, ...post.doc.data(), date: new Date() })
            renderPost({ id: post.id, ...post.data(), })
        })
    })
}

function uploadImage(file) {
    const name = file.name || "";
    const ref = firebase.storage().ref("/userProfileImgs/" + name);
    const uploadTask = ref.put(file);
    return uploadTask
        .then((snapshot) => snapshot.ref.getDownloadURL())
        .catch((error) => {
            console.log(error.message);
        });
}



export function deleteObjPost(idPost) {
    db.collection("usersPost").doc(idPost).delete().then(() => {
        console.log("Document successfully deleted!");
    }).catch((error) => {
        console.error("Error removing document: ", error);
    });
}

export function updateObjPost (id, description) {
    const updatePost = db.collection("usersPost").doc(id);
    const editar = document.querySelector(".inputPost").value;
    return updatePost.update({
        description: editar,
        })
        .then(() => {
            console.log("Document successfully update!");
        }).catch((error) => {
            console.error("Error update document: ", error);
        });
}

/*export function sendMessages (user) {
    const send = document.querySelector('#inputMessage').value;
    return db.collection('chat').add({
        message: send,
        user,
        date: Date.now(),
    })
    .then(() => {
        console.log('Mensaje enviado')
    })
    .catch((error) => {
        console.log('Error de mensaje', error);
    });
}*/

export const sendMessages = () => {
    const auth = firebase.auth();
    const user = auth.currentUser;
    const form = document.querySelector("#formSend");
    console.log(user)
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        const send = document.querySelector('#inputMessage').value;
    db.collection('chat').add({
        message: send,
        uid: user.uid,
        date: Date.now(),
        name: user.displayName,
    })
    .then( res => {
        console.log('Mensaje enviado')
    }).catch(error => console.log(error))
    cleanChat();
  }); 
  db.collection("chat").orderBy('date').onSnapshot(query => {
    const content = document.querySelector('#protectedContent');
    content.innerHTML = '';
    query.forEach(doc => {
        if (doc.data().uid === user.uid) {
            content.innerHTML += `
            <div class="containerMessageUser">
                <span class="userMessage" id="userMessage">
                <div class="nameChat">${doc.data().name}</div>
                    ${doc.data().message}
                </span>
            </div>
            `
        } else {
            content.innerHTML += `
            <div class="containerMessage">
                <span class="destinataryMessage" id="destinataryMessage">
                <div class="nameChat">${doc.data().name}</div>
                    ${doc.data().message}
                </span>
            </div>
            `
        }
    })
    content.scrollTop = content.scrollHeight
})

}


// Set the "capital" field of the city 'DC'

