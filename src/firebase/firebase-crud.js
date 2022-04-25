import { addDoc, deleteDoc, doc } from "firebase/firestore"
import { db, colRef } from "./firebaseConfig"
// import "../App"

window.onload = function() {

    // adding post
    const addWoodForm = document.querySelector(".add")
    addWoodForm.addEventListener("submit", (e) => {
        e.preventDefault()

        addDoc(colRef, {
            title: addWoodForm.title.value,
            density: addWoodForm.density.value,
        })
        .then(() => {
            addWoodForm.reset()
        })
    })



    // deleting post
    const deleteWoodForm = document.querySelector(".delete")
    deleteWoodForm.addEventListener("submit", (e) => {
        e.preventDefault()

        const docRef = doc(db, "woods", deleteWoodForm.id.value)

        deleteDoc(docRef)
        .then(() => {
            deleteWoodForm.reset()
        })
    })
}