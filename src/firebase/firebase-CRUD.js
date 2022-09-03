import { addDoc, deleteDoc, doc, serverTimestamp, /*getDoc,*/ onSnapshot } from "firebase/firestore"
import { db, colRef } from "./firebase-config"
// import "../App"

window.onload = function() {

    // adding post
    const addPostForm = document.querySelector(".add")
    addPostForm.addEventListener("submit", (e) => {
        e.preventDefault()

        addDoc(colRef, {
            title: addPostForm.title.value,
            content: addPostForm.content.value,
            createdAt: serverTimestamp()
        })
        .then(() => {
            addPostForm.reset()
        })
    })



    // deleting post
    const deletePostForm = document.querySelector(".delete")
    deletePostForm.addEventListener("submit", (e) => {
        e.preventDefault()

        const docRef = doc(db, "posts", deletePostForm.id.value)

        deleteDoc(docRef)
        .then(() => {
            deletePostForm.reset()
        })
    })

    // getting a single document
    const docRef = doc(db, "posts", "RCb2ID34vTDq6exYkHP2")

    onSnapshot(docRef, (doc) => {
        console.log(doc.data(), doc.id)
    })
    
    // getDoc(docRef)
    //     .then((doc) => {
    //         console.log(doc.data(), doc.id)
    //     })
}