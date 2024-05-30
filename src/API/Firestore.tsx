import { collection, addDoc } from "firebase/firestore";
import { database } from "@/firebaseConfig"

export const addToFireStoreDatabase = async (url: string, file, userEmail: string, parentId: string, breadcrumb: Array<object>, parentFolder: string) => {
    try {
        await addDoc(collection(database, "files"), {
            fileUrl: url,
            fileName: file.name,
            fileType: file.type,
            owner: userEmail,
            parentId: parentId,
            isFolder: false,
            breadcrumb: breadcrumb
        })
    } catch(error) {
        console.log(error)
    }
} 


export const addFolderToDatabase = async (folderName: string, userEmail: string, parentId: string, breadcrumb: Array<object>, parentFolder: string) => {
    try {
        await addDoc(collection(database, "files"), {
            folderName: folderName,
            owner: userEmail,
            parentId: parentId,
            isFolder: true,
            breadcrumb: breadcrumb
        })
    } catch(error) {
        console.log(error)
    }
} 