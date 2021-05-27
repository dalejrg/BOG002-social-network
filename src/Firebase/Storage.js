import { renderPost, cleanPost } from "../components/Utils.js"


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