import { addDoc, deleteDoc, doc } from "firebase/firestore"
import { db, colRef } from "./firebaseConfig"
// import "../App"

window.onload = function() {

    // adding post
    const addPostForm = document.querySelector(".add")
    addPostForm.addEventListener("submit", (e) => {
        e.preventDefault()

        addDoc(colRef, {
            title: addPostForm.title.value,
            content: addPostForm.content.value,
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
            console.log("done")
            deletePostForm.reset()
        })
    })
}