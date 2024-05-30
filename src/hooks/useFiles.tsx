import React from "react"
import { collection, onSnapshot, query, where } from "firebase/firestore";
import { database } from "@/firebaseConfig"
import { useFetchSession } from "@/hooks/useSession"

export function useFiles(parentId: string) {
    const [ fileList, setFileList ] = React.useState([])

    const { session } = useFetchSession()
    const userEmail = session?.user.email
    
    React.useEffect(() => {
        const searchId = parentId ? parentId : ""
        const relevantFiles = query(collection(database, "files"), where("parentId", "==", searchId), where("owner", "==", userEmail));
        const unsubscribe = onSnapshot(relevantFiles, (snapshot) => {
            const currentFiles = snapshot.docs.map(file => {
                return { ... file.data(), id: file.id }
            })
            setFileList(currentFiles)
        });
    }, [parentId])
    return fileList
}