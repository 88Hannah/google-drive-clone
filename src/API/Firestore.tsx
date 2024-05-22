import { collection, addDoc } from "firebase/firestore";
import { database } from "@/firebaseConfig"

export const addToFireStoreDatabase = async (fileUrl : string, fileName: string, fileType: string) => {
    try {
        await addDoc(collection(database, "files"), {
            fileUrl: fileUrl,
            fileName: fileName,
            fileType: fileType
        })
    } catch(error) {
        console.log(error)
    }
} 