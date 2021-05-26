import { renderPost } from "../components/Utils.js"

const db = firebase.firestore();
export function savePost(file, description) {
    uploadImage(file).then((url) => {
        db.collection("usersPost").doc().set({
            image: url,
            description,
        });
    });
}

export function getPost() {
    db.collection("usersPost").onSnapshot(query => {
        let changePost = query.docChanges();
        const timeline = [];
        changePost.forEach(post => {
            timeline.push(post.doc.data())
                //console.log({ id: post.doc.id, ...post.doc.data(), date: new Date() })
            renderPost({ id: post.doc.id, ...post.doc.data() })
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
    db.collection("usersPost").doc(idPost).delete()
}