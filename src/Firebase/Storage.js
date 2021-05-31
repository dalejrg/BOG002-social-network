import { renderPost, cleanPost } from "../components/Utils.js"


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
    db.collection('usersPost').orderBy('date', 'asc').onSnapshot(query => {
        let changePost = query.docs;
        console.log(changePost)
        const timeline = [];
        cleanPost()
        changePost.forEach(post => {
            timeline.push(post.data())
            renderPost({ id: post.id, ...post.data(), })
        })
    })
}

function uploadImage(file) {
    const name = file.name || "";
    const ref = firebase.storage().ref('/userProfileImgs/' + name);
    const uploadTask = ref.put(file);
    return uploadTask
        .then((snapshot) => snapshot.ref.getDownloadURL())
        .catch((error) => {
            console.log(error.message);
        });
}

export function deleteObjPost(idPost) {
    db.collection('usersPost').doc(idPost).delete().then(() => {
        console.log('Document successfully deleted!');
    }).catch((error) => {
        console.error('Error removing document: ', error);
    });
}

export function updateObjPost(idPost, newText) {
    const updatePost = db.collection('usersPost').doc(idPost);
    return updatePost.update({
            description: newText,
        })
        .then(() => {
            console.log('Document successfully update!');
        }).catch((error) => {
            console.error('Error update document: ', error);
        });
}

export function likeObjPost(idPost, incrementer) {
    const postLikeUsers = db.collection('usersPost').doc(idPost);
    return postLikeUsers.update({
            likesCount: incrementer,
        })
        .then(() => {
            console.log('Document successfully liked!');
        }).catch((error) => {
            console.error('Error liked document: ', error);
        });
}