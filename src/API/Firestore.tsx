import { collection, addDoc } from "firebase/firestore";
import { database } from "@/firebaseConfig"

export const addToFireStoreDatabase = async (fileUrl : string) => {
    try {
        await addDoc(collection(database, "files"), {
            fileUrl: fileUrl,
        })
    } catch(error) {
        console.log(error)
    }
} 