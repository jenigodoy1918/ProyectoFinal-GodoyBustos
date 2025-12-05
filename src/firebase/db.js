import {
    getFirestore,
    collection,
    getDocs,
    query,
    where,
    doc,
    getDoc,
    addDoc
} from "firebase/firestore"
import app from '/src/firebase/config.js';

const db = getFirestore(app)

export const getProducts = async (setItems) => {
    const querySnapshot = await getDocs(collection(db, "items"))
    const products = []

    querySnapshot.forEach((doc) => {
        products.push({ ... doc.data(), id: doc.id})
    })

    setItems(products)
}

export const getCategories = async () => {
    const querySnapshot = await getDocs(collection(db, "categories"))
    const categories = []

    querySnapshot.forEach((doc) => {
        categories.push(doc.data().name)
    })

    return categories
}

export const getProductsByCategory = async (category, setItems) => {
    const q = query(collection(db, "items"), where("category", "==", category))
    const querySnapshot = await getDocs(q)
    const products = []

    querySnapshot.forEach((doc) => {
        products.push({ ... doc.data(), id: doc.id})
    })
    setItems(products)
}

export const getProduct = async (id, setItem) => {
    const docRef = doc(db, "items", id)
    const docSnap = await getDoc(docRef)

    if (docSnap.exists()) {
        setItem({ ... docSnap.data(), id: docSnap.id})
    } else {
        console.log("No existe")
    }
}

export const createOrder = async (order) => {
    console.log(order)
    try {
        const docRef = await addDoc(collection(db, "orders"), order)
        console.log("Documento escrito con id: ", docRef.id)
    } catch (e) {
        console.error("Error al agregar el documento: ", e)
    }
}