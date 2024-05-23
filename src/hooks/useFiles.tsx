import React from "react"
import { collection, onSnapshot } from "firebase/firestore";
import { database } from "@/firebaseConfig"

export function useFiles() {
    const [ fileList, setFileList ] = React.useState([])
    
    React.useEffect(() => {
        const files = collection(database, "files");
        const unsubscribe = onSnapshot(files, (snapshot) => {
            const currentFiles = snapshot.docs.map(file => {
                return { ... file.data(), id: file.id }
            })
            setFileList(currentFiles)
        });
    }, [])
    return fileList
}